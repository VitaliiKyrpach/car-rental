"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[561],{767:(e,a,s)=>{s.d(a,{G:()=>L});var t=s(791);const l="CatalogFilter_filters__bFApq",c="CatalogFilter_form__4rqW+",n="CatalogFilter_field__B1l0W",o="CatalogFilter_title__kql2X",r="CatalogFilter_input__3t0R1",i="CatalogFilter_brand__Yevpr",d="CatalogFilter_price__lYnxl",m="CatalogFilter_arrowSvg__zduLo",_="CatalogFilter_arrowDown__hki8E",h="CatalogFilter_mileage__YEAMj",p="CatalogFilter_mileageFiled__YDtiq",u="CatalogFilter_to__hHn5P",x="CatalogFilter_fromText__08Bg3",j="CatalogFilter_toText__6Yibd",g="CatalogFilter_formBtn__eNQoE",N="CatalogFilter_filterListWrapper__ME4Ud",C="CatalogFilter_filterList__7AJ4g",f="CatalogFilter_filterItem__4CrFV";var b=s(553);const v=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land","Acura","JEEP","Ford","Honda"]');var y=s(420),I=s(875);var w=s(895),M=s(184);const k={brand:!1,prices:!1},F=v.sort(),L=()=>{const[e,a]=(0,t.useState)(""),[s,v]=(0,t.useState)(""),[L,W]=(0,t.useState)(""),[S,T]=(0,t.useState)(""),[E,A]=(0,t.useState)(k),P=(0,y.v9)(I.oJ),B=(0,y.I0)(),K=e=>{const a=e.currentTarget.dataset.type;A((e=>({...k,[a]:!e[a]})))},Z=Number(L).toLocaleString();console.log(Number(L));const J=S;console.log(typeof Z),console.log(typeof J.toLocaleString());const q=e=>{const s=e.currentTarget.dataset.type;"brand"===s&&a(e.target.value),"mileFrom"===s&&W(e.target.value),"mileTo"===s&&T(e.target.value)},z=e=>{if("LI"!==e.target.nodeName)return;const s=e.currentTarget.dataset.type,t=e.target.textContent;"brands"===s?a(t):v(t),A(k)},G=(0,t.useMemo)((()=>(e=>{const a=e.map((e=>{let{rentalPrice:a}=e;return Number(a.replace(/[^0-9]/g,""))})),s=Math.max(...a);let t=[];for(let l=10;l<=s;l+=10)t.push(l);return t})(P)),[P]);return document.addEventListener("click",(e=>{"prices"!==e.target.dataset.type&&"brand"!==e.target.dataset.type&&(E.brand||E.prices)&&A(k)})),(0,M.jsx)("div",{className:l,children:(0,M.jsxs)("form",{className:c,onSubmit:a=>{a.preventDefault(),B((0,w.K)({brand:e,price:s,mileageFrom:L,mileageTo:S}))},children:[(0,M.jsxs)("div",{className:n,children:[(0,M.jsx)("p",{className:o,children:"Car brand"}),(0,M.jsx)("input",{className:"".concat(r," ").concat(i),type:"text",placeholder:"Enter the text",id:"brandSearch","data-type":"brand",onClick:K,onChange:q,value:e,autoComplete:"off"}),(0,M.jsx)("svg",{className:"".concat(m," ").concat(E.brand?_:""),children:(0,M.jsx)("use",{href:"".concat(b.Z,"#icon-arrow")})}),E.brand&&(0,M.jsx)("div",{className:N,children:(0,M.jsx)("ul",{className:C,onClick:z,"data-type":"brands",children:F.filter((a=>a.toLowerCase().includes(e.toLowerCase().trim()))).map(((e,a)=>(0,M.jsx)("li",{className:f,children:e},a)))})})]}),(0,M.jsxs)("div",{className:n,children:[(0,M.jsx)("p",{className:o,children:"Price/ 1 hour"}),(0,M.jsxs)("div",{className:"".concat(r," ").concat(d),onClick:K,"data-type":"prices",children:["To ",""===s?"":s,"$"]}),(0,M.jsx)("svg",{className:"".concat(m," ").concat(E.prices?_:""),children:(0,M.jsx)("use",{href:"".concat(b.Z,"#icon-arrow")})}),E.prices&&(0,M.jsx)("div",{className:N,children:(0,M.jsx)("ul",{className:C,onClick:z,"data-type":"prices",children:G.map(((e,a)=>(0,M.jsx)("li",{className:f,children:e},a)))})})]}),(0,M.jsxs)("div",{className:h,children:[(0,M.jsx)("p",{className:o,children:"\u0421ar mileage / km"}),(0,M.jsx)("p",{className:x,children:"From"}),(0,M.jsx)("p",{className:j,children:"To"}),(0,M.jsx)("input",{className:p,type:"number",id:"brandSearch",min:1,"data-type":"mileFrom",onChange:q,value:Z,autoComplete:"off"}),(0,M.jsx)("input",{className:"".concat(p," ").concat(u),type:"number",id:"brandSearch",min:Number(L)+1,"data-type":"mileTo",onChange:q,value:J,autoComplete:"off"})]}),(0,M.jsx)("button",{className:g,type:"submit",children:"Search"})]})})}},715:(e,a,s)=>{s.d(a,{O:()=>L});var t=s(791);const l="CatalogItem_card__TGKQb",c="CatalogItem_cardHeart__BISdS",n="CatalogItem_heartActive__y3XLu",o="CatalogItem_imgWrapper__GCJLS",r="CatalogItem_cardImg__JBKqw",i="CatalogItem_title__CCTRT",d="CatalogItem_titleWrapper__VBAfM",m="CatalogItem_brand__sKrC1",_="CatalogItem_carModel__mx-NA",h="CatalogItem_colorAccent__CP2nK",p="CatalogItem_infoWrapper__JMA0f",u="CatalogItem_infoList__NCzTv",x="CatalogItem_dots__276es",j="CatalogItem_infoItem__dvIS-",g="CatalogItem_cardBtn__VjKvE";var N=s(553),C=s(420),f=s(875),b=s(835),v=s(184);const y=e=>{let{data:a,modal:s}=e;const[y,I]=(0,t.useState)(!1),w=(0,C.I0)(),M=(0,C.v9)(f.Tc),k=a.address.split(", "),F=M.length&&M.find((e=>e.id===a.id));(0,t.useEffect)((()=>{I(!!F)}),[F]);return(0,v.jsxs)("li",{className:l,children:[(0,v.jsx)("svg",{className:"".concat(c," ").concat(y&&n),onClick:()=>{w(F?(0,b.yJ)(a.id):(0,b.Z0)(a)),I(!y)},children:y?(0,v.jsx)("use",{href:"".concat(N.Z,"#icon-heart-active")}):(0,v.jsx)("use",{href:"".concat(N.Z,"#icon-heart")})}),(0,v.jsx)("div",{className:o,children:(0,v.jsx)("img",{className:r,src:a.img,alt:"car"})}),(0,v.jsxs)("div",{className:i,children:[(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("p",{className:m,children:a.make}),(0,v.jsx)("p",{className:h,children:(0,v.jsxs)("span",{className:_,children:[a.model,","]})}),(0,v.jsx)("p",{children:a.year})]}),(0,v.jsx)("p",{children:a.rentalPrice})]}),(0,v.jsxs)("div",{className:p,children:[(0,v.jsxs)("ul",{className:u,children:[(0,v.jsx)("li",{className:j,children:k[1]}),(0,v.jsx)("li",{className:j,children:k[2]}),(0,v.jsx)("li",{className:j,children:a.rentalCompany}),(0,v.jsx)("li",{className:"".concat(j," ").concat(x),children:"Premium"})]}),(0,v.jsxs)("ul",{className:u,children:[(0,v.jsx)("li",{className:j,children:a.type}),(0,v.jsx)("li",{className:j,children:a.make}),(0,v.jsx)("li",{className:j,children:a.mileage}),(0,v.jsx)("li",{className:"".concat(j," ").concat(x),children:a.accessories[0]})]})]}),(0,v.jsx)("button",{type:"button",className:g,onClick:()=>s(a),children:"Learn more"})]})},I="PaginationButton_button__4KQW0",w=e=>{let{onClick:a}=e;return(0,v.jsx)("button",{className:I,type:"button",onClick:a,children:"Load more"})},M="CatalogList_list__ojrAu",k={backdrop:"ModalWindow_backdrop__UX698",modal:"ModalWindow_modal__Fug1V",close:"ModalWindow_close__s9Sxi",group:"ModalWindow_group__U6PLg",modalContent:"ModalWindow_modalContent__+JiqF",img:"ModalWindow_img__I61ed",title:"ModalWindow_title__CS20k",carModel:"ModalWindow_carModel__LhQ9L",colorAccent:"ModalWindow_colorAccent__FkZnx",bold:"ModalWindow_bold__XiCQE",infoWrapper:"ModalWindow_infoWrapper__l2Bvq",infoList:"ModalWindow_infoList__Ps+Zw",infoItem:"ModalWindow_infoItem__qRgZF",description:"ModalWindow_description__890dp",text:"ModalWindow_text__nS5-W",conditionsList:"ModalWindow_conditionsList__yuUGm",condItem:"ModalWindow_condItem__m-nsT",button:"ModalWindow_button__qbwlx",tel:"ModalWindow_tel__jhc+u"},F=e=>{let{data:a,onClose:s}=e;const t=a.address.split(", "),l=a.rentalConditions.split("\n"),c=l[0].split(": ");l.shift();const n=a.mileage.toLocaleString();document.body.style.overflow="hidden";const o=e=>{if("Escape"===e.code)return s(),document.body.style.overflow="scroll",document.removeEventListener("keydown",o)};document.addEventListener("keydown",o);const r=e=>{"backdrop"!==e.target.dataset.type&&"close-modal"!==e.target.dataset.type||(document.body.style.overflow="scroll",s())};return(0,v.jsx)("div",{className:k.backdrop,onClick:r,"data-type":"backdrop",children:(0,v.jsxs)("div",{className:k.modal,children:[(0,v.jsx)("svg",{className:k.close,onClick:r,"data-type":"close-modal",children:(0,v.jsx)("use",{href:"".concat(N.Z,"#icon-x")})}),(0,v.jsx)("img",{className:k.img,src:a.img,alt:"car"}),(0,v.jsxs)("div",{className:k.modalContent,children:[(0,v.jsxs)("div",{className:k.group,children:[(0,v.jsxs)("div",{className:k.title,children:[(0,v.jsx)("p",{children:a.make}),(0,v.jsx)("p",{className:k.colorAccent,children:(0,v.jsxs)("span",{className:k.carModel,children:[a.model,","]})}),(0,v.jsx)("p",{children:a.year})]}),(0,v.jsxs)("div",{className:k.infoWrapper,children:[(0,v.jsxs)("ul",{className:k.infoList,children:[(0,v.jsx)("li",{className:k.infoItem,children:t[1]}),(0,v.jsx)("li",{className:k.infoItem,children:t[2]}),(0,v.jsxs)("li",{className:k.infoItem,children:["Id: ",a.id]}),(0,v.jsxs)("li",{className:k.infoItem,children:["Year: ",a.year]}),(0,v.jsxs)("li",{className:k.infoItem,children:["Type: ",a.type]})]}),(0,v.jsxs)("ul",{className:k.infoList,children:[(0,v.jsxs)("li",{className:k.infoItem,children:["Fuel Consumption: ",a.fuelConsumption]}),(0,v.jsxs)("li",{className:k.infoItem,children:["Engine Size: ",a.engineSize]})]})]}),(0,v.jsx)("p",{className:k.description,children:a.description})]}),(0,v.jsxs)("div",{className:k.group,children:[(0,v.jsx)("p",{className:k.text,children:"Accessories and functionalities:"}),(0,v.jsxs)("div",{className:k.infoWrapper,children:[(0,v.jsx)("ul",{className:k.infoList,children:a.accessories.map(((e,a)=>(0,v.jsx)("li",{className:k.infoItem,children:e},a)))}),(0,v.jsx)("ul",{className:"".concat(k.infoList," ").concat(k.dots),children:a.functionalities.map(((e,a)=>(0,v.jsx)("li",{className:k.infoItem,children:e},a)))})]})]}),(0,v.jsxs)("div",{className:k.group,children:[(0,v.jsx)("p",{className:k.text,children:"Rental Conditions: "}),(0,v.jsxs)("ul",{className:k.conditionsList,children:[(0,v.jsxs)("li",{className:k.condItem,children:[c[0],":"," ",(0,v.jsx)("span",{className:"".concat(k.colorAccent," ").concat(k.bold),children:c[1]})]}),l.map(((e,a)=>(0,v.jsx)("li",{className:k.condItem,children:e},a))),(0,v.jsxs)("li",{className:k.condItem,children:["Mileage:"," ",(0,v.jsx)("span",{className:"".concat(k.colorAccent," ").concat(k.bold),children:n})]}),(0,v.jsxs)("li",{className:k.condItem,children:["Price:"," ",(0,v.jsxs)("span",{className:"".concat(k.colorAccent," ").concat(k.bold),children:[a.rentalPrice.replace(/[^0-9]/g,""),"$"]})]})]})]}),(0,v.jsx)("button",{className:k.button,type:"button",children:(0,v.jsx)("a",{className:k.tel,href:"tel:+380730000000",children:"Rental car"})})]})]})})},L=e=>{let{data:a}=e;const[s,l]=(0,t.useState)(!1),[c,n]=(0,t.useState)(null),[o,r]=(0,t.useState)(12),i=(0,C.v9)(f.xU),d=e=>{l(!0),n(e)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("ul",{className:M,children:a&&a.slice(0,o).map((e=>(0,v.jsx)(y,{data:e,modal:d},e.id)))}),!i&&o<=a.length?(0,v.jsx)(w,{onClick:()=>{r((e=>e+12))}}):null,s&&(0,v.jsx)(F,{data:c,onClose:e=>{l(!1)}})]})}},424:(e,a,s)=>{s.d(a,{H:()=>o});const t="Empty_text__ZCIZS",l="Empty_bold__gDRGW",c="Empty_bro__aszsF";var n=s(184);const o=e=>"empty"===e.case?(0,n.jsxs)("p",{className:t,children:[(0,n.jsx)("span",{className:l,children:"Sorry dude!"})," There are no cars found with such parameters."," ",(0,n.jsx)("span",{className:l,children:"Slow down"})," your appetites and try changing your filter parameters.",(0,n.jsx)("br",{})," ",(0,n.jsx)("span",{className:c,children:"Peace out bro!!"})]}):"null"===e.case?(0,n.jsxs)("p",{className:t,children:[(0,n.jsx)("span",{className:l,children:"Sorry dude!"})," There are no cars added to favorits. Just go back to the"," ",(0,n.jsx)("span",{className:l,children:"Catalog page"})," and pick what you like.",(0,n.jsx)("br",{})," ",(0,n.jsx)("span",{className:c,children:"Peace out bro!!"})]}):void 0},226:(e,a,s)=>{s.d(a,{K:()=>t});const t=(e,a)=>{const{brand:s,price:t,mileageFrom:l,mileageTo:c}=a;return e.filter((e=>""!==s?e.make.toLowerCase().includes(s.toLowerCase()):e)).filter((e=>{const a=Number(e.rentalPrice.slice(1,e.rentalPrice.length));return t?a<=Number(t):e})).filter((e=>Number(l)?e.mileage>=Number(l):e)).filter((e=>Number(c)?e.mileage<=Number(c):e))}},561:(e,a,s)=>{s.r(a),s.d(a,{default:()=>p});const t="FavoritesPage_favorites__IuKMe";var l=s(420),c=s(700),n=s(875),o=s(715),r=s(767),i=s(226),d=s(791),m=s(895),_=s(424),h=s(184);const p=()=>{const e=(0,l.v9)(n.Tc),a=(0,l.I0)(),s=(0,l.v9)(n.mj),p=(0,i.K)(e,s);return(0,d.useEffect)((()=>{a((0,m.K)({brand:"",price:null,mileageFrom:null,mileageTo:null}))}),[a]),(0,h.jsx)("div",{className:t,children:(0,h.jsxs)(c.W,{children:[(0,h.jsx)(r.G,{}),!p.length&&(0,h.jsx)(_.H,{case:"".concat(e.length?"empty":"null")}),(0,h.jsx)(o.O,{data:p})]})})}}}]);
//# sourceMappingURL=561.43fbce6b.chunk.js.map