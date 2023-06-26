"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[192],{4814:function(n,e,r){r.d(e,{$:function(){return a}});var t,o=r(168),i=r(7686).Z.h2(t||(t=(0,o.Z)(["\n  font-size: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n"]))),c=r(184),a=function(n){var e=n.title,r=n.children;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{children:e}),r]})}},6192:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var t,o,i,c,a,s,l,u,d=r(4814),p=r(9439),x=r(2791),f=r(168),b=r(7686),g=b.Z.form(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 5px solid rgb(84, 84, 253);\n  border-radius: 5px;\n  padding: 20px 40px;\n  background-color: rgb(233, 211, 137);\n  margin-bottom: 30px;\n"]))),m=b.Z.div(o||(o=(0,f.Z)(["\n  display: flex;\n  justify-content: space-around;\n"]))),h=b.Z.label(i||(i=(0,f.Z)(["\n  font-size: 16px;\n"]))),Z=b.Z.p(c||(c=(0,f.Z)(["\n  text-transform: uppercase;\n  font-size: 13px;\n  text-align: center;\n  margin-bottom: 10px;\n"]))),j=b.Z.input(a||(a=(0,f.Z)(["\n  font-size: 13px;\n  margin-bottom: 10px;\n  border-color: rgb(233, 184, 25);\n\n  :focus {\n    border-color: rgb(84, 84, 253);\n    outline: none;\n  }\n"]))),v=b.Z.button(s||(s=(0,f.Z)(["\n  background-color: rgb(84, 84, 253);\n  color: #fff;\n  outline: none;\n  padding: 5px;\n  margin: auto;\n  border-radius: 5px;\n  border-color: rgb(84, 84, 253);\n  cursor: pointer;\n  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    background-color: rgb(233, 184, 25);\n    color: rgb(84, 84, 253);\n    scale: 1.2;\n  }\n"]))),y=r(9434),k=r(6382),z=function(n){return n.contacts.contacts},w=function(n){return n.contacts.isLoading},C=function(n){return n.contacts.error},A=r(5313),_=r(5218),F=r(184);function L(){var n=(0,x.useState)(""),e=(0,p.Z)(n,2),r=e[0],t=e[1],o=(0,x.useState)(""),i=(0,p.Z)(o,2),c=i[0],a=i[1],s=(0,y.v9)(z),l=(0,y.I0)(),u=function(n){var e=n.currentTarget,r=e.name,o=e.value;switch(r){case"name":t(o);break;case"number":a(o);break;default:throw new Error("No options for ".concat(r))}},d=function(){t(""),a("")};return(0,F.jsxs)(g,{onSubmit:function(n){if(n.preventDefault(),!r.trim()||!c.trim())return alert("Please input correct name or number"),void d();var e=s.find((function(n){return n.name.toLowerCase()===r.toLowerCase()})),t=s.find((function(n){return n.number===c}));if(e)return alert("".concat(r," is already in contacts"));if(t)return alert("".concat(c," is already in contacts"));var o={id:(0,k.x0)(6),name:r,number:c};l((0,A.je)(o)),_.Am.success("Adding User is Successfuly)"),d()},children:[(0,F.jsx)(m,{children:(0,F.jsxs)(h,{children:[(0,F.jsx)(Z,{children:"Name"}),(0,F.jsx)(j,{placeholder:"Jonny First",type:"text",name:"name",value:r,onChange:u,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})}),(0,F.jsx)(m,{children:(0,F.jsxs)(h,{children:[(0,F.jsx)(Z,{children:"Phone"}),(0,F.jsx)(j,{placeholder:"12345678",type:"tel",name:"number",value:c,onChange:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})}),(0,F.jsx)(v,{type:"submit",children:"Add Contact"})]})}var P,$,I,N,S,E,T=b.Z.li(l||(l=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgb(233, 211, 137);\n  border: 2px solid rgb(84, 84, 253);\n  border-radius: 5px;\n  padding: 10px;\n  gap: 15px;\n"]))),q=b.Z.button(u||(u=(0,f.Z)(["\n  background-color: rgb(84, 84, 253);\n  color: #fff;\n  outline: none;\n  padding: 2px 5px;\n  border-radius: 5px;\n  border-color: rgb(84, 84, 253);\n  font-size: 10px;\n  cursor: pointer;\n  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    background-color: rgb(233, 184, 25);\n    color: rgb(84, 84, 253);\n    scale: 1.2;\n  }\n"]))),B=function(n){return n.filter.filter},D=function(){var n=(0,y.v9)(z),e=(0,y.I0)(),r=(0,y.v9)(B),t=n.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));return(0,F.jsx)(F.Fragment,{children:t.map((function(n){var r=n.id,t=n.name,o=n.number;return(0,F.jsxs)(T,{children:[(0,F.jsx)("p",{children:t}),(0,F.jsx)("p",{children:o}),(0,F.jsx)(q,{type:"button",onClick:function(){!function(n){e((0,A.xX)(n))}(r)},children:"Delete"})]},r)}))})},J=b.Z.ul(P||(P=(0,f.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),W=function(){return(0,F.jsx)(J,{children:(0,F.jsx)(D,{})})},M=b.Z.form($||($=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 5px solid rgb(84, 84, 253);\n  border-radius: 5px;\n  padding: 20px;\n  background-color: rgb(233, 211, 137);\n  margin-bottom: 30px;\n"]))),U=b.Z.div(I||(I=(0,f.Z)(["\n  display: flex;\n  justify-content: space-around;\n"]))),X=b.Z.label(N||(N=(0,f.Z)(["\n  font-size: 16px;\n"]))),G=b.Z.p(S||(S=(0,f.Z)(["\n  text-transform: uppercase;\n  font-size: 13px;\n  text-align: center;\n  margin-bottom: 10px;\n"]))),H=b.Z.input(E||(E=(0,f.Z)(["\n  font-size: 13px;\n  margin-bottom: 10px;\n  border-color: rgb(233, 184, 25);\n\n  :focus {\n    border-color: rgb(84, 84, 253);\n    outline: none;\n  }\n"]))),K=r(1634),O=function(){var n=(0,y.I0)();return(0,F.jsx)(M,{children:(0,F.jsx)(U,{children:(0,F.jsxs)(X,{children:[(0,F.jsx)(G,{children:"Find"}),(0,F.jsx)(H,{type:"text",placeholder:"Find contacts...",onChange:function(e){n((0,K.h)(e.currentTarget.value))}})]})})})},Q=r(5558);function R(){var n=(0,y.v9)(z),e=(0,y.v9)(w),r=(0,y.v9)(C),t=(0,y.I0)();return(0,x.useEffect)((function(){t((0,A.m$)())}),[t]),(0,F.jsxs)(Q.W,{children:[(0,F.jsx)(d.$,{title:"Phone Book",children:(0,F.jsx)(L,{})}),(0,F.jsxs)(d.$,{title:"Contacts",children:[r||0!==n.length?(0,F.jsxs)(F.Fragment,{children:[!r&&(0,F.jsx)(O,{}),(0,F.jsx)(W,{})]}):(0,F.jsx)(Q.x,{children:"There is no contacts, yet..."}),r&&_.Am.warning("Network Error... Please, try again later..."),e&&(0,F.jsx)(Q.x,{children:"Loading..."})]})]})}},5558:function(n,e,r){r.d(e,{W:function(){return a},x:function(){return s}});var t,o,i=r(168),c=r(7686),a=c.Z.div(t||(t=(0,i.Z)(["\n  background-color: #e7ecf2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 50px 50px;\n"]))),s=c.Z.span(o||(o=(0,i.Z)(["\n  text-align: center;\n  text-transform: uppercase;\n"])))}}]);
//# sourceMappingURL=192.4164872e.chunk.js.map