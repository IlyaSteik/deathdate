(window.webpackJsonpdeathdate=window.webpackJsonpdeathdate||[]).push([[0],{165:function(e,t,a){e.exports=a(253)},244:function(e,t,a){},253:function(e,t,a){"use strict";a.r(t);a(166),a(192),a(194),a(195),a(197),a(198),a(199),a(200),a(201),a(202),a(203),a(204),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234);var n=a(0),r=a.n(n),s=a(81),i=a.n(s),o=a(21),c=a.n(o),l=a(13),u=a.n(l),p=a(33),h=a(82),m=a(83),d=a(94),b=a(84),f=a(24),g=a(95),v=(a(243),a(244),a(85)),y=a.n(v),w=a(86),x=a.n(w),k=a(22),E=a(92),j=a.n(E),O=a(93),S=a.n(O),_=(Object(k.i)(),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).back=function(){if(null===a.state.popout){var e=a.state,t=e.activePanel,n=e.history;"main"===t?c.a.send("VKWebAppClose",{status:"success"}):1===n.length?c.a.send("VKWebAppClose",{status:"success"}):n.length>1&&(n.pop(),t=n[n.length-1],a.setState({activePanel:t}),a.change_hash(t))}else a.setState({popout:null})},a.state={popout:null,history:["main"],activePanel:"main",time:"",screen:!1,scheme:"bright_light",paralel:!1},a.componentDidMount=a.componentDidMount.bind(Object(f.a)(a)),a.initializeApp=a.initializeApp.bind(Object(f.a)(a)),a.back=a.back.bind(Object(f.a)(a)),a.go=a.go.bind(Object(f.a)(a)),a.change_hash=a.change_hash.bind(Object(f.a)(a)),a.generateRandomTime=a.generateRandomTime.bind(Object(f.a)(a)),a.updateTime=a.updateTime.bind(Object(f.a)(a)),y.a.init(),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.generateRandomTime(!1);case 2:e.sent,this.updateTime(),window.addEventListener("popstate",(function(e){e.preventDefault(),t.back(e)})),c.a.subscribe(function(){var e=Object(p.a)(u.a.mark((function e(a){var n,r,s,i,o,c,l,p,h,m,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.detail,r=n.type,s=n.data,void 0!==r&&console.log(r,s),"VKWebAppUpdateConfig"!==r){e.next=10;break}(i=document.createAttribute("scheme")).value="space_gray",document.body.attributes.setNamedItem(i),t.setState({scheme:i.value}),console.log(t.state.scheme),e.next=32;break;case 10:if("VKWebAppViewRestore"!==r){e.next=32;break}for(t.setState({popout:null,screen:!1}),o=document.getElementsByClassName("bg_shape_container"),c=!0,l=!1,p=void 0,e.prev=16,h=o[Symbol.iterator]();!(c=(m=h.next()).done);c=!0)d=m.value,console.log("delete",d),d.delete();e.next=24;break;case 20:e.prev=20,e.t0=e.catch(16),l=!0,p=e.t0;case 24:e.prev=24,e.prev=25,c||null==h.return||h.return();case 27:if(e.prev=27,!l){e.next=30;break}throw p;case 30:return e.finish(27);case 31:return e.finish(24);case 32:case"end":return e.stop()}}),e,null,[[16,20,24,32],[25,,27,31]])})));return function(t){return e.apply(this,arguments)}}()),this.initializeApp();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"initializeApp",value:function(){var e=this;c.a.send("VKWebAppInit");var t=window.location.hash;t?(t=t.replace("#",""),this.go(t)):this.change_hash("main");var a=["https://image.flaticon.com/icons/svg/2893/2893113.svg","https://image.flaticon.com/icons/svg/2893/2893195.svg"];setInterval((function(){var t=document.createElement("div");t.className="bg_shape_container";var n=document.createElement("img");n.className="bg_shape light_outline",n.src=a[e.random(0,a.length)],n.style.left=e.random(-15,90)+"vw",t.appendChild(n),document.getElementById("bg_shapes").appendChild(t);for(var r=0;r<5;r++)n.style.setProperty("--offset-x-"+r,e.random(-20,20)+"vw");setTimeout((function(){t.remove()}),1e4)}),600)}},{key:"generateRandomTime",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Date(Date.now()+this.random(36e5,31536e8));case 2:if(a=e.sent,n=["\u0433\u043e\u043b\u043e\u0434\u0430","\u0436\u0430\u0436\u0434\u044b","\u0434\u0438\u0435\u0442\u044b","\u043d\u0435\u0445\u0432\u0430\u0442\u043a\u0438 \u043a\u0438\u0441\u043b\u043e\u0440\u043e\u0434\u0430"],this.state.reason2){e.next=16;break}if(!t){e.next=12;break}return e.next=8,this.setState({reason2:n[this.random(0,n.length)]});case 8:return e.next=10,this.setState({timeDate2:a});case 10:e.next=16;break;case 12:return e.next=14,this.setState({reason:n[this.random(0,n.length)]});case 14:return e.next=16,this.setState({timeDate:a});case 16:return e.next=18,this.setState({paralel:t});case 18:return e.abrupt("return",!0);case 19:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateTime",value:function(){var e=this;setInterval((function(){try{var t,a,n,r,s,i=(e.state.paralel?e.state.timeDate2.getTime():e.state.timeDate.getTime())-Date.now();t=Math.floor(i/31536e6),i-=31536e6,a=Math.floor(i/864e5)%365,i-=864e5,n=Math.floor(i/36e5)%24,i-=36e5,r=Math.floor(i/6e4)%60,i-=6e4,s=Math.floor(i/1e3)%60,i-=1e3;for(var o=[[t,"\u043b\u0435\u0442"],[a,"\u0434\u043d\u0435\u0439"],[n,"\u0447."],[r,"\u043c\u0438\u043d."],[s,"\u0441\u0435\u043a."]],c=[],l=0;l<o.length;l++)o[l][0]>0&&c.push(o[l][0]+" "+o[l][1]);e.setState({time:c.join(", ")})}catch(u){console.error(u)}}),500)}},{key:"go",value:function(e){var t=this.state.history;t[t.length-1]!==e&&(t.push(e),window.history.pushState({activePanel:e},"Title"),this.setState({activePanel:e,history:t,snackbar:null})),this.change_hash(e)}},{key:"change_hash",value:function(e){c.a.send("VKWebAppSetLocation",{location:e})}},{key:"sleep",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"random",value:function(e,t){return Math.floor(Math.random()*(t-e)+e)}},{key:"render",value:function(){var e=this;return r.a.createElement(k.h,{activePanel:this.state.activePanel,popout:this.state.popout,history:this.state.history,onSwipeBack:this.back},r.a.createElement(k.e,{id:"main",style:{height:"100vh",width:"100vw"}},r.a.createElement("div",{id:"bg_shapes"}),r.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80vw",textAlign:"center",paddingBottom:""}},r.a.createElement(k.g,{level:"1",weight:"semibold"},"\u041c\u043d\u0435 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c ",r.a.createElement("span",{style:{backgroundImage:"linear-gradient(to left, #fc6076 0%, #ff9a44 100%)",color:"white",lineHeight:"18px",padding:"0 4px 8px 4px",display:"inline-block"}},"\u0436\u0438\u0442\u044c")),r.a.createElement(k.g,{level:"2",weight:"semibold",style:{marginTop:"12px"}},this.state.time),r.a.createElement(k.d,{weight:"semibold",style:{marginTop:"12px",color:"white",background:"linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)",padding:"0 4px 4px 4px",display:"inline-block"}},"\u042f \u0443\u043c\u0440\u0443 \u0438\u0437-\u0437\u0430 "+(this.state.paralel?this.state.reason2:this.state.reason)),r.a.createElement("br",null),r.a.createElement(k.a,{before:r.a.createElement(S.a,{width:20,height:20,style:{paddingRight:"4px"}}),size:"l",style:{marginTop:"12px",display:this.state.screen&&"none"},onClick:Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.generateRandomTime(!e.state.paralel);case 2:case"end":return t.stop()}}),t)})))},this.state.paralel?"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f":"\u041f\u0430\u0440\u0430\u043b\u0435\u043b\u044c\u043d\u0430\u044f \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u0430\u044f")),r.a.createElement(k.c,{vertical:"bottom",style:{marginBottom:"12px",display:this.state.screen&&"none"}},r.a.createElement(k.b,null,r.a.createElement(k.a,{onClick:Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({popout:r.a.createElement(k.f,null),screen:!0}),t.next=3,e.sleep(250);case 3:x()(document.getElementsByClassName("View__panels")[0]).then(function(){var t=Object(p.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.toDataURL("image/png"),t.prev=1,t.next=4,c.a.send("VKWebAppShowStoryBox",{background_type:"image",blob:n});case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:e.setState({popout:null,screen:!1});case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)}))),before:r.a.createElement(j.a,null),size:"xl",mode:"commerce"},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438")))))}}]),t}(r.a.Component));i.a.render(r.a.createElement(_,{className:""}),document.getElementById("root"))}},[[165,1,2]]]);
//# sourceMappingURL=main.2de75e97.chunk.js.map