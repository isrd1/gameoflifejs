!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);var i=class{constructor(e){this.cells=[],this.height=e.uniHeight,this.length=e.uniLength,this.cellHeight=e.cellHeight,this.cellLength=e.cellLength}create(){for(let e=0;e<this.height;e++){this.cells.push(new Array);for(let t=0;t<this.length;t++){const s=e*this.length+t;this.cells[e].push({id:s,state:0,x:t*this.cellLength,y:e*this.cellHeight,neighbours:[s-this.length-1,s-this.length,s-this.length+1,s-1,s+1,s+this.length-1,s+this.length,s+this.length+1]})}}}};function n(e,t,s){const i=e.universe.length,n=e.universe.height;let l=0;for(let s=0;s<8;s++){const r=t.neighbours[s];r>=i*n||r<0||1===h(e,r).state&&l++}1===t.state?l<2?s.push(t.id):l>3&&s.push(t.id):3===l&&s.push(t.id)}function l(e){this.ctx.fillStyle=e.state?"white":"#333",this.ctx.fillRect(e.x+1,e.y+1,this.universe.cellLength-2,this.universe.cellHeight-2),e.state=e.state?0:1}function h(e,t){const s=Math.floor(t/e.universe.length),i=t%e.universe.length;return e.universe.cells[s][i]}var r=class{constructor(e){this.timer=null,this.canvas=e.canvas,this.ctx=e.context,this.universe=e.universe,this.universeElem=document.getElementById("universe"),this.speed=e.speed,this.stopListener=this.stop.bind(this),this.playListener=this.play.bind(this),this.loopCellsListener=function(e){const t=this.universeElem,s=e.pageX-t.offsetLeft,i=e.pageY-t.offsetTop;for(let e=0;e<this.universe.height;e++)for(let t=0;t<this.universe.length;t++){const n=this.universe.cells[e][t];s>n.x&&s<n.x+this.universe.cellLength&&i>n.y&&i<n.y+this.universe.cellHeight&&l.apply(this,[n])}}.bind(this),this.loadListener=this.load.bind(this),this.saveListener=this.save.bind(this),function(){this.ctx.strokeStyle="#777",this.ctx.lineWidth=1;for(let e=1;e<this.universe.length;e++)this.ctx.beginPath(),this.ctx.moveTo(this.universe.cellLength*e,0),this.ctx.lineTo(this.universe.cellLength*e,this.universe.height*this.universe.cellHeight),this.ctx.stroke();for(let e=1;e<this.universe.height;e++)this.ctx.beginPath(),this.ctx.moveTo(0,this.universe.cellHeight*e),this.ctx.lineTo(this.universe.length*this.universe.cellLength,this.universe.cellHeight*e),this.ctx.stroke()}.apply(this)}load(){const e=JSON.parse(localStorage.getItem("cells"));if(e&&e.length===this.universe.length){Object.assign(this.universe.cells,e);for(let e=0;e<this.universe.height;e++)for(let t=0;t<this.universe.length;t++){const s=this.universe.cells[e][t];this.ctx.fillStyle=s.state?"#333":"white",this.ctx.fillRect(s.x+1,s.y+1,this.universe.cellLength-2,this.universe.cellHeight-2)}}}save(){const e=JSON.stringify(this.universe.cells);localStorage.setItem("cells",e),document.getElementById("load").disabled=!1}iniSetup(){const e=document.getElementById("start"),t=document.getElementById("save"),s=document.getElementById("load");this.universeElem.addEventListener("click",this.loopCellsListener),e.addEventListener("click",this.playListener),e.disabled=!1,t.addEventListener("click",this.saveListener),s.addEventListener("click",this.loadListener),localStorage.getItem("cells")||(s.disabled=!0)}play(e){const t=document.getElementById("start"),s=document.getElementById("stop");s.addEventListener("click",this.stopListener),s.disabled=!1,t.removeEventListener("click",this.playListener),t.disabled=!0,this.universeElem.removeEventListener("click",this.loopCellsListener),this.timer=setInterval(function(){const e=this,t=[];for(let s=0;s<this.universe.height;s++)for(let i=0;i<this.universe.length;i++){const l=this.universe.cells[s][i];n(e,l,t)}if(t.length>0==1)for(let s=0;s<t.length;s++){const i=h(e,t[s]);l.apply(this,[i])}else this.stop(null)}.bind(this),this.speed),e.preventDefault()}stop(e){const t=document.getElementById("stop");t.removeEventListener("click",this.stopListener),t.disabled=!0,clearInterval(this.timer),this.iniSetup(),e&&e.preventDefault()}};const c=document.getElementById("universe"),o=c.getContext("2d"),u=new i({uniLength:40,uniHeight:40,cellLength:16,cellHeight:16});u.create(),new r({canvas:c,context:o,universe:u,speed:200}).iniSetup()}]);
//# sourceMappingURL=bundle.js.map