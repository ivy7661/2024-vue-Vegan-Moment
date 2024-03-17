import{_ as g,o as i,c as n,b as t,g as _,L as m,t as u,F as f,f as w,N as D,d as y,H as A,r as M,h as x}from"./index-3bceno1i.js";import{A as h}from"./swal-tijMSQwW.js";import{m as k}from"./modalMixin-_Nd4Yv-a.js";import"./sweetalert2.all-qsh1ECf1.js";const V={props:["tempArticle","updateArticle","isNew"],data(){return{modalArticle:null,editArticle:{},create_at:""}},mixins:[k],methods:{createArticles(){this.editArticle.tag=[],this.editArticle.tag.push("")}},mounted(){},watch:{tempArticle(){this.editArticle=this.tempArticle,[this.create_at]=new Date(this.editArticle.create_at*1e3).toISOString().split("T")},create_at(){this.editArticle.create_at=Math.floor(new Date(this.create_at)/1e3)}}},P={id:"articleModal",ref:"modal",class:"modal fade",tabindex:"-1"},U={class:"modal-dialog modal-xl"},T={class:"modal-content border-0"},C={class:"modal-header bg-dark text-white"},I={id:"articleModalLabel",class:"modal-title"},N={key:0},E={key:1},S=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1),L={class:"modal-body"},R={class:"row"},B={class:"col-sm-4"},H={class:"mb-3"},O=t("label",{for:"imageUrl",class:"form-label"},"圖片",-1),F=["src"],J={class:"col-sm-8"},j={class:"row"},z={class:"col-6 mb-3"},K=t("label",{for:"title",class:"form-label"},"文章標題",-1),W={class:"col-6 mb-3"},Y=t("label",{for:"content",class:"form-label"},"文章概要",-1),q={class:"row"},G={class:"mb-3 col-md-6"},Q=t("label",{for:"create_at",class:"form-label"},"建立時間",-1),X={class:"mb-3 col-md-6"},Z=t("label",{for:"author",class:"form-label"},"作者",-1),tt=t("hr",null,null,-1),et=t("h6",{class:"mb-3"},"文章標籤",-1),st={key:0},lt={class:"mb-3"},ot=["for"],it=["id","onUpdate:modelValue"],nt={key:0},ct={key:1},dt={key:1},at=t("hr",null,null,-1),rt={class:"mb-3 col-md-12"},_t=t("label",{for:"description",class:"form-label"},"文章內容",-1),mt={class:"mb-3"},ut={class:"form-check"},ht=t("label",{class:"form-check-label",for:"isPublic"},"是否公開",-1),pt={class:"modal-footer"},bt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function At(o,e,c,v,s,a){return i(),n("div",P,[t("div",U,[t("div",T,[t("div",C,[t("h5",I,[c.isNew?(i(),n("span",N,"新增文章")):(i(),n("span",E,"編輯文章"))]),S]),t("div",L,[t("div",R,[t("div",B,[t("div",H,[O,_(t("input",{id:"imageUrl","onUpdate:modelValue":e[0]||(e[0]=l=>s.editArticle.image=l),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[m,s.editArticle.image]]),t("img",{class:"img-fluid",src:s.editArticle.image},null,8,F)])]),t("div",J,[t("pre",null,"                "+u(s.editArticle)+`
              `,1),t("div",j,[t("div",z,[K,_(t("input",{id:"title","onUpdate:modelValue":e[1]||(e[1]=l=>s.editArticle.title=l),type:"text",class:"form-control",placeholder:"請輸入文章標題"},null,512),[[m,s.editArticle.title]])]),t("div",W,[Y,_(t("input",{id:"content",value:"蔬食","onUpdate:modelValue":e[2]||(e[2]=l=>s.editArticle.content=l),type:"text",class:"form-control",placeholder:"請輸入文章概要"},null,512),[[m,s.editArticle.content]])])]),t("div",q,[t("div",G,[Q,_(t("input",{id:"create_at","onUpdate:modelValue":e[3]||(e[3]=l=>s.create_at=l),type:"date",class:"form-control"},null,512),[[m,s.create_at]])]),t("div",X,[Z,_(t("input",{id:"author","onUpdate:modelValue":e[4]||(e[4]=l=>s.editArticle.author=l),type:"text",class:"form-control",placeholder:"請輸入作者"},null,512),[[m,s.editArticle.author]])])]),tt,et,Array.isArray(s.editArticle.tag)?(i(),n("div",st,[(i(!0),n(f,null,w(s.editArticle.tag,(l,r)=>(i(),n("div",{class:"mb-1",key:r},[t("div",lt,[t("label",{for:l+r,class:"form-label"},u(`標籤 ${r+1}`),9,ot),_(t("input",{id:l+r,"onUpdate:modelValue":d=>s.editArticle.tag[r]=d,type:"text",class:"form-control w-25",placeholder:"請輸入標籤名稱"},null,8,it),[[m,s.editArticle.tag[r]]])])]))),128)),!s.editArticle.tag.length||s.editArticle.tag[s.editArticle.tag.length-1]?(i(),n("div",nt,[t("button",{class:"btn btn-outline-secondary btn-sm d-block",onClick:e[5]||(e[5]=l=>s.editArticle.tag.push(""))}," 新增標籤 ")])):(i(),n("div",ct,[t("button",{class:"btn btn-outline-danger btn-sm d-block",onClick:e[6]||(e[6]=l=>s.editArticle.tag.pop())}," 刪除標籤 ")]))])):(i(),n("div",dt,[t("button",{class:"btn btn-outline-secondary btn-sm d-block",onClick:e[7]||(e[7]=(...l)=>a.createArticles&&a.createArticles(...l))}," 新增標籤 ")])),at,t("div",rt,[_t,_(t("textarea",{id:"description","onUpdate:modelValue":e[8]||(e[8]=l=>s.editArticle.description=l),type:"text",class:"form-control",placeholder:"請輸入文章內容",rows:"10"},null,512),[[m,s.editArticle.description]])]),t("div",mt,[t("div",ut,[_(t("input",{id:"isPublic","onUpdate:modelValue":e[9]||(e[9]=l=>s.editArticle.isPublic=l),class:"form-check-input",type:"checkbox"},null,512),[[D,s.editArticle.isPublic]]),ht])])])])]),t("div",pt,[bt,t("button",{type:"button",class:"btn btn-secondary",onClick:e[10]||(e[10]=l=>o.$emit("updateArticle",s.editArticle))}," 確認 ")])])])],512)}const ft=g(V,[["render",At]]),gt={props:["tempArticle","delArticle"],data(){return{delModalArticle:null}},mixins:[k]},vt={id:"delArticleModal",ref:"modal",class:"modal fade",tabindex:"-1"},yt={class:"modal-dialog"},Mt={class:"modal-content border-0"},xt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delArticleModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"})],-1),wt={class:"modal-body"},kt={class:"text-danger"},$t={class:"modal-footer"},Dt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Vt(o,e,c,v,s,a){return i(),n("div",vt,[t("div",yt,[t("div",Mt,[xt,t("div",wt,[y(" 是否刪除 "),t("strong",kt,u(c.tempArticle.title),1),y(" 文章(刪除後將無法恢復)。 ")]),t("div",$t,[Dt,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=l=>o.$emit("delArticle"))}," 確認刪除 ")])])])],512)}const Pt=g(gt,[["render",Vt]]);var Ut={VITE_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_API_PATH:"js23",VITE_MAP_KEY:"AIzaSyBLmNf-TuB_bpae0roR3SSEJy40ssJR5eI",BASE_URL:"/HW-Vue-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:p,VITE_API_PATH:b}=Ut,Tt={data(){return{articles:[],tempArticle:{tag:[]},pages:{},modalProduct:null,delModalProduct:null,isNew:!1}},components:{ArticleModal:ft,DelArticleModal:Pt},mounted(){this.getData()},methods:{getData(o=1){const e=`${p}/api/${b}/admin/articles?page=${o}`;A.get(e).then(c=>{console.log(c),this.articles=c.data.articles}).catch(c=>{alert(c.response.data.message)})},updateArticle(){let o=`${p}/api/${b}/admin/article`,e="post";this.isNew||(o=`${p}/api/${b}/admin/article/${this.tempArticle.id}`,e="put"),A[e](o,{data:this.tempArticle}).then(c=>{h.toastTop(c.data.message,"success"),this.getData(),this.$refs.articleModal.closeModal()}).catch(c=>{h.toastTop(c.response.data.message,"error")})},openModal(o,e){o==="new"?(this.tempArticle={tag:[],create_at:Math.floor(new Date().getTime()/1e3),isPublic:!0,content:"蔬食"},this.isNew=!0,this.$refs.articleModal.openModal()):o==="edit"?(this.tempArticle={...e},this.tempArticle.image||(this.tempArticle.image=[]),this.isNew=!1,this.$refs.articleModal.openModal()):o==="delete"&&(this.tempArticle={...e},this.$refs.delModal.openModal())},delArticle(){const o=`${p}/api/${b}/admin/article/${this.tempArticle.id}`;A.delete(o).then(e=>{h.toastTop(e.data.message,"success"),this.$refs.delModal.closeModal(),this.getData()}).catch(e=>{h.toastTop(e.response.data.message,"error")})}}},Ct=t("h2",{class:"mt-2"},"文章管理",-1),It={class:"container"},Nt={class:"text-end mt-4"},Et={class:"table mt-4"},St=t("thead",null,[t("tr",null,[t("th",{width:"90"},"作者"),t("th",{width:"120"},"文章標題"),t("th",{width:"120",class:"text-end"},"建立時間"),t("th",{width:"120",class:"text-center"},"是否公開"),t("th",{width:"120",class:"text-center"},"編輯")])],-1),Lt={class:"text-end"},Rt={class:"text-center"},Bt={key:0,class:"text-success"},Ht={key:1},Ot={class:"text-center"},Ft={class:"btn-group"},Jt=["onClick"],jt=["onClick"];function zt(o,e,c,v,s,a){const l=M("Article-Modal"),r=M("Del-Article-Modal");return i(),n(f,null,[Ct,t("div",It,[t("div",Nt,[t("button",{class:"btn btn-secondary",onClick:e[0]||(e[0]=d=>a.openModal("new"))},"建立新文章")]),t("table",Et,[St,t("tbody",null,[(i(!0),n(f,null,w(s.articles,d=>(i(),n("tr",{key:d.id},[t("td",null,u(d.author),1),t("td",null,u(d.title),1),t("td",Lt,u(new Date(d.create_at*1e3).toLocaleDateString()),1),t("td",Rt,[d.isPublic?(i(),n("span",Bt,"公開")):(i(),n("span",Ht,"未公開"))]),t("td",Ot,[t("div",Ft,[t("button",{type:"button",class:"btn btn-outline-secondary btn-sm",onClick:$=>a.openModal("edit",d)}," 編輯 ",8,Jt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:$=>a.openModal("delete",d)}," 刪除 ",8,jt)])])]))),128))])])]),x(l,{"temp-article":s.tempArticle,"is-new":s.isNew,onUpdateArticle:a.updateArticle,ref:"articleModal"},null,8,["temp-article","is-new","onUpdateArticle"]),x(r,{"temp-article":s.tempArticle,onDelArticle:a.delArticle,ref:"delModal"},null,8,["temp-article","onDelArticle"])],64)}const Gt=g(Tt,[["render",zt]]);export{Gt as default};
