$(document).ready(function() {
  $('body').on('click', '.close-button', function (e){
      e.preventDefault()
      $("#detail-page").fadeOut('fast')
  });
});