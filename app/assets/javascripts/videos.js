// vimeo username
var vimeoUserName = 'user2488391';

// Tell Vimeo what function to call
var callback = 'showThumbs';

// Set up the URLs
var url = 'http://vimeo.com/api/v2/' + vimeoUserName + '/videos.json?callback=' + callback;

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
    thumb.setAttribute('src', videos[i].thumbnail_medium);
    thumb.setAttribute('alt', videos[i].title);
    thumb.setAttribute('title', videos[i].title);
    
    var a = document.createElement('a');
    a.setAttribute('href', videos[i].url);
    a.appendChild(document.createTextNode(videos[i].title));
    
    var p = document.createElement('p');
    p.appendChild(thumb);
    p.appendChild(document.createElement('br'));
    p.appendChild(a);
    thumbs.appendChild(p);
  }
}

// Call our init function when the page loads
window.onload = init;