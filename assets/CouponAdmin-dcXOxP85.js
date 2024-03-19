import{m as M}from"./modalMixin-MjMK620x.js";import{_ as f,o as i,c,b as e,t as p,g as u,L as _,N as k,d as $,r as b,F as v,f as T,h as C}from"./index-H9-mcE0H.js";import{P as D}from"./PaginationComponent-yVlZgnMZ.js";import{A as r}from"./swal-jhGSc_18.js";import"./sweetalert2.all-P60o2thd.js";const V={props:["coupon","isNew"],data(){return{modal:"",editCoupon:{},due_date:""}},mixins:[M],watch:{coupon(){this.editCoupon=this.coupon;const t=new Date(this.editCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=t},due_date(){this.editCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}}},N={class:"modal fade",ref:"modal",tabindex:"-1"},P={class:"modal-dialog modal-dialog-centered"},A={class:"modal-content"},I={class:"modal-header bg-dark"},E={class:"modal-title text-white",id:"exampleModalLabel"},S=e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal"},null,-1),U={class:"modal-body"},L={class:"mb-3"},R=e("label",{for:"code",class:"form-label"},"優惠券名稱",-1),B={class:"mb-3"},H=e("label",{for:"code",class:"form-label"},"優惠碼",-1),O={class:"mb-3"},F=e("label",{for:"percent",class:"form-label"},"折扣百分比",-1),J={class:"mb-3"},j=e("label",{for:"date",class:"form-label"},"使用期限",-1),z={class:"mb-3 form-check"},K=e("label",{for:"is_enabled",class:"form-check-label"},"是否啟用",-1),W={class:"modal-footer"},Y=e("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"},"取消",-1);function q(t,o,d,g,s,a){return i(),c("div",N,[e("div",P,[e("div",A,[e("div",I,[e("h5",E,p(d.isNew?"新增":"編輯")+"優惠券 ",1),S]),e("div",U,[e("form",null,[e("div",L,[R,u(e("input",{type:"text",class:"form-control",id:"code","onUpdate:modelValue":o[0]||(o[0]=n=>s.editCoupon.title=n),placeholder:"請輸入優惠券名稱"},null,512),[[_,s.editCoupon.title]])]),e("div",B,[H,u(e("input",{type:"text",class:"form-control",id:"code","onUpdate:modelValue":o[1]||(o[1]=n=>s.editCoupon.code=n),placeholder:"請輸入優惠碼"},null,512),[[_,s.editCoupon.code]])]),e("div",O,[F,u(e("input",{type:"number",min:"1",max:"100",class:"form-control",id:"percent","onUpdate:modelValue":o[2]||(o[2]=n=>s.editCoupon.percent=n),placeholder:"請輸入折扣百分比（數字）"},null,512),[[_,s.editCoupon.percent,void 0,{number:!0}]])]),e("div",J,[j,u(e("input",{type:"date",class:"form-control",id:"date","onUpdate:modelValue":o[3]||(o[3]=n=>s.due_date=n),placeholder:"請輸入使用期限"},null,512),[[_,s.due_date]])]),e("div",z,[u(e("input",{type:"checkbox",class:"form-check-input",id:"is_enabled","true-value":1,"false-value":0,"onUpdate:modelValue":o[4]||(o[4]=n=>s.editCoupon.is_enabled=n)},null,512),[[k,s.editCoupon.is_enabled]]),K])])]),e("div",W,[Y,e("button",{type:"button",class:"btn btn-secondary",onClick:o[5]||(o[5]=n=>t.$emit("updateCoupon",t.tempCoupon))}," 確認 ")])])])],512)}const G=f(V,[["render",q]]),Q={props:["coupon"],data(){return{modal:""}},mixins:[M]},X={class:"modal fade",ref:"modal",tabindex:"-1"},Z={class:"modal-dialog modal-dialog-centered"},ee={class:"modal-content"},oe=e("div",{class:"modal-header bg-danger"},[e("h5",{class:"modal-title text-white",id:"exampleModalLabel"},"刪除優惠券"),e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),te={class:"modal-body"},se={class:"text-danger"},ne={class:"modal-footer"},le=e("button",{type:"button",class:"btn btn-outline-danger","data-bs-dismiss":"modal"},"取消",-1);function de(t,o,d,g,s,a){return i(),c("div",X,[e("div",Z,[e("div",ee,[oe,e("div",te,[$(" 確認刪除優惠券 "),e("span",se,p(d.coupon.title),1),$(" ？（刪除後將無法恢復） ")]),e("div",ne,[le,e("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=n=>t.$emit("deleteCoupon"))}," 確認刪除 ")])])])],512)}const ae=f(Q,[["render",de]]);var ie={VITE_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_API_PATH:"js23",VITE_MAP_KEY:"AIzaSyBLmNf-TuB_bpae0roR3SSEJy40ssJR5eI",BASE_URL:"/HW-Vue-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:m,VITE_API_PATH:h}=ie,ce={data(){return{coupons:[],tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isNew:!0,pages:{}}},components:{CouponModal:G,DelCouponModal:ae,PaginationComponent:D},mounted(){this.getCoupons()},methods:{getCoupons(t=1){this.$http.get(`${m}/api/${h}/admin/coupons?page=${t}`).then(o=>{console.log(o),this.coupons=o.data.coupons,this.pages=o.data.pagination}).catch(o=>{r.toastTop(o.response.data.message,"error")})},openModal(t,o){t==="new"?(this.tempCoupon={is_enabled:0,due_date:new Date().getTime()/1e3},this.isNew=!0,this.$refs.couponModal.openModal()):t==="edit"?(this.tempCoupon={...o},this.isNew=!1,this.$refs.couponModal.openModal()):t==="delete"&&(this.tempCoupon={...o},this.$refs.delModal.openModal())},updateCoupon(){let t="post",o=`${m}/api/${h}/admin/coupon`;this.isNew||(t="put",o=`${m}/api/${h}/admin/coupon/${this.tempCoupon.id}`),this.$http[t](o,{data:this.tempCoupon}).then(d=>{this.$refs.couponModal.closeModal(),r.toastTop(d.data.message,"success"),this.getCoupons()}).catch(d=>{r.toastTop(d.response.data.message,"error")})},deleteCoupon(){this.$http.delete(`${m}/api/${h}/admin/coupon/${this.tempCoupon.id}`).then(t=>{this.$refs.delModal.closeModal(),r.toastTop(t.data.message,"success"),this.getCoupons()}).catch(t=>{r.toastTop(t.response.data.message,"error")})}}},pe=e("h2",{class:"mt-2"},"優惠券管理",-1),ue={class:"container mt-20"},re={class:"text-end m-5"},_e={class:"row"},me={class:"col-12"},he={class:"table table-hover"},be=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"優惠券名稱"),e("th",{scope:"col"},"優惠碼"),e("th",{scope:"col"},"折扣百分比"),e("th",{scope:"col"},"到期日"),e("th",{scope:"col"},"是否啟用"),e("th",{scope:"col"},"編輯")])],-1),Ce={key:0,class:"text-success"},fe={key:1,class:"text-danger"},ge=["onClick"],$e=["onClick"];function ve(t,o,d,g,s,a){const n=b("Pagination-Component"),y=b("Coupon-Modal"),w=b("Del-Coupon-Modal");return i(),c(v,null,[pe,e("div",ue,[e("div",re,[e("button",{type:"button",class:"btn btn-secondary",onClick:o[0]||(o[0]=l=>a.openModal("new"))},"新增優惠券")]),e("div",_e,[e("div",me,[e("table",he,[be,e("tbody",null,[(i(!0),c(v,null,T(s.coupons,l=>(i(),c("tr",{key:l.id},[e("td",null,p(l.title),1),e("td",null,p(l.code),1),e("td",null,p(l.percent)+"%",1),e("td",null,p(new Date(l.due_date*1e3).toLocaleDateString()),1),e("td",null,[l.is_enabled?(i(),c("span",Ce,"啟用")):(i(),c("span",fe,"未啟用"))]),e("td",null,[e("button",{class:"btn btn-sm btn-outline-secondary me-1",onClick:x=>a.openModal("edit",l)}," 編輯 ",8,ge),e("button",{class:"btn btn-sm btn-outline-danger",onClick:x=>a.openModal("delete",l)}," 刪除 ",8,$e)])]))),128))])])])]),C(n,{pages:s.pages,onChangePage:a.getCoupons},null,8,["pages","onChangePage"])]),C(y,{ref:"couponModal",coupon:s.tempCoupon,onUpdateCoupon:a.updateCoupon,isNew:s.isNew},null,8,["coupon","onUpdateCoupon","isNew"]),C(w,{ref:"delModal",coupon:s.tempCoupon,onDeleteCoupon:a.deleteCoupon},null,8,["coupon","onDeleteCoupon"])],64)}const Te=f(ce,[["render",ve]]);export{Te as default};
