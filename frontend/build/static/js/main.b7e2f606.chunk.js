(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),s=n(4),a=n.n(s),l=(n(11),n(5)),i=n(6),r=(n(12),n(0));var u=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){if(n){c(!1),console.log("start upload");var e=new FormData;e.append("userfile",document.getElementById("userfile").files[0]);var t,o={},s=document.querySelectorAll(".toJson"),a=Object(l.a)(s);try{for(a.s();!(t=a.n()).done;){var i=t.value;o["".concat(i.getAttribute("id"))]=i.value}}catch(r){a.e(r)}finally{a.f()}console.log(o),e.append("userdata",JSON.stringify(o)),fetch("/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){console.log("data: ",e)})).catch((function(e){console.log("error: ",e)}))}}),[n]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("input",{type:"text",className:"toJson",id:"username",placeholder:"Name"}),Object(r.jsx)("input",{type:"email",className:"toJson",id:"useremail",placeholder:"Email"}),Object(r.jsx)("input",{type:"text",className:"toJson",id:"usercity",placeholder:"City"}),Object(r.jsx)("input",{type:"number",className:"toJson",id:"userpostcode",placeholder:"Postcode"}),Object(r.jsx)("input",{type:"text",className:"toJson",id:"useraddress",placeholder:"Address"}),Object(r.jsx)("input",{type:"file",id:"userfile"}),Object(r.jsx)("button",{value:"Upload!",onClick:function(e){c(!0)},children:"Upload"})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),s(e),a(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),d()}},[[14,1,2]]]);
//# sourceMappingURL=main.b7e2f606.chunk.js.map