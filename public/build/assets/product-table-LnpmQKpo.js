import{r,y as n,j as P}from"./app-u7IR6Df1.js";import{u as R,a as T,C as j}from"./use-table-0kvlEFKQ.js";import{r as c}from"./drawer-d2qMAaBB.js";import{n as D}from"./notification-OZoLHU_n.js";import{productColumn as z}from"./product-column-LjLDAuV9.js";import"./isString-9a5-u5oc.js";import"./isTypedArray-1U6ef3tv.js";import"./table-MHMOyR4W.js";import"./index-X4NcwgMz.js";import"./transition-xx6ayEc6.js";import"./dialog-L-cZLcDH.js";import"./createSuper-qMs8KTMo.js";import"./defineProperty-9_qlZ_aL.js";import"./objectWithoutPropertiesLoose-0VpOByGv.js";import"./index.esm-D1fV5stR.js";import"./class-names-zUl3OLOi.js";import"./lang-iz4Bd8g5.js";import"./index-ugdwKev6.js";import"./pencil-oaui1k8Z.js";import"./delete-popover-VxQJMgve.js";import"./utils-kpKCX6Tx.js";import"./react-number-format.es-le3Gc2S9.js";const A={price:["",""],createdAt:[null,null],status:""};function se({data:d=[]}){const[o,m]=r.useState(10),a=e=>({onClick:()=>{g(e)}}),l=r.useCallback(e=>{n.delete(c.eCommerce.destroyProduct(e),{preserveScroll:!0,onSuccess:()=>{D("Product has been deleted.","success"),n.visit(c.eCommerce.products,{only:["products"]})}})},[]),{isLoading:p,isFiltered:u,tableData:h,currentPage:b,totalItems:C,handlePaginate:f,filters:E,updateFilter:F,searchTerm:S,handleSearch:s,sortConfig:t,handleSort:g,selectedRowKeys:x,setSelectedRowKeys:I,handleRowSelect:w,handleSelectAll:y,handleDelete:K,handleReset:L}=R(d,o,A),i=r.useMemo(()=>z({sortConfig:t,onHeaderCellClick:a,onDeleteItem:l}),[x,a,t.key,t.direction,l,w,y]),{visibleColumns:v,checkedColumns:_,setCheckedColumns:k}=T(i);return P.jsx(j,{variant:"modern",isLoading:p,showLoadingText:!0,data:h,columns:v,paginatorOptions:{pageSize:o,setPageSize:m,total:C,current:b,onChange:e=>f(e)},filterOptions:{searchTerm:S,onSearchClear:()=>{s("")},onSearchChange:e=>{s(e.target.value)},hasSearched:u,columns:i,checkedColumns:_,setCheckedColumns:k},className:"overflow-hidden rounded-md border border-gray-200 text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"})}export{se as default};
