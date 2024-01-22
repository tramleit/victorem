import{j as e,d as x}from"./app-u7IR6Df1.js";import{A as m}from"./utils-kpKCX6Tx.js";import{c as d}from"./class-names-zUl3OLOi.js";import{G as o,f as h}from"./index.esm-D1fV5stR.js";import{N as l}from"./react-number-format.es-le3Gc2S9.js";function a(t){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"}}]})(t)}function N({products:t}){const i=s=>{let r=0;return s.sizes.length&&(r=s.sizes.reduce((n,c)=>n+c.stock,0)),r};return e.jsx("div",{className:"bg-white container",children:e.jsxs("div",{className:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8",children:[e.jsx("h2",{className:"text-2xl font-medium tracking-tight text-gray-900 text-center",children:"SHOP THE LATEST RELEASES"}),e.jsx("div",{className:"flex justify-center py-5",children:e.jsx("div",{className:"w-14 h-1 bg-gray-700"})}),e.jsx("div",{className:"mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",children:t.map(s=>e.jsxs("div",{className:"group relative",children:[i(s)?e.jsx(e.Fragment,{children:s.discount?e.jsx("div",{className:"absolute -top-3 -right-3",children:e.jsx("div",{className:"rounded-full mx-auto flex justify-center items-center w-10 h-10 z-30 p-5 bg-rose-500 border border-rose-100",children:e.jsx("div",{className:"text-xs text-center",children:e.jsxs("span",{className:"text-white block font-semibold animate-pulse",children:[s.discount_percent.toString().replace(/\.00$/,""),"%"]})})})}):null}):e.jsx("div",{className:"absolute -top-3 -right-3 z-20",children:e.jsx("div",{className:"rounded-full mx-auto flex justify-center items-center w-10 h-10 z-30 p-5 bg-gray-800 border border-gray-700",children:e.jsx("div",{className:"text-xs text-center",children:e.jsx("span",{className:"text-white tracking-tight font-medium",children:"Sold Out"})})})}),e.jsx("div",{className:d("aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none sm:h-80",!i(s)&&"opacity-40 z-10 group-hover:opacity-100 transition-all ease-in-out duration-200"),children:e.jsx("img",{src:m(s.images[0].url),alt:s.name,className:"h-full w-full object-cover object-top lg:h-full lg:w-full"})}),e.jsxs("div",{className:"mt-4 text-center flex items-center flex-wrap justify-center gap-2",children:[e.jsx("div",{children:e.jsx("h3",{className:"text-base text-gray-800 font-medium",children:e.jsxs(x,{href:`/products/${s.slug}`,children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0"}),s.name]})})}),e.jsxs("div",{className:"flex justify-center items-center gap-1",children:[e.jsx("span",{children:e.jsx(h,{})}),s.discount?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"block text-base font-medium text-rose-500 line-through",children:e.jsx(l,{displayType:"text",value:s.price.toString().replace(/\.00$/,""),thousandSeparator:".",decimalSeparator:","})}),e.jsx("span",{className:"block text-base font-medium text-gray-700",children:e.jsx(l,{displayType:"text",value:(s.price-s.discount).toString().replace(/\.00$/,""),thousandSeparator:".",decimalSeparator:","})})]}):e.jsx("span",{className:"block text-base font-medium text-gray-700",children:e.jsx(l,{displayType:"text",value:s.price.toString().replace(/\.00$/,""),thousandSeparator:".",decimalSeparator:","})})]})]}),e.jsxs("div",{className:"text-yellow-400 flex justify-center items-center mt-2 gap-0.5",children:[e.jsx(a,{className:"w-5 h-5"}),e.jsx(a,{className:"w-5 h-5"}),e.jsx(a,{className:"w-5 h-5"}),e.jsx(a,{className:"w-5 h-5"}),e.jsx(a,{className:"w-5 h-5"})]})]},s.id))}),t.length?null:e.jsx("div",{className:"flex items-center justify-center w-full h-56",children:"Tidak ada produk."})]})})}export{N as default};
