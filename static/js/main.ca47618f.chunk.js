(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{38:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(30),i=n.n(c),r=n(9),o=n(2),j=(n(38),n(1));var l=function(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)(r.b,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(j.jsx)(r.b,{to:{pathname:"/about",state:{fromLocation:!0}},children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})},m=n(21),u=n(32),d=n(13),b=n(16),v=n(14),p=n(15),h=n(33),O=n.n(h);n(66);var x=function(e){var t=e.id,n=e.year,a=e.title,s=e.summary,c=e.poster,i=e.genres;return Object(j.jsx)("div",{className:"movie",children:Object(j.jsxs)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:s,poster:c,genres:i}},children:[Object(j.jsx)("img",{src:c,alt:a,title:a}),Object(j.jsxs)("div",{className:"movie__column",children:[Object(j.jsx)("h3",{className:"movie__title",children:a}),Object(j.jsx)("h5",{className:"movie__year",children:n}),Object(j.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(j.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(j.jsxs)("p",{className:"movie__summary",children:[s.slice(0,140),"..."]})]})]})})},f=(n(67),function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(Object(m.a)().mark((function t(){var n,a;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(j.jsx)("section",{className:"container",children:t?Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("span",{className:"loader__text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}):Object(j.jsx)("div",{className:"movies",children:n.map((function(e){return Object(j.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component)),_=f;n(68);var y=function(e){return console.log(e),Object(j.jsx)("div",{className:"about__container",children:Object(j.jsx)("span",{children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435: \u044f \u0441\u0434\u0435\u043b\u0430\u043b \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0435\u043a\u0442, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043b\u044e\u0431\u043b\u044e \u0444\u0438\u043b\u044c\u043c\u044b"})})},g=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(j.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component),N=g;n(69);var k=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(j.jsx)(o.a,{path:"/about",component:y}),Object(j.jsx)(o.a,{path:"/movie/:id",component:N})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.ca47618f.chunk.js.map