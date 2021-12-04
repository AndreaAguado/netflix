(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(16),c=n.n(a),r=n(7),s=n(9),o=(n(24),n(25),n.p+"static/media/tmdb_icon.de1a664e.svg"),l=n(0),d=function(){return Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("nav",{className:"footer_nav",children:Object(l.jsxs)("ul",{className:"footer_links_list",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"footer_link",href:"https://twitter.com/andrea114am",target:"_blank",rel:"noreferrer",title:"twitter.com/andrea114am",children:Object(l.jsx)("i",{className:"fab fa-twitter"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"footer_link",href:"https://www.linkedin.com/in/andrea-aguado-moleon/",target:"_blank",rel:"noreferrer",title:"linkedin.com/in/andrea-aguado-mole\xf3n/",children:Object(l.jsx)("i",{className:"fab fa-linkedin-in"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"footer_link",href:"https://github.com/AndreaAguado",target:"_blank",rel:"noreferrer",title:"github.com/AndreaAguado",children:Object(l.jsx)("i",{className:"fab fa-github"})})})]})}),Object(l.jsxs)("small",{className:"footer_small",children:["Hecho con ",Object(l.jsx)("span",{role:"img","aria-label":"emoji coraz\xf3n",title:"emoji coraz\xf3n",children:"\u2764\ufe0f"})," \xa9 Andrea Aguado 2021"]})]}),Object(l.jsx)("div",{className:"footer_credit_container",children:Object(l.jsx)("a",{className:"footer_credit_link",href:"https://www.themoviedb.org/",target:"_blank",rel:"noreferrer",title:"https://www.themoviedb.org/",children:Object(l.jsx)("img",{className:"footer_credit_img",src:o,alt:"The Movie Database Logo"})})})]})},j=(n(27),n.p+"static/media/Logo-Netflix.a3092e10.png"),u=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)(r.b,{to:"/",className:"header_link",title:"Go to homepage",children:Object(l.jsx)("img",{className:"header_logo",src:j,alt:"Logo Netflix"})})})},m=(n(33),n(34),function(e){return Object(l.jsx)("form",{className:"form",onSubmit:function(e){return e.preventDefault()},action:"POST",children:Object(l.jsx)("input",{autoFocus:!0,onKeyUp:function(t){e.handleSearch(t.target.value)},className:"text_input",type:"text",placeholder:"TV show / movie title"})})}),b=(n(35),function(e){return Object(l.jsxs)("div",{className:"lds-default ".concat(function(){if(e.loading){return""}return"hidden"}()),children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})}),h=function(e){return Object(l.jsxs)("main",{className:"main",children:[Object(l.jsx)(m,{handleSearch:e.handleSearch}),Object(l.jsx)(b,{loading:e.loading}),Object(l.jsx)("ul",{className:"media_list",children:e.renderMedia()})]})},f=n(2),O={getConfiguration:function(){return fetch("https://api.themoviedb.org/3/configuration?api_key=4e51e4a6310fb8de7132d513c50b9a9a").then((function(e){return e.json()})).then((function(e){return e.images.secure_base_url+e.images.backdrop_sizes[3]}))},getTrendingMedia:function(){return fetch("https://api.themoviedb.org/3/trending/all/week?api_key=4e51e4a6310fb8de7132d513c50b9a9a").then((function(e){return e.json()})).then((function(e){return console.log(e),e.results.map((function(e){return{id:e.id,imagePath:e.poster_path,titleMovie:e.original_title,titleShow:e.name,mediaType:e.media_type,genre:e.genre_ids,banner:e.backdrop_path,overview:e.overview}}))}))},getMovieGenres:function(){return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=4e51e4a6310fb8de7132d513c50b9a9a&language=en-US").then((function(e){return e.json()})).then((function(e){return e.genres.map((function(e){return{id:e.id,name:e.name}}))}))},getShowGenres:function(){return fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=4e51e4a6310fb8de7132d513c50b9a9a&language=en-US").then((function(e){return e.json()})).then((function(e){return e.genres.map((function(e){return{id:e.id,name:e.name}}))}))}},g=n(19),x=(n(36),function(e){return Object(l.jsxs)("section",{className:"media_details_section",children:[Object(l.jsx)("div",{className:"return_link_container",children:Object(l.jsxs)(r.b,{className:"return_link",to:"/",children:[Object(l.jsx)("i",{className:"return_link_icon fas fa-chevron-circle-left"}),Object(l.jsx)("p",{className:"return_link_title",children:"Return"})]})}),Object(l.jsx)("img",{className:"media_details_img",src:e.imagePath+e.media.banner,alt:"img"}),Object(l.jsxs)("div",{className:"media_details_info",children:[Object(l.jsx)("h3",{className:"media_details_title",children:e.media.titleMovie?e.media.titleMovie:e.media.titleShow}),Object(l.jsx)("p",{className:"media_details_overview",children:e.media.overview}),Object(l.jsxs)("p",{className:"media_details_genres",children:["Genres: ",function(){var t,n=e.whatGenre(e.media.mediaType,e.media.genre),i="",a=Object(g.a)(n);try{for(a.s();!(t=a.n()).done;){var c=t.value;i+="".concat(c,", ")}}catch(r){a.e(r)}finally{a.f()}return i}()]})]})]})}),v=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)([]),o=Object(s.a)(c,2),j=o[0],m=o[1],b=Object(i.useState)([]),g=Object(s.a)(b,2),v=g[0],_=g[1],p=Object(i.useState)([]),N=Object(s.a)(p,2),w=N[0],k=N[1],S=Object(i.useState)(""),M=Object(s.a)(S,2),y=M[0],L=M[1],G=Object(i.useState)(!0),T=Object(s.a)(G,2),A=T[0],C=T[1];Object(i.useEffect)((function(){O.getConfiguration().then((function(e){a(e)}))}),[]),Object(i.useEffect)((function(){O.getMovieGenres().then((function(e){_(e)}))}),[]),Object(i.useEffect)((function(){O.getShowGenres().then((function(e){k(e)}))}),[]),Object(i.useEffect)((function(){O.getTrendingMedia().then((function(e){m(e),console.log(e),C(!1)}))}),[]);var E=j.filter((function(e){return"movie"===e.mediaType?e.titleMovie.toLocaleLowerCase().includes(y.toLocaleLowerCase()):e.titleShow.toLocaleLowerCase().includes(y.toLocaleLowerCase())})),P=Object(f.f)("/media/:id"),z=null!==P?P.params.id:"",U=j.find((function(e){return e.id===parseInt(z)}));return Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)(f.c,{children:[Object(l.jsxs)(f.a,{exact:!0,path:"/",children:[Object(l.jsx)(u,{}),Object(l.jsx)(h,{renderMedia:function(){return E.length<1?Object(l.jsx)("li",{children:Object(l.jsx)("p",{className:"warning_message",children:"Nothing matches your search"})}):E.map((function(e){return Object(l.jsx)("li",{id:e.id,className:"media_list_item",children:Object(l.jsxs)(r.b,{className:"media_list_item_content",to:"/media/".concat(e.id),title:e.titleMovie?e.titleMovie:e.titleShow,children:[Object(l.jsx)("img",{className:"media_img",src:n+e.imagePath,alt:e.titleMovie?e.titleMovie:e.titleShow}),Object(l.jsx)("div",{className:"media_info",children:Object(l.jsx)("h3",{className:"media_title",children:e.titleMovie?e.titleMovie:e.titleShow})})]})},e.id)}))},handleSearch:function(e){L(e)},loading:A}),Object(l.jsx)(d,{})]}),Object(l.jsxs)(f.a,{path:"/media/:id",children:[Object(l.jsx)(u,{}),Object(l.jsx)(x,{imagePath:n,media:U,whatGenre:function(e,t){return"movie"===e?t.map((function(e){return v.find((function(t){return t.id===e}))})).map((function(e){return e.name})):t.map((function(e){return w.find((function(t){return t.id===e}))})).map((function(e){return e.name}))}}),Object(l.jsx)(d,{})]})]})})};c.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.6d8406d5.chunk.js.map