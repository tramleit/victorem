import{r as x,j as e,y as o}from"./app-u7IR6Df1.js";import{F as g}from"./FileUpload-xTTy8FGl.js";import{F as f}from"./form-group-jysNuSac.js";import{c as h}from"./class-names-zUl3OLOi.js";import{t as j}from"./lang-iz4Bd8g5.js";import{n as m}from"./notification-OZoLHU_n.js";import{e as b}from"./index.esm-D1fV5stR.js";import v from"./product-image-list-xiCrQe3b.js";import{I as F}from"./InputError-QMNteUbK.js";import"./index-X4NcwgMz.js";import"./transition-xx6ayEc6.js";import"./dialog-L-cZLcDH.js";import"./index-pEeJqV-C.js";import"./index-ugdwKev6.js";import"./utils-kpKCX6Tx.js";import"./objectWithoutPropertiesLoose-0VpOByGv.js";import"./defineProperty-9_qlZ_aL.js";function T({className:l,product:s,handleImages:c,errors:r,isClearFiles:n}){var i;const[d,a]=x.useState(!1),p=t=>{o.delete(`/ecommerce/product-image/${t}`,{preserveScroll:!0,onSuccess:()=>m("Product images deleted.","success")})},u=t=>{o.put(`/ecommerce/product-image/${s.slug}`,{images:t},{preserveScroll:!0,onStart:()=>a(!0),onFinish:()=>a(!1),onSuccess:()=>{m("The product image has been updated.","success")}})};return e.jsx(e.Fragment,{children:e.jsxs(f,{title:"Upload new product images",description:"Upload your product image gallery here",className:h(l),children:[e.jsx(g,{onChangeFile:c,errors:r,isClearFiles:n}),e.jsx(F,{className:"-mt-5",message:r&&r.images}),((i=s==null?void 0:s.images)==null?void 0:i.length)>0&&e.jsxs("div",{className:"max-h-[280px] col-span-full mb-5",children:[e.jsx("div",{className:"mb-2 text-gray-800",children:j("Product images")}),e.jsxs("div",{className:"relative overflow-hidden",children:[d?e.jsx("div",{className:"absolute z-50 inset-0 bg-black/25 backdrop-blur-sm rounded-md flex items-center justify-center",children:e.jsx("span",{className:"animate-spin",children:e.jsx(b,{className:"w-10 h-10 text-white"})})}):null,e.jsx(v,{items:s.images,onReorder:u,onDelete:p})]})]})]})})}export{T as default};
