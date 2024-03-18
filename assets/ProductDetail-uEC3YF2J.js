import{_ as y,V as v,m as V,a as L,I as k,r as d,o as i,c as n,h as l,i as a,b as t,t as r,F as p,f as m,g as w,v as x,d as u,e as f}from"./index-No_fbRuW.js";import{V as S}from"./VeganLoader-QvwIlccN.js";import{c as h}from"./cartStore-SuFF6sNu.js";import"./loadingStore--Ki5crQz.js";import"./sweetalert2.all-OjtqrYvn.js";import"./swal-j90glafu.js";var T={VITE_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_API_PATH:"js23",VITE_MAP_KEY:"AIzaSyBLmNf-TuB_bpae0roR3SSEJy40ssJR5eI",BASE_URL:"/HW-Vue-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:P,VITE_API_PATH:E}=T,A={data(){return{productId:"",productInfo:{},cartQty:1,selectImg:"",fullPage:!0,isLoading:!1}},components:{VueLoading:v,VeganLoader:S},mounted(){this.getProducts(),this.cartQty=1},computed:{...V(h,["loadingStatus"])},methods:{...L(h,["addToCart"]),buyNow(c,e){this.addToCart(c,e),this.$router.push("/orderInfo")},getProducts(){this.isLoading=!0,this.productId=this.$route.params.id;const c=`${P}/api/${E}/product/${this.productId}`;k.get(c).then(e=>{this.isLoading=!1,this.productInfo=e.data.product})}}},C={class:"container"},N={class:"row justify-content-center py-4 py-lg-0"},R={class:"col-lg-5"},U={class:"my-4"},B={"aria-label":"breadcrumb"},D={class:"breadcrumb mb-3"},Q={class:"breadcrumb-item"},j={class:"breadcrumb-item"},H={class:"breadcrumb-item"},M={class:"mb-5 vl-parent",ref:"load"},F=["src","alt"],J=["src","alt"],O=["src","alt","onClick"],z={class:"col-lg-5 my-lg-10"},K={class:"h2 mb-2"},W={class:"mb-2 mb-lg-3 text-gray-600"},Y={class:"d-flex flex-row"},q={class:"h2 text-bold text-primary mb-1 me-3"},G={class:"h4 mt-2 mb-4"},X={class:"text-gray-3"},Z={class:"d-flex flex-row"},$=t("p",{class:"mt-2 me-2"},"數量：",-1),tt=["disabled"],ot=["value"],st=["disabled"],et={key:0,class:"ms-1 fa-solid fa-spinner fa-spin"},ct={class:"mb-4"},it=t("p",{class:"fs-6 fw-bold text-primary"},"商品介紹",-1),nt={key:0,class:"mb-4"},rt=t("p",{class:"fs-6 fw-bold text-primary"},"過敏資訊",-1);function lt(c,e,dt,at,o,g){const b=d("VeganLoader"),I=d("VueLoading"),_=d("RouterLink");return i(),n("div",C,[l(I,{active:o.isLoading,"onUpdate:active":e[0]||(e[0]=s=>o.isLoading=s),"is-full-page":o.fullPage},{default:a(()=>[l(b)]),_:1},8,["active","is-full-page"]),t("div",N,[t("section",R,[t("div",U,[t("nav",B,[t("ol",D,[t("li",Q,[l(_,{to:"/"},{default:a(()=>[u("首頁")]),_:1})]),t("li",j,[l(_,{to:"/products"},{default:a(()=>[u("線上訂餐")]),_:1})]),t("li",H,r(o.productInfo.category),1)])])]),t("div",M,[o.selectImg?(i(),n("img",{key:1,src:o.selectImg,alt:o.productInfo.title,class:"object-fit-cover w-100 mb-2 h-lg-img",height:"250"},null,8,J)):(i(),n("img",{key:0,src:o.productInfo.imageUrl,alt:o.productInfo.title,class:"object-fit-cover w-100 mb-2 h-lg-img",height:"250"},null,8,F)),(i(!0),n(p,null,m(o.productInfo.imagesUrl,s=>(i(),n("img",{key:s,src:s,alt:o.productInfo.title,width:"80",height:"80",class:"object-fit-cover me-2",onClick:ut=>o.selectImg=s,style:{cursor:"pointer"}},null,8,O))),128))],512)]),t("section",z,[t("h1",K,r(o.productInfo.title),1),t("h6",W,r(o.productInfo.info),1),t("div",Y,[t("p",q,"NT$"+r(o.productInfo.price),1),t("p",G,[t("small",X,[t("del",null,"NT$"+r(o.productInfo.origin_price),1)])])]),t("div",Z,[$,w(t("select",{class:"form-select mb-4","onUpdate:modelValue":e[1]||(e[1]=s=>o.cartQty=s),disabled:c.loadingStatus===o.productInfo.id,style:{"max-width":"150px"}},[(i(),n(p,null,m(20,s=>t("option",{key:s+1234,value:s},r(s),9,ot)),64))],8,tt),[[x,o.cartQty]])]),t("button",{type:"button",class:"btn btn-outline-secondary mb-3 me-4 d-block w-100",disabled:c.loadingStatus,onClick:e[2]||(e[2]=s=>c.addToCart(o.productInfo.id,o.cartQty))},[u(" 加入購物車 "),c.loadingStatus?(i(),n("i",et)):f("",!0)],8,st),t("button",{type:"button",class:"btn btn-secondary mb-3 me-4 d-block w-100",onClick:e[3]||(e[3]=s=>g.buyNow(o.productInfo.id,o.cartQty))}," 立即購買 "),t("div",ct,[it,t("p",null,r(o.productInfo.description),1)]),o.productInfo.allergy?(i(),n("div",nt,[rt,t("p",null,r(o.productInfo.allergy),1)])):f("",!0)])])])}const bt=y(A,[["render",lt]]);export{bt as default};
