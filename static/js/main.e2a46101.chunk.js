(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/dice.451ee05d.png"},17:function(e,a,t){e.exports=t.p+"static/media/318968__djm62__successarpeggio.0d0e62da.flac"},18:function(e,a,t){e.exports=t.p+"static/media/419023__jacco18__acess-denied-buzz.ca15d0d9.mp3"},19:function(e,a,t){e.exports=t.p+"static/media/389721__uminari__rolling-rocks-01.ec0eb703.wav"},20:function(e,a,t){e.exports=t.p+"static/media/574445__f-m-audio__kicking-large-stones-down-shoreline-on-stony-beach-5.12199cb7.wav"},21:function(e,a,t){e.exports=t.p+"static/media/574449__f-m-audio__pushing-large-stones-down-shoreline-on-stony-beach-2.6ce8dee3.wav"},22:function(e,a,t){e.exports=t(44)},31:function(e,a,t){},40:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(14),s=t.n(l),r=(t(31),t(8)),o=t(15),m=t.n(o),i=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"HOME CONTAINER"),c.a.createElement("hr",null),c.a.createElement("h3",null," Games"),c.a.createElement(r.b,{to:"/dice"},c.a.createElement("img",{alt:"dicegame",src:m.a,style:{width:200,backgroundColor:"White"}})))},d=t(0),u=(t(40),t(6)),E=function(e){var a,t,l=e.diceValue,s=e.size,r=s,o=3.5*s,m=Object(n.useState)("translateZ("+r+"px) rotateX("+-45+"deg) rotateY("+-45+"deg) "),i=Object(u.a)(m,2),d=i[0],E=i[1];return Object(n.useEffect)(function(){switch(l){case 0:console.log("START");break;case 1:a=720,t=810;break;case 6:a=720,t=990;break;default:a=720+90*(6-l),t=900}var e=Math.floor(90*Math.random());E("translateZ("+o+"px) rotateY("+(t-2*e)+"deg) rotateX("+(a+2*e)+"deg) translate(-80%, -80%)"),setTimeout(function(){E("translateZ("+1.5*o+"px)rotateX("+t+"720deg)rotateY("+a+"900deg)")},500),setTimeout(function(){E("translateZ(-100px)rotateX("+t+"deg)rotateY("+a+"deg)")},800)},[l]),c.a.createElement("div",{className:"col-6",style:{marginTop:45}},c.a.createElement("div",{className:"panel"},c.a.createElement("div",{className:"dice",style:{transform:d}},c.a.createElement("div",{className:"side one"},c.a.createElement("span",{className:"dot"})),c.a.createElement("div",{className:"side two"},c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"})),c.a.createElement("div",{className:"side three"},c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"})),c.a.createElement("div",{className:"side four"},c.a.createElement("div",{className:"kolona"},c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"})),c.a.createElement("div",{className:"kolona"},c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"}))),c.a.createElement("div",{className:"side five"},c.a.createElement("div",{className:"kolona"},c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"})),c.a.createElement("div",{className:"kolona"},c.a.createElement("span",{className:"dot"})),c.a.createElement("div",{className:"kolona"},c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"}))),c.a.createElement("div",{className:"side six"},c.a.createElement("div",{className:"kolona"},c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"})),c.a.createElement("div",{className:"kolona"},c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"})),c.a.createElement("div",{className:"kolona"},c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"}))))))},p=function(e){for(var a=e.score,t=e.maxScore,l=new Array,s=0;s<t;s++)l.push({active:!1,coinId:"coin_"+s});var r=Object(n.useState)(l),o=Object(u.a)(r,2);o[0],o[1];return c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-1 rounded-circle",style:{color:"black",margin:5,background:"#76ff03",boxShadow:"0 0 50px #76ff03",width:40,height:40,zIndex:10}},a))},b=(t(42),t(9)),N=t.n(b),v=t(17),f=t.n(v),g=t(18),h=t.n(g),w=t(19),k=t.n(w),_=t(20),y=t.n(_),x=t(21),j=t.n(x),O=function(){var e=new N.a(f.a),a=new N.a(h.a),t=[new N.a(k.a),new N.a(y.a),new N.a(j.a)],l=Object(n.useState)([{number:2},{number:3},{number:4},{number:5},{number:6},{number:7},{number:8},{number:9},{number:10},{number:11},{number:12}]),s=Object(u.a)(l,2),r=s[0],o=(s[1],Object(n.useState)(0)),m=Object(u.a)(o,2),i=m[0],d=m[1],b=Object(n.useState)([0,0]),v=Object(u.a)(b,2),g=v[0],w=v[1],_=Object(n.useState)(0),x=Object(u.a)(_,2),O=x[0],S=x[1],M=function(t){console.log(t.target.value),t.target.value==O?(e.play(),d(i+1),setTimeout(function(){T()},800)):a.play(),console.log(i)},T=function(e){for(var a=[],n=0,c=0;c<g.length;c++){var l=Math.floor(6*Math.random()+1);switch(l){case g[c]:l=Math.floor(6*Math.random()+1)}a.push(l)}w(a);for(var s=0;s<a.length;s++)n+=a[s];S(n);var r=Math.floor(3*Math.random());t[r].play()};return c.a.createElement("div",{className:"container gamectr"},c.a.createElement("h1",null,"DICE GAME"),c.a.createElement("div",{className:"container playGame "},c.a.createElement(p,{score:i,maxScore:5}),c.a.createElement("div",{onClick:T,className:"row  justify-content-center"},g.map(function(e,a){return c.a.createElement(E,{key:a,diceValue:e,size:-150})})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"buttonDisplay"},r.map(function(e){var a=e.number;return c.a.createElement("button",{type:"button",key:a,value:a,className:"btn btn-primary btn-lg  diceBtn",onClick:M},a)}))))))},S=function(){return c.a.createElement("nav",{className:"navbar fixed-bottom navbar-dark bg-primary"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement(r.b,{className:"navbar-brand",to:"/"}," Back")))};var M=function(){return c.a.createElement(r.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/"},c.a.createElement(i,null)),c.a.createElement(d.a,{path:"/dice"},c.a.createElement(O,null)))),c.a.createElement(S,null))},T=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,45)).then(function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,l=a.getLCP,s=a.getTTFB;t(e),n(e),c(e),l(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null))),T()}},[[22,3,2]]]);
//# sourceMappingURL=main.e2a46101.chunk.js.map