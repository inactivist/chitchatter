import{a as $,b as R,s as P,f as s,c as u,l as _,h as T,i as j,r as b,u as A,_ as M,j as D,d as N,e as U}from"./index-C17z1bZi.js";import{T as W}from"./Bootstrap-BzpOg_zp.js";import{T as E}from"./Tablelvl2Context-IBshcaD7.js";function L(a){return $("MuiTableCell",a)}const B=R("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),I=B,J=["align","className","component","padding","scope","size","sortDirection","variant"],q=a=>{const{classes:e,variant:i,align:l,padding:n,size:c,stickyHeader:r}=a,g={root:["root",i,r&&"stickyHeader",l!=="inherit"&&`align${s(l)}`,n!=="normal"&&`padding${s(n)}`,`size${s(c)}`]};return U(g,L,e)},F=P("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:i}=a;return[e.root,e[i.variant],e[`size${s(i.size)}`],i.padding!=="normal"&&e[`padding${s(i.padding)}`],i.align!=="inherit"&&e[`align${s(i.align)}`],i.stickyHeader&&e.stickyHeader]}})(({theme:a,ownerState:e})=>u({},a.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:a.vars?`1px solid ${a.vars.palette.TableCell.border}`:`1px solid
    ${a.palette.mode==="light"?_(T(a.palette.divider,1),.88):j(T(a.palette.divider,1),.68)}`,textAlign:"left",padding:16},e.variant==="head"&&{color:(a.vars||a).palette.text.primary,lineHeight:a.typography.pxToRem(24),fontWeight:a.typography.fontWeightMedium},e.variant==="body"&&{color:(a.vars||a).palette.text.primary},e.variant==="footer"&&{color:(a.vars||a).palette.text.secondary,lineHeight:a.typography.pxToRem(21),fontSize:a.typography.pxToRem(12)},e.size==="small"&&{padding:"6px 16px",[`&.${I.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},e.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},e.padding==="none"&&{padding:0},e.align==="left"&&{textAlign:"left"},e.align==="center"&&{textAlign:"center"},e.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},e.align==="justify"&&{textAlign:"justify"},e.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(a.vars||a).palette.background.default})),G=b.forwardRef(function(e,i){const l=A({props:e,name:"MuiTableCell"}),{align:n="inherit",className:c,component:r,padding:g,scope:m,size:z,sortDirection:x,variant:h}=l,k=M(l,J),t=b.useContext(W),d=b.useContext(E),C=d&&d.variant==="head";let o;r?o=r:o=C?"th":"td";let p=m;o==="td"?p=void 0:!p&&C&&(p="col");const y=h||d&&d.variant,f=u({},l,{align:n,component:o,padding:g||(t&&t.padding?t.padding:"normal"),size:z||(t&&t.size?t.size:"medium"),sortDirection:x,stickyHeader:y==="head"&&t&&t.stickyHeader,variant:y}),H=q(f);let v=null;return x&&(v=x==="asc"?"ascending":"descending"),D.jsx(F,u({as:o,ref:i,className:N(H.root,c),"aria-sort":v,scope:p,ownerState:f},k))}),V=G;export{V as default,L as getTableCellUtilityClass,I as tableCellClasses};
//# sourceMappingURL=index-CpEHV3LH.js.map
