(this.webpackJsonpnewtradr=this.webpackJsonpnewtradr||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var o=n(1),s=n.n(o),i=n(4),a=n.n(i),r=(n(9),n(2)),c=n.p+"static/media/newtradr-logo.8b84c350.svg",l=n(0);function u(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),s=n[0],i=n[1],a=Object(o.useState)(""),c=Object(r.a)(a,2),u=c[0],d=c[1],h="grid"===e.question.layout;function p(t){13===t.which&&s&&(e.onQuestionChange(),i(!1))}return Object(o.useEffect)((function(){return window.addEventListener("keydown",p),function(){window.removeEventListener("keydown",p)}})),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"q-container",children:[Object(l.jsx)("h2",{children:e.question.question}),"textResponse"===e.question.type&&Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("input",{className:"text-answer",autoFocus:!0,type:"text",name:"name",onChange:function(e){""!==e.target.value?i(!0):i(!1)},placeholder:"Type your response here..."})}),Object(l.jsx)("div",{className:"".concat(h?"grid-container":"column-container"),children:e.question.options.map((function(e){return Object(l.jsx)("div",{className:"".concat(h?"grid-option":"column-option"),onClick:function(){var t;d(u!==(t=e)?t:""),i(!s)},children:Object(l.jsx)("p",{children:e})},e)}))}),Object(l.jsxs)("div",{className:"help-text-container ".concat(!1===s&&"unselected"),children:[Object(l.jsx)("div",{className:"help-text",children:Object(l.jsx)("p",{style:{marginRight:"8px"},children:"Press"})}),Object(l.jsx)("div",{style:{marginRight:"8px"},className:"highlighted",children:Object(l.jsx)("p",{children:"Enter"})}),Object(l.jsx)("div",{className:"help-text",children:Object(l.jsx)("p",{style:{marginRight:"0px"},children:"to continue"})})]})]})})}var d=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=(t[0],t[1],Object(o.useState)(0)),s=Object(r.a)(n,2),i=s[0],a=s[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"main-container",children:Object(l.jsx)(u,{question:h[i],onQuestionChange:function(){a(i+1)}})}),Object(l.jsx)("img",{src:c,className:"logo"})]})},h=[{id:1,question:"What is your name?",type:"textResponse",layout:"",options:[]},{id:2,question:"A friend asks you to bet on the flip of a coin. Heads, you win $100. Tails, you lose $100. Do you...",type:"selectResponse",layout:"grid",options:["Take the bet\u2014why not make some extra money!","Walk away\u2014it's not worth the risk"]},{id:3,question:"How would others describe your driving?",type:"selectResponse",layout:"column",options:["Slow and safe","Normal, maybe a bit on the slow side","A little bit fast","Probably too fast for most people","I don't drive"]},{id:4,question:"How important is it to you that you have a lot of money when you str older?",type:"selectResponse",layout:"column",options:["Very-I aim to have an expensive lifestyle.","Somewhat-I want to make sure I can live where I want.","A bit-I do not want to worry about money.","Not very much-So long as I am doing what makes me happy."]},{id:5,question:"How would you describe your typing speed?",type:"selectResponse",layout:"column",options:["To infinity and beyond(more than 100 word per minute)","Average (between 60 and 100 words per minute)","Meh (less than 60 words per minute)"]},{id:5,question:"How often do you leave work undone until your deadline?",type:"selectResponse",layout:"column",options:["Always.","Pretty often.","Never."]},{id:6,question:"Lets just say current stock has a price of $50 per share, and its value has decreased to $42 per share only. If you sel it right now you will ose 8 dollars. 55% o the market analysts say the price will go up to $100 per share 3 months later, and 45% say it will go down evern futher by 10 dollars per month. What is your move here?",type:"selectResponse",layout:"column",options:["Se it now.","Find someone on the same boat for ideas.","Wait till after the second month has passed to monitor the price.","Wait until the price increases."]}],p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),s(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),p()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.73016368.chunk.js.map