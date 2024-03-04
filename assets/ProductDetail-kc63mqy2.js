import{_ as m,l as h,a as f,r as b,o as l,c as n,b as t,h as d,i as a,t as r,F as u,f as _,g as I,v as g,e as y,d as p}from"./index-ncP-AMKL.js";import{c as v}from"./cartStore-R_uk6mXK.js";var k={VITE_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_API_PATH:"js23",BASE_URL:"/HW-Vue-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:w,VITE_API_PATH:x}=k,T={data(){return{productId:"",productInfo:{},cartQty:1,selectImg:""}},mounted(){this.getProducts(),this.cartQty=1},methods:{getProducts(){this.productId=this.$route.params.id;const e=`${w}/api/${x}/product/${this.productId}`;h.get(e).then(c=>{this.productInfo=c.data.product})},...f(v,["addToCart"])}},V={class:"container"},C={class:"row justify-content-center py-4 py-lg-0"},P={class:"col-lg-5"},S={class:"my-4"},A={"aria-label":"breadcrumb"},E={class:"breadcrumb mb-3"},R={class:"breadcrumb-item"},D={class:"breadcrumb-item"},L={class:"breadcrumb-item"},N={class:"mb-5"},Q=["src","alt"],U=["src","alt"],j=["src","alt","onClick"],B={class:"col-lg-5 my-lg-10"},H={class:"h2 mb-2"},F={class:"mb-2 mb-lg-3 text-gray-600"},M={class:"d-flex flex-row"},O={class:"h2 text-bold text-primary mb-1 me-3"},W={class:"h4 mt-2 mb-4"},q={class:"text-gray-3"},z={class:"d-flex flex-row"},G=t("p",{class:"mt-2 me-2"},"數量：",-1),J=["disabled"],K=["value"],X=["disabled"],Y=["disabled"],Z={class:"mb-4"},$=t("p",{class:"fs-6 fw-bold text-primary"},"商品介紹",-1),tt={key:0,class:"mb-4"},ot=t("p",{class:"fs-6 fw-bold text-primary"},"過敏資訊",-1);function st(e,c,et,ct,o,rt){const i=b("RouterLink");return l(),n("div",V,[t("div",C,[t("section",P,[t("div",S,[t("nav",A,[t("ol",E,[t("li",R,[d(i,{to:"/"},{default:a(()=>[p("首頁")]),_:1})]),t("li",D,[d(i,{to:"/products"},{default:a(()=>[p("線上訂餐")]),_:1})]),t("li",L,r(o.productInfo.category),1)])])]),t("div",N,[o.selectImg?(l(),n("img",{key:1,src:o.selectImg,alt:o.productInfo.title,class:"object-fit-cover w-100 mb-2 h-lg-img",height:"250"},null,8,U)):(l(),n("img",{key:0,src:o.productInfo.imageUrl,alt:o.productInfo.title,class:"object-fit-cover w-100 mb-2 h-lg-img",height:"250"},null,8,Q)),(l(!0),n(u,null,_(o.productInfo.imagesUrl,s=>(l(),n("img",{key:s,src:s,alt:o.productInfo.title,width:"80",height:"80",class:"object-fit-cover me-2",onClick:lt=>o.selectImg=s,style:{cursor:"pointer"}},null,8,j))),128))])]),t("section",B,[t("h1",H,r(o.productInfo.title),1),t("h6",F,r(o.productInfo.info),1),t("div",M,[t("p",O,"NT$"+r(o.productInfo.price),1),t("p",W,[t("small",q,[t("del",null,"NT$"+r(o.productInfo.origin_price),1)])])]),t("div",z,[G,I(t("select",{class:"form-select mb-4","onUpdate:modelValue":c[0]||(c[0]=s=>o.cartQty=s),disabled:e.loadingStatus===o.productInfo.id,style:{"max-width":"150px"}},[(l(),n(u,null,_(20,s=>t("option",{key:s+1234,value:s},r(s),9,K)),64))],8,J),[[g,o.cartQty]])]),t("button",{type:"button",class:"btn btn-secondary mb-3 me-4 d-block w-100",disabled:e.loadingStatus===o.productInfo.id,onClick:c[1]||(c[1]=s=>e.addToCart(o.productInfo.id,o.cartQty))}," 加入購物車 ",8,X),t("button",{type:"button",class:"btn btn-outline-secondary mb-4 d-block w-100",disabled:e.loadingStatus===o.productInfo.id,onClick:c[2]||(c[2]=s=>e.addToCart(o.productInfo.id,e.productInfoQty))}," 收藏餐點 ",8,Y),t("div",Z,[$,t("p",null,r(o.productInfo.description),1)]),o.productInfo.allergy?(l(),n("div",tt,[ot,t("p",null,r(o.productInfo.allergy),1)])):y("",!0)])])])}const dt=m(T,[["render",st]]);export{dt as default};
