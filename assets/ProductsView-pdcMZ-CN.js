import{a as l}from"./axios-L6U4YIEh.js";import{_ as m,c,a as t,F as r,f as h,d as _,t as e,g,o as n}from"./index-sXKBNYm4.js";var P={VITE_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_API_PATH:"js23",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:p,VITE_API_PATH:y}=P,k={data(){return{site:"https://ec-course-api.hexschool.io/v2",api_path:"js23",products:[],tempProduct:{}}},methods:{checkLogin(){const d=`${p}/api/user/check`;l.post(d).then(()=>{this.getProducts()}).catch(i=>{alert(i.response.data.message),window.location="login.html"})},getProducts(){const d=`${p}/api/${y}/admin/products`;l.get(d).then(i=>{this.products=i.data.products}).catch(i=>{alert(i.response.data.message)})},productInfo(d){this.tempProduct=d}},mounted(){const d=document.cookie.replace(/(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/,"$1");l.defaults.headers.common.Authorization=d,this.checkLogin()}},f=t("h2",null,"產品列表",-1),x={class:"container"},b={class:"row py-3"},w={class:"col-md-6"},v=t("h2",null,"產品列表",-1),I={class:"table table-hover mt-4"},V=t("thead",null,[t("tr",null,[t("th",{width:"150"},"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"150"},"是否啟用"),t("th",{width:"120"},"查看細節")])],-1),A={width:"150"},E={width:"120"},T={width:"120"},L={width:"150"},R={key:0,class:"text-success"},U={key:1},B={width:"120"},D=["onClick"],S={class:"col-md-6"},j=t("h2",null,"單一產品細節",-1),C={class:"card mb-3"},N=["src"],O={class:"card-body"},F={class:"card-title"},H={class:"badge bg-primary ms-2"},z={class:"card-text"},M={class:"card-text"},q={class:"d-flex"},G={class:"card-text me-2"},J={class:"card-text text-secondary"},K=["src"],Q={key:1,class:"text-secondary"};function W(d,i,X,Y,s,u){var a;return n(),c(r,null,[f,t("div",x,[t("div",b,[t("div",w,[v,t("table",I,[V,t("tbody",null,[(n(!0),c(r,null,h(s.products,o=>(n(),c("tr",{key:o.id},[t("td",A,e(o.title),1),t("td",E,e(o.origin_price),1),t("td",T,e(o.price),1),t("td",L,[o.is_enabled?(n(),c("span",R,"啟用")):(n(),c("span",U,"未啟用"))]),t("td",B,[t("button",{type:"button",class:"btn btn-primary",onClick:Z=>u.productInfo(o)}," 查看細節 ",8,D)])]))),128))])]),t("p",null,[_("目前有 "),t("span",null,e(Object.keys(s.products).length),1),_(" 項產品")])]),t("div",S,[j,s.tempProduct.title?(n(),c(r,{key:0},[t("div",C,[t("img",{src:s.tempProduct.imageUrl,class:"card-img-top primary-image",alt:"主圖"},null,8,N),t("div",O,[t("h5",F,[_(e(s.tempProduct.title)+" ",1),t("span",H,e(s.tempProduct.category),1)]),t("p",z,"商品描述："+e(s.tempProduct.description),1),t("p",M,"商品內容："+e(s.tempProduct.content),1),t("div",q,[t("p",G,e(s.tempProduct.price),1),t("p",J,[t("del",null,e(s.tempProduct.origin_price),1)]),_(" 元 / "+e(s.tempProduct.unit),1)])])]),s.tempProduct.title?(n(!0),c(r,{key:0},h((a=s.tempProduct)==null?void 0:a.imagesUrl,o=>(n(),c("img",{class:"images m-2",key:o,src:o},null,8,K))),128)):g("",!0)],64)):(n(),c("p",Q,"請選擇一個商品查看"))])])])],64)}const st=m(k,[["render",W]]);export{st as default};
