(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),i=n.n(o),s=(n(6),n(1)),c=n(2),l=n(4),u=n(3),d=n(8);function h(e){var t;return t="X"===e.value?"#1df086":"#1d7ff0",a.a.createElement("button",{className:"square",onClick:e.onClick,style:{color:t}},e.value)}function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(d.a)(t[n],3),a=r[0],o=r[1],i=r[2];if(e[a]&&e[a]===e[o]&&e[a]===e[i])return e[a]}return null}var f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"renderSquare",value:function(e){var t=this;return a.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return a.a.createElement("div",{className:"board-div"},a.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),a.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),a.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),n}(a.a.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(c.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();v(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[this.state.stepNumber],o=v(r.squares),i=n.map((function(e,n){var r=n?"Go to move #"+n:"Go to game start";return a.a.createElement("li",{key:n},a.a.createElement("button",{onClick:function(){return t.jumpTo(n)}},r))}));return e=o?"Winner: "+o:"Next player: "+(this.state.xIsNext?"X":"O"),a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"game-board"},a.a.createElement(f,{squares:r.squares,onClick:function(e){return t.handleClick(e)}})),a.a.createElement("div",{className:"game-info"},a.a.createElement("div",{className:"status-div"},e),a.a.createElement("ol",null,i)))}}]),n}(a.a.Component);var p=function(){return a.a.createElement(m,null)},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/%7BGithub-repo-name%7D",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/%7BGithub-repo-name%7D","/service-worker.js");b?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()},6:function(e,t,n){},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.f8553fac.chunk.js.map