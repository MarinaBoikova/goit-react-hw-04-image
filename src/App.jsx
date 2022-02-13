import React, { Component } from 'react';
import SearchBar from './components/Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from './services/api';

import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Spinner from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1,
    error: null,
    isLoading: false,
    showModal: false,
    bigImageUrl: '',
    imageStatus: 'loading',
  };
  onSearchHandle = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    api
      .fetchImages(options)
      .then(response => {
        if (response.data.total === 0) {
          toast.error('No matches');
          return;
        }
        const filteredData = response.data.hits.map(hit => {
          return {
            id: hit.id,
            webformatURL: hit.webformatURL,
            largeImageURL: hit.largeImageURL,
          };
        });

        this.setState(prevState => ({
          images: [...prevState.images, ...filteredData],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
        toast.error('Error');
      })
      .finally(() => {
        return this.setState({ isLoading: false });
      });
  };

  onImageClick = url => {
    this.setState({ bigImageUrl: url });
    this.toggleModal();
    this.setState({ imageStatus: 'loading' });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onImageLoaded = () => {
    this.setState({ imageStatus: 'loaded' });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
      // console.log('prevProps', prevState.searchQuery);
      // console.log('prevState', this.state.searchQuery);
    }
  }

  render() {
    const { images, isLoading, showModal, bigImageUrl, imageStatus } =
      this.state;
    //показать кнопку только в том случае, если длина  массива > 0 и нет загрузки
    const shouldRenderLoadMoreBtn = images.length > 0 && !isLoading;
    return (
      <div>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            {imageStatus === 'loading' && (
              <Loader type="ThreeDots" color="#fff" height={80} width={80} />
            )}
            <img src={bigImageUrl} alt="" onLoad={this.onImageLoaded} />
          </Modal>
        )}

        <SearchBar onSubmit={this.onSearchHandle} />
        <ImageGallery images={images} onClick={this.onImageClick} />
        {isLoading && <Spinner />}
        {shouldRenderLoadMoreBtn && <Button onClick={this.fetchImages} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
