$(document).ready(function(){

  
  var apiKey = 'c46c24442f27e0dfb28c6a6982ca6b4b'
  var collectionID = '72157644814677364'
  var userId = '24881537@N02'
  var page = 1
  var perPage = 12
  var apiCall = "https://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getList&api_key=" + apiKey + "&page=" + page  + "&per_page=" + perPage  +  "&user_id=" + userId  + "&jsoncallback=?";

  $.ajax({
      url: apiCall,
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      type: "GET",
      dataType: 'jsonp',
      success: function (data) {
          $.each(data.photosets.photoset, function (i, set) {
            var primaryPhotoUrl = "https://farm" + this.farm + ".staticflickr.com/" + this.server + "/" + this.primary + "_" + this.secret + ".jpg"
            var html = '<li class="photo-set"><h2>'+ set.title._content +'</h2><a href="#"><img class="set-cover" src="' + primaryPhotoUrl + '"/></a></li>'
            $('#photo-sets').append(html);
          });
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
