// Change this to your username to load in your clips
//var vimeoUserName = 'user2488391';
var webAlbum = '2887945';


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

// This function goes through the clips and puts them on the page
function showThumbs(videos) {
  var thumbs = document.getElementById('thumbs');
  thumbs.innerHTML = '';
  
  for (var i = 0; i < videos.length; i++) {
    var thumb = document.createElement('img');
    thumb.setAttribute('src', videos[i].thumbnail_large);
    thumb.setAttribute('alt', videos[i].title);
    thumb.setAttribute('title', videos[i].title);
    
    var a = document.createElement('a');
    a.setAttribute('href', videos[i].url);
    a.appendChild(document.createTextNode(videos[i].title));

    var textHolder = document.createElement('div');
    textHolder.appendChild(a);
    
    var li = document.createElement('li');
    li.className = li.className + "clearfix"
    li.appendChild(thumb);
    li.appendChild(textHolder);
    thumbs.appendChild(li);
  }
}

// Call our init function when the page loads
window.onload = init;