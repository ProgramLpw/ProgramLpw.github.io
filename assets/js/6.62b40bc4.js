(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{331:function(t,e,a){},385:function(t,e,a){"use strict";a(331)},399:function(t,e,a){"use strict";a.r(e);a(3),a(12);var r={mounted(){1==document.getElementsByClassName("fantasy").length&&(this.clearBannerColor(),this.$attrs.index&&this.mountedElement(),this.init())},methods:{init(){var t=document.getElementById("cvs");if(t){var e=t.getContext("2d"),a=document.getElementById("display"),r=a.getContext("2d"),n=document.getElementById("screenImage"),i=n.getContext("2d"),o=document.getElementById("rili"),s=o.getContext("2d");setInterval(A,36e5);A();var l=new Image;l.src="/fantasy/Screenmask.png";var g=new Image;g.src="/fantasy/screen.png";var c=setInterval(()=>{g.complete&&l.complete&&(i.drawImage(g,-300,-50,1280,720),i.globalCompositeOperation="destination-atop",i.drawImage(l,0,0),i.globalCompositeOperation="source-over",clearInterval(c))},14);window.onresize=function(){var t=window.devicePixelRatio||1;a.width=window.innerWidth,window.innerWidth/window.innerHeight>1.8333333333333?(a.height=window.innerWidth/1980*1080*t,r.scale(t,t)):a.height=window.innerHeight},window.onresize();var m=new Image;m.src="/fantasy/bg.png";var d=new Image;d.src="/fantasy/mask.png";var h=new Image;h.src="/fantasy/light.png";var f=new Image;f.src="/fantasy/caidai.png";var w=new Image;w.src="/fantasy/22.png";var p=new Image;p.src="/fantasy/screenLight.png";var u=new Image;u.src="/fantasy/phoneLight.png";for(var v=JSON.parse('[{"time":0,"text":"凌晨啦!"},{"time":6,"text":"早上好!"},{"time":8,"text":"上午好!"},{"time":11,"text":"你吃了吗"},{"time":13,"text":"下午好鸭!"},{"time":16,"text":"傍晚咯!"},{"time":19,"text":"晚安!"}]'),I=new Array(128),b=new Array(128),y=0;y<128;y++)I[y]=b[y]=0;var S=1;if(window.wallpaperRegisterAudioListener)window.wallpaperRegisterAudioListener((function(t){for(var e=0,a=0;a<128;a++)t[a]>e&&(e=t[a]);for(S=.99*S+.01*e,a=0;a<64;a++)I[63-a]=t[a]/S;for(a=0;a<64;a++)I[127-a]=t[127-a]}));else{var x;let t=document.getElementsByClassName("aplayer-button")[0];t&&(t.onclick=()=>{if(document.getElementsByClassName("aplayer-play")[0])x=setInterval(()=>{for(t=0;t<64;t++)S=.99*S+.01,I[63-t]=.4*Math.random()/S*Math.random();for(t=0;t<64;t++)I[127-t]=.2*Math.random()*Math.random()},130);else{clearInterval(x);for(var t=0;t<128;t++)I[t]=b[t]=0}})}var P={r:80,g:120,b:169},M={r:80,g:120,b:169},C={r:0,g:34,b:77,a:0},E=!1;window.requestAnimationFrame((function i(){for(var s=0;s<128;s++)b[s]+=.3*(I[s]-b[s]),b[s]=k(b[s],1);M.r+=.01*(P.r-M.r),M.r=k(M.r,255),M.r=T(M.r,0),M.g+=.01*(P.g-M.g),M.g=k(M.g,255),M.g=T(M.g,0),M.b+=.01*(P.b-M.b),M.b=k(M.b,255),M.b=T(M.b,0),e.clearRect(0,0,1980,1080),e.drawImage(m,0,0),e.drawImage(d,954,99),e.fillStyle="#97adbb",e.font="32pt Impact",e.transform(1,Math.PI/180*2.05,0,1,0,0);var l,g,c=new Date;e.fillText((c.getHours()<10?"0":"")+c.getHours().toString()+":"+(c.getMinutes()<10?"0":"")+c.getMinutes()+":"+(c.getSeconds()<10?"0":"")+c.getSeconds().toString(),725,318),e.resetTransform(),e.transform(.9645,0,Math.PI/180*0,.96,967,100),e.rotate(Math.PI/180*6),e.drawImage(o,0,0),e.resetTransform(),e.transform(.9645,0,Math.PI/180*9,1,825,160),e.rotate(Math.PI/180*7),P={r:80,g:120,b:169},E&&(P={r:255,g:75,b:80}),e.fillStyle="rgba(0,0,0,0.5)",e.fillRect(-10,320,650,2),e.fillStyle="rgb("+(l=M).r.toString()+","+l.g.toString()+","+l.b.toString()+")";for(var s=32;s<95;s++)e.fillRect(10*(s-32),300-300*b[s]+20,4,300*b[s]);e.resetTransform(),e.globalCompositeOperation="overlay",e.drawImage(h,971,197),e.globalCompositeOperation="source-over",e.drawImage(f,949,25),e.drawImage(w,1319,345),E&&C.a<.7?(C.a+=.005,C.a=k(C.a,.7)):E||(C.a-=.005,C.a=T(C.a,0)),C.a>0&&(e.globalCompositeOperation="hard-light",e.fillStyle="rgba("+(g=C).r.toString()+","+g.g.toString()+","+g.b.toString()+","+g.a.toString()+")",e.fillRect(0,0,1980,1080),e.globalCompositeOperation="source-over",e.globalAlpha=C.a/.7,e.drawImage(u,860,437),e.globalAlpha=1),e.drawImage(n,0,0),C.a>0&&(e.globalAlpha=C.a/.7,e.drawImage(p,0,0),e.globalAlpha=1),E=!0;var y="凌晨啦!";v.forEach(t=>{c.getHours()>=t.time&&(y=t.text)}),c.getHours()>=6&&c.getHours()<=18&&(E=!1),E=E,e.fillStyle="#000",e.font="31.02pt SimHei",e.transform(1.0911,Math.PI/180*-35,0,.5868,1132.94,564.07),e.rotate(Math.PI/180*56.5),e.textAlign="center",e.fillStyle="#fff",e.fillText(y,135,100),e.textAlign="start",e.resetTransform(),r.drawImage(t,0,0,a.width,a.height),window.requestAnimationFrame(i)}))}function A(){s.clearRect(0,0,600,600);var t,e=new Date,a=e.getYear(),r=e.getMonth(),n=e.getDate(),i=e.getDay(),o=["SUN","MON","TUES","WED","THUR","FRI","SAT"],l=(n-1)%7;t=i>=l?i-l:i-l+7;var g=1,c=30;c=[4,6,9,11].indexOf(r+1)>-1?30:[1,3,5,7,8,10,12].indexOf(r+1)>-1?31:a%4==0&&a%100!=0||a%400==0?29:28;var m=/^\d+(\d+)?$/;function d(t,e,a){s.textAlign="center",s.fillStyle="rgb(69,68,84)",s.font=40/1.5+"px Impact";0!=a&&6!=a||!m.test(t)||(s.fillStyle="#900"),s.fillText(t.toString(),45+40*a*1.7+40/1.18,50+40*e+40/3*2+3),t==n&&function(t,e){s.save(),s.beginPath(),s.strokeStyle="#900",s.arc(45+40*t*1.7+40/1.18,50+40*e+20,10,-Math.PI,1*Math.PI),s.stroke(),s.closePath(),s.beginPath(),s.arc(45+40*t*1.7+40/1.18,50+40*e+20,11,-Math.PI,.9*Math.PI),s.stroke(),s.closePath(),s.beginPath(),s.arc(45+40*t*1.7+40/1.18,50+40*e+20,12,-Math.PI,.8*Math.PI),s.stroke(),s.closePath(),s.beginPath(),s.arc(45+40*t*1.7+40/1.18,50+40*e+20,13,-Math.PI,.7*Math.PI),s.stroke(),s.closePath(),s.beginPath(),s.arc(45+40*t*1.7+40/1.18,50+40*e+20,14,-Math.PI,.6*Math.PI),s.stroke(),s.closePath(),s.restore()}(a,e)}s.fillStyle="rgb(69,68,84)",s.font="900 26pt SimHei",s.textAlign="center";s.scale(1.1,1),s.fillText(["一","二","三","四","五","六","七","八","九","十","十一","十二"][r]+"月",260,32),s.resetTransform(),s.font="20pt SimHei",s.textAlign="end",s.fillText(n+"日",520,38);for(var h=0;h<6;h++)for(var f=0;f<7;f++)s.strokeRect(45+40*f*1.7,50+40*h,68,40);g=1;for(h=0;h<6;h++)for(f=0;f<7;f++)if(0!=h){if(!(1==h&&f<t)){if(g>c)break;d(g++,h,f)}}else d(o[f],h,f)}function k(t,e){return t>e?e:t}function T(t,e){return t>e?t:e}},mountedElement(){let t=document.getElementsByClassName("fantasy")[0],e=document.getElementsByClassName("banner")[0];e.style.background="",t&&e&&e.appendChild(t)},clearBannerColor(){let t=document.getElementsByClassName("banner-color")[0];t&&t.parentNode.removeChild(t)}}},n=(a(385),a(1)),i=Object(n.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fantasy"},[e("canvas",{staticClass:"hidden",attrs:{id:"cvs",width:"1980",height:"1080"}}),this._v(" "),e("canvas",{staticClass:"hidden",attrs:{id:"screenImage",width:"234",height:"357"}}),this._v(" "),e("canvas",{staticClass:"hidden",attrs:{id:"rili",width:"600",height:"600"}}),this._v(" "),e("canvas",{attrs:{id:"display"}})])}],!1,null,null,null);e.default=i.exports}}]);