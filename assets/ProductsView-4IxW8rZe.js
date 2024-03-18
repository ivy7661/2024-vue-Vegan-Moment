import{a as P,m as p,_ as C,o,c as a,b as t,G as v,w as y,F as c,f as g,t as d,p as I,n as T,r as $,h as l,i as r,d as h,e as m}from"./index-2HZypFVn.js";import{c as w}from"./cartStore-Xwnpf9it.js";import{p as b}from"./productStore-JQL5Qief.js";import{l as B}from"./loadingStore-OZp-1xHn.js";import"./sweetalert2.all-yx1le-Fi.js";import"./swal-mJXYrnQA.js";const Q={methods:{...P(b,["getProducts"])},computed:{...p(b,["totalPages","currentPage"])},mounted(){this.getProducts()}},S=s=>(I("data-v-84a02373"),s=s(),T(),s),j={class:"pagination justify-content-center"},F=S(()=>t("span",null,"«",-1)),R=[F],U=["onClick"],q=S(()=>t("span",null,"»",-1)),z=[q];function A(s,_,N,V,u,L){return o(),a("nav",null,[t("ul",j,[t("li",{class:v(["page-item",{disabled:s.currentPage<=1}])},[t("a",{class:"page-link",href:"#",onClick:_[0]||(_[0]=y(n=>s.$emit("change-page",s.currentPage-1),["prevent"]))},R)],2),(o(!0),a(c,null,g(s.totalPages,n=>(o(),a("li",{key:n+"page",class:"page-item"},[t("a",{class:v(["page-link",{active:s.currentPage===n}]),href:"#",onClick:y(f=>s.$emit("change-page",n),["prevent"])},d(n),11,U)]))),128)),t("li",{class:v(["page-item",{disabled:s.currentPage>=s.totalPages}])},[t("a",{class:"page-link",href:"#",onClick:_[1]||(_[1]=y(n=>s.$emit("change-page",s.currentPage+1),["prevent"]))},z)],2)])])}const D=C(Q,[["render",A],["__scopeId","data-v-84a02373"]]),E={data(){return{tempProduct:{},categories:["主餐","輕食","果昔碗","飲品"],cartQty:1}},components:{ProductPagination:D},mounted(){this.getProducts()},watch:{"$route.query":{handler(){this.getProducts()},deep:!0}},computed:{...p(b,["products","displayedProducts"]),...p(w,["cartLoading"]),...p(B,["loadingProductId"])},methods:{...P(b,["getProducts"]),...P(w,["addToCart"]),productInfo(s){this.tempProduct=s}}},k=s=>(I("data-v-29b2f989"),s=s(),T(),s),G={class:"container"},M={class:"breadcrumb mb-3 mt-3"},H={class:"breadcrumb-item"},J={class:"breadcrumb-item"},K={class:"row justify-content-center mb-10"},O={class:"col-12"},W={class:"nav sticky-top bg-light pb-1 mb-4 nav-tab-top",id:"myTab",role:"tablist"},X=k(()=>t("li",{class:"nav-item",role:"presentation"},[t("a",{class:"nav-link active fs-5 px-1 mx-2",id:"all-tab","data-bs-toggle":"tab","data-bs-target":"#all",href:"#",role:"tab"}," 全部餐點 ")],-1)),Y=["id","data-bs-target"],Z={class:"tab-content",id:"myTabContent"},x={class:"tab-pane fade show active",id:"all",role:"tabpanel"},tt={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-5 mb-5"},st={key:0,class:"col card-hover"},et={class:"col"},ot={class:"card-img"},at=["src","alt"],nt={class:"py-3 py-lg-2"},it={class:"fs-4 text-dark mb-2 mb-lg-1"},lt={class:"text-primary d-flex align-items-center"},dt={class:"fs-6 text-gray-600 ms-2"},ct=["onClick","disabled"],rt=k(()=>t("span",null,"加入購物車",-1)),_t={key:0,class:"fas fa-spinner fa-pulse ms-2"},ut=["id"],gt={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-5"},ht={key:0,class:"col card-hover"},mt={class:"col"},pt={class:"card-img"},bt=["src","alt"],ft={class:"py-3 py-lg-2"},vt={class:"fs-4 text-dark mb-2 mb-lg-1"},yt={class:"text-primary d-flex align-items-center"},Pt={class:"fs-6 text-gray-600 ms-2"},kt=["onClick","disabled"],$t=k(()=>t("span",null,"加入購物車",-1)),wt={key:0,class:"fas fa-spinner fa-pulse ms-2"};function Ct(s,_,N,V,u,L){const n=$("RouterLink"),f=$("Product-Pagination");return o(),a("div",G,[t("nav",null,[t("ol",M,[t("li",H,[l(n,{to:"/",class:"fs-6"},{default:r(()=>[h("首頁")]),_:1})]),t("li",J,[l(n,{to:"/products",class:"text-dark fs-6"},{default:r(()=>[h("線上訂餐")]),_:1})])])]),t("section",K,[t("div",O,[t("ul",W,[X,(o(!0),a(c,null,g(u.categories,e=>(o(),a("li",{class:"nav-item",role:"presentation",key:e},[t("a",{class:"nav-link fs-5 px-1 mx-2",id:`${e}-tab`,"data-bs-toggle":"tab","data-bs-target":`#${e}`,href:"#",role:"tab"},d(e),9,Y)]))),128))]),t("div",Z,[t("div",x,[t("div",tt,[(o(!0),a(c,null,g(s.displayedProducts,e=>(o(),a(c,{key:e.id},[s.products?(o(),a("div",st,[t("div",et,[t("div",ot,[l(n,{to:`/products/${e.id}`},{default:r(()=>[t("img",{src:e.imageUrl,alt:e.title,class:"w-100 d-block rounded-3",height:"240"},null,8,at)]),_:2},1032,["to"])]),t("div",nt,[l(n,{to:`/products/${e.id}`},{default:r(()=>[t("h4",it,d(e.title),1)]),_:2},1032,["to"]),t("h5",lt,[h(" NT$"+d(e.price)+" ",1),t("span",dt,[t("del",null,"NT$"+d(e.origin_price),1)])])]),t("button",{type:"button",class:"btn btn-secondary fs-6 w-100",onClick:i=>s.addToCart(e.id,u.cartQty),disabled:s.loadingProductId===e.id},[rt,s.loadingProductId===e.id?(o(),a("i",_t)):m("",!0)],8,ct)])])):m("",!0)],64))),128))]),l(f,{onChangePage:s.getProducts},null,8,["onChangePage"])]),(o(!0),a(c,null,g(u.categories,e=>(o(),a("div",{key:e,class:"tab-pane fade",id:e,role:"tabpanel"},[t("div",gt,[(o(!0),a(c,null,g(s.products,i=>(o(),a(c,{key:i.id},[i.category===e?(o(),a("div",ht,[t("div",mt,[t("div",pt,[l(n,{to:`/products/${i.id}`},{default:r(()=>[t("img",{src:i.imageUrl,alt:i.title,class:"w-100 d-block rounded-3",height:"240"},null,8,bt)]),_:2},1032,["to"])]),t("div",ft,[l(n,{to:`/products/${i.id}`},{default:r(()=>[t("h4",vt,d(i.title),1)]),_:2},1032,["to"]),t("h5",yt,[h(" NT$"+d(i.price)+" ",1),t("span",Pt,[t("del",null,"NT$"+d(i.origin_price),1)])])]),t("button",{type:"button",class:"btn btn-secondary fs-6 w-100",onClick:It=>s.addToCart(i.id,u.cartQty),disabled:s.loadingProductId===i.id},[$t,s.loadingProductId===i.id?(o(),a("i",wt)):m("",!0)],8,kt)])])):m("",!0)],64))),128))])],8,ut))),128))])])]),l(f,{onChangePage:s.getProducts},null,8,["onChangePage"])])}const Qt=C(E,[["render",Ct],["__scopeId","data-v-29b2f989"]]);export{Qt as default};
