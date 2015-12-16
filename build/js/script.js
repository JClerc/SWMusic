"use strict";var App={};!function(){for(var e=0,n=["webkit","moz"],i=0;i<n.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[n[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[i]+"CancelAnimationFrame"]||window[n[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,i){var t=(new Date).getTime(),a=Math.max(0,16-(t-e)),o=window.setTimeout(function(){n(t+a)},a);return e=t+a,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var $=document.querySelector.bind(document),$$=document.querySelectorAll.bind(document);window.GLOBAL_SPEED=.1,window.HYPERSPACE=!0,function(e){if(e.width=window.innerWidth,e.height=window.innerHeight,e.getContext){var n=e.getContext("2d"),i=e.width,t=e.height,a=100,o=10,r=[];n.lineCap="round";for(var s=function(e){var n,a;e?(n=100*Math.random()-50,a=100*Math.random()-50):(n=Math.random()*i,a=Math.random()*t);var r=e?i/2:0+n,s=e?t/2:0+a,d=~~(80*Math.random()+20);return{x:r,y:s,xs:(n-i/2)/500,ys:(a-t/2)/500,size:~~(d/20),length:Math.random()*o,color:"rgb("+d+", "+d+", "+~~(d+20*Math.random())+")"}},d=0;a>d;d++)r.push(s(!1));!function c(){window.HYPERSPACE&&window.requestAnimationFrame(c),n.clearRect(0,0,i,t);for(var e=0;a>e;e++){var o=r[e];(o.x<0||o.y<0||o.x>i||o.y>t)&&(o=r[e]=s(!1)),n.strokeStyle=o.color,n.lineWidth=o.size,n.shadowBlur=5,n.shadowColor="#555",n.beginPath(),n.moveTo(o.x,o.y),n.lineTo(o.x+.1+o.length*o.xs*window.GLOBAL_SPEED,o.y+o.length*o.ys*window.GLOBAL_SPEED),n.stroke(),o.x+=o.xs*window.GLOBAL_SPEED,o.y+=o.ys*window.GLOBAL_SPEED}}()}}($(".hyperspace")),App["goto"]=function(e,n){var i=$("section.visible"),t=$("."+e),a=n?"up":"down";if(!t||"boolean"!=typeof n)throw new Error("Wrong arguments: "+t+", "+n);if(i==t)throw new Error("Moving to the same page..");i&&(i.classList.remove("visible"),i.classList.add("exit-"+a),i.addEventListener("animationend",function o(e){i.removeEventListener("animationend",o),i.classList.remove("exit-"+a)})),t.classList.add("visible"),t.classList.add("enter-"+a),t.addEventListener("animationend",function r(n){t.removeEventListener("animationend",r),t.classList.remove("enter-"+a),App.setLocation(e)})},App.setLocation=function(e){window.location.hash="#/"+e},$(".begin").addEventListener("click",function(e){var n=setInterval(function(){window.GLOBAL_SPEED=1.3*(window.GLOBAL_SPEED+.1),window.GLOBAL_SPEED>70&&clearInterval(n)},100),i=$(".home"),t=$(".select");i.classList.add("exit-hyperspace"),t.classList.add("enter-hyperspace"),i.addEventListener("animationend",function a(e){i.removeEventListener("animationend",a),window.HYPERSPACE=!1,i.classList.remove("visible"),t.classList.add("visible"),App.setLocation("select")})}),window.addEventListener("hashchange",function(e){e.preventDefault()});for(var bindNavigation=function(e){e.addEventListener("click",function(e){App["goto"](this.getAttribute("data-target"),"up"===this.getAttribute("data-direction")),e.preventDefault()})},elements=$$(".navigation"),i=elements.length-1;i>=0;i--)bindNavigation(elements[i]);if(window.location.hash&&window.location.hash.length>2){var hash="."+window.location.hash.substring(2),page=$(hash);if(page&&page.classList.contains("page")){var current=$("section.visible");current&&current.classList.remove("visible"),page.classList.add("visible")}}console.log("Libs and App loaded !");
//# sourceMappingURL=script.js.map
