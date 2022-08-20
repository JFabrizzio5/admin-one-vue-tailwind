import{S as $,J as N,y as k,o as g,c as S,w as a,a as e,T as q,i,D as U,u as o,U as C,V as P,W as j,f as p,j as _,x as b,_ as A,b as R,d,z as V,A as x,B as m,C as B,h as M,H as h,k as Y,X as D,I as E,Y as F,Z as H,$ as y}from"./index.73d88022.js";import{a as T,_ as r}from"./FormField.12eb80c6.js";import{_ as G}from"./FormFilePicker.efc6f271.js";const L={class:"space-y-3 text-center md:text-left lg:mx-12"},O={class:"flex justify-center md:block"},z={class:"text-2xl"},I=_(" Howdy, "),J=_("! "),W=i("p",null,[_("Last login "),i("b",null,"12 mins ago"),_(" from "),i("b",null,"127.0.0.1")],-1),X={class:"flex justify-center md:block"},Z={__name:"UserCard",setup(v){const u=$(),n=N(()=>u.userName),l=k(!1);return(f,c)=>(g(),S(p,null,{default:a(()=>[e(j,{type:"justify-around lg:justify-center"},{default:a(()=>[e(q,{class:"lg:mx-12"}),i("div",L,[i("div",O,[e(T,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=w=>l.value=w),name:"notifications-switch",type:"switch",label:"Notifications","input-value":!0},null,8,["modelValue"])]),i("h1",z,[I,i("b",null,U(o(n)),1),J]),W,i("div",X,[e(C,{text:"Verified",type:"info",icon:o(P)},null,8,["icon"])])])]),_:1})]),_:1}))}},K={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},oe={__name:"ProfileView",setup(v){const u=$(),n=b({name:u.userName,email:u.userEmail}),l=b({password_current:"",password:"",password_confirmation:""}),f=()=>{u.setUser(n)},c=()=>{};return(w,s)=>(g(),S(A,null,{default:a(()=>[e(M,null,{default:a(()=>[e(R,{icon:o(h),title:"Profile",main:""},{default:a(()=>[e(d,{href:"https://github.com/justboil/admin-one-vue-tailwind",target:"_blank",icon:o(Y),label:"Star on GitHub",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),e(Z,{class:"mb-6"}),i("div",K,[e(p,{title:"Edit Profile",icon:o(D),form:"",onSubmit:V(f,["prevent"])},{footer:a(()=>[e(x,null,{default:a(()=>[e(d,{color:"info",type:"submit",label:"Submit"}),e(d,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(r,{label:"Avatar",help:"Max 500kb"},{default:a(()=>[e(G)]),_:1}),e(r,{label:"Name",help:"Required. Your name"},{default:a(()=>[e(m,{modelValue:n.name,"onUpdate:modelValue":s[0]||(s[0]=t=>n.name=t),icon:o(h),name:"username",required:"",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"E-mail",help:"Required. Your e-mail"},{default:a(()=>[e(m,{modelValue:n.email,"onUpdate:modelValue":s[1]||(s[1]=t=>n.email=t),icon:o(E),type:"email",name:"email",required:"",autocomplete:"email"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["icon","onSubmit"]),e(p,{title:"Change Password",icon:o(F),form:"",onSubmit:V(c,["prevent"])},{footer:a(()=>[e(x,null,{default:a(()=>[e(d,{type:"submit",color:"info",label:"Submit"}),e(d,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(r,{label:"Current password",help:"Required. Your current password"},{default:a(()=>[e(m,{modelValue:l.password_current,"onUpdate:modelValue":s[2]||(s[2]=t=>l.password_current=t),icon:o(H),name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(B),e(r,{label:"New password",help:"Required. New password"},{default:a(()=>[e(m,{modelValue:l.password,"onUpdate:modelValue":s[3]||(s[3]=t=>l.password=t),icon:o(y),name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"Confirm password",help:"Required. New password one more time"},{default:a(()=>[e(m,{modelValue:l.password_confirmation,"onUpdate:modelValue":s[4]||(s[4]=t=>l.password_confirmation=t),icon:o(y),name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["icon","onSubmit"])])]),_:1})]),_:1}))}};export{oe as default};