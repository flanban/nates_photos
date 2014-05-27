$(document).ready(function(){
  //var data={"firstName":"Ray"};
  //$("#photos").append('<li>' + data.firstName + '</li>');

  var flickrCollectionsUrl = ' https://api.flickr.com/services/rest/?method=flickr.collections.getTree&api_key=c46c24442f27e0dfb28c6a6982ca6b4b&collection_id=72157644814677364&user_id=24881537%40N02&format=json'
  
  var sampleSetUrl = "https://api.flickr.com/services/rest/?method=flickr.photosets.getInfo&api_key=5646304a3f4a9cbac8549961222d1036&photoset_id=72157644866662373&format=json"
  
  $.ajax({
      url: flickrCollectionsUrl,

      // the name of the callback parameter, as specified by flickr
      jsonpCallback: "jsonFlickrApi",

      // tell jQuery we're expecting JSONP
      dataType: "jsonp",

      success: function(json) {
//      console.dir(json.photoset.title._content);
        console.dir(json.collection.id);

      },

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
