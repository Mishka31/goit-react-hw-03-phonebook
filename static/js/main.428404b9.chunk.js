(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={titleH1:"App_titleH1__1YnoV",titleH2:"App_titleH2__1OX-N"}},19:function(t,e,n){},2:function(t,e,n){t.exports={container:"ContactForm_container__2Hbbk",name:"ContactForm_name__3Vnva",imputAndButton:"ContactForm_imputAndButton__ICuC_",imput:"ContactForm_imput__2k1Qk",button:"ContactForm_button__krUOV"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(12),r=n.n(s),i=(n(19),n(13)),o=n(14),l=n(5),u=n(6),m=n(8),b=n(7),d=n(4),h=n(2),j=n.n(h),p=n(0),_=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.hendkeSubmit=function(e){if(e.preventDefault(),t.props.listArrey.map((function(t){return t.name.toLowerCase()})).includes(t.state.name.toLowerCase()))return t.reset(),void alert("".concat(t.state.name," is already in contacts"));t.props.onSubmit(t.state),t.reset()},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:j.a.container,children:Object(p.jsxs)("form",{className:j.a.imputAndButton,onSubmit:this.hendkeSubmit,children:[Object(p.jsxs)("label",{htmlFor:this.nameId,children:[Object(p.jsx)("p",{className:j.a.name,children:"Name"}),Object(p.jsx)("input",{type:"text",className:j.a.imput,onChange:this.handleChange,value:this.state.name,name:"name",id:this.nameId,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{htmlFor:this.numberId,children:[Object(p.jsx)("p",{className:j.a.name,children:"Number"}),Object(p.jsx)("input",{type:"tel",className:j.a.imput,onChange:this.handleChange,value:this.state.number,name:"number",id:this.numberId,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),f=n(3),O=n.n(f);var x=function(t){var e=t.contacts,n=t.onDelete;return Object(p.jsx)("section",{className:O.a.section,children:Object(p.jsx)("ul",{children:e.map((function(t){return Object(p.jsxs)("li",{className:O.a.li,children:[Object(p.jsxs)("span",{className:O.a.name,children:[t.name,":"]})," ",Object(p.jsx)("a",{className:O.a.number,href:"tel:{contact.number}",children:t.number}),Object(p.jsx)("button",{className:O.a.button,id:t.id,onClick:n,children:"Delete"})]},t.id)}))})})},v=n(9),C=n.n(v);var N=function(t){var e=t.value,n=t.onSearch;return Object(p.jsxs)("div",{className:C.a.container,children:[Object(p.jsx)("p",{className:C.a.title,children:"Find contacts by name:"}),Object(p.jsx)("input",{type:"text",value:e,onChange:n,className:C.a.imput})]})},S=n(11),g=n.n(S),y=n(23),k=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(o.a)(n),[Object(i.a)({id:Object(y.a)()},e)])}}))},t.onDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e.target.id}))}}))},t.onFind=function(e){t.setState({filter:e.target.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.state.filter.toLowerCase(),c=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:g.a.titleH1,children:"Phonebook"}),Object(p.jsx)(_,{onSubmit:this.formSubmitHandler,listArrey:e}),Object(p.jsx)("h2",{className:g.a.titleH2,children:"Contacts"}),Object(p.jsx)(N,{value:n,onSearch:this.onFind}),Object(p.jsx)(x,{contacts:c,onDelete:this.onDelete})]})}}]),n}(a.Component);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={section:"ContactList_section__3JFec",button:"ContactList_button__108lx",name:"ContactList_name__bw2U4",number:"ContactList_number__dREU8",li:"ContactList_li__1rVIm"}},9:function(t,e,n){t.exports={imput:"Filter_imput__1RTPo",container:"Filter_container___1eWX",title:"Filter_title__2UzjM"}}},[[21,1,2]]]);
//# sourceMappingURL=main.428404b9.chunk.js.map