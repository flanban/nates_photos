function stopVideo(){activeSlide=$(".rsActiveSlide"),activeSlide.html(activeSlide.html())}function init(){var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src",url),document.getElementsByTagName("head").item(0).appendChild(e)}function hideVideoDetailPage(){$("#video-player-wrapper").children().remove(),$("#detail-page").fadeOut("fast")}function showThumbs(e){function t(e){for(var t=0;t<e.length;t++){var i=document.createElement("iframe");i.setAttribute("width","720px"),i.setAttribute("height","400px"),i.setAttribute("frameborder","0"),i.setAttribute("webkitallowfullscreen",""),i.setAttribute("mozallowfullscreen",""),i.setAttribute("allowfullscreen","");var a="http://player.vimeo.com/video/"+e[t].id+"?portrait=0&byline=0&title=0&badge=0&color=444?api=1&player_id=vimeoplayer";i.setAttribute("src",a);var d=document.createElement("div");d.setAttribute("class","rsContent"),d.setAttribute("data-video-title",e[t].title),d.appendChild(i),$("#video-slider").append(d),console.log(e[t].title)}var l=$("#video-slider").royalSlider({keyboardNavEnabled:!0,imageScaleMode:"fit",slidesSpacing:0,controlsInside:!1,controlNavigation:"none",addActiveClass:!0,transitionType:"fade",deeplinking:{enabled:!0,change:!0,prefix:"-"}}),n=l.data("royalSlider");n.ev.on("rsAfterSlideChange",function(){$("#detail-page-menu h3").text($(".rsActiveSlide .rsContent").attr("data-video-title"))}),$("body").on("click",".video-link",function(){n.updateSliderSize()}),$(document).ready(function(){setTimeout(function(){$("#video-page-preloader").fadeOut(),$("#detail-page").fadeOut()},1)})}var i=document.getElementById("thumbs");i.innerHTML="";for(var a=0;a<e.length;a++){var d=document.createElement("img");d.setAttribute("src",e[a].thumbnail_large),d.setAttribute("alt",e[a].title),d.setAttribute("title",e[a].title),d.setAttribute("data-video-id",e[a].id);var l=document.createElement("a");l.setAttribute("data-video-id",e[a].id),l.setAttribute("data-video-title",e[a].title),l.setAttribute("href","/cinematography#-"+(a+1)),l.className=l.className+"video-title video-link",l.appendChild(document.createTextNode(e[a].title));var n=document.createElement("div");n.appendChild(l);var o=document.createElement("a");o.setAttribute("class","thumb-wrapper video-link"),o.setAttribute("href","/cinematography#-"+(a+1)),o.appendChild(d);var r=document.createElement("li");r.className=r.className+"clearfix video-entry",r.appendChild(o),r.appendChild(n),i.appendChild(r),console.log(i)}$("body").on("click",".video-link",function(){videoId=$(this).attr("data-video-id"),$("#detail-page-menu h3").text($(this).attr("data-video-title")),$("#detail-page").fadeIn()}),$("body").on("click",".close-button",function(e){e.preventDefault(),stopVideo(),$("#detail-page").fadeOut(),hideVideoDetailPage()}),t(e)}var webAlbum="2887945";$(document).ready(function(){$("#cinematography-page .detail-type").text("cinematography").attr("href","/cinematography")});var callback="showThumbs",url="http://vimeo.com/api/v2/album/"+webAlbum+"/videos.json?callback="+callback;$(document).ajaxSuccess(function(){alert(1)}),window.onload=init,$(document).ready(function(){videoTitle=$(".video-title"),videoTitleMargin=videoTitle.height()/2,$.each($(".video-title"),function(){alert(1)})});