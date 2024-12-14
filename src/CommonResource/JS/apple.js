import $ from 'jquery'; // Import jQuery

$(document).ready(function() {
  $(".heading").click(function () {
    var $list = $(this).find(".list-item li");
    var $plusIcon = $(this).find(".fa-plus");
    var $timesIcon = $(this).find(".fa-times");

      
      
    if ($list.is(":visible")) {
      $list.slideUp();
      $plusIcon.show();
      $timesIcon.hide();
    } else {
      $list.slideDown();
      $plusIcon.hide();
      $timesIcon.show();
    }
  });
  
});

