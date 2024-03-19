import{_ as x,V as L,H as V,r as i,o as a,c as o,b as e,h as c,i as r,F as d,f as m,l as I,d as _,t as f,p as y,n as A}from"./index-H9-mcE0H.js";import{V as S}from"./VeganLoader-Z77B6RYX.js";var k={VITE_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_API_PATH:"js23",VITE_MAP_KEY:"AIzaSyBLmNf-TuB_bpae0roR3SSEJy40ssJR5eI",BASE_URL:"/HW-Vue-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:w,VITE_API_PATH:E}=k,P={data(){return{articles:[],tempArticle:{},fullPage:!0,isLoading:!1}},components:{VeganLoader:S,VueLoading:L},mounted(){this.getArticles()},methods:{getArticles(){this.isLoading=!0;const t=`${w}/api/${E}/articles`;V.get(t).then(n=>{this.isLoading=!1,this.articles=n.data.articles}).catch(n=>{alert(n.response.data.message)})}}},h=t=>(y("data-v-0cc616df"),t=t(),A(),t),T=I('<section class="mb-3 banner" style="height:250px;" data-v-0cc616df><div class="container" data-v-0cc616df><div class="row justify-content-center" data-v-0cc616df><div class="col-sm-9 col-md-7 col-lg-5" data-v-0cc616df><h1 class="banner-text fs-3" data-v-0cc616df>專欄文章</h1></div></div></div></section>',1),R={class:"container d-flex flex-column justify-content-center container-post"},B={class:"breadcrumb mb-1"},H={class:"breadcrumb-item"},C={class:"breadcrumb-item"},N={class:"row mb-5"},j=["src"],D={class:"card-body"},F={class:"text-primary mb-2"},M={class:"d-flex flex-row"},$=h(()=>e("span",{class:"material-icons fs-6 me-1 text-gray-600"}," sell ",-1)),U={class:"text-gray-600 fs-6 me-1"},J=["innerHTML"],O={class:"text-end"},z=h(()=>e("img",{src:"https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FArrows%2Fright_arrow_green.png?alt=media&token=ad11f9f6-32e5-4601-bd7d-d64b312ac282",alt:"Slider",class:"mb-1",width:"25",height:"25"},null,-1));function K(t,n,W,Y,l,q){const g=i("VeganLoader"),v=i("VueLoading"),p=i("RouterLink"),b=i("router-link");return a(),o(d,null,[T,e("div",R,[c(v,{active:l.isLoading,"is-full-page":l.fullPage},{default:r(()=>[c(g)]),_:1},8,["active","is-full-page"]),e("nav",null,[e("ol",B,[e("li",H,[c(p,{to:"/",class:"fs-6"},{default:r(()=>[_("首頁")]),_:1})]),e("li",C,[c(p,{to:"/articles",class:"text-dark fs-6"},{default:r(()=>[_("專欄文章")]),_:1})])])]),e("div",N,[(a(!0),o(d,null,m(l.articles,s=>(a(),o("div",{class:"col-12 col-lg-4 mb-lg-0 d-flex justify-content-center gy-5",key:s.id},[e("div",{ref_for:!0,ref:"load",class:"card border-0 bg-white-2 vl-parent","data-aos":"fade-up","data-aos-once":"true"},[e("img",{src:s.image,class:"card-img-top mw-100",alt:""},null,8,j),e("div",D,[e("h5",F,f(s.title),1),e("div",M,[(a(!0),o(d,null,m(s.tag,u=>(a(),o("p",{class:"me-2",key:u},[$,e("span",U,f(u),1)]))),128))]),e("p",{class:"text-black shortContent",innerHTML:s.description},null,8,J),e("p",O,[c(b,{to:`/specialColumn/${s.id}`},{default:r(()=>[_("繼續閱讀 "),z]),_:2},1032,["to"])])])],512)]))),128))])])],64)}const X=x(P,[["render",K],["__scopeId","data-v-0cc616df"]]);export{X as default};