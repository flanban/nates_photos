function setDetailPageHeight() {
  menuHeight = $('#detail-page-menu').outerHeight()
  detailPageHeightWithMenu = $('#detail-page').height() - menuHeight
  $('#detail-page').height(detailPageHeightWithMenu)
}
$(function() {
  setDetailPageHeight();

  //resize event
  $(window).resize(function(){
   // setDetailPageHeight();
  });

});