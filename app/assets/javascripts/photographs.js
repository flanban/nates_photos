/*

var url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=efeecfff9bc2f0f26ca576d1293ce4aa&user_id=24881537%40N02&format=json&nojsoncallback=1&auth_token=72157644240953428-3599714826103e5e&api_sig=d45db628b9143277c4b272082cb95f45'

var flickerAPI = url;
  $.getJSON( flickerAPI, {
    format: "json"
  })
    .done(function( data ) {
      console.log(JSON.stringify(url));
      var list = $("<ul></ul>");
      
      $.each( data.photosets.photoset, function( i, item ) {
        var link = $("<a/>").attr("title", item.description._content)
                    .attr("href", "http://www.flickr.com/photos/mjryall/sets/" + item.id)
                    .text(item.title._content);
        var li = $("<li/>").append(link).append(" (" + item.photos + ")");
                $(list).append(li);
        if (i >= 11) {
          return false
        }
      });
      $("#images").append(list);
      
    });
    
    
*/
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
