(this.webpackJsonptetedoro=this.webpackJsonptetedoro||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n.n(a),i=n(5),s=n.n(i),o=(n(11),n(4)),u=n(2),j=(n.p,n(12),n.p+"static/media/glass.2fcb9874.wav"),b=new Audio(j),l=new Audio(j),d=function(t){return"/tetedoro"+t},O=function(){var t,e=Object(a.useState)(0),n=Object(u.a)(e,2),r=n[0],i=n[1],s=Object(a.useState)(!0),j=Object(u.a)(s,2),b=j[0],l=j[1],O=r/1e3,f=Math.round(O/.6),h=40*f,m=f%2==0?-15:5;h>=520&&(l(!b),i(0)),Object(a.useEffect)((function(){var t=(new Date).getTime(),e=setInterval((function(){var e=(new Date).getTime();i(r+e-t),t=e}),1e3/30);return function(){return clearInterval(e)}}),[r,b]);var g=d(b?"/mimi.png":"/naibang.png");return Object(c.jsx)("div",{className:"kitty-walk",children:Object(c.jsx)("img",{className:"kitty",src:g,height:"100",style:(t={},Object(o.a)(t,b?"left":"right",h),Object(o.a)(t,"transform","rotate(".concat(m,"deg) scaleX(-1)")),t)})})},f=function(){var t=Object(a.useState)((new Date).getTime()),e=Object(u.a)(t,2),n=e[0],r=e[1],i=Object(a.useState)(0),s=Object(u.a)(i,2),o=s[0],j=s[1],f=Object(a.useState)(!0),h=Object(u.a)(f,2),m=h[0],g=h[1],v=Object(a.useState)(!1),x=Object(u.a)(v,2),k=x[0],w=x[1];Object(a.useEffect)((function(){var t=setInterval((function(){var t=(new Date).getTime();if(!m){var e=o+t-n;j(e),e/1e3>2&&!k&&(w(!0),g(!0),b.play(),setTimeout((function(){l.play()}),200))}r(t)}),1e3/30);return function(){return clearInterval(t)}}),[m,k]);var p=o/1e3,S=Math.round(p%60),T=Math.round(p/60%60),D=function(t){return t.toString().padStart(2,"0")};return Object(c.jsx)("div",{children:k?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"break-time",children:"Break time!"}),Object(c.jsx)("div",{className:"back-to-work",children:Object(c.jsx)("button",{onClick:function(){j(0),r((new Date).getTime()),g(!1),w(!1)},children:"Back to work..."})}),Object(c.jsx)("img",{src:d("/bothkitties.png"),width:"100%"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"current-time",children:"".concat(D(T),":").concat(D(S))}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("button",{onClick:function(){return g(!m)},children:m?"Start":"Pause"}),Object(c.jsx)("button",{onClick:function(){(new Date).getTime();j(0),g(!0)},children:"Reset"})]}),m?null:Object(c.jsx)(O,{})]})})};var h=function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Tetedoro"}),Object(c.jsx)(f,{})]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),m()}},[[13,1,2]]]);
//# sourceMappingURL=main.a66cb956.chunk.js.map