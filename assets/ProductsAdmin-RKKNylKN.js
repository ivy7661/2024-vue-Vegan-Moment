import{_ as g,o as d,c as n,b as t,I as y,F as f,f as U,t as m,M as C,g as a,L as c,N as w,d as V,H as M,r as k,h as x}from"./index-3bceno1i.js";import{A as p}from"./swal-tijMSQwW.js";import"./sweetalert2.all-qsh1ECf1.js";const N={props:["pages","getData"]},T={"aria-label":"Page navigation example"},A={class:"pagination"},I=t("span",{"aria-hidden":"true"},"«",-1),$=[I],E=["onClick"],L=t("span",{"aria-hidden":"true"},"»",-1),R=[L];function S(i,e,l,P,s,r){return d(),n("nav",T,[t("ul",A,[t("li",{class:y(["page-item",{disabled:!l.pages.has_pre}])},[t("a",{class:"page-link","aria-label":"Previous",onClick:e[0]||(e[0]=o=>l.getData(l.pages.current_page-1))},$)],2),(d(!0),n(f,null,U(l.pages.total_pages,o=>(d(),n("li",{class:y(["page-item",{active:o===l.pages.current_page}]),key:o+123},[t("a",{class:"page-link",onClick:_=>l.getData(o)},m(o),9,E)],2))),128)),t("li",{class:y(["page-item",{disabled:!l.pages.has_next}])},[t("a",{class:"page-link","aria-label":"Next",onClick:e[1]||(e[1]=o=>l.getData(l.pages.current_page+1))},R)],2)])])}const B=g(N,[["render",S]]),H={props:["tempProduct","updateProduct","isNew"],data(){return{modalProduct:null,editProduct:{}}},methods:{openModal(){this.modalProduct.show()},closeModal(){this.modalProduct.hide()}},mounted(){this.modalProduct=new C(this.$refs.productModal)},watch:{tempProduct(){this.editProduct=this.tempProduct}}},z={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},F={class:"modal-dialog modal-xl"},J={class:"modal-content border-0"},O={class:"modal-header bg-dark text-white"},j={id:"productModalLabel",class:"modal-title"},K={key:0},W={key:1},Y=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),q={class:"modal-body"},G={class:"row"},Q={class:"col-sm-4"},X={class:"mb-3"},Z=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),tt=["src"],et=t("h3",{class:"mb-3"},"多圖新增",-1),ot={key:0},st={class:"mb-3"},lt=["for"],dt=["id","onUpdate:modelValue"],nt=["src"],it={key:0},at={key:1},ct={key:1},rt={class:"col-sm-8"},ut={class:"mb-3"},_t=t("label",{for:"title",class:"form-label"},"餐點名稱",-1),mt={class:"row"},pt={class:"mb-3 col-md-6"},ht=t("label",{for:"category",class:"form-label"},"分類",-1),bt={class:"mb-3 col-md-6"},ft=t("label",{for:"num",class:"form-label"},"數量",-1),gt={class:"row"},Pt={class:"mb-3 col-md-6"},vt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),yt={class:"mb-3 col-md-6"},Mt=t("label",{for:"price",class:"form-label"},"售價",-1),kt={class:"row"},xt={class:"mb-3 col-2"},Ut=t("label",{for:"unit",class:"form-label"},"單位",-1),wt={class:"mb-3 col-2"},Vt=t("label",{for:"content",class:"form-label"},"內容",-1),Ct=t("hr",null,null,-1),Dt={class:"mb-3"},Nt=t("label",{for:"info",class:"form-label"},"特色",-1),Tt={class:"mb-3"},At=t("label",{for:"description",class:"form-label"},"餐點描述",-1),It={class:"mb-3"},$t=t("label",{for:"allergy",class:"form-label"},"過敏資訊",-1),Et={class:"mb-3"},Lt={class:"form-check"},Rt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),St={class:"mb-3"},Bt={class:"form-check"},Ht=t("label",{class:"form-check-label",for:"is_enabled"},"是否熱銷",-1),zt={class:"modal-footer"},Ft=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Jt(i,e,l,P,s,r){return d(),n("div",z,[t("div",F,[t("div",J,[t("div",O,[t("h5",j,[l.isNew?(d(),n("span",K,"新增餐點")):(d(),n("span",W,"編輯餐點"))]),Y]),t("div",q,[t("div",G,[t("div",Q,[t("div",X,[Z,a(t("input",{id:"imageUrl","onUpdate:modelValue":e[0]||(e[0]=o=>s.editProduct.imageUrl=o),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[c,s.editProduct.imageUrl]]),t("img",{class:"img-fluid",src:s.editProduct.imageUrl},null,8,tt)]),et,Array.isArray(s.editProduct.imagesUrl)?(d(),n("div",ot,[(d(!0),n(f,null,U(s.editProduct.imagesUrl,(o,_)=>(d(),n("div",{class:"mb-1",key:_},[t("div",st,[t("label",{for:o+_,class:"form-label"},"圖片網址",8,lt),a(t("input",{id:o+_,"onUpdate:modelValue":v=>s.editProduct.imagesUrl[_]=v,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,dt),[[c,s.editProduct.imagesUrl[_]]])]),t("img",{class:"img-fluid",src:o},null,8,nt)]))),128)),!s.editProduct.imagesUrl.length||s.editProduct.imagesUrl[s.editProduct.imagesUrl.length-1]?(d(),n("div",it,[t("button",{class:"btn btn-outline-secondary btn-sm d-block w-100",onClick:e[1]||(e[1]=o=>s.editProduct.imagesUrl.push(""))}," 新增圖片 ")])):(d(),n("div",at,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[2]||(e[2]=o=>s.editProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):(d(),n("div",ct,[t("button",{class:"btn btn-outline-secondary btn-sm d-block w-100",onClick:e[3]||(e[3]=(...o)=>i.createImages&&i.createImages(...o))}," 新增圖片 ")]))]),t("div",rt,[t("pre",null,"                "+m(s.editProduct)+`
              `,1),t("div",ut,[_t,a(t("input",{id:"title","onUpdate:modelValue":e[4]||(e[4]=o=>s.editProduct.title=o),type:"text",class:"form-control",placeholder:"請輸入餐點名稱"},null,512),[[c,s.editProduct.title]])]),t("div",mt,[t("div",pt,[ht,a(t("input",{id:"category","onUpdate:modelValue":e[5]||(e[5]=o=>s.editProduct.category=o),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[c,s.editProduct.category]])]),t("div",bt,[ft,a(t("input",{id:"num","onUpdate:modelValue":e[6]||(e[6]=o=>s.editProduct.num=o),type:"number",min:"0",class:"form-control",placeholder:"請輸入數量"},null,512),[[c,s.editProduct.num,void 0,{number:!0}]])])]),t("div",gt,[t("div",Pt,[vt,a(t("input",{id:"origin_price","onUpdate:modelValue":e[7]||(e[7]=o=>s.editProduct.origin_price=o),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[c,s.editProduct.origin_price,void 0,{number:!0}]])]),t("div",yt,[Mt,a(t("input",{id:"price","onUpdate:modelValue":e[8]||(e[8]=o=>s.editProduct.price=o),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[c,s.editProduct.price,void 0,{number:!0}]])])]),t("div",kt,[t("div",xt,[Ut,a(t("input",{id:"unit","onUpdate:modelValue":e[9]||(e[9]=o=>s.editProduct.unit=o),type:"text",class:"form-control"},null,512),[[c,s.editProduct.unit]])]),t("div",wt,[Vt,a(t("input",{id:"content","onUpdate:modelValue":e[10]||(e[10]=o=>s.editProduct.content=o),type:"text",class:"form-control"},null,512),[[c,s.editProduct.content]])])]),Ct,t("div",Dt,[Nt,a(t("input",{id:"info","onUpdate:modelValue":e[11]||(e[11]=o=>s.editProduct.info=o),type:"text",class:"form-control",placeholder:"請輸入特色"},null,512),[[c,s.editProduct.info]])]),t("div",Tt,[At,a(t("textarea",{id:"description","onUpdate:modelValue":e[12]||(e[12]=o=>s.editProduct.description=o),type:"text",class:"form-control",placeholder:"請輸入餐點描述"},`\r
                `,512),[[c,s.editProduct.description]])]),t("div",It,[$t,a(t("input",{id:"allergy","onUpdate:modelValue":e[13]||(e[13]=o=>s.editProduct.allergy=o),type:"text",class:"form-control",placeholder:"請輸入過敏資訊"},null,512),[[c,s.editProduct.allergy]])]),t("div",Et,[t("div",Lt,[a(t("input",{id:"is_enabled","onUpdate:modelValue":e[14]||(e[14]=o=>s.editProduct.is_enabled=o),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[w,s.editProduct.is_enabled]]),Rt])]),t("div",St,[t("div",Bt,[a(t("input",{id:"is_enabled","onUpdate:modelValue":e[15]||(e[15]=o=>s.editProduct.is_hot=o),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[w,s.editProduct.is_hot]]),Ht])])])])]),t("div",zt,[Ft,t("button",{type:"button",class:"btn btn-secondary",onClick:e[16]||(e[16]=(...o)=>l.updateProduct&&l.updateProduct(...o))},"確認")])])])],512)}const Ot=g(H,[["render",Jt]]),jt={props:["tempProduct","delProduct"],data(){return{delModalProduct:null}},methods:{openDelModal(){this.delModalProduct.show()},closeDelModal(){this.delModalProduct.hide()}},mounted(){this.delModalProduct=new C(this.$refs.delProductModal)}},Kt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Wt={class:"modal-dialog"},Yt={class:"modal-content border-0"},qt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Gt={class:"modal-body"},Qt={class:"text-danger"},Xt={class:"modal-footer"},Zt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function te(i,e,l,P,s,r){return d(),n("div",Kt,[t("div",Wt,[t("div",Yt,[qt,t("div",Gt,[V(" 是否刪除 "),t("strong",Qt,m(l.tempProduct.title),1),V(" 商品(刪除後將無法恢復)。 ")]),t("div",Xt,[Zt,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...o)=>l.delProduct&&l.delProduct(...o))},"確認刪除")])])])],512)}const ee=g(jt,[["render",te]]);var oe={VITE_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_API_PATH:"js23",VITE_MAP_KEY:"AIzaSyBLmNf-TuB_bpae0roR3SSEJy40ssJR5eI",BASE_URL:"/HW-Vue-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:h,VITE_API_PATH:b}=oe,se={data(){return{products:[],tempProduct:{imagesUrl:[]},pages:{},modalProduct:null,delModalProduct:null,isNew:!1}},mounted(){this.getData()},methods:{getData(i=1){const e=`${h}/api/${b}/admin/products?page=${i}`;M.get(e).then(l=>{console.log(l),this.products=l.data.products,this.pages=l.data.pagination}).catch(l=>{p.toastTop(l.response.data.message,"error")})},updateProduct(){let i=`${h}/api/${b}/admin/product`,e="post";this.isNew||(i=`${h}/api/${b}/admin/product/${this.tempProduct.id}`,e="put"),M[e](i,{data:this.tempProduct}).then(l=>{p.toastTop(l.data.message,"success"),this.getData(),this.$refs.pModal.closeModal()}).catch(l=>{p.toastTop(l.response.data.message,"error")})},openModal(i,e){i==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.pModal.openModal()):i==="edit"?(this.tempProduct={...e},this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.$refs.pModal.openModal()):i==="delete"&&(this.tempProduct={...e},this.$refs.delModal.openDelModal())},delProduct(){const i=`${h}/api/${b}/admin/product/${this.tempProduct.id}`;M.delete(i).then(e=>{p.toastTop(e.data.message,"success"),this.$refs.delModal.closeDelModal(),this.getData()}).catch(e=>{p.toastTop(e.response.data.message,"error")})}},components:{PaginationComponent:B,ProductModal:Ot,DelModal:ee}},le=t("h2",{class:"mt-2"},"產品管理",-1),de={class:"container"},ne={class:"text-end mt-4"},ie={class:"table mt-4"},ae=t("thead",null,[t("tr",null,[t("th",{width:"90"},"分類"),t("th",{width:"120"},"產品名稱"),t("th",{width:"120",class:"text-end"},"原價"),t("th",{width:"120",class:"text-end"},"售價"),t("th",{width:"120",class:"text-center"},"是否啟用"),t("th",{width:"120",class:"text-center"},"編輯")])],-1),ce={class:"text-end"},re={class:"text-end"},ue={class:"text-center"},_e={key:0,class:"text-success"},me={key:1},pe={class:"text-center"},he={class:"btn-group"},be=["onClick"],fe=["onClick"];function ge(i,e,l,P,s,r){const o=k("Pagination-Component"),_=k("Product-Modal"),v=k("Del-Modal");return d(),n(f,null,[le,t("div",de,[t("div",ne,[t("button",{class:"btn btn-secondary",onClick:e[0]||(e[0]=u=>r.openModal("new"))},"建立新的產品")]),t("table",ie,[ae,t("tbody",null,[(d(!0),n(f,null,U(s.products,u=>(d(),n("tr",{key:u.id},[t("td",null,m(u.category),1),t("td",null,m(u.title),1),t("td",ce,m(u.origin_price),1),t("td",re,m(u.price),1),t("td",ue,[u.is_enabled?(d(),n("span",_e,"啟用")):(d(),n("span",me,"未啟用"))]),t("td",pe,[t("div",he,[t("button",{type:"button",class:"btn btn-outline-secondary btn-sm",onClick:D=>r.openModal("edit",u)}," 編輯 ",8,be),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:D=>r.openModal("delete",u)}," 刪除 ",8,fe)])])]))),128))])]),x(o,{pages:s.pages,"get-data":r.getData},null,8,["pages","get-data"])]),x(_,{"temp-product":s.tempProduct,"update-product":r.updateProduct,"is-New":s.isNew,ref:"pModal"},null,8,["temp-product","update-product","is-New"]),x(v,{"temp-product":s.tempProduct,"del-product":r.delProduct,ref:"delModal"},null,8,["temp-product","del-product"])],64)}const Me=g(se,[["render",ge]]);export{Me as default};
