(this.webpackJsonpsynement=this.webpackJsonpsynement||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),r=n(5),s=n(1),i=n(6),o=n.n(i),u=n(7),d=n(2),j=(n(13),n(0));var l=function(e){var t=e.data,n=t.subject,a=t.date_due,c=function(e){switch(e){case"Assignment":return"assignment";case"Experiment":return"experiment";default:return"other"}}(t.type);return Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("div",{className:"indicator "+c}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsx)("p",{className:"title",children:n}),Object(j.jsx)("p",{className:"subtitle",children:a})]})]})},h=function(e){var t=e.data;return Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)(l,{data:e},e.id)}))})},m=(n(15),function(e){var t=e.name,n=e.date,a=e.workData;return Object(j.jsxs)("div",{className:"board",children:[n&&Object(j.jsx)("h1",{className:"board-date",children:n}),Object(j.jsx)("h2",{className:"board-title",children:t}),Object(j.jsx)("div",{className:"board-list",children:Object(j.jsx)(h,{data:a})})]})});n(16);var b=function(){var e=(new Date).toDateString().slice(3,11),t=new Date((new Date).getTime()+864e5).toDateString().slice(3,11),n=Object(s.useState)([]),a=Object(d.a)(n,2),c=a[0],r=a[1],i=Object(s.useState)([]),o=Object(d.a)(i,2),u=o[0],l=o[1],h=Object(s.useState)([]),b=Object(d.a)(h,2),f=b[0],p=b[1];return Object(s.useEffect)((function(){fetch("https://synement.herokuapp.com/te/today").then((function(e){return e.json()})).then((function(e){return r(e)})),fetch("https://synement.herokuapp.com/te/tomorrow").then((function(e){return e.json()})).then((function(e){return l(e)})),fetch("https://synement.herokuapp.com/te/after").then((function(e){return e.json()})).then((function(e){return p(function(e){return e.sort((function(e,t){return new Date(e.date_due)-new Date(t.date_due)}))}(e))}))}),[]),Object(j.jsxs)("div",{className:"main-app-container",children:[Object(j.jsx)("h1",{className:"page-title",children:"synement"}),Object(j.jsx)("p",{className:"page-author",children:"Made with \u2764\ufe0f by Danyl & Gandharv"}),Object(j.jsxs)("div",{className:"all-boards-container",children:[Object(j.jsx)(m,{name:"Today",date:e,workData:c}),Object(j.jsx)(m,{name:"Tomorrow",date:t,workData:u}),Object(j.jsx)(m,{name:"Coming up",date:"Next",workData:f})]})]})},f=new u.a("G-P3SFV0S4LJ");!function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.initialize().then((function(e){return console.log("Successfully started.")})).catch((function(e){return console.log("Failure starting.")})).finally((function(){o.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()()}},[[17,1,2]]]);
//# sourceMappingURL=main.d46d87fc.chunk.js.map