(this["webpackJsonpreact-start"]=this["webpackJsonpreact-start"]||[]).push([[0],{189:function(t,e,n){},190:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(73),s=n.n(r),i=n(8),o=n(2),l=n(3),u=n(6),m=n(7),b=n(48),d=n.n(b),j=n(1);function h(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{className:d.a.section,children:[e&&Object(j.jsx)("h2",{className:d.a.title,children:e}),n]})}var p=n(37),O=n(17),_=n(9),f=n.n(_),x=p.a({name:p.b().min(2,"Too Short!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example: Charles de Batz de Castelmore d'Artagnan"),number:p.b().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").min(6)}),v=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)("div",{className:f.a.inputContainer,children:Object(j.jsx)(O.d,{initialValues:{name:"",number:""},validationSchema:x,onSubmit:function(e,n){var a=n.setSubmitting,c=n.resetForm;a(!1),t.props.getSubmit(e),c()},children:Object(j.jsxs)(O.c,{autocompleted:"off",children:[Object(j.jsxs)("div",{className:f.a.inputContainer,children:[Object(j.jsx)(O.b,{type:"text",name:"name",className:f.a.input}),Object(j.jsx)("label",{className:f.a.label,children:"Name:"}),Object(j.jsx)(O.a,{name:"name",component:"div",className:f.a.error})]}),Object(j.jsxs)("div",{className:f.a.inputContainer,children:[Object(j.jsx)(O.b,{type:"tel",name:"number",className:f.a.input}),Object(j.jsx)("label",{className:f.a.label,children:"Number:"}),Object(j.jsx)(O.a,{name:"number",component:"div",className:f.a.error})]}),Object(j.jsx)("button",{type:"submit",className:f.a.borderButton,children:"add contact"})]})})})}}]),n}(a.Component),C=n(20),N=n.n(C);function S(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:N.a.list,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:N.a.name,children:a}),Object(j.jsx)("p",{className:N.a.number,children:c})]}),Object(j.jsx)("button",{onClick:function(){return n(e)},className:N.a.slidingButton,children:"delete"})]},e)}))}),Object(j.jsxs)("p",{className:N.a.totalContact,children:["all contacts in phonebook: ",e.length]})]})}var g=n(79),y=n(36),F=n.n(y);function A(t){var e=t.value,n=t.searchContact;return Object(j.jsx)("div",{className:F.a.form,children:Object(j.jsxs)("label",{className:F.a.label,children:["Find contact by name:",Object(j.jsx)(g.DebounceInput,{type:"text",autoComplete:"off",minLength:2,debounceTimeout:300,placeholder:"search ........",value:e,onChange:n,className:F.a.input})]})})}var k=n(81),B=n(80),D=n.n(B),w=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:" "},t.getDataSubmit=function(e){var n=e.name,a=e.number,c=t.state.contacts,r={id:Object(k.a)(),name:n,number:a};c.find((function(t){return t.name===r.name}))?alert("".concat(r.name," is alredy in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(i.a)(e))}}))},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.searchContact=function(e){t.setState({filter:e.target.value})},t.sensitiveSearch=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase().trim();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.sensitiveSearch();return Object(j.jsxs)("div",{className:D.a.container,children:[Object(j.jsx)(h,{title:"Phonebook",children:Object(j.jsx)(v,{getSubmit:this.getDataSubmit})}),Object(j.jsxs)(h,{title:"Contacts",children:[Object(j.jsx)(A,{value:t,searchContact:this.searchContact}),Object(j.jsx)(S,{contacts:e,onDeleteContact:this.onDeleteContact})]})]})}}]),n}(a.Component),P=w;n(189);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))},20:function(t,e,n){t.exports={list:"Contacts_list__2b0Ss",totalContact:"Contacts_totalContact__2lNch",slidingButton:"Contacts_slidingButton__1AYWR"}},36:function(t,e,n){t.exports={form:"Filter_form__3waiG",input:"Filter_input__QAhIr",label:"Filter_label__2xYcQ"}},48:function(t,e,n){t.exports={section:"Section_section__2E98J",title:"Section_title__V9ok7"}},80:function(t,e,n){t.exports={container:"App_container___P6pN"}},9:function(t,e,n){t.exports={inputContainer:"Forms_inputContainer__3PQq0",input:"Forms_input__Ul_Cp",label:"Forms_label__1bnMO",error:"Forms_error__1P0LJ",borderButton:"Forms_borderButton__2ZRa5"}}},[[190,1,2]]]);
//# sourceMappingURL=main.829a8465.chunk.js.map