(this.webpackJsonpsplooshkaboom=this.webpackJsonpsplooshkaboom||[]).push([[0],{13:function(e,t,n){e.exports=n(30)},18:function(e,t,n){},19:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(10),s=n.n(i),l=(n(18),n(7)),r=n(8),c=n(3),u=n(4),p=n(6),h=n(5),d=n(12),m=n(11),b=n.n(m),y=(n(19),n(20)(["#004","#0a0","#0d0","#0f0","#6f6"])),f=function(e){return Object(d.a)(Array(e).keys())},v=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=null!==this.props.best&&this.props.best[0]==this.props.x&&this.props.best[1]==this.props.y;return a.a.createElement("div",{key:this.props.x+","+this.props.y,style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",width:"70px",height:"70px",border:this.props.valid?"1px solid grey":"1px solid red",outline:e?"4px solid yellow":"",zIndex:e?1:0,fontFamily:"monospace",userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",msUserSelect:"none",color:"white",backgroundColor:null===this.props.text?y(this.props.prob):"HIT"===this.props.text?"#a2a":"#44a"},onClick:this.props.onClick},null===this.props.text?(100*this.props.prob).toFixed(2)+"%":this.props.text)}}]),n}(a.a.Component),k=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state=e.makeEmptyState(),e.doComputation(e.state.grid,e.state.squidsGotten),e}return Object(u.a)(n,[{key:"makeEmptyState",value:function(){for(var e=[],t=[],n=0;n<8;n++)for(var o=0;o<8;o++)e[[o,n]]=null,t[[o,n]]=0;return{grid:e,squidsGotten:"unknown",probs:t,best:[3,3],valid:!0}}},{key:"doComputation",value:function(e,t){for(var n=this,o=performance.now(),a=[],i=[],s=0;s<8;s++)for(var c=0;c<8;c++){var u=e[[c,s]];"HIT"===u&&a.push([c,s]),"MISS"===u&&i.push([c,s])}for(var p=-1,h=0,d=["0","1","2"];h<d.length;h++){var m=d[h];t===m&&(p=Number(m))}b.a.ajax({url:"http://ec2-34-223-48-61.us-west-2.compute.amazonaws.com:1234/sk",type:"POST",data:JSON.stringify({hits:a,misses:i,squids_gotten:p}),success:function(e){if(e.is_possible){var t=performance.now();console.log("Latency: "+(t-o)+"ms");var a,i=Object(r.a)({},n.state.probs),s=0,c=0,u=Object(l.a)(e.probabilities);try{for(u.s();!(a=u.n()).done;){var p=a.value;c=0;var h,d=Object(l.a)(p);try{for(d.s();!(h=d.n()).done;){var m=h.value;i[[c,s]]=m,c++}}catch(b){d.e(b)}finally{d.f()}s++}}catch(b){u.e(b)}finally{u.f()}n.setState({probs:i,best:e.highest_prob,valid:!0})}else n.setState({valid:!1})}})}},{key:"onClick",value:function(e,t){var n=Object(r.a)({},this.state.grid),o=n[[e,t]];switch(o){case null:o="MISS";break;case"MISS":o="HIT";break;case"HIT":o=null}n[[e,t]]=o,this.setState({grid:n}),this.doComputation(n,this.state.squidsGotten)}},{key:"clearField",value:function(){var e=this.makeEmptyState();this.setState(e),this.doComputation(e.grid,e.squidsGotten)}},{key:"render",value:function(){for(var e=this,t=0,n=0;n<8;n++)for(var o=0;o<8;o++)null!==this.state.grid[[o,n]]&&t++;return a.a.createElement("div",{style:{margin:"20px"}},a.a.createElement("span",{style:{fontSize:"150%",color:"white"}},"Shots used: ",t),a.a.createElement("br",null),f(8).map((function(t){return a.a.createElement("div",{key:t,style:{display:"flex"}},f(8).map((function(n){return a.a.createElement(v,{key:n+","+t,x:n,y:t,onClick:function(){return e.onClick(n,t)},text:e.state.grid[[n,t]],prob:e.state.probs[[n,t]],valid:e.state.valid,best:e.state.best})})))})),this.state.valid||a.a.createElement("div",{style:{fontSize:"150%",color:"white"}},"Invalid configuration! This is not possible."),a.a.createElement("br",null),a.a.createElement("div",{style:{fontSize:"150%"}},a.a.createElement("span",{style:{color:"white"}},"Number of squids killed:"),a.a.createElement("select",{style:{marginLeft:"20px",fontSize:"100%"},value:this.state.squidsGotten,onChange:function(t){e.setState({squidsGotten:t.target.value}),e.doComputation(e.state.grid,t.target.value)}},a.a.createElement("option",{value:"unknown"},"Unknown"),a.a.createElement("option",{value:"0"},"0"),a.a.createElement("option",{value:"1"},"1"),a.a.createElement("option",{value:"2"},"2"))),a.a.createElement("br",null),a.a.createElement("button",{style:{fontSize:"150%"},onClick:function(){e.clearField()}},"Reset"))}}]),n}(a.a.Component),g=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#666"}},{key:"render",value:function(){return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("div",{style:{display:"inline-block"}},a.a.createElement("div",{style:{display:"inline-block",width:"600px"}},a.a.createElement("h1",{style:{color:"white"}},"Sploosh Kaboom Probability Calculator"),a.a.createElement("p",{style:{color:"white"}},"This page gives exact probabilities (no approximation) of hitting a squid in each cell, given the observation of hits, misses, and completed squid kills. Click on the map to cycle a cell between HIT and MISS. You can also set the number of squids completely killed in the drop-down menu at the bottom. You should set this to the value you see in the game for the number of squids killed. This will yield slightly more accurate probabilities. The highest probability location to play will be shown with a yellow outline. If you play perfectly according to picking the highlighted cell you will win in 20 or fewer shots \u224818.5% of the time.")),a.a.createElement(k,null),a.a.createElement("span",{style:{color:"white"}},"Made by Peter Schmidt-Nielsen")))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.b8a65de2.chunk.js.map