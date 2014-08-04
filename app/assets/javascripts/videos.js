function stopVideo() {
  activeSlide = $('.rsActiveSlide');
  activeSlide.html(activeSlide.html());
}

var webAlbum = '2887945';

$(document).ready(function(){
  $('#cinematography-page .detail-type').text('cinematography').attr('href','/cinematography');
});

// Tell Vimeo what function to call
var callback = 'showThumbs';

// Set up the URLs
var url = 'http://vimeo.com/api/v2/album/' + webAlbum + '/videos.json?callback=' + callback;

// This function loads the data from Vimeo
function init() {
  var js = document.createElement('script');
  js.setAttribute('type', 'text/javascript');
  js.setAttribute('src', url);
  document.getElementsByTagName('head').item(0).appendChild(js);
}
function hideVideoDetailPage() {
  $('#video-player-wrapper').children().remove()
  $("#detail-page").fadeOut('fast')
}

// This function goes through the clips and puts them on the page
function showThumbs(videos) {
  var thumbs = document.getElementById('thumbs');
  thumbs.innerHTML = '';
  
  for (var i = 0; i < videos.length; i++) {
    var thumb = document.createElement('img');
    thumb.setAttribute('src', videos[i].thumbnail_large);
    thumb.setAttribute('alt', videos[i].title);
    thumb.setAttribute('title', videos[i].title);
    thumb.setAttribute('data-video-id', videos[i].id);
    
    
    var a = document.createElement('a');
    a.setAttribute('data-video-id', videos[i].id);
    a.setAttribute('data-video-title', videos[i].title);
    a.setAttribute('href', '/cinematography#-'+(i+1));
    a.className = a.className + "video-title video-link"
    a.appendChild(document.createTextNode(videos[i].title));

    var textHolder = document.createElement('div');
    textHolder.appendChild(a);
    var thumbHolder = document.createElement('a');
    thumbHolder.setAttribute('class','thumb-wrapper video-link');
    thumbHolder.setAttribute('href', '/cinematography#-'+(i+1));
    thumbHolder.appendChild(thumb);
    
    var li = document.createElement('li');
    li.className = li.className + "clearfix video-entry"
    li.appendChild(thumbHolder);
    li.appendChild(textHolder);
    thumbs.appendChild(li);
    console.log(thumbs)
    function loadVideoGallery(videos) {
      for (var i = 0; i < videos.length; i++) {
        var ifr = document.createElement('iframe');
        ifr.setAttribute('width','720px');
        ifr.setAttribute('height','400px');
        ifr.setAttribute('frameborder','0');
        ifr.setAttribute('webkitallowfullscreen','');
        ifr.setAttribute('mozallowfullscreen','');
        ifr.setAttribute('allowfullscreen','');
        var vimeoCall = 'http://player.vimeo.com/video/' + videos[i].id + '?portrait=0&byline=0&title=0&badge=0&color=444?api=1&player_id=vimeoplayer';
        ifr.setAttribute('src', vimeoCall );
        
        var vidDiv = document.createElement('div');
        vidDiv.setAttribute('class','rsContent');
        vidDiv.setAttribute('data-video-title', videos[i].title);
        vidDiv.appendChild(ifr);

        
        $('#video-slider').append(vidDiv)

        
        console.log(videos[i].title)
      }
      var videoSlider = $("#video-slider").royalSlider({
          keyboardNavEnabled: true,
          imageScaleMode: "fit",
          slidesSpacing: 0,
          controlsInside: false,
          controlNavigation: 'none',
          addActiveClass: true,
          transitionType: 'fade',
          deeplinking: {
            enabled: true,
            change: true,
            prefix: '-'
          }
      });
      var videoSliderInstance = videoSlider.data('royalSlider');
      videoSliderInstance.ev.on('rsAfterSlideChange', function(event) {
        $('#detail-page-menu h3').text($('.rsActiveSlide .rsContent').attr('data-video-title'));
      });
      $('body').on('click', '.video-link', function (){
        videoSliderInstance.updateSliderSize();
      });
      $(document).ready(function(){
        setTimeout(function(){
          $('#video-page-preloader').fadeOut();
          $('#detail-page').fadeOut();
        }, 1);
      });
      
    }
  }
  // load the video player view
  $('body').on('click', '.video-link', function (){
    //var videoSliderInstance.updateSliderSize();
    videoId = $(this).attr('data-video-id')
    $('#detail-page-menu h3').text($(this).attr('data-video-title'))
    $('#detail-page').fadeIn();
  });
  // close the player
  $('body').on('click', '.close-button', function (e){
    e.preventDefault();
    stopVideo();
    $('#detail-page').fadeOut();
    hideVideoDetailPage();
  });

  loadVideoGallery(videos);
}
$(document).ajaxSuccess(function() {
  alert(1)
});
// Call our init function when the page loads
window.onload = init;
$(document).ready(function(){


  videoTitle = $(".video-title");
  videoTitleMargin = videoTitle.height()/2;
  //alert(videoTitleMargin)
  $.each( $(".video-title"), function() {
    alert(1)
  });
});