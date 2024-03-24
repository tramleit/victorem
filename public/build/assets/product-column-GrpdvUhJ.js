import{j as e,d as h,y as m}from"./app-nsHntUsK.js";import{P as j}from"./pencil-z6u8u8UL.js";import{E as f,S as n,I as y,H as k,C as S}from"./index-iL4kZU-h.js";import{H as r}from"./table-Ef1d0Ui7.js";import{r as o}from"./drawer-LkzqZ4Wu.js";import{D as v}from"./delete-popover-qMZeHwse.js";import{t as c}from"./lang-F_IncnmU.js";import{n as N}from"./notification-3sPEPbd5.js";import{f as I}from"./index.esm-ISvY9W97.js";import{N as d}from"./react-number-format.es-ILG5yc8J.js";import{D as P}from"./date-cell-zmlomyRm.js";import"./transition-G-3VdV3I.js";import"./dialog-4x4KwS2E.js";import"./createSuper-Fmok1Pim.js";import"./defineProperty-9_qlZ_aL.js";import"./objectWithoutPropertiesLoose-0VpOByGv.js";import"./class-names-zUl3OLOi.js";import"./trash-ZmmQMKWp.js";import"./index-sAVe241O.js";import"./dayjs.min-jMDgXcQu.js";const O=({sortConfig:a,onDeleteItem:p,onHeaderCellClick:l,onChecked:b})=>[{title:e.jsx(r,{title:c("Product Info")}),dataIndex:"icon",key:"icon",width:150,render:(s,t)=>e.jsx("div",{className:"flex gap-x-2 items-center",children:e.jsx("div",{children:e.jsx(f,{as:"h6",className:"font-medium text-gray-800 !text-sm",children:t.name})})})},{title:e.jsx(r,{title:c("Price"),sortable:!0,ascending:(a==null?void 0:a.direction)==="asc"&&(a==null?void 0:a.key)==="price"}),dataIndex:"price",key:"price",width:100,onHeaderCell:()=>l("price"),render:s=>e.jsx(n,{className:"!text-sm",children:e.jsx(d,{prefix:"Rp",displayType:"text",value:s,thousandSeparator:!0,decimalScale:2,fixedDecimalScale:!0})})},{title:e.jsx(r,{title:c("Discount")}),dataIndex:"discount",key:"discount",width:100,onHeaderCell:()=>l("discount"),render:(s,t)=>e.jsxs(n,{className:"!text-sm",children:[s!==null||s>0?e.jsx(d,{prefix:"Rp",displayType:"text",value:t.price,thousandSeparator:!0,decimalScale:2,fixedDecimalScale:!0,className:"line-through text-rose-500 block"}):null,s===null?e.jsx(I,{}):null,s!==null||s>0?e.jsx(d,{prefix:"Rp",displayType:"text",value:t.price-s,thousandSeparator:!0,decimalScale:2,fixedDecimalScale:!0,className:"block"}):null,t.discount_percent!==null||t.discount_percent>0?e.jsx(d,{suffix:"%",displayType:"text",value:t.discount_percent.toString().replace(/\.00$/,""),thousandSeparator:!0,className:"block"}):null]})},{title:e.jsx(r,{title:c("Stock")}),onHeaderCell:()=>l("stock"),dataIndex:"Stock",key:"stock",width:5,render:(s,t)=>e.jsx("div",{children:t.sizes.map(i=>e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsxs("span",{className:"uppercase block",children:[i.name," :"]}),e.jsx("span",{className:"block font-medium",children:i.stock})]},i.id))})},{title:e.jsx(n,{children:"Active"}),dataIndex:"status",key:"status",width:15,render:(s,t)=>{const i=s==="publish",u=i?"Product has been disabled.":"Product has been activated.",x=()=>{m.put(o.eCommerce.changeProductStatus(t.slug),{},{onSuccess:()=>{N(u,"success"),m.visit(o.eCommerce.products,{only:["product"]})}})};return e.jsx(y,{checked:i,onChange:x})}},{title:e.jsx(r,{title:c("Modified")}),onHeaderCell:()=>l("modified"),dataIndex:"Modified",key:"modified",width:5,render:(s,t)=>e.jsx(P,{date:t.updated_at})},{title:e.jsx(e.Fragment,{}),dataIndex:"action",key:"action",width:100,render:(s,t)=>e.jsxs("div",{className:"flex items-center justify-end gap-3 pe-4",children:[e.jsx(k,{size:"sm",content:()=>"Edit Product",placement:"top",color:"invert",children:e.jsx(h,{href:o.eCommerce.editProduct(t.slug),children:e.jsx(S,{size:"sm",variant:"outline",children:e.jsx(j,{className:"h-4 w-4"})})})}),e.jsx(v,{title:"Delete the product",description:`Are you sure you want to delete this #${t.slug} product?`,onDelete:()=>p(t.slug)})]})}];export{O as productColumn};
