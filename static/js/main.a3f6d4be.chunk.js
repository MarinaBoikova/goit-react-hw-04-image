(this["webpackJsonpgoit-react-hw-04-image"]=this["webpackJsonpgoit-react-hw-04-image"]||[]).push([[0],{10:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__1Ol7P",searchForm:"Searchbar_searchForm__3S6Rr",searchFormButton:"Searchbar_searchFormButton__2w6HS",searchFormInput:"Searchbar_searchFormInput__2SHNC"}},14:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__2VBqt",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__lTtvB"}},15:function(e,t,a){e.exports={overlay:"Modal_overlay__2GTWn",modal:"Modal_modal__21FbT"}},26:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__162ju"}},27:function(e,t,a){e.exports={button:"Button_button__1zBwD"}},29:function(e,t,a){e.exports={spinner:"Loader_spinner__1UEiV"}},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=a(16),s=a(5),l=a(6),u=a(8),m=a(7),h=a(9),g=a(30),d=a(10),b=a.n(d),j=a(1),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.inputValue.trim()?(e.props.onSubmit(e.state.inputValue),e.reset()):h.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441")},e.reset=function(){e.setState({inputValue:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.inputValue;return Object(j.jsx)("header",{className:b.a.searchbar,children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:b.a.searchForm,children:[Object(j.jsx)("button",{type:"submit",className:b.a.searchFormButton,children:Object(j.jsx)("span",{className:b.a.searchFormButtonLabel,children:Object(j.jsx)(g.a,{})})}),Object(j.jsx)("input",{className:b.a.searchFormInput,type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(n.Component),f=p,y=(a(36),a(25)),O=a.n(y),v=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,o="".concat("https://pixabay.com/api","/?image_type=photo&orientation=horizontal&q=").concat(a,"&page=").concat(r,"&per_page=12&key=").concat("24496142-39f11c79c6568bfa1b54a8aaa");return O.a.get(o)},x=a(14),_=a.n(x),S=function(e){var t=e.images,a=e.onClick;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(j.jsx)("li",{className:_.a.imageGalleryItem,children:Object(j.jsx)("img",{className:_.a.imageGalleryItemImage,onClick:function(){return a(r)},src:n,alt:""})},t)}))})},I=a(26),w=a.n(I),k=function(e){var t=e.images,a=e.onClick;return Object(j.jsx)("ul",{className:w.a.imageGallery,children:Object(j.jsx)(S,{images:t,onClick:a})})},C=a(27),L=a.n(C),N=function(e){var t=e.onClick;return Object(j.jsx)("button",{type:"button",className:L.a.button,onClick:t,children:"Load more"})},F=a(28),G=a.n(F),U=a(29),B=a.n(U),M=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(G.a,{className:B.a.spinner,type:"ThreeDots",color:"#fff",height:100,width:100})})},D=a(15),P=a.n(D),V=document.querySelector("#modal-root"),Q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.onBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(j.jsx)("div",{className:P.a.overlay,onClick:this.onBackdropClick,children:Object(j.jsx)("div",{className:P.a.modal,children:this.props.children})}),V)}}]),a}(n.Component),R=Q,T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",images:[],currentPage:1,error:null,isLoading:!1,showModal:!1,bigImageUrl:"",imageStatus:"loading"},e.onSearchHandle=function(t){e.setState({searchQuery:t,currentPage:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,a=t.currentPage,n={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),v(n).then((function(t){if(0!==t.data.total){var a=t.data.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}));e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(a)),currentPage:e.currentPage+1}}))}else h.b.error("No matches")})).catch((function(t){e.setState({error:t}),h.b.error("Error")})).finally((function(){return e.setState({isLoading:!1})}))},e.onImageClick=function(t){e.setState({bigImageUrl:t}),e.toggleModal(),e.setState({imageStatus:"loading"})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onImageLoaded=function(){e.setState({imageStatus:"loaded"})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.showModal,r=e.bigImageUrl,o=e.imageStatus,c=t.length>0&&!a;return Object(j.jsxs)("div",{children:[n&&Object(j.jsxs)(R,{onClose:this.toggleModal,children:["loading"===o&&Object(j.jsx)(M,{type:"ThreeDots",color:"#fff",height:80,width:80}),Object(j.jsx)("img",{src:r,alt:"",onLoad:this.onImageLoaded})]}),Object(j.jsx)(f,{onSubmit:this.onSearchHandle}),Object(j.jsx)(k,{images:t,onClick:this.onImageClick}),a&&Object(j.jsx)(M,{}),c&&Object(j.jsx)(N,{onClick:this.fetchImages}),Object(j.jsx)(h.a,{autoClose:3e3})]})}}]),a}(n.Component),E=T;a(75);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.a3f6d4be.chunk.js.map