(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},21:function(e,t,i){},22:function(e,t,i){"use strict";i.r(t);var c=i(7),s=i.n(c),a=(i(15),i(10)),n=i(2),r=i(1),l=(i(16),i(17),i(18),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:null===t||void 0===t?void 0:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:null===t||void 0===t?void 0:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[null===t||void 0===t?void 0:t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:null===t||void 0===t?void 0:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=i(8),m=i(6),b=i.n(m),u=i(9),v=i.n(u);function h(e){return fetch("".concat("https://www.omdbapi.com/?i=tt3896198&apikey=58f0bd6b","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}i(21);var O=function(e){var t=e.addMovie,i=Object(r.useState)(""),c=Object(n.a)(i,2),s=c[0],a=c[1],d=Object(r.useState)(!1),m=Object(n.a)(d,2),u=m[0],O=m[1],x=Object(r.useState)(!1),p=Object(n.a)(x,2),f=p[0],N=p[1],g=Object(r.useState)(null),y=Object(n.a)(g,2),w=y[0],k=y[1],C=function(){var e=Object(j.a)(b.a.mark((function e(t){var i,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),N(!0),e.next=4,h(s);case 4:"Title"in(i=e.sent)?(c={title:i.Title,description:i.Plot,imgUrl:"N/A"===i.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":i.Poster,imdbUrl:"https://www.imdb.com/title/".concat(i.imdbID),imdbId:i.imdbID},k(c)):O(!0),N(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault()},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:s,onChange:function(e){a(e.target.value),O(!1)}})}),u&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:v()("button","is-light",{"is-loading":f}),onClick:C,disabled:!s,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:w&&Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){w&&(t(w),k(null),a(""),O(!1)),O(!1)},children:"Add to the list"})})]})]}),w&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:w})]})]})},x=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),i=t[0],c=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(O,{addMovie:function(e){i.some((function(t){return e.title===t.title}))||c((function(t){return[].concat(Object(a.a)(t),[e])}))}})})]})};s.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.800b0de3.chunk.js.map