import{j as e,d as h,y as m}from"./app-CpZ5FjI0.js";import{P as j}from"./pencil-WibhrTWn.js";import{B as y,E as f,S as n,I as k,H as S,C as v}from"./index-Z28gSgkK.js";import{H as i}from"./table-RPLHyNds.js";import{r as o}from"./drawer-J45RJZyr.js";import{D as N}from"./delete-popover-6NrODWkD.js";import{A as P}from"./utils-kpKCX6Tx.js";import{t as c}from"./lang-EjS-UWRZ.js";import{n as b}from"./notification-4er1SBwP.js";import{f as I}from"./index.esm-yiDW5ToW.js";import{N as l}from"./react-number-format.es-PmJD0obm.js";import"./transition-v9-nhIyH.js";import"./dialog-hLyOfeVx.js";import"./createSuper-6P2CxhRn.js";import"./defineProperty-9_qlZ_aL.js";import"./objectWithoutPropertiesLoose-0VpOByGv.js";import"./class-names-zUl3OLOi.js";import"./trash-kBPm6zP3.js";import"./index-qmOCu72V.js";const O=({sortConfig:a,onDeleteItem:p,onHeaderCellClick:d,onChecked:D})=>[{title:e.jsx(i,{title:c("Product Info")}),dataIndex:"icon",key:"icon",width:150,render:(s,t)=>e.jsxs("div",{className:"flex gap-x-2 items-center",children:[e.jsx(y,{src:P(t.images[0].url),name:t.name,className:"rounded-md"}),e.jsx("div",{children:e.jsx(f,{as:"h6",className:"font-medium text-gray-800 !text-sm",children:t.name})})]})},{title:e.jsx(i,{title:c("Price"),sortable:!0,ascending:(a==null?void 0:a.direction)==="asc"&&(a==null?void 0:a.key)==="price"}),dataIndex:"price",key:"price",width:100,onHeaderCell:()=>d("price"),render:s=>e.jsx(n,{className:"!text-sm",children:e.jsx(l,{prefix:"Rp",displayType:"text",value:s,thousandSeparator:!0,decimalScale:2,fixedDecimalScale:!0})})},{title:e.jsx(i,{title:c("Discount")}),dataIndex:"discount",key:"discount",width:100,onHeaderCell:()=>d("discount"),render:(s,t)=>e.jsxs(n,{className:"!text-sm",children:[s!==null||s>0?e.jsx(l,{prefix:"Rp",displayType:"text",value:t.price,thousandSeparator:!0,decimalScale:2,fixedDecimalScale:!0,className:"line-through text-rose-500 block"}):null,s===null?e.jsx(I,{}):null,s!==null||s>0?e.jsx(l,{prefix:"Rp",displayType:"text",value:t.price-s,thousandSeparator:!0,decimalScale:2,fixedDecimalScale:!0,className:"block"}):null,t.discount_percent!==null||t.discount_percent>0?e.jsx(l,{suffix:"%",displayType:"text",value:t.discount_percent.toString().replace(/\.00$/,""),thousandSeparator:!0,className:"block"}):null]})},{title:e.jsx(i,{title:c("Stock")}),onHeaderCell:()=>d("stock"),dataIndex:"Stock",key:"stock",width:5,render:(s,t)=>e.jsx("div",{children:t.sizes.map(r=>e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsxs("span",{className:"uppercase block",children:[r.name," :"]}),e.jsx("span",{className:"block font-medium",children:r.stock})]},r.id))})},{title:e.jsx(n,{children:"Active"}),dataIndex:"status",key:"status",width:15,render:(s,t)=>{const r=s==="publish",u=r?"Product has been disabled.":"Product has been activated.",x=()=>{m.put(o.eCommerce.changeProductStatus(t.slug),{},{onSuccess:()=>{b(u,"success"),m.visit(o.eCommerce.products,{only:["product"]})}})};return e.jsx(k,{checked:r,onChange:x})}},{title:e.jsx(e.Fragment,{}),dataIndex:"action",key:"action",width:100,render:(s,t)=>e.jsxs("div",{className:"flex items-center justify-end gap-3 pe-4",children:[e.jsx(S,{size:"sm",content:()=>"Edit Product",placement:"top",color:"invert",children:e.jsx(h,{href:o.eCommerce.editProduct(t.slug),children:e.jsx(v,{size:"sm",variant:"outline",children:e.jsx(j,{className:"h-4 w-4"})})})}),e.jsx(N,{title:"Delete the product",description:`Are you sure you want to delete this #${t.slug} product?`,onDelete:()=>p(t.slug)})]})}];export{O as productColumn};
