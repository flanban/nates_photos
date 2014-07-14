
// Change this to your username to load in your clips
//var vimeoUserName = 'user2488391';
var webAlbum = '2887945';

$(document).ready(function(){
  $('#cinematography-page .detail-type').text('cinematography')
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
    
    var li = document.createElement('li');
    li.className = li.className + "clearfix video-entry"
    li.appendChild(thumb);
    li.appendChild(textHolder);
    thumbs.appendChild(li);
  }
  // load the video player view
  $('body').on('click', '.video-title', function (e){
    e.preventDefault()
  //set video url
     var videoId = $(this).attr('data-video-id')
     var url = '<iframe src="//player.vimeo.com/video/' + videoId + '?badge=0&byline=1" width="720" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    $('#video-player-wrapper').append(url)
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
