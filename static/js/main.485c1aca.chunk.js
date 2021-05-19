(this["webpackJsonpskala-ecomerce-frontend"]=this["webpackJsonpskala-ecomerce-frontend"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(10),n=a.n(s),r=a(4),o=a(2),i=a(0),l=function(e){var t=e.handleShowBuys,a=Object(c.useContext)(r.b).buyProducts;return Object(i.jsxs)("nav",{className:"nav",children:[Object(i.jsx)("img",{className:"nav_logo",src:"./images/brand/Skala - Logo.svg",alt:"Skala Logo"}),Object(i.jsxs)("button",{className:"nav_bag",onClick:t,children:[Object(i.jsx)("i",{className:"fas fa-shopping-bag"}),a.length>0?Object(i.jsx)("span",{className:"nav_bag-counter",children:a.length}):Object(i.jsx)(i.Fragment,{})]})]})},j=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsxs)("div",{className:"footer_card",children:[Object(i.jsxs)("div",{className:"footer_item_container",children:[Object(i.jsx)("a",{className:"footer_item",href:"mailto: email.inventado@no.existe.com",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("i",{className:"fas fa-envelope"})}),Object(i.jsx)("a",{className:"footer_item",href:'href="tel:+0800 1234 5678"',target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("i",{className:"fas fa-phone"})}),Object(i.jsx)("a",{className:"footer_item",href:"https://www.instagram.com/skalacosmeticos/",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("i",{className:"footer_logo fab fa-instagram"})}),Object(i.jsx)("a",{className:"footer_item",href:"https://www.facebook.com/skalacosmeticos/",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("i",{className:"footer_logo fab fa-facebook"})})]}),Object(i.jsxs)("div",{className:"footer_item",children:[Object(i.jsx)("h4",{className:"footer_title",children:"Atenci\xf3n al Cliente"}),Object(i.jsx)("p",{className:"footer_text",children:"De lunes a viernes desde las 8:00 hasta las 17:30 hs (Excepto feriados)"})]})]})})},d=a(8),u=function(e){var t=e.data,a=e.handleUpdateTotalPrice,s=Object(c.useState)(t.quantity),n=Object(o.a)(s,2),l=n[0],j=n[1],u=Object(c.useContext)(r.b),b=u.buyProducts,m=u.setBuyProducts,h=function(e){var a=b.find((function(e){return e.id===t.id})),c=b.indexOf(a);a=Object(d.a)(Object(d.a)({},a),{},{quantity:e}),b.splice(c,1,a)};return Object(i.jsxs)("div",{className:"buy_item",children:[Object(i.jsx)("img",{className:"buy_img",src:t.image,alt:t.title,title:t.title}),Object(i.jsx)("h3",{className:"buy_title",children:t.title}),Object(i.jsx)("button",{className:"buy_button-trash",onClick:function(){m(b.filter((function(e){return e.id!==t.id})))},children:Object(i.jsx)("i",{className:"fas fa-times"})}),Object(i.jsxs)("div",{className:"buy_panel",children:[Object(i.jsxs)("div",{className:"buy_price_container",children:[Object(i.jsx)("span",{className:"buy_price",children:t.price*l}),Object(i.jsx)("span",{className:"buy_coin",children:"ARS"})]}),Object(i.jsxs)("div",{className:"buy_buttons_container",children:[Object(i.jsx)("button",{className:"buy_button-minus",onClick:function(){1!==l&&(j(l-1),h(l-1),a())},children:Object(i.jsx)("i",{className:"fas fa-minus"})}),Object(i.jsx)("div",{className:"buy_quantity_container",children:Object(i.jsx)("span",{className:"buy_quantity",children:l})}),Object(i.jsx)("button",{className:"buy_button-plus",onClick:function(){l!==t.lenght-1&&(j(l+1),h(l+1),a())},children:Object(i.jsx)("i",{className:"fas fa-plus"})})]})]})]})},b=a(3),m=a.n(b),h=a(5),x=a(11),O=function(e){var t,a,s,n=e.totalPrice,o=Object(c.useContext)(r.b).buyProducts,l=x.useMercadopago.v2("TEST-cfadf92b-9875-4fd4-864a-a506abc522dd",{locale:"es-AR"}),j=function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://skala-api.herokuapp.com/create_preference",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),a=e.id,s=e.urlCheckout})).catch((function(){alert("Unexpected error")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.map((function(e){return{id:e.id,title:"Crema Skala - ".concat(e.title),description:e.description,unit_price:e.price,currency_id:"ARS",quantity:e.quantity}})),e.next=3,j();case 3:l.checkout({preference:{id:a}}),window.open(s,"_blank");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"mercadopago_container",children:[Object(i.jsxs)("span",{className:"mercadopago_price",children:["Total a pagar $",n," ARS"]}),Object(i.jsx)("button",{className:"mercadopago_button",onClick:d,children:Object(i.jsx)("img",{className:"mercadopago_logo",src:"./images/MercadoPago.svg",alt:"Pagar con Mercado Pago"})})]})},f=function(e){var t=e.handleShowBuys,a=Object(c.useContext)(r.b).buyProducts,s=Object(c.useState)([]),n=Object(o.a)(s,2),l=n[0],j=n[1];Object(c.useEffect)((function(){d()}),[a]);var d=function(){var e=a.reduce((function(e,t){return e+t.price*t.quantity}),0);j(e)},b=a.length>0;return Object(i.jsx)("div",{className:"buy_container",children:Object(i.jsxs)("div",{className:"buy_card",children:[b?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{className:"buy_card_title",children:"Tu Carrito"}),Object(i.jsx)("div",{className:"buy_item_container",children:a.map((function(e){return Object(i.jsx)(u,{data:e,handleUpdateTotalPrice:d},e.id)}))})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{className:"buy_card_title",children:"\xa1Tu carrito esta vac\xedo! \ud83d\ude22"}),Object(i.jsx)("h3",{className:"buy_text-empty",children:"Selecciona uno de nuestros excelentes productos"}),Object(i.jsxs)("button",{className:"buy_button-empty",onClick:t,children:["Ver los productos ",Object(i.jsx)("i",{className:"fas fa-arrow-alt-circle-right"})]})]}),Object(i.jsx)("button",{className:"buy_button-close",onClick:t,children:Object(i.jsx)("i",{className:"fas fa-times"})}),b?Object(i.jsx)(O,{totalPrice:l}):Object(i.jsx)(i.Fragment,{})]})})},p=function(e){var t=e.children,a=e.currentPage,s=Object(c.useState)(!1),n=Object(o.a)(s,2),r=n[0],d=n[1];Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]);var u=function(){d(!r)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{currentPage:a,handleShowBuys:u}),r?Object(i.jsx)(f,{handleShowBuys:u}):Object(i.jsx)(i.Fragment,{}),t,Object(i.jsx)(j,{})]})},_=function(){return Object(i.jsxs)("section",{className:"home",children:[Object(i.jsx)("img",{className:"home_img",src:"./images/cremas.png",alt:"Cremas Skala",title:"Cremas Skala"}),Object(i.jsxs)("header",{className:"home_text_container",children:[Object(i.jsx)("img",{className:"home_logo",src:"./images/brand/Skala - Logo (White).svg",alt:"Skala Logo"}),Object(i.jsxs)("div",{className:"home_description_container",children:[Object(i.jsx)("div",{className:"home_description_item",children:"Calidad"}),Object(i.jsx)("div",{className:"home_description_item",children:"Variedad"}),Object(i.jsx)("div",{className:"home_description_item",children:"Innovaci\xf3n"})]}),Object(i.jsx)("button",{className:"home_button",onClick:function(){var e=document.getElementById("products").offsetTop;window.scrollTo(0,e)},children:"Mira nuestros productos"})]})]})},N=function(){return Object(i.jsx)("section",{className:"about",children:Object(i.jsxs)("div",{className:"about_card",children:[Object(i.jsx)("img",{className:"about_logo",src:"./images/brand/Skala - Logo.svg",alt:"Skala Logo"}),Object(i.jsx)("h2",{className:"about_title",children:"Sobre nosotros"}),Object(i.jsxs)("div",{className:"about_text_container",children:[Object(i.jsx)("p",{className:"about_text",children:"Nuestra marca apareci\xf3 en 1986 con el objetivo de llevar calidad y precios justos al mercado de cosm\xe9ticos. Actuando con transparencia e integridad, buscamos innovar construyendo mucho m\xe1s que una gran marca, sino lo mejor para las personas, el medio ambiente y el cabello del mundo."}),Object(i.jsx)("img",{className:"about_img",src:"./images/logo-vegano.png",alt:"100% Vegano, 0% Origen Natural"}),Object(i.jsxs)("p",{className:"about_text",children:["Con 35 a\xf1os de trayectoria en el mercado de cosmeticos, hemos demostrado que se pueden producir productos de ",Object(i.jsx)("span",{className:"about_text-green",children:"alta calidad"}),", con ",Object(i.jsx)("span",{className:"about_text-yellow",children:"precios accesibles"})," y que sean ",Object(i.jsx)("span",{className:"about_text-blue",children:"amigables para los animales"})]}),Object(i.jsxs)("p",{className:"about_text",children:["Somos amigos de los animales desde julio de 2018 al convertirnos en una marca ",Object(i.jsx)("span",{className:"about_text-green",children:"100% Vegana"})," y al ",Object(i.jsx)("span",{className:"about_text-red",children:"nunca realizar pruebas en animales"}),". Sabemos la importancia de producir productos veganos y entendemos que habitos y actitudes mejoran la calidad de vida , ",Object(i.jsx)("span",{className:"about_text-blue",children:" ayudando tambi\xe9n a la humanidad y al planeta"})]}),Object(i.jsx)("p",{className:"about_text-celebrate",children:"\xa1Celebremos que nos hayas encontrado y que nosotros te hayamos encontrado a ti!"})]})]})})},g=function(){var e=Object(h.a)(m.a.mark((function e(){var t,a,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://skala-api.herokuapp.com/");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,c=a.products,s=void 0===c?[]:c,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){var t=e.handleSetCategory;return Object(i.jsx)("div",{className:"filter_container",children:Object(i.jsxs)("div",{className:"filter",children:[Object(i.jsx)("label",{className:"filter_label",htmlFor:"filter",children:"Filtro: "}),Object(i.jsxs)("select",{className:"filter_selector",name:"filter",id:"filter",onChange:t,children:[Object(i.jsx)("option",{value:"all",children:"Todos"}),Object(i.jsx)("option",{value:"expert",children:"Expert"}),Object(i.jsx)("option",{value:"pot\xe3o",children:"Pot\xe3o"}),Object(i.jsx)("option",{value:"spa naturals",children:"Spa Naturals"}),Object(i.jsx)("option",{value:"especials",children:"Especials"}),Object(i.jsx)("option",{value:"brasil",children:"Brasil"})]})]})})},y=function(e){var t=e.handleHideContact;return Object(i.jsx)("div",{className:"contact",children:Object(i.jsxs)("div",{className:"contact_card",children:[Object(i.jsx)("h2",{className:"contact_title",children:"\xa1Si que tienes ganas de tener un pelo hermoso!"}),Object(i.jsxs)("h3",{className:"contact_text",children:["Pero por cuestiones de stock, ",Object(i.jsx)("br",{})," como maximo vendemos 5 productos ",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"Por favor, comunicate con nosotros para compras por mayor"]}),Object(i.jsxs)("div",{className:"contact_item_container",children:[Object(i.jsxs)("div",{className:"contact_item",children:[Object(i.jsx)("h4",{className:"contact_title",children:"Atenci\xf3n al Cliente"}),Object(i.jsx)("p",{className:"contact_item_text",children:"De lunes a viernes desde las 8:00 hasta las 17:30 hs (Excepto feriados)"})]}),Object(i.jsx)("a",{className:"contact_item",href:"mailto: mail.inventado@no.existe.com",children:Object(i.jsx)("i",{className:"fas fa-envelope"})}),Object(i.jsx)("a",{className:"contact_item",href:"tel:+0800 1234 5678",children:Object(i.jsx)("i",{className:"fas fa-phone"})}),Object(i.jsx)("a",{className:"contact_item",href:"https://www.instagram.com/skalacosmeticos/",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("i",{className:"contact_logo fab fa-instagram"})}),Object(i.jsx)("a",{className:"contact_item",href:"https://www.facebook.com/skalacosmeticos/",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("i",{className:"contact_logo fab fa-facebook"})})]}),Object(i.jsx)("div",{className:"contact_button-close",onClick:t,children:Object(i.jsx)("i",{className:"fas fa-times"})})]})})},k=function(){return Object(i.jsx)("div",{className:"loader_card",children:Object(i.jsx)("div",{className:"loader"})})},w=Object(c.lazy)((function(){return a.e(3).then(a.bind(null,22))})),S=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)("all"),r=Object(o.a)(n,2),l=r[0],j=r[1],d=Object(c.useState)(!1),u=Object(o.a)(d,2),b=u[0],x=u[1],O=Object(c.useState)(!1),f=Object(o.a)(O,2),p=f[0],_=f[1];Object(c.useEffect)((function(){(function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g();case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),window.onscroll=function(){var e=document.getElementById("products").offsetTop+100,t=window.scrollY,a=window.matchMedia("(max-width: 768px)");t>=e&&a.matches?_(!0):_(!1)};var N=function(){x(!0)};return Object(i.jsxs)(i.Fragment,{children:[b?Object(i.jsx)(y,{handleHideContact:function(){x(!1)}}):Object(i.jsx)(i.Fragment,{}),Object(i.jsxs)("section",{id:"products",className:"products",children:[Object(i.jsx)(v,{handleSetCategory:function(e){var t=e.target.value;j(t)}}),Object(i.jsxs)("div",{className:"products_container",children:["all"===l?a.map((function(e){return Object(i.jsx)(c.Suspense,{fallback:Object(i.jsx)(k,{}),children:Object(i.jsx)(w,{data:e,handleShowContact:N},e.id)},e.id)})):a.filter((function(e){return e.category===l})).map((function(e){return Object(i.jsx)(c.Suspense,{fallback:Object(i.jsx)(k,{}),children:Object(i.jsx)(w,{data:e},e.id)},e.id)})),p?Object(i.jsx)("button",{className:"products_button-to-top",onClick:function(){var e=document.getElementById("products").offsetTop;window.scrollTo(0,e)},children:Object(i.jsx)("i",{className:"fas fa-chevron-up"})}):Object(i.jsx)(i.Fragment,{})]})]})]})},C=function(){return Object(i.jsx)(r.a,{children:Object(i.jsxs)(p,{children:[Object(i.jsx)(_,{}),Object(i.jsx)(S,{}),Object(i.jsx)(N,{})]})})};a(20);n.a.render(Object(i.jsx)(C,{}),document.getElementById("root"))},4:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(2),s=a(1),n=a.n(s),r=a(0),o=n.a.createContext({});function i(e){var t=e.children,a=Object(s.useState)([]),n=Object(c.a)(a,2),i=n[0],l=n[1];return Object(r.jsx)(o.Provider,{value:{buyProducts:i,setBuyProducts:l},children:t})}t.b=o}},[[21,1,2]]]);
//# sourceMappingURL=main.485c1aca.chunk.js.map