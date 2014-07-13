function hideDetailPage() {
  $('html').removeClass('gallery-active');
  $('.photo-slider').children().remove()
  $("#detail-page").fadeOut('fast')
  jQuery('.photo-slider').royalSlider('destroy').empty()
}
function getSet() {
  $('body').on('click', '.photo-set, .photo-set h2', function (e){
    e.preventDefault();
    $('html').addClass('gallery-active');
    $('#detail-page-menu h3').text($(this).attr('data-photo-set-name'))
    
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
          $('body').on('click', '.close-button', function (e){
              e.preventDefault();
              hideDetailPage();
          });
          $.each(data.photoset.photo, function (i, set) {
            var secret = this.secret
            var farmId = '2'
            var serverId = this.server
            var photoId = this.id
            var photoUrl = 'https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + photoId + '_' + secret + '_b.jpg'
            var photoThumbUrl = 'https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + photoId + '_' + secret + '_q.jpg'
            var html = '<img data-rsTmb="' + photoThumbUrl + '" class="set-photo" src="' + photoUrl + '"/>'
            $('#detail-page').fadeIn();
            $('.photo-slider').append(html);
          });
          var setSlider = $(".photo-slider").royalSlider({
              keyboardNavEnabled: true,
              controlNavigation: 'thumbnails',
              imageScaleMode: "fit",
              thumbs: {
                // thumbnails options go gere
                arrowsAutoHide: true
              },
              imageScalePadding: 50,
              slidesSpacing: 0,
              controlsInside: false,
              fullscreen: {
                // fullscreen options go gere
                enabled: true,
                nativeFS: true
              }
          });
          var sliderInstance = setSlider.data('royalSlider');
          var slideCountEl = $('<span class="photo-count"></span>').appendTo( $("#detail-page-menu > h3") );
          function updCount() {
            slideCountEl.html( (sliderInstance.currSlideId+1) + ' / ' + sliderInstance.numSlides );
          }
          sliderInstance.ev.on('rsAfterSlideChange', updCount);
          updCount();
          $( ".rsFullscreenIcn" ).click(function() {
            //$('body').addClass('fullscreen-active')
          });
          function increaseImageScalePadding() {
            sliderInstance.st.imageScalePadding = 0;
            updateSliderSize();
          }
          function decreaseImageScalePadding() {
            sliderInstance.st.imageScalePadding = 50;
            updateSliderSize();
          }
          sliderInstance.ev.on('rsEnterFullscreen', function() {
              increaseImageScalePadding();
          });
          sliderInstance.ev.on('rsExitFullscreen', function() {
              decreaseImageScalePadding();
          });
        }
    });
  });
}



$(document).ready(function(){
  // populate sets and photos
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
            var html = '<li data-photo-set-name="' + set.title._content + '"data-photo-set-id="'+ set.id +'" class="photo-set"><h2>'+ set.title._content +'</h2><a href="#"><img class="set-cover" src="' + primaryPhotoUrl + '"/></a></li>'
            $('#photo-sets').append(html);
          });
          getSet();
      }
  });
  
  

});
$(window).bind("load", function() {
  //set aspect ratio
  var setPhoto = $('.photo-set')
  var photoSetWidth = setPhoto.width()
  var aspectRatio = 3.8
  var photoSetHeight = photoSetWidth / aspectRatio
  $('.photo-set').height(photoSetHeight)
  
  // vertically center images
  $('.photo-set > a > img').each(function(i, obj) {
    photoSetImageHeight = $(this).height()
    setPhotoOffset = photoSetImageHeight / 2
    $(this).css('margin-top',-setPhotoOffset)
  });
});




