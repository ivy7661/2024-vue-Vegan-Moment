import{H as R,I as w,_ as E,a as S,m as V,r as f,o,c as i,b as e,h as _,i as h,t as c,d as a,e as p,F as m,f as u,G as y,E as I,w as P,p as M,n as C}from"./index-O13lh_ht.js";var L={VITE_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_API_PATH:"js23",VITE_MAP_KEY:"AIzaSyBLmNf-TuB_bpae0roR3SSEJy40ssJR5eI",BASE_URL:"/HW-Vue-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:K,VITE_API_PATH:B}=L,x=R("articleStore",{state:()=>({articles:[],page:{}}),actions:{getArticles(l=1){w.get(`${K}/api/${B}/articles?page=${l}`).then(n=>{this.articles=n.data.articles}).catch(n=>{console.log(n)})}}});var H={VITE_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_API_PATH:"js23",VITE_MAP_KEY:"AIzaSyBLmNf-TuB_bpae0roR3SSEJy40ssJR5eI",BASE_URL:"/HW-Vue-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:U,VITE_API_PATH:D}=H,F={data(){return{article:"",isLoading:!1,currentIndex:0,searchInput:"",filterKeywords:[],filterTags:[],allTags:["蔬食主義","健康知識","環保議題"],breadcrumbTag:"",noResultMessage:""}},mounted(){this.getArticles(),this.getArticle()},methods:{...S(x,["getArticles"]),getArticle(){const{id:l}=this.$route.params;w.get(`${U}/api/${D}/article/${l}`).then(n=>{console.log(this.article),this.article=n.data.article,this.findIndex(),this.filterKeywords=[],this.filterTags=[]}).catch(n=>{alert(n.response.data.message)})},findIndex(){this.currentIndex=this.articles.findIndex(l=>l.id===this.article.id)},searchKeywords(){this.filterKeywords=this.articles.filter(l=>l.title.match(this.searchInput)),this.$route.params.id="",this.noResultMessage="",this.filterKeywords.length||(this.noResultMessage="無相關搜尋結果！"),this.$refs.form.resetForm()},searchTag(l){this.filterTags=this.articles.filter(n=>n.tag.includes(l)),console.log(this.filterTags),this.breadcrumbTag=l,this.$route.params.id="",this.noResultMessage=""}},computed:{...V(x,["articles"])},watch:{"$route.params":{immediate:!0,handler(){this.$route.params.id&&(this.getArticle(),this.noResultMessage="")}},noResultMessage(){return this.noResultMessage}}},r=l=>(M("data-v-a11b89d5"),l=l(),C(),l),N={class:"container mt-20"},j={class:"pt-4 pt-lg-8 pb-10 pb-lg-20"},J={"aria-label":"breadcrumb"},O={class:"breadcrumb mb-5 lh-lg"},z={class:"breadcrumb-item"},W={class:"breadcrumb-item"},Y={key:0,class:"breadcrumb-item active"},q={key:1,class:"breadcrumb-item active"},G={key:2,class:"breadcrumb-item active d-flex align-items-center"},Q=r(()=>e("span",{class:"material-icons fs-5"}," local_offer ",-1)),X={class:"row text-dark gy-8"},Z={key:0,class:"col-lg-8"},$={class:"h3"},ee={class:"list-inline my-3 d-flex align-items-center flex-wrap lh-lg"},se={class:"list-inline-item"},te={class:"d-flex align-items-center"},le=r(()=>e("span",{class:"material-icons fs-5"}," person ",-1)),oe={class:"list-inline-item"},ie={class:"d-flex align-items-center"},re=r(()=>e("span",{class:"material-icons fs-5"}," today ",-1)),ce={class:"list-inline-item"},ae={class:"d-flex align-items-center flex-wrap"},ne=r(()=>e("span",{class:"material-icons fs-6 text-gray-600"}," local_offer ",-1)),de=["src","alt"],_e=["innerHTML"],he=r(()=>e("hr",{class:"my-3 my-lg-4"},null,-1)),me={class:"row justify-content-between"},ue=r(()=>e("span",{class:"material-icons me-2"}," arrow_back_ios_new ",-1)),ge=r(()=>e("br",null,null,-1)),fe={key:0,class:"col-6"},pe={class:"text-end"},be=r(()=>e("br",null,null,-1)),ve=r(()=>e("span",{class:"material-icons ms-2"}," arrow_forward_ios ",-1)),ye={key:1,class:"col-lg-8"},Ie={class:"row row-cols-1 row-cols-md-2 gy-8 g-lg-10"},xe={class:"card border-0 bg-white-2"},we=["src"],Te={class:"card-body"},ke={class:"text-primary mb-2"},Ae={class:"d-flex flex-row"},Re=r(()=>e("span",{class:"material-icons fs-6 me-1 text-gray-600"}," sell ",-1)),Ee={class:"text-gray-600 fs-6 me-1"},Se={class:"text-black shortContent"},Ve={class:"text-end"},Pe=r(()=>e("img",{src:"https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FArrows%2Fright_arrow_green.png?alt=media&token=ad11f9f6-32e5-4601-bd7d-d64b312ac282",alt:"Slider",class:"mb-1",width:"25",height:"25"},null,-1)),Me={key:2,class:"col-lg-8"},Ce={class:"row row-cols-1 row-cols-md-2 gy-8 g-lg-10"},Le={class:"card border-0 bg-white-2"},Ke=["src"],Be={class:"card-body"},He={class:"text-primary mb-2"},Ue={class:"d-flex flex-row"},De=r(()=>e("span",{class:"material-icons fs-6 me-1 text-gray-600"}," sell ",-1)),Fe={class:"text-gray-600 fs-6 me-1"},Ne={class:"text-black shortContent"},je={class:"text-end"},Je=r(()=>e("img",{src:"https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FArrows%2Fright_arrow_green.png?alt=media&token=ad11f9f6-32e5-4601-bd7d-d64b312ac282",alt:"Slider",class:"mb-1",width:"25",height:"25"},null,-1)),Oe={class:"col-lg-3 offset-lg-1"},ze=r(()=>e("label",{for:"search",class:"form-label mb-2"},[e("h5",null,"搜尋")],-1)),We={class:"input-group mb-3"},Ye=["disabled"],qe=r(()=>e("span",{class:"material-icons"}," search ",-1)),Ge=[qe],Qe={class:"text-danger text-center"},Xe=r(()=>e("h5",{class:"mb-2 mb-lg-4"},"Tags",-1)),Ze={class:"d-flex flex-wrap align-items-center ps-2 ps-lg-0 mb-5 mb-lg-10"},$e=["onClick"],es=r(()=>e("span",{class:"material-icons fs-5"}," local_offer ",-1)),ss=r(()=>e("h5",{class:"mb-2 mb-lg-4"},"最新文章",-1)),ts={class:"mb-2 py-2 border-bottom"};function ls(l,n,os,is,s,b){const g=f("RouterLink"),v=f("router-link"),T=f("v-field"),k=f("error-message"),A=f("v-form");return o(),i("div",N,[e("div",j,[e("nav",J,[e("ol",O,[e("li",z,[_(g,{to:"/"},{default:h(()=>[a("首頁")]),_:1})]),e("li",W,[_(g,{to:"/specialColumn"},{default:h(()=>[a("專欄文章")]),_:1})]),!s.filterKeywords.length&&!s.filterTags.length?(o(),i("li",Y,c(s.article.title),1)):s.filterKeywords.length?(o(),i("li",q,"搜尋結果")):s.filterTags.length?(o(),i("li",G,[Q,a(c(s.breadcrumbTag),1)])):p("",!0)])]),e("div",X,[!s.filterKeywords.length&&!s.filterTags.length?(o(),i("div",Z,[e("article",null,[e("h1",$,c(s.article.title),1),e("ul",ee,[e("li",se,[e("div",te,[le,a(c(s.article.author),1)])]),e("li",oe,[e("div",ie,[re,a(c(l.$filters.date(s.article.create_at)),1)])]),e("li",ce,[e("div",ae,[(o(!0),i(m,null,u(s.article.tag,t=>(o(),i("span",{key:t,class:"d-flex align-items-center me-2 flex-shrink-0 text-gray-600"},[ne,a(c(t),1)]))),128))])])]),e("img",{src:s.article.image,alt:s.article.title,class:"img-fluid mb-5"},null,8,de),e("div",{innerHTML:s.article.description},null,8,_e)]),he,e("div",me,[e("div",{class:y(["col-6",{"border-end":s.currentIndex!==0&&s.currentIndex!==l.articles.length-1}])},[l.articles[s.currentIndex-1]?(o(),I(g,{key:0,to:`/specialColumn/${l.articles[s.currentIndex-1].id}`,class:"d-flex align-items-center"},{default:h(()=>[ue,e("div",null,[a(" 上一篇："),ge,a(" "+c(l.articles[s.currentIndex-1].title),1)])]),_:1},8,["to"])):p("",!0)],2),l.articles[s.currentIndex+1]?(o(),i("div",fe,[_(g,{to:`/specialColumn/${l.articles[s.currentIndex+1].id}`,class:"d-flex align-items-center justify-content-end"},{default:h(()=>[e("div",pe,[a(" 下一篇："),be,a(" "+c(l.articles[s.currentIndex+1].title),1)]),ve]),_:1},8,["to"])])):p("",!0)])])):s.filterKeywords.length?(o(),i("div",ye,[e("div",Ie,[(o(!0),i(m,null,u(s.filterKeywords,t=>(o(),i("div",{key:t.id,class:"col"},[e("div",xe,[e("img",{src:t.image,class:"card-img-top mw-100",alt:""},null,8,we),e("div",Te,[e("h5",ke,c(t.title),1),e("div",Ae,[(o(!0),i(m,null,u(t.tag,d=>(o(),i("p",{class:"me-2",key:d},[Re,e("span",Ee,c(d),1)]))),128))]),e("p",Se,c(t.description),1),e("p",Ve,[_(v,{to:`/specialColumn/${t.id}`},{default:h(()=>[a("繼續閱讀 "),Pe]),_:2},1032,["to"])])])])]))),128))])])):s.filterTags.length?(o(),i("div",Me,[e("div",Ce,[(o(!0),i(m,null,u(s.filterTags,t=>(o(),i("div",{key:t.id,class:"col"},[e("div",Le,[e("img",{src:t.image,class:"card-img-top mw-100",alt:""},null,8,Ke),e("div",Be,[e("h5",He,c(t.title),1),e("div",Ue,[(o(!0),i(m,null,u(t.tag,d=>(o(),i("p",{class:"me-2",key:d},[De,e("span",Fe,c(d),1)]))),128))]),e("p",Ne,c(t.description),1),e("p",je,[_(v,{to:`/specialColumn/${t.id}`},{default:h(()=>[a("繼續閱讀 "),Je]),_:2},1032,["to"])])])])]))),128))])])):p("",!0),e("div",Oe,[_(A,{onSubmit:b.searchKeywords,ref:"form",class:"mb-5 mb-lg-10 position-relative"},{default:h(({errors:t})=>[ze,e("div",We,[_(T,{name:"關鍵字",class:y([{"is-invalid":t.關鍵字},"form-control"]),rules:"required",id:"search",type:"text",modelValue:s.searchInput,"onUpdate:modelValue":n[0]||(n[0]=d=>s.searchInput=d),modelModifiers:{trim:!0},placeholder:"請輸入關鍵字"},null,8,["class","modelValue"]),e("button",{type:"submit",class:"btn btn-secondary d-flex align-items-center",disabled:t.關鍵字},Ge,8,Ye),_(k,{name:"關鍵字",class:"invalid-feedback"})]),e("p",Qe,c(s.noResultMessage),1)]),_:1},8,["onSubmit"]),Xe,e("div",Ze,[(o(!0),i(m,null,u(s.allTags,t=>(o(),i("a",{key:t,href:"#",onClick:P(d=>b.searchTag(t),["prevent"]),class:"d-flex align-items-center me-2 mb-2 text-dark tag-hover"},[es,a(c(t),1)],8,$e))),128))]),ss,(o(!0),i(m,null,u(l.articles,(t,d)=>(o(),i(m,{key:t.id},[d<3?(o(),I(g,{key:0,to:`/specialColumn/${t.id}`},{default:h(()=>[e("p",ts,c(t.title),1)]),_:2},1032,["to"])):p("",!0)],64))),128))])])])])}const cs=E(F,[["render",ls],["__scopeId","data-v-a11b89d5"]]);export{cs as default};