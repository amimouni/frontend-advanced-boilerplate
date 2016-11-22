$(function(){$("#chart").radarChart({size:[600,400],step:1,values:{"Product Management":4.1,"Team Leading":3.5,"UI Design":4.4,"UX Design":4.2,"Art Direction":5,"Problem Solving":5,Strategy:4},showAxisLabels:!0})}),function(t){var i=function(){function i(i,s){this.ele=i,this.settings=t.extend({showAxisLabels:!1,title:"",step:1,size:[300,300],values:{},color:[10,193,156]},s),this.width=s.size[0],this.height=s.size[1],t(i).css({position:"relative",width:this.width,height:this.height}),this.canvases={},this.draw()}return i.prototype.newCanvas=function(i,s){var s=s||0,e=document.createElement("canvas");e.width=this.width,e.height=this.height,t(e).css({position:"absolute"}),this.canvases[i]=e,this.ele.appendChild(e),this.cxt=e.getContext("2d"),0!=s&&t(e).css("opacity",0).delay(s).animate({opacity:1},500)},i.prototype.draw=function(){this.newCanvas("axis",100);var i=0,s=0;t.each(this.settings.values,function(t,e){i>e&&(i=e),e>s&&(s=e)}),i=Math.floor(i),s=Math.ceil(s);for(var e=20,h=i;s>=h;h+=this.settings.step)this.cxt.beginPath(),this.cxt.arc(this.width/2,this.height/2,this.settings.step*e*h,0,2*Math.PI,!1),this.cxt.stroke(),this.settings.showAxisLabels&&this.cxt.fillText(h,this.width/2+this.settings.step*e*h+4,this.height/2-2);var a=0;for(var n in this.settings.values)a+=1;for(var h=0;a>h;h+=1){this.cxt.beginPath(),this.cxt.moveTo(this.width/2,this.height/2);var o=this.width/2+Math.cos(2*Math.PI*(h/a))*e*s,c=this.height/2+Math.sin(2*Math.PI*(h/a))*e*s;this.cxt.lineTo(o,c),this.cxt.stroke()}this.newCanvas("part",200),this.cxt.beginPath();var r=!0,h=0,l=this,x={x:null,y:null};t.each(this.settings.values,function(t,i){var s=l.width/2+Math.cos(2*Math.PI*(h/a))*e*i,n=l.height/2+Math.sin(2*Math.PI*(h/a))*e*i;r&&(l.cxt.moveTo(s,n),x.x=s,x.y=n,r=!1),l.cxt.lineTo(s,n),h+=1}),this.cxt.lineTo(x.x,x.y);var g=this.cxt.createLinearGradient(0,0,0,this.height);g.addColorStop(0,"rgba("+this.settings.color[0]+","+this.settings.color[1]+","+this.settings.color[2]+",0)"),g.addColorStop(1,"rgba("+this.settings.color[0]+","+this.settings.color[1]+","+this.settings.color[2]+",1)"),this.cxt.fillStyle=g,this.cxt.stroke(),this.cxt.fill(),this.newCanvas("labels",1e3),h=0,t.each(this.settings.values,function(t,i){l.newCanvas("label-"+h,250*h),l.cxt.fillStyle="rgba(0,0,0,.9)",l.cxt.strokeStyle="rgba(0,0,0,.2)",l.cxt.font="12px Proximanova, sans-serif";var s=(Math.min(e*i,a*e),l.width/2+Math.cos(2*Math.PI*(h/a))*e*i),n=l.height/2+Math.sin(2*Math.PI*(h/a))*e*i,o=l.width/2+Math.cos(2*Math.PI*(h/a))*e*i,c=l.height/2+Math.sin(2*Math.PI*(h/a))*e*i*1.5;if(o<l.width/2){o-=75,l.cxt.textAlign="end",l.cxt.beginPath();var r=l.cxt.measureText(t).width;l.cxt.moveTo(o-r-5,c+4),l.cxt.lineTo(o+15,c+4),l.cxt.lineTo(s-2,n),l.cxt.lineWidth=2,l.cxt.stroke()}else{o+=75,l.cxt.textAlign="start",l.cxt.beginPath();var r=l.cxt.measureText(t).width;l.cxt.moveTo(s+2,n),l.cxt.lineTo(o-15,c+4),l.cxt.lineTo(o+r+5,c+4),l.cxt.lineWidth=2,l.cxt.stroke()}l.cxt.fillText(t,o,c),h+=1}),this.newCanvas("title",1e3),this.cxt.font="bold 24px Verdana",this.cxt.fillText(this.settings.title,10,30)},i}();t.fn.radarChart=function(t){this.each(function(s,e){new i(e,t)})}}(jQuery);