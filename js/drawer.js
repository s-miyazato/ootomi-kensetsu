$(function() {
  $('#nav-btn').on("click",function() {
    $(this).prev().toggle("slide");
    $(this).prev().toggleClass("active");
  });
  $('#hamburger').on("click", function() {
    $(this).toggleClass('drawer-hamburger-close');
  });
});