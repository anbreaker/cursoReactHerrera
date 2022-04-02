var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var I=(e,t,a)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,l=(e,t)=>{for(var a in t||(t={}))ne.call(t,a)&&I(e,a,t[a]);if(V)for(var a of V(t))ae.call(t,a)&&I(e,a,t[a]);return e},d=(e,t)=>ee(e,te(t));import{r as v,h as y,S as w,u as S,j as n,a as i,N as F,b as N,M as _,c as j,m as oe,C as re,R as G,d as L,B as se,e as ce,f as le,g as ie,i as de,t as ue,P as he,k as me,F as pe}from"./vendor.9a885f80.js";const ge=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};ge();const U=(e={})=>{const[t,a]=v.exports.useState(e);return[t,({target:s})=>{const{name:u,type:b,value:f,checked:p}=s;a(d(l({},t),{[u]:b==="checkbox"?p:f}))},a,()=>{a(e)}]};const Y="https://mern-calendar-vite.herokuapp.com/api",B=(e,t,a="GET")=>{const r=`${Y}/${e}`;return a==="GET"?fetch(r):fetch(r,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},C=(e,t,a="GET")=>{const r=`${Y}/${e}`,o=localStorage.getItem("token")||"";return a==="GET"?fetch(r,{method:a,headers:{"x-token":o}}):fetch(r,{method:a,headers:{"Content-type":"application/json","x-token":o},body:JSON.stringify(t)})},c={uiOpenModal:"[ui] Open Modal",uiCloseModal:"[ui] Close Modal",eventSetActive:"[event] Set Active",eventStartAddNew:"[event] Start add new",eventAddNew:"[event] Added new",eventClearActiveEvent:"[event] Clear Active Event",eventUpdated:"[event] Updated Event",eventDeleted:"[event] Deleted Event",eventLoaded:"[event] Events Loaded",eventLogout:"[event] Event Logout",authChecking:"[auth] Checking login state",authCheckingFinish:"[auth] Finished checking login state",authStartLogin:"[auth] Start Login",authLogin:"[auth] Login",authStartRegister:"[auth] Start Register",authStartTokenRenew:"[auth] Start token renew",authLogout:"[auth] Logout"},ve=(e=[])=>e.map(t=>d(l({},t),{end:y(t.end).toDate(),start:y(t.start).toDate()})),fe=e=>async(t,a)=>{const{uid:r,name:o}=a().auth;try{const u=await(await C("events",e,"POST")).json();u.ok&&(e.id=u.eventSave.id,e.user={_id:r,name:o},t(ye(e)))}catch(s){console.log(s)}},ye=e=>({type:c.eventAddNew,payload:e}),be=e=>({type:c.eventSetActive,payload:e}),H=()=>({type:c.eventClearActiveEvent}),Ee=e=>async t=>{try{const r=await(await C(`events/${e.id}`,e,"PUT")).json();r.ok?t(Se(e)):w.fire("Error",r.msg,"error")}catch(a){console.log(a)}},Se=e=>({type:c.eventUpdated,payload:e}),Ne=()=>async(e,t)=>{try{const{id:a}=t().calendar.activeEvent,o=await(await C(`events/${a}`,{},"DELETE")).json();o.ok?e(we()):w.fire("Error",o.msg,"error")}catch(a){console.log(a)}},we=()=>({type:c.eventDeleted}),Ce=e=>async t=>{const r=await(await C("events")).json(),o=ve(r.events);t(ke(o))},ke=e=>({type:c.eventLoaded,payload:e}),De=()=>({type:c.eventLogout}),Le=(e,t)=>async a=>{const o=await(await B("auth",{email:e,password:t},"POST")).json();o.ok?(O(o),a(M({uid:o.uid,name:o.name}))):w.fire("Error","Usuario o contrase\xF1ar Erroneo.","error")},M=e=>({type:c.authLogin,payload:e}),xe=(e,t,a)=>async r=>{const s=await(await B("auth/new",{name:e,email:t,password:a},"POST")).json();s.ok?(O(s),r(M({uid:s.uid,name:s.name}))):w.fire("Error",s.msg,"error")},Ae=()=>async e=>{const a=await(await C("auth/renew")).json();a.ok?(O(a),e(M({uid:a.uid,name:a.name}))):e(Me())},Re=()=>e=>{localStorage.clear(),e(Fe()),e(De())},Fe=()=>({type:c.authLogout}),Me=()=>({type:c.authCheckingFinish}),O=e=>{localStorage.setItem("token",e.token),localStorage.setItem("token-init-date",new Date().getTime().toString())},Oe=()=>{const e=S(),[t,a]=U({loginEmail:"test@test.com",loginPassword:"test"}),{loginEmail:r,loginPassword:o}=t,[s,u]=U({regName:"anbreaker",regEmail:"test@test.com",regPassword1:"test",regPassword2:"test"}),{regName:b,regEmail:f,regPassword1:p,regPassword2:g}=s;return n("div",{className:"container login-container",children:i("div",{className:"row",children:[i("div",{className:"col-md-6 login-form-1",children:[n("h3",{children:"Ingreso"}),i("form",{onSubmit:E=>{E.preventDefault(),e(Le(r,o))},children:[n("div",{className:"form-group",children:n("input",{type:"text",className:"form-control",placeholder:"Correo",name:"loginEmail",value:r,onChange:a})}),n("div",{className:"form-group",children:n("input",{type:"password",className:"form-control",placeholder:"Contrase\xF1a",name:"loginPassword",value:o,onChange:a})}),n("div",{className:"form-group",children:n("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),i("div",{className:"col-md-6 login-form-2",children:[n("h3",{children:"Registro"}),i("form",{onSubmit:E=>{E.preventDefault(),p!==g&&w.fire("Error","Las contrase\xF1as deben coincidir","error"),e(xe(b,f,p))},children:[n("div",{className:"form-group",children:n("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"regName",value:b,onChange:u})}),n("div",{className:"form-group",children:n("input",{type:"email",className:"form-control",placeholder:"Correo",name:"regEmail",value:f,onChange:u})}),n("div",{className:"form-group",children:n("input",{type:"password",className:"form-control",placeholder:"Contrase\xF1a",name:"regPassword1",value:p,onChange:u})}),n("div",{className:"form-group",children:n("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xF1a",name:"regPassword2",value:g,onChange:u})}),n("div",{className:"form-group",children:n("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},Pe=({children:e,isAuthenticated:t})=>t?e:n(F,{to:"/login"});const Te=()=>{const{name:e}=N(r=>r.auth),t=S();return i("div",{className:"navbar navbar-dark bg-dark mb-4",children:[n("span",{className:"navbar-brand",children:e}),i("button",{className:"btn btn-outline-danger",onClick:()=>{t(Re())},children:[n("i",{className:"fa fa-sign-out-alt"}),n("span",{children:" Exit"})]})]})},Ve={allDay:"Todo el d\xEDa",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xEDa",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:e=>`+ Ver m\xE1s (${e})`};const q=()=>({type:c.uiOpenModal}),Ie=()=>({type:c.uiCloseModal}),je={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};_.setAppElement("#root");const P=y().minutes(0).seconds(0).add(1,"hours"),J=P.clone().add(1,"hours"),R={title:"",notes:"",start:P.toDate(),end:J.toDate()},Ue=()=>{const e=S(),{modalOpen:t}=N(m=>m.ui),{activeEvent:a}=N(m=>m.calendar),[r,o]=v.exports.useState(P.toDate()),[s,u]=v.exports.useState(J.toDate()),[b,f]=v.exports.useState(!0),[p,g]=v.exports.useState(R),{notes:h,title:k,start:E,end:x}=p;v.exports.useEffect(()=>{g(a||R)},[a,g]);const A=m=>{const{target:D}=m;g(d(l({},p),{[D.name]:D.value}))},T=()=>{e(Ie()),e(H()),g(R)},W=m=>{o(m),console.log(m),g(d(l({},p),{start:m}))},X=m=>{u(m),g(d(l({},p),{end:m}))},z=m=>{m.preventDefault();const D=y(E),Q=y(x);if(D.isSameOrAfter(Q)){w.fire("Error","Fecha final ha de ser mayor a la inicial.","error");return}if(k.trim().length<2)return f(!1);e(a?Ee(p):fe(l({},p))),f(!0),T()},K=y(r).subtract(1,"day");return i(_,{className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:200,isOpen:t,onRequestClose:T,style:je,contentLabel:"Example Modal",children:[n("h2",{children:"Modal"}),n("hr",{}),i("h1",{children:[" ",a?"Editar Evento":"Nuevo evento"," "]}),n("hr",{}),i("form",{className:"container",onSubmit:z,children:[i("div",{className:"form-group",children:[n("label",{children:"Fecha y hora inicio"}),n(j,{dateFormat:"DD-MM-YYYY",timeFormat:"hh:mm A",onChange:W,value:E})]}),i("div",{className:"form-group",children:[n("label",{children:"Fecha y hora fin"}),n(j,{dateFormat:"DD-MM-YYYY",timeFormat:"hh:mm A",onChange:X,isValidDate:m=>m.isAfter(K),value:x})]}),n("hr",{}),i("div",{className:"form-group",children:[n("label",{children:"Titulo y notas"}),n("input",{type:"text",className:`form-control ${!b&&"is-invalid"}`,placeholder:"T\xEDtulo del evento",name:"title",autoComplete:"off",value:k,onChange:A}),n("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xF3n corta"})]}),i("div",{className:"form-group",children:[n("textarea",{className:"form-control",placeholder:"Notas",rows:2,name:"notes",value:h,onChange:A}),n("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xF3n adicional"})]}),i("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[n("i",{className:"far fa-save"}),n("span",{children:" Guardar"})]})]})]})},$e=({event:e})=>{const{title:t,user:a}=e;return i("div",{children:[n("strong",{children:t}),a&&i("strong",{children:["- ",a.name]})]})},_e=()=>{const e=S();return n("button",{className:"btn btn-primary fab",onClick:()=>{e(q())},children:n("i",{className:"fas fa-plus"})})},Ge=()=>{const e=S();return i("button",{className:"btn btn-danger fab-danger",onClick:()=>{e(Ne())},children:[n("i",{className:"fas fa-trash"}),n("span",{children:" Borrar Evento"})]})},Ye=oe(y);y.locale("es");const Be=()=>{const e=S(),{uid:t}=N(h=>h.auth),{events:a,activeEvent:r}=N(h=>h.calendar),[o,s]=v.exports.useState(localStorage.getItem("lastView")||"month");return v.exports.useEffect(()=>{e(Ce())},[e]),i("div",{className:"calendar-page",children:[n(Te,{}),n(re,{localizer:Ye,events:a,startAccessor:"start",endAccessor:"end",messages:Ve,eventPropGetter:(h,k,E,x)=>({style:{backgroundColor:t===h.user._id?"#367cf7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"aliceblue"}}),onDoubleClickEvent:h=>{e(q())},onSelectEvent:h=>{console.log(h),e(be(h))},onSelectSlot:h=>{e(H())},selectable:!0,onView:h=>{s(h),localStorage.setItem("lastView",h)},view:o,components:{event:$e}}),n(_e,{}),r&&n(Ge,{}),n(Ue,{})]})},He=()=>n("div",{children:i(G,{children:[n(L,{path:"/",element:n(Be,{})}),n(L,{path:"*",element:n(F,{to:"/login"})})]})}),qe=({children:e,isAuthenticated:t})=>t?n(F,{to:"/"}):e,Je=()=>{const e=S(),{checking:t,uid:a}=N(r=>r.auth);return v.exports.useEffect(()=>{e(Ae())},[e]),t?n("h4",{children:"Espere..."}):n(se,{children:i(G,{children:[n(L,{path:"/login",element:n(qe,{isAuthenticated:!!a,children:n(Oe,{})})}),n(L,{path:"/*",element:n(Pe,{isAuthenticated:!!a,children:n(He,{})})})]})})},$={events:[],activeEvent:null},We=(e=$,t)=>{switch(t.type){case c.eventSetActive:return d(l({},e),{activeEvent:t.payload});case c.eventAddNew:return d(l({},e),{events:[...e.events,t.payload]});case c.eventClearActiveEvent:return d(l({},e),{activeEvent:null});case c.eventUpdated:return d(l({},e),{events:e.events.map(a=>a.id===t.payload.id?t.payload:a)});case c.eventDeleted:return d(l({},e),{events:e.events.filter(a=>a.id!==e.activeEvent.id),activeEvent:null});case c.eventLoaded:return d(l({},e),{events:[...t.payload]});case c.eventLogout:return l({},$);default:return e}},Xe={modalOpen:!1},ze=(e=Xe,t)=>{switch(t.type){case c.uiOpenModal:return d(l({},e),{modalOpen:!0});case c.uiCloseModal:return d(l({},e),{modalOpen:!1});default:return e}},Ke={checking:!0},Qe=(e=Ke,t)=>{switch(t.type){case c.authLogin:return l(d(l({},e),{checking:!1}),t.payload);case c.authStartRegister:return l(d(l({},e),{checking:!1}),t.payload);case c.authCheckingFinish:return d(l({},e),{checking:!1});case c.authLogout:return{checking:!1};default:return e}},Ze=ce({auth:Qe,calendar:We,ui:ze}),et=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de,tt=le(Ze,et(ie(ue))),nt=()=>n(he,{store:tt,children:n(Je,{})});me.render(n(pe,{children:n(nt,{})}),document.getElementById("root"));