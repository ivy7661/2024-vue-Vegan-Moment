import{_ as h,H as l,r,o as d,c as f,b as e,h as c,i as n,w as v,d as o,E as k,e as g,p as x,n as S}from"./index-PIRDy8Rn.js";import{S as I}from"./sweetalert2.all-3kC4wBvv.js";import{_ as V}from"./Logo_Vegan_Moment-8Q7cK8Iz.js";var E={VITE_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_API_PATH:"js23",VITE_MAP_KEY:"AIzaSyBLmNf-TuB_bpae0roR3SSEJy40ssJR5eI",BASE_URL:"/2024-vue-Vegan-Moment/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:R}=E,w={data(){return{products:[],tempProduct:{},checkSuccess:!1}},mounted(){const s=document.cookie.replace(/(?:(?:^|.*;\s*)adminToken\s*=\s*([^;]*).*$)|^.*$/,"$1");l.defaults.headers.common.Authorization=s,this.checkLogin()},methods:{checkLogin(){const s=`${R}/api/user/check`;l.post(s).then(t=>{console.log("驗證成功：",t.data.success),this.checkSuccess=!0}).catch(t=>{alert(t.response.data.message),this.$router.push("/adminLogin")})},logout(){document.cookie=`adminToken=0; expires=${new Date("2000/1/1 12:00")}; path=/`,I.fire({title:"無授權，請重新登入",text:"",icon:"error"}),this.$router.push("/adminLogin")}}},_=s=>(x("data-v-1308657f"),s=s(),S(),s),L={class:"container-fluid"},T={class:"row vh-100"},A={class:"col-2 bg-light-green pt-5"},$=_(()=>e("div",{class:"text-center"},[e("img",{src:V,alt:"logo",class:"img-fluid mb-6 px-2 logo"})],-1)),B={class:"nav flex-column px-2"},P={class:"nav-item"},b={class:"nav-item"},D={class:"nav-item"},N={class:"nav-item"},y={class:"nav-item"},C={class:"nav-item mt-5"},M=_(()=>e("span",{class:"material-icons"}," logout ",-1)),U={class:"col-10 py-5"};function z(s,t,H,J,u,i){const a=r("RouterLink"),m=r("RouterView");return d(),f("div",L,[e("div",T,[e("div",A,[$,e("ul",B,[e("li",P,[c(a,{to:"/admin/products",class:"nav-link"},{default:n(()=>[o("產品管理")]),_:1})]),e("li",b,[c(a,{to:"/admin/orders",class:"nav-link"},{default:n(()=>[o("訂單管理")]),_:1})]),e("li",D,[c(a,{to:"/admin/coupons",class:"nav-link"},{default:n(()=>[o("優惠券管理")]),_:1})]),e("li",N,[c(a,{to:"/admin/articles",class:"nav-link"},{default:n(()=>[o("文章管理")]),_:1})]),e("li",y,[c(a,{to:"/",class:"nav-link"},{default:n(()=>[o("回前台首頁")]),_:1})]),e("li",C,[e("a",{href:"#",class:"nav-link d-flex align-items-center",onClick:t[0]||(t[0]=v((...p)=>i.logout&&i.logout(...p),["prevent"]))},[M,o("登出")])])])]),e("div",U,[u.checkSuccess?(d(),k(m,{key:0})):g("",!0)])])])}const Y=h(w,[["render",z],["__scopeId","data-v-1308657f"]]);export{Y as default};
