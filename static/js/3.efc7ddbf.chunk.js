(this["webpackJsonpskala-ecomerce-frontend"]=this["webpackJsonpskala-ecomerce-frontend"]||[]).push([[3],{34:function(e,t,c){"use strict";c.r(t);var s=c(14);var r=c(18);function a(e){return function(e){if(Array.isArray(e))return Object(s.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=c(4),i=c(1),o=c(9),d=c(0),l=function(e){var t=e.quantity;return Object(d.jsxs)("div",{className:"products_check_container",children:[Object(d.jsxs)("div",{className:"products_bag",children:[Object(d.jsx)("i",{className:"fas fa-shopping-bag"}),Object(d.jsx)("span",{className:"products_bag-counter",children:t})]}),Object(d.jsx)("i",{className:"products_check fas fa-check-circle"})]})},u=function(){return Object(d.jsxs)("div",{className:"products_onfire",children:[Object(d.jsx)("div",{className:"products_onfire-img-container",children:Object(d.jsx)("img",{className:"products_onfire-img",src:"./images/fuego.svg",alt:"OnFire",title:"OnFire"})}),Object(d.jsx)("p",{className:"products_onfire-text",children:"HOT"})]})};t.default=function(e){var t=e.data,c=e.handleShowContact,s=Object(i.useContext)(o.b),r=s.buyProducts,j=s.setBuyProducts,b=Object(i.useState)(!1),f=Object(n.a)(b,2),m=f[0],p=f[1];Object(i.useEffect)((function(){var e=r.find((function(e){return e.id===t.id}));p(!!e)}),[r,r.length,t.id]);return Object(d.jsxs)("div",{className:"products_card",children:[t.onfire?Object(d.jsx)(u,{}):Object(d.jsx)(d.Fragment,{}),m?Object(d.jsx)(l,{quantity:r.length}):Object(d.jsx)(d.Fragment,{}),Object(d.jsxs)("h3",{className:"products_price",children:[Object(d.jsxs)("span",{className:"products_price-number",children:[t.price," "]}),"ARS"]}),Object(d.jsx)("img",{className:"products_image",src:t.image,alt:"Skala - "+t.title,title:"Skala - "+t.title}),Object(d.jsxs)("div",{className:"products_text_container",children:[Object(d.jsx)("h3",{className:"products_title",children:t.title}),Object(d.jsx)("p",{className:"products_description",children:t.description}),Object(d.jsx)("div",{className:"products_button_container",children:Object(d.jsxs)("button",{className:"products_button",onClick:function(){var e=r.find((function(e){return e.id===t.id})),s=r.length;if(!e||0===s)if(s<5){p(!0);var n=[].concat(a(r),[t]);j(n.sort((function(e,t){return e.id-t.id})))}else c(),console.log("hola")},children:["A\xf1adir al carrito ",Object(d.jsx)("i",{className:"fas fa-cart-plus"})]})})]})]})}}}]);
//# sourceMappingURL=3.efc7ddbf.chunk.js.map