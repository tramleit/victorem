import{r as a,y as c,j as r,_ as y}from"./app-u7IR6Df1.js";import{u as j,a as k,C as E}from"./use-table-0kvlEFKQ.js";import{getColumns as P}from"./Column-HnA-FR04.js";import{r as m}from"./drawer-d2qMAaBB.js";import{n as D}from"./notification-OZoLHU_n.js";import{C as I}from"./index-X4NcwgMz.js";import{c as R,d as T}from"./index.esm-D1fV5stR.js";import O from"./ExpandedRow-Cranm5n3.js";import"./isString-9a5-u5oc.js";import"./isTypedArray-1U6ef3tv.js";import"./table-MHMOyR4W.js";import"./createSuper-qMs8KTMo.js";import"./defineProperty-9_qlZ_aL.js";import"./objectWithoutPropertiesLoose-0VpOByGv.js";import"./class-names-zUl3OLOi.js";import"./lang-iz4Bd8g5.js";import"./dayjs.min-y1PjA3pU.js";import"./react-number-format.es-le3Gc2S9.js";import"./index-ugdwKev6.js";import"./transition-xx6ayEc6.js";import"./dialog-L-cZLcDH.js";import"./utils-kpKCX6Tx.js";a.lazy(()=>y(()=>import("./FilterElement-BvKxP_T2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])));const z={price:["",""],created_at:[null,null],updated_at:[null,null],status:""};function N(t){return r.jsx(I,{size:"sm",variant:"outline",rounded:"full",className:"expand-row-icon ms-2",onClick:o=>{t.onExpand(t.record,o)},children:t.expanded?r.jsx(R,{className:"h-3.5 w-3.5"}):r.jsx(T,{className:"h-3.5 w-3.5"})})}function ie({data:t=[]}){const[o,p]=a.useState(10),l=e=>({onClick:()=>{_(e)}}),n=a.useCallback(e=>{c.delete(m.eCommerce.destroyCategory(e),{preserveScroll:!0,onSuccess:()=>{D("Category has been deleted.","success"),c.visit(m.eCommerce.categories,{only:["categories"]})}})},[]),{isLoading:u,isFiltered:h,tableData:C,currentPage:x,totalItems:b,handlePaginate:f,filters:F,updateFilter:L,searchTerm:g,handleSearch:i,sortConfig:s,handleSort:_,handleDelete:B,handleReset:A}=j(t,o,z),d=a.useMemo(()=>P({sortConfig:s,onHeaderCellClick:l,onDeleteItem:n}),[l,s.key,s.direction,n]),{visibleColumns:w,checkedColumns:S,setCheckedColumns:v}=k(d);return r.jsx(E,{isLoading:u,showLoadingText:!0,data:C,columns:w,expandable:{expandIcon:N,expandedRowRender:e=>r.jsx(O,{record:e})},paginatorOptions:{pageSize:o,setPageSize:p,total:b,current:x,onChange:e=>f(e)},filterOptions:{searchTerm:g,onSearchClear:()=>{i("")},onSearchChange:e=>{i(e.target.value)},hasSearched:h,hideIndex:1,columns:d,checkedColumns:S,setCheckedColumns:v,enableDrawerFilter:!0},className:"overflow-hidden rounded-md border border-gray-200 text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"})}export{ie as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/FilterElement-BvKxP_T2.js","assets/app-u7IR6Df1.js","assets/app-n30QvWxm.css","assets/index.esm-D1fV5stR.js","assets/index-X4NcwgMz.js","assets/transition-xx6ayEc6.js","assets/dialog-L-cZLcDH.js","assets/createSuper-qMs8KTMo.js","assets/defineProperty-9_qlZ_aL.js","assets/index-UuEe3of6.js","assets/select-mYC2leIy.js","assets/isString-9a5-u5oc.js","assets/isTypedArray-1U6ef3tv.js","assets/class-names-zUl3OLOi.js","assets/use-event-listener-BfkznSuv.js","assets/listbox-gMzaZWZ2.js","assets/dayjs.min-y1PjA3pU.js","assets/useMedia-YgRC8rwu.js","assets/util-MOdpI_j3.js","assets/FilterElement-0M4vIhpG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}