(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[500],{3752:function(e,t,r){Promise.resolve().then(r.bind(r,7934)),Promise.resolve().then(r.bind(r,9602)),Promise.resolve().then(r.t.bind(r,8653,23))},2767:function(e,t,r){"use strict";r.d(t,{N:function(){return n},u:function(){return s}}),r(268);var a=r(6542),s=(0,a.$)("8c25a74627b596f3c54737be4cbc5ed9a631f912"),n=(0,a.$)("aecca331dac13d67a8173fd3a588ab47f1da4bcd")},9602:function(e,t,r){"use strict";r.d(t,{DataTable:function(){return g}});var a=r(1701),s=r(8402),n=r(9396),l=r(3134),o=r(9443);let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,o.cn)("w-full caption-bottom text-sm",r),...s})})});d.displayName="Table";let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("thead",{ref:t,className:(0,o.cn)("[&_tr]:border-b",r),...s})});i.displayName="TableHeader";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,o.cn)("[&_tr:last-child]:border-0",r),...s})});c.displayName="TableBody",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,o.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...s})}).displayName="TableFooter";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tr",{ref:t,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...s})});u.displayName="TableRow";let f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("th",{ref:t,className:(0,o.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...s})});f.displayName="TableHead";let m=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("td",{ref:t,className:(0,o.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...s})});m.displayName="TableCell",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("caption",{ref:t,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",r),...s})}).displayName="TableCaption";var p=r(2130),x=r(2141);function g(e){var t,r,o;let{columns:g,data:h}=e,[b,v]=(0,s.useState)([]),[N,j]=(0,s.useState)([]),y=(0,n.b7)({data:h,columns:g,getCoreRowModel:(0,l.sC)(),getPaginationRowModel:(0,l.G_)(),onSortingChange:v,getSortedRowModel:(0,l.tj)(),onColumnFiltersChange:j,getFilteredRowModel:(0,l.vL)(),state:{sorting:b,columnFilters:N}});return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex items-center py-4",children:(0,a.jsx)(x.I,{placeholder:"Filter titles...",value:null!==(o=null===(t=y.getColumn("title"))||void 0===t?void 0:t.getFilterValue())&&void 0!==o?o:"",onChange:e=>{var t;return null===(t=y.getColumn("title"))||void 0===t?void 0:t.setFilterValue(e.target.value)},className:"max-w-sm"})}),(0,a.jsx)("div",{className:"rounded-md border",children:(0,a.jsxs)(d,{children:[(0,a.jsx)(i,{children:y.getHeaderGroups().map(e=>(0,a.jsx)(u,{children:e.headers.map(e=>(0,a.jsx)(f,{children:e.isPlaceholder?null:(0,n.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,a.jsx)(c,{children:(null===(r=y.getRowModel().rows)||void 0===r?void 0:r.length)?y.getRowModel().rows.map(e=>(0,a.jsx)(u,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,a.jsx)(m,{children:(0,n.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,a.jsx)(u,{children:(0,a.jsx)(m,{colSpan:g.length,className:"h-24 text-center",children:"No results."})})})]})}),(0,a.jsxs)("div",{className:"flex items-center justify-end space-x-2 py-4",children:[(0,a.jsx)(p.z,{variant:"outline",size:"sm",onClick:()=>y.previousPage(),disabled:!y.getCanPreviousPage(),children:"Previous"}),(0,a.jsx)(p.z,{variant:"outline",size:"sm",onClick:()=>y.nextPage(),disabled:!y.getCanNextPage(),children:"Next"})]})]})}},7934:function(e,t,r){"use strict";r.d(t,{columns:function(){return j}});var a=r(1701),s=r(2186),n=r(4067),l=r(2130),o=r(8402),d=r(6341),i=r(6432),c=r(2293),u=r(847),f=r(9443);let m=d.fC,p=d.xz;d.ZA,d.Uv,d.Tr,d.Ee,o.forwardRef((e,t)=>{let{className:r,inset:s,children:n,...l}=e;return(0,a.jsxs)(d.fF,{ref:t,className:(0,f.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",s&&"pl-8",r),...l,children:[n,(0,a.jsx)(i.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=d.fF.displayName,o.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(d.tu,{ref:t,className:(0,f.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...s})}).displayName=d.tu.displayName;let x=o.forwardRef((e,t)=>{let{className:r,sideOffset:s=4,...n}=e;return(0,a.jsx)(d.Uv,{children:(0,a.jsx)(d.VY,{ref:t,sideOffset:s,className:(0,f.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...n})})});x.displayName=d.VY.displayName;let g=o.forwardRef((e,t)=>{let{className:r,inset:s,...n}=e;return(0,a.jsx)(d.ck,{ref:t,className:(0,f.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",r),...n})});g.displayName=d.ck.displayName,o.forwardRef((e,t)=>{let{className:r,children:s,checked:n,...l}=e;return(0,a.jsxs)(d.oC,{ref:t,className:(0,f.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:n,...l,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(d.wU,{children:(0,a.jsx)(c.Z,{className:"h-4 w-4"})})}),s]})}).displayName=d.oC.displayName,o.forwardRef((e,t)=>{let{className:r,children:s,...n}=e;return(0,a.jsxs)(d.Rk,{ref:t,className:(0,f.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...n,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(d.wU,{children:(0,a.jsx)(u.Z,{className:"h-2 w-2 fill-current"})})}),s]})}).displayName=d.Rk.displayName;let h=o.forwardRef((e,t)=>{let{className:r,inset:s,...n}=e;return(0,a.jsx)(d.__,{ref:t,className:(0,f.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",r),...n})});h.displayName=d.__.displayName;let b=o.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(d.Z0,{ref:t,className:(0,f.cn)("-mx-1 my-1 h-px bg-muted",r),...s})});b.displayName=d.Z0.displayName;var v=r(1968),N=r(2767);let j=[{accessorKey:"title",header:"Title",cell:e=>{let{column:t,row:r}=e;return(0,a.jsxs)(l.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:[r.getValue("title"),(0,a.jsx)(s.Z,{className:"ml-2 h-4 w-4"})]})}},{accessorKey:"Link",header:"Link"},{accessorKey:"ButtonColor",header:"Button Color",cell:e=>{let{row:t}=e;return(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"w-6 h-6 rounded mr-2",style:{backgroundColor:t.getValue("ButtonColor")}}),(0,a.jsx)("span",{children:t.getValue("ButtonColor")})]})}},{accessorKey:"BackgroundColor",header:"Background Color",cell:e=>{let{row:t}=e;return(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"w-6 h-6 rounded mr-2",style:{backgroundColor:t.getValue("BackgroundColor")}}),(0,a.jsx)("span",{children:t.getValue("BackgroundColor")})]})}},{accessorKey:"ImageUrl",header:"Image",cell:e=>{let{row:t}=e;return(0,a.jsx)("img",{src:t.getValue("ImageUrl"),alt:t.getValue("title"),className:"w-16 h-16 object-cover rounded"})}},{id:"actions",cell:e=>{let{row:t}=e,r=t.original,s=(0,v.useRouter)(),o=async()=>{window.confirm("Are you sure you want to delete this client?")&&((await (0,N.N)(r.id)).success?s.refresh():alert("Failed to delete client"))};return(0,a.jsxs)(m,{children:[(0,a.jsx)(p,{asChild:!0,children:(0,a.jsxs)(l.z,{variant:"ghost",className:"h-8 w-8 p-0",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open menu"}),(0,a.jsx)(n.Z,{className:"h-4 w-4"})]})}),(0,a.jsxs)(x,{align:"end",children:[(0,a.jsx)(h,{children:"Actions"}),(0,a.jsx)(g,{onClick:()=>{s.push("/admin/clients/edit/".concat(r.id))},children:"Edit"}),(0,a.jsx)(b,{}),(0,a.jsx)(g,{onClick:o,children:"Delete"})]})]})}}]},2130:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var a=r(1701),s=r(8402),n=r(9839),l=r(2571),o=r(9443);let d=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),i=s.forwardRef((e,t)=>{let{className:r,variant:s,size:l,asChild:i=!1,...c}=e,u=i?n.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(d({variant:s,size:l,className:r})),ref:t,...c})});i.displayName="Button"},2141:function(e,t,r){"use strict";r.d(t,{I:function(){return l}});var a=r(1701),s=r(8402),n=r(9443);let l=s.forwardRef((e,t)=>{let{className:r,type:s,...l}=e;return(0,a.jsx)("input",{type:s,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...l})});l.displayName="Input"},9443:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var a=r(4229),s=r(1263);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}}},function(e){e.O(0,[868,954,407,551,875,269,744],function(){return e(e.s=3752)}),_N_E=e.O()}]);