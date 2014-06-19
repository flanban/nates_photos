
function getSet() {
  $('body').on('click', '.photo-set', function (e){
    e.preventDefault()
    var apiKey = 'c46c24442f27e0dfb28c6a6982ca6b4b'
    var userId = '124300310@N08'
    var setId = $(this).attr('data-photo-set-id')
    var apiCall = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+apiKey+"&photoset_id="+setId+"&user_id="+userId+"&format=json";
    $.ajax({
        url: apiCall,
        type: "GET",
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        success: function (data) {
            $.each(data.photoset.photo, function (i, set) {
              var secret = this.secret
              var farmId = '2'
              var serverId = this.server
              var photoId = this.id
              var photoUrl = 'https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + photoId + '_' + secret + '.jpg'
              var html = '<img class="set-photo" src="' + photoUrl + '"/>'
              $('#detail-page').fadeIn();
              $('.photo-slider').append(html);
              $(".photo-slider").royalSlider({
                  keyboardNavEnabled: true,
                  controlNavigation: 'thumbnails'

              });
            });
            
        }
    });
  });
}

$(document).ready(function(){

  
  var apiKey = 'c46c24442f27e0dfb28c6a6982ca6b4b'
  var collectionID = '72157644814677364'
  var userId = '124300310@N08'
  var page = 1
  var perPage = 12
  var apiCall = "https://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getList&api_key=" + apiKey + "&page=" + page  + "&per_page=" + perPage  +  "&user_id=" + userId  + "&jsoncallback=?";

  $.ajax({
      url: apiCall,
      type: "GET",
              async:false,
      dataType: 'jsonp',
      success: function (data) {
          $.each(data.photosets.photoset, function (i, set) {
            var primaryPhotoUrl = "https://farm" + this.farm + ".staticflickr.com/" + this.server + "/" + this.primary + "_" + this.secret + "_b.jpg"
            var html = '<li data-photo-set-id="'+ set.id +'" class="photo-set"><h2>'+ set.title._content +'</h2><a href="#"><img class="set-cover" src="' + primaryPhotoUrl + '"/></a></li>'
            $('#photo-sets').append(html);
          });
          getSet();
      }
  });



});

/// WHEN I LINK TO THE SPECIFIC SET PAGE: 
///   first i need to create the set-page url out of the collectionTree data. Then I need to pass it, maybe in a hidden form, to the set-page controller params in an instance variable. Lastly I need to store that instance variable in a my js url vairiable for the flickr api call on the set-page script.


//  full screen mode 
function enter_full_screen(){
    elem    = $('#detail-page')[0];
    calls   = ['requestFullScreen','webkitRequestFullScreen','mozRequestFullScreen'];

    for(var i = 0; i < calls.length; i++){
        if(elem[calls[i]]){
            elem[calls[i]]();
            return;
        }
    }
}
$( ".fullscreen" ).click(function() {
  enter_full_screen();
});



