// set active nav state
$(document).ready(function() {
 
// store url for current page as global variable
current_page = document.location.href
 
// apply active states depending on current page
if (current_page.match(/photography/)) {
  $("#primary-menu li:eq(0) a").addClass('active');
} else if (current_page.match(/cinematography/)) {
  $("#primary-menu li:eq(1) a").addClass('active');
} else { // don't mark any nav links as active
  $("#primary-menu li").removeClass('active');
};

});