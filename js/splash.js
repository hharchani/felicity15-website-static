var dontType=!1,quitSplash=new Queue;$(document).ready(function(){function e(e,t){return Math.round(Math.random()*(t-e))+e}for(var t=new Snap("#stars"),i=t.select("#svg-background"),n=$(document).height(),a=$(document).width(),s=n*a,o=0;s/3e3>o;o++){var l='<circle cx="_CX_" cy="_CY_" r="0.5" stroke-width="0" fill="white"><animate id="zoomin_N_" class="zoomin" attributeName="r" from="0.5" to="1" dur="_D_ms" begin="_B_ms;delay_N_.end" /><animate id="zoomout_N_" class="zoomout" attributeName="r" from="1" to="0.5" dur="_D_ms" begin="zoomin_N_.end" /><animate id="delay_N_" class="delay" attributeName="r" from="0.5" to="0.5" dur="1s" begin="zoomout_N_.end" /></circle>'.replace("_B_",e(0,2e3)).replace("_CX_",e(0,a)).replace("_CY_",e(0,n)).replace(/_D_/g,e(400,1500)).replace(/_N_/g,o),r=Snap.parse(l);i.append(r)}quitSplash.append(function(e){$("#stars").css("visibility","visible"),quitSplash.finishAnim(e)}),quitSplash.append(function(e){$("#splash-title h1").animate({"font-size":$(window).width()>600?"142px":"54px"},300,function(){quitSplash.finishAnim(e)})},300),quitSplash.addLevel(),quitSplash.append(function(e){var t=$("#splash-title #typewriter");if(dontType)t.css({visibility:"visible"}).hide().fadeIn(500,function(){quitSplash.finishAnim(e)});else{var i=t.text();t.text(i[0]),t.css("visibility","visible");var n=1,a=window.setInterval(function(){t.text($("#splash-title #typewriter").text()+i[n]),++n,n>=i.length&&(window.clearInterval(a),quitSplash.finishAnim(e))},100)}},420),quitSplash.addLevel(),quitSplash.append(function(e){$("#splash-title #down-arrow").css("visibility","visible").hide().fadeIn(1e3,function(){spashScroll(),quitSplash.finishAnim(e)}),cookies.get("dontplay")||($("#music-control span").toggleClass("play pause"),$("#back_music")[0].play()),$(".after-splash-content").fadeIn(500),hashChange()},500)}),$(document).ready(function(){function e(e,t){e.animate({"stroke-dashoffset":0},2e3,void 0,function(){n.finishAnim(t)})}function t(t){t.selectAll("path").forEach(function(e){var t=e.getTotalLength();e.attr({"stroke-dasharray":t,"stroke-dashoffset":t})}),t.selectAll(".body"),i.append(t),i.selectAll("path").forEach(function(t){n.append(function(i){e(t,i)})});var a=["sun","mercury","venus","earth","mars"],s=["yellow","#c5c5c5","#E9EAC6","#057cb8","red"];n.addLevel(),n.append(function(e){function t(){o--,0===o&&n.finishAnim(e)}var o=0;i.selectAll(".orbit").forEach(function(e){++o,e.animate({stroke:"#999"},1e3,void 0,t)}),i.selectAll(".landmass").forEach(function(e){++o,e.attr({fill:"white"}).animate({fill:"green"},2e3,void 0,t)}),++o,i.select("#layer-bg").attr({fill:"white"}).animate({fill:"black"},1500,void 0,t);for(var l=0;l<a.length;++l){++o;var r=i.select("#"+a[l]);r.attr({fill:"white"}).animate({fill:s[l],stroke:s[l]},2e3,void 0,t)}},1e3),n.addLevel(),n.append(function(e){var t=i.select("#layer"),a=new Snap.Matrix;a.scale(150,150,434,375),t.animate({transform:a},4e3,mina.easeinout,function(){n.finishAnim(e)})},500),n.addLevel(),n.append(function(e){var t=i.select("#layer"),a=new Snap.Matrix;a.scale(.01,.01,434,375),t.animate({transform:a},1e3,mina.easeinout,function(){n.finishAnim(e)})}),n.addLevel(),n.append(function(e){quitSplash.execute(),n.finishAnim(e)}),n.execute()}if(cookies.get("nosplash"))return(window.location.hash||cookies.get("nosplash"))&&(dontType=!0),void quitSplash.execute();cookies.set("nosplash",!0,24,"/");var i=new Snap(document.getElementById("svg-container")),n=new Queue;$(document).keyup(function(e){27==e.keyCode&&(n.destroy(),i.remove(),quitSplash.execute())}),Snap.load(baseUrl+"img/solar-system.svg",t)});