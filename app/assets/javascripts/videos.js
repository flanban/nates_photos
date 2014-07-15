

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
    a.setAttribute('href', videos[i].url);
    a.className = a.className + "video-title"
    a.appendChild(document.createTextNode(videos[i].title));

    var textHolder = document.createElement('div');
    textHolder.appendChild(a);
    var thumbHolder = document.createElement('div');
    thumbHolder.setAttribute('class','thumb-wrapper');
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
        var vimeoCall = 'http://player.vimeo.com/video/' + videos[i].id + '?portrait=0&byline=0&title=0&badge=0&color=ccc';
        ifr.setAttribute('src', vimeoCall );
        
        var vidDiv = document.createElement('div');
        vidDiv.setAttribute('class','rsContent');
        vidDiv.appendChild(ifr)
        
        $('#video-slider').append(vidDiv)
        
        console.log(videos[i].title)
      }
    }
    $("#video-slider").royalSlider({
        keyboardNavEnabled: true,
        imageScaleMode: "fit",
        imageScalePadding: 50,
        slidesSpacing: 0,
        numImagesToPreload: 3,
        controlsInside: false,
    });
  }
  // load the video player view
  
  $('body').on('click', '.video-title', function (e){
    e.preventDefault(e);
    loadVideoGallery(videos);
    $("#video-slider").royalSlider({
        keyboardNavEnabled: true,
        imageScaleMode: "fit",
        imageScalePadding: 50,
        slidesSpacing: 0,
        numImagesToPreload: 3,
        controlsInside: false,
    });
    //set video url
     var videoId = $(this).attr('data-video-id')
     var url = '<iframe src="http://player.vimeo.com/video/' + videoId + '?portrait=0&byline=0&title=0&badge=0&color=ccc' + 'width="720" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
   // $('#video-player-wrapper').append(url)
    $('#detail-page-menu h3').text($(this).attr('data-video-title'))
    $('#detail-page').fadeIn();
  });
  $('body').on('click', '.close-button', function (e){
    e.preventDefault()
    $('#detail-page').fadeOut();
    hideVideoDetailPage();
  });

}

// Call our init function when the page loads
window.onload = init;

$(document).ready(function(){

});