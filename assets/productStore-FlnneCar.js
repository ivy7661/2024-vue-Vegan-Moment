import{I as p,H as o}from"./index-PIRDy8Rn.js";import{A as a}from"./swal-QZjEAsqV.js";var d={VITE_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_API_PATH:"js23",VITE_MAP_KEY:"AIzaSyBLmNf-TuB_bpae0roR3SSEJy40ssJR5eI",BASE_URL:"/2024-vue-Vegan-Moment/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:r,VITE_API_PATH:c}=d,n=p("productStore",{state:()=>({products:[],perPage:8,currentPage:1,totalPages:1,displayedProducts:[]}),actions:{getProducts(s=1){o.get(`${r}/api/${c}/products/all`).then(t=>{this.products=t.data.products,this.updatePagination(s)}).catch(t=>{a.toastTop(t.response.data.message,"error")})},updatePagination(s){this.totalPages=Math.ceil(this.products.length/this.perPage),this.currentPage=s;const t=(this.currentPage-1)*this.perPage,e=t+this.perPage;this.displayedProducts=this.products.slice(t,e)},getCategoryProduct(){const{category:s=""}=this.$route.query,t=`${r}/api/${c}/products?category=${s}`;o.get(t).then(e=>{this.products=e.data.products,a.toastTop(e.data.message,"success")}).catch(e=>{a.toastTop(e.response.data.message,"error")})}}});export{n as p};
