(this["webpackJsonptodo-app-lbe"]=this["webpackJsonptodo-app-lbe"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),i=n(4),c=n.n(i),r=(n(14),n(7)),d=n(5),o=n(6),u=n(2),l=n(9),j=n(8),h=(n(15),n(16),n(17),n(18),n(0));var b=function(t){var e=t.items.map((function(e){return Object(h.jsxs)("div",{className:"task-wrapper",children:[Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:Object(h.jsx)("input",{type:"text",id:e.key,className:"new-list",value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}})})},e.key),Object(h.jsx)("button",{id:"task-done",onClick:function(){return t.deleteItem(e.key)},children:Object(h.jsx)("i",{class:"far fa-check-circle"})})]})}));return Object(h.jsx)("div",{children:e})},m=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.addItem=a.addItem.bind(Object(u.a)(a)),a.deleteItem=a.deleteItem.bind(Object(u.a)(a)),a.setUpdate=a.setUpdate.bind(Object(u.a)(a)),a}return Object(o.a)(n,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(""!==e){var n=[].concat(Object(r.a)(this.state.items),[e]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){var n=this.state.items;n.map((function(n){n.key===e&&(n.text=t)})),this.setState({items:n})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"to-do-app",children:[Object(h.jsx)("h1",{children:"Hello, Anggito"}),Object(h.jsxs)("div",{className:"to-do-card",children:[Object(h.jsx)("header",{children:Object(h.jsx)("h2",{children:"Your Focus on Today"})}),Object(h.jsx)("section",{children:Object(h.jsxs)("form",{id:"to-do-form",autoComplete:"off",onSubmit:this.addItem,children:[Object(h.jsx)("input",{id:"add-task",type:"text",placeholder:"Type your plan here",value:this.state.currentItem.text,onChange:this.handleInput}),Object(h.jsx)("button",{id:"button-new",type:"submit",children:Object(h.jsx)("i",{className:"fas fa-plus"})})]})}),Object(h.jsx)(b,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})]})}}]),n}(s.a.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),i(t),c(t)}))};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),p()}],[[20,1,2]]]);
//# sourceMappingURL=main.f563ad3f.chunk.js.map