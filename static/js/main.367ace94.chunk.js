(this.webpackJsonppokecommerce=this.webpackJsonppokecommerce||[]).push([[0],{26:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(18),r=c.n(a),i=(c(26),c(5)),j=c(2),o=c(8),l=(c(27),c(28),c(19)),u=c.n(l),h=c(0),b=function(e){var t=e.index;return Object(h.jsx)("div",{className:"banner",id:"banner-"+t})},d=function(){return Object(h.jsx)("section",{id:"banner-container",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(u.a,Object(o.a)(Object(o.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3}),{},{children:["banner","banner","banner"].map((function(e,t){return Object(h.jsx)(b,{index:t+1},e+t)}))}))})})},x=c(3),O=function(){return Object(h.jsx)("svg",{width:"70",height:"70",viewBox:"25 25 50 50",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"#663399",strokeWidth:"4",strokeMiterlimit:"10"})})},f=function(e){var t=e.unit;return Object(h.jsx)("span",{className:"unit",children:t<10?"0".concat(t):t})},m=function(){var e=s.a.useState(86400),t=Object(x.a)(e,2),c=t[0],n=t[1],a=Math.floor(c/3600),r=Math.floor(c%3600/60),i=Math.floor(c%3600%60);return s.a.useEffect((function(){var e=setTimeout((function(){0!==c?n(c-1):clearTimeout(e)}),1e3)}),[c]),Object(h.jsxs)("div",{className:"timer",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsx)(f,{unit:a})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsx)(f,{unit:r})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsx)(f,{unit:i})]})]})},p=function(){return Object(h.jsx)("section",{className:"daily-discount",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h2",{children:"Oferta especial do dia!!!"}),Object(h.jsx)(m,{})]})})},v=c(4),N=c.n(v),g=c(7),k=c(20),C=c(21),y=s.a.createContext(),w=function(e){var t=e.children,c=s.a.useState(null),n=Object(x.a)(c,2),a=n[0],r=n[1],i=s.a.useState(null),j=Object(x.a)(i,2),o=j[0],l=j[1],u=s.a.useState([]),b=Object(x.a)(u,2),d=b[0],O=b[1],f=s.a.useState([]),m=Object(x.a)(f,2),p=m[0],v=m[1],w=s.a.useState(0),S=Object(x.a)(w,2),_=S[0],F=S[1],P=s.a.useState(!1),B=Object(x.a)(P,2),M=B[0],T=B[1],E=s.a.useState(!1),R=Object(x.a)(E,2),H=R[0],$=R[1],A=s.a.useState(!1),D=Object(x.a)(A,2),J=D[0],W=D[1];var X=function e(t,c,n,s,a,r){Object(k.a)(this,e),this.name=t,this.price=c,this.photo=n,this.abilities=s,this.height=a,this.description=r},I="https://pokeapi.co/api/v2/pokemon/";function K(){return K=Object(g.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(I+t).then((function(e){return e.json()})).then((function(e){r(new X(e.name,e.base_experience,e.sprites.other.dream_world.front_default)),T(!1)})).catch((function(){return T(!0)}));case 2:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function L(){return(L=Object(g.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(I+t).then((function(e){return e.json()})).then(Y).catch((function(){return T(!0)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){return q.apply(this,arguments)}function q(){return(q=Object(g.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.species.url,e.next=3,fetch(c).then((function(e){return e.json()})).then((function(e){l(new X(t.name,t.base_experience,t.sprites.other.dream_world.front_default,t.abilities,t.height,e.flavor_text_entries.find((function(e){return"en"===e.language.name})).flavor_text.replace("POK\xe9MON","Pok\xe9mon"))),T(!1)})).catch((function(){return T(!0)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return z=Object(g.a)(N.a.mark((function e(){var t,c,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],c=0;case 2:if(!(c<8)){e.next=9;break}return n=Math.floor(200*Math.random())+1,e.next=6,fetch(I+n).then((function(e){return e.json()})).then((function(e){t.push({name:e.name,price:e.base_experience,photo:e.sprites.other.dream_world.front_default})}));case 6:c++,e.next=2;break;case 9:O(t),T(!1);case 11:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}var G={response:a,fullResponse:o,setFullResponse:l,fetchPokemon:function(e){return K.apply(this,arguments)},fetchFullPokemon:function(e){return L.apply(this,arguments)},initial:d,initialFetch:function(){return z.apply(this,arguments)},cart:p,addCart:function(e){p.map((function(e){return e.name})).includes(e.name)||(v([].concat(Object(C.a)(p),[e])),F(_+e.price))},total:_,removeCart:function(e){v(p.filter((function(t){return e!==t}))),F(_-e.price)},searchError:M,setSearchError:T,buy:H,setBuy:$,handleBuy:function(){return _>0&&($(!0),!0)},hasCart:J,setHasCart:W};return Object(h.jsx)(y.Provider,{value:G,children:t})},S=function(e){var t=e.infos,c=s.a.useContext(y).addCart,n=t.name,a=t.price,r=t.photo;return Object(h.jsx)("article",{className:"product",children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)(i.b,{to:"search/"+n,children:Object(h.jsx)("img",{src:r,alt:n})})}),Object(h.jsx)("h2",{children:Object(h.jsx)(i.b,{to:"search/"+n,children:n})}),Object(h.jsxs)("p",{children:["R$ ",a]}),Object(h.jsx)("button",{className:"gn-button",onClick:function(){return c({name:n,price:a})},children:"Add to cart"})]})})},_=function(){var e=s.a.useContext(y),t=e.initial,c=e.initialFetch;return s.a.useEffect((function(){c()}),[]),Object(h.jsx)("section",{className:"initial-products",children:Object(h.jsx)("div",{className:"container",children:t.map((function(e,t){return Object(h.jsx)(S,{infos:e},t)}))})})},F=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{}),Object(h.jsx)(_,{}),Object(h.jsx)(p,{})]})},P=c(12),B=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Success!"}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}),Object(h.jsx)(i.b,{to:"/",children:"Back to the Home Page"})]})},M=function(){var e=s.a.useState(!1),t=Object(x.a)(e,2),c=t[0],n=t[1];return[function(e){var t=e.element,s=e.children,a=e.className,r=void 0===a?"":a,i=e.triggerClick;function j(){i&&i()}return!1===c?null:Object(h.jsx)("div",{className:"modal ".concat(r),onClick:function(e){e.target===e.currentTarget&&(n(!1),j())},children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("button",{className:"close",onClick:function(){n(!1),j()},children:"X"}),t||s]})})},n]},T=function(){var e=s.a.useContext(y).total,t=M(),c=Object(x.a)(t,2),n=c[0],a=c[1],r=M(),i=Object(x.a)(r,2),j=i[0],l=i[1],u=s.a.useState({name:"",credit:""}),b=Object(x.a)(u,2),d=b[0],O=b[1];function f(e){var t=e.target,c=t.value,n=t.id;O(Object(o.a)(Object(o.a)({},d),{},Object(P.a)({},n,c)))}return Object(h.jsx)("section",{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("form",{className:"checkout",onSubmit:function(e){e.preventDefault(),a(!0)},children:[Object(h.jsx)("input",{type:"text",id:"name",placeholder:"Name",value:d.name,onChange:f,autoFocus:!0}),Object(h.jsx)("input",{type:"text",id:"credit",placeholder:"Credit card",value:d.credit,onChange:f}),Object(h.jsxs)("p",{children:["Total: ",Object(h.jsx)("strong",{children:e})]}),Object(h.jsx)("button",{className:"gn-button",children:"Buy now"})]}),Object(h.jsx)(n,{className:"buy",element:Object(h.jsx)(B,{}),triggerClick:l}),Object(h.jsx)(j,{element:Object(h.jsx)(B,{})})]})})},E=function(){return Object(h.jsx)("section",{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("h2",{className:"error-search",children:"Page Not Found."})})})},R=function(e){var t=e.info,c=t.name,n=t.photo,a=t.price,r=t.abilities,i=t.height,j=t.description,o=s.a.useContext(y).addCart;return Object(h.jsxs)("article",{className:"full-product",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsx)("img",{src:n,alt:c})}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h2",{children:c}),Object(h.jsx)("p",{className:"price",children:Object(h.jsxs)("strong",{children:["R$ ",a]})})]}),Object(h.jsxs)("section",{children:[Object(h.jsxs)("div",{className:"stars",children:[Object(h.jsx)("span",{className:"fa fa-star"}),Object(h.jsx)("span",{className:"fa fa-star"}),Object(h.jsx)("span",{className:"fa fa-star"}),Object(h.jsx)("span",{className:"fa fa-star"}),Object(h.jsx)("span",{className:"fa fa-star"})]}),Object(h.jsx)("p",{className:"description",children:j}),Object(h.jsx)("div",{className:"abilities",children:Object(h.jsx)("ul",{children:r.map((function(e){var t=e.ability.name;return Object(h.jsx)("li",{children:t},t)}))})}),Object(h.jsxs)("p",{className:"height",children:["Height: ",i]})]}),Object(h.jsxs)("footer",{children:[Object(h.jsx)("button",{className:"gn-button",onClick:function(){return o({name:c,price:a})},children:"Add to cart"}),Object(h.jsx)("button",{className:"gn-button",children:"Buy now"})]})]})]})},H=function(){return Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)("svg",{viewBox:"25 25 50 50",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"#663399",strokeWidth:"2",strokeMiterlimit:"10"})})})},$=function(){var e=s.a.useContext(y),t=e.fullResponse,c=e.fetchFullPokemon,n=e.searchError,a=Object(j.h)(),r=s.a.useState(!1),i=Object(x.a)(r,2),o=i[0],l=i[1];return s.a.useEffect((function(){Object(g.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,c(a.id);case 3:l(!1);case 4:case"end":return e.stop()}}),e)})))()}),[a.id]),Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"container",children:[o&&Object(h.jsx)(H,{}),!o&&n&&Object(h.jsxs)("h2",{className:"error-search",children:['The Pok\xe9mon "',a.id,"\" doesn't exist."]}),!o&&!n&&t&&Object(h.jsx)(R,{info:t})]})})},A=function(){var e=s.a.useState(""),t=Object(x.a)(e,2),c=t[0],n=t[1],a=Object(j.g)();function r(){return(r=Object(g.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0!==c.length&&a("search/"+c),n("");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)("form",{onSubmit:function(e){return r.apply(this,arguments)},className:"search-form",children:[Object(h.jsx)("input",{type:"text",value:c,onChange:function(e){var t=e.target;n(t.value)}}),Object(h.jsx)("button",{type:"submit",children:Object(h.jsx)("i",{className:"fa fa-search"})})]})},D=function(){var e=s.a.useContext(y),t=e.hasCart,c=e.setHasCart;return t?Object(h.jsx)("div",{className:"overlay-modal",onClick:function(){c(!t)}}):null},J=function(e){var t=e.info,c=e.onClick,n=t.name,s=t.price;return Object(h.jsx)("div",{className:"cart-product",children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{className:"infos",children:[Object(h.jsx)("h3",{children:n}),Object(h.jsxs)("p",{children:["R$ ",s]})]}),Object(h.jsx)("button",{className:"remove",onClick:function(){return c(t)},children:"X"})]})})},W=function(){var e=s.a.useContext(y),t=e.cart,c=e.total,n=e.removeCart,a=e.handleBuy,r=e.setHasCart,i=e.hasCart,o=Object(j.g)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("aside",{className:"cart",children:[Object(h.jsx)("header",{children:Object(h.jsx)("div",{className:"content",children:Object(h.jsx)("h2",{children:"Cart"})})}),Object(h.jsxs)("section",{children:[0===t.length&&Object(h.jsx)("p",{className:"empty",children:"Your list is empty."}),t.map((function(e){return Object(h.jsx)(J,{info:e,onClick:n},e.name)}))]}),Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{className:"total",children:[Object(h.jsx)("h3",{children:"Total"}),Object(h.jsxs)("p",{children:["R$ ",c]})]}),Object(h.jsx)("button",{className:"gn-button",onClick:function(){a()&&(r(!i),o("/checkout"))},disabled:c<=0,children:"Checkout"})]})})]}),Object(h.jsx)(D,{})]})},X=function(){var e=s.a.useContext(y),t=e.hasCart,c=e.setHasCart,n=e.cart;return Object(h.jsx)("header",{id:"main-header",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(i.b,{to:"/",className:"logo",children:Object(h.jsx)("h1",{children:"PokeCommerce"})}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)(A,{}),Object(h.jsxs)("div",{className:"cart-container",children:[Object(h.jsx)("i",{className:"fas fa-shopping-cart",onClick:function(){c(!t)},children:Object(h.jsx)("span",{children:n.length})}),t&&Object(h.jsx)(W,{})]})]})]})})},I=function(){return Object(h.jsx)(i.a,{children:Object(h.jsxs)(w,{children:[Object(h.jsx)(X,{}),Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/",element:Object(h.jsx)(F,{})}),Object(h.jsx)(j.a,{path:"checkout",element:Object(h.jsx)(T,{})}),Object(h.jsx)(j.a,{path:"search/:id",element:Object(h.jsx)($,{})}),Object(h.jsx)(j.a,{path:"*",element:Object(h.jsx)(E,{})})]})]})})};var K=function(){return Object(h.jsx)(I,{})};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(K,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.367ace94.chunk.js.map