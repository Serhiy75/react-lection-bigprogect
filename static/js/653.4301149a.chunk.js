"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[653],{7821:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var s=t(9434),c=t(4494),l=t(3329),r=function(){var e=(0,s.v9)((function(e){return e.products.isInStock})),n=(0,s.I0)();return(0,l.jsxs)("fieldset",{className:"me-5",children:[(0,l.jsx)("legend",{children:"Availability:"}),(0,l.jsx)("div",{className:"form-check",children:(0,l.jsxs)("label",{className:"form-check-label",children:[(0,l.jsx)("span",{children:"In stock"}),(0,l.jsx)("input",{checked:e,className:"form-check-input",type:"checkbox",onChange:function(){return n((0,c.p4)())}})]})})]})},a=function(){var e=(0,s.v9)((function(e){return e.products.search})),n=(0,s.I0)();return(0,l.jsxs)("div",{className:"input-group input-group-lg mb-5",children:[(0,l.jsx)("input",{value:e,onChange:function(e){return n((0,c.r_)(e.target.value))},type:"text",className:"form-control",placeholder:"Type to search ..."}),(0,l.jsx)("button",{onClick:function(){return n((0,c.r_)(""))},className:"btn btn-outline-secondary",type:"button",children:"Reset"})]})},i=[{label:"All",value:"all"},{label:"Smartphones",value:"smartphones"},{label:"Laptops",value:"laptops"},{label:"Watches",value:"watches"}],o=function(){var e=(0,s.v9)((function(e){return e.products.category})),n=(0,s.I0)();return(0,l.jsxs)("fieldset",{className:"ms-5",children:[(0,l.jsx)("legend",{children:"Categories:"}),(0,l.jsx)("div",{className:"d-flex",children:i.map((function(t){var s=t.label,r=t.value;return(0,l.jsx)("div",{className:"form-check me-4",children:(0,l.jsxs)("label",{className:"form-check-label",children:[(0,l.jsx)("span",{children:s}),(0,l.jsx)("input",{checked:r===e,value:r,onChange:function(e){return n((0,c.cg)(e.target.value))},className:"form-check-input",type:"radio",name:"skil"})]})},r)}))})]})},d=t(2537),u=t(1413),m=t(9439),h=t.p+"static/media/pulp-fiction-john-travolta.59b46f4510af6cc07976.gif",x=function(){return(0,l.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[(0,l.jsx)("img",{src:h,alt:"not found",style:{width:300}}),(0,l.jsx)("p",{className:"my-3 h2",children:"There's no products"})]})},f=t(3733),p=t(203),j=function(e){var n=e.id,t=e.title,r=e.price,a=e.stock,i=e.brand,o=e.thumbnail,d=(0,s.I0)();return(0,l.jsx)("div",{className:"card shadow-sm mb-4",children:(0,l.jsx)("div",{className:"card-body",children:(0,l.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,l.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:o,className:"img-fluid rounded-3",alt:"Shopping item",style:{width:"150px",height:"100px",aspectRatio:"auto"}})}),(0,l.jsxs)("div",{className:"ms-3",children:[(0,l.jsx)("h5",{children:t}),(0,l.jsx)("p",{className:"small mb-0",children:i})]})]}),(0,l.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[(0,l.jsx)("div",{style:{width:"80px"},children:(0,l.jsx)("h5",{style:{fontSize:14},className:(0,f.Z)("fw-normal mb-0 me-4",{"text-success":a>5,"text-warning":a<5&&a>0,"text-danger":0===a}),children:0===a?"Out of stock":a<5?"Few left":"In stock"})}),(0,l.jsx)("div",{style:{width:"80px"},children:(0,l.jsxs)("h5",{className:"mb-0",children:["$",r]})}),(0,l.jsx)("button",{onClick:function(){d((0,c.$J)()),d((0,c.wg)(n))},type:"button",className:"btn btn-primary btn-lg me-4",children:"Add to cart"}),(0,l.jsx)("button",{onClick:function(){return d((0,c.Ir)(n))},type:"button",style:{backgroundColor:"transparent",border:"none"},children:(0,l.jsx)(p.Xm5,{color:"red",size:20})})]})]})})})},b=t(6916),v=function(e){return e.products.isModalOpen},g=(0,b.P1)([function(e){return e.products.items},function(e){return e.products.search}],(function(e,n){return console.log("selectFilteredProducts"),e.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase().trim())}))})),N=(0,b.P1)(g,(function(e){return e.reduce((function(e,n){return n.discountPercentage>0?e+1:e}),0)})),y=t(2791),k=function(){var e=(0,y.useState)(0),n=(0,m.Z)(e,2),t=n[0],c=n[1],r=(0,s.v9)(g),a=(0,s.v9)(N);return r.length?(0,l.jsxs)("section",{className:"h-100 h-custom",children:[(0,l.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return c((function(e){return e+1}))},children:t}),(0,l.jsxs)("p",{children:["Total with discount: ",a]}),r.map((function(e){return(0,l.jsx)(j,(0,u.Z)({},e),e.id)}))]}):(0,l.jsx)(x,{})},w=t(2007),C=function(e){var n=e.children,t=(0,s.I0)();(0,y.useEffect)((function(){var e=function(e){"Escape"===e.key&&t((0,c.$J)())};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"modal-backdrop fade show"}),(0,l.jsx)("div",{className:"modal fade show",style:{display:"block"},onClick:function(e){e.target===e.currentTarget&&t((0,c.$J)())},children:(0,l.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,l.jsxs)("div",{className:"modal-content",children:[(0,l.jsxs)("div",{className:"modal-header",children:[(0,l.jsx)("h5",{className:"modal-title",children:"Modal title"}),(0,l.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:function(){return t((0,c.$J)())}})]}),(0,l.jsx)("div",{className:"modal-body",children:n})]})})})]})};C.propType={children:w.PropTypes.node.isRequired};var I=t(25),S=function(){var e=(0,s.v9)((function(e){return null===e||void 0===e?void 0:e.counter})),n=(0,s.v9)((function(e){return e.products.modalProduct})),t=n.thumbnail,c=n.title,r=n.brand,a=n.price,i=(0,s.I0)(),o=function(e){var n=e.currentTarget,t=n.name,s=n.value;switch(t){case"plus":i((0,I.HS)());break;case"minus":i((0,I.jb)());break;case"quantity":i((0,I.eI)(Number(s)))}};return(0,l.jsxs)("section",{className:"h-100 p-4 h-custom",style:{backgroundColor:"#eee"},children:[(0,l.jsx)("h3",{className:"mb-4 pt-2 text-center fw-bold text-uppercase",children:"Shoping cart"}),(0,l.jsxs)("div",{className:"d-flex align-items-center mb-4 shadow-lg p-2 rounded",children:[(0,l.jsx)("img",{src:t,className:"img-fluid",style:{width:"150px"},alt:"Generic placeholder"}),(0,l.jsxs)("div",{className:"ms-3",children:[(0,l.jsx)("h5",{className:"text-primary",children:c}),(0,l.jsx)("h6",{style:{color:"#9e9e9e"},children:r}),(0,l.jsxs)("p",{className:"fw-bold mb-0 me-5 pe-3",children:[a,"$"]})]})]}),(0,l.jsxs)("div",{className:"d-flex justify-content-center align-items-center mb-4 gap-4",children:[(0,l.jsx)("button",{name:"minus",onClick:o,className:"btn btn-outline-primary p-2 d-flex justify-content-center align-items-center",children:(0,l.jsx)(p.iFH,{fontSize:25})}),(0,l.jsx)("div",{style:{width:70},children:(0,l.jsx)("input",{onChange:o,style:{fontSize:20},id:"number",min:"1",name:"quantity",value:e.toString(),type:"number",className:"form-control"})}),(0,l.jsx)("button",{name:"plus",onClick:o,className:"btn btn-outline-primary p-2 d-flex justify-content-center align-items-center",children:(0,l.jsx)(p.wEH,{fontSize:25})})]}),(0,l.jsxs)("div",{className:"d-flex justify-content-between p-2 mb-4",style:{backgroundColor:"#e1f5fe"},children:[(0,l.jsx)("h5",{className:"fw-bold mb-0",children:"Total:"}),(0,l.jsxs)("h5",{className:"fw-bold mb-0",children:[e*a,"$"]})]}),(0,l.jsx)("div",{className:"w-full d-flex justify-content-center",children:(0,l.jsx)("button",{type:"button",className:"btn btn-primary mx-auto btn-block btn-lg",children:"Buy now"})})]})},T=t(3853),$=function(){var e=(0,s.v9)(v),n=(0,s.I0)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"d-flex align-items-center mb-5",children:[(0,l.jsx)(r,{}),(0,l.jsx)(o,{}),(0,l.jsx)("button",{type:"button",className:"btn btn-primary btn-lg ms-auto",onClick:function(){var e=Math.floor(Math.random()*d.length);n((0,c.gK)(d[e]))},children:(0,l.jsx)(T.OvN,{})})]}),(0,l.jsx)(a,{}),(0,l.jsx)(k,{}),e&&(0,l.jsx)(C,{children:(0,l.jsx)(S,{})})]})}}}]);
//# sourceMappingURL=653.4301149a.chunk.js.map