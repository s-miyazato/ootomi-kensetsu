//ドロワーメニューの実装
$(function() {
  $('#nav-btn').on("click",function() {
    $(this).prev().toggle("slide");
    $(this).prev().toggleClass("active");
  });
  $('#hamburger').on("click", function() {
    $(this).toggleClass('drawer-hamburger-close');
  });

  //PC_header backdround-color、text-shadowの変更
  const headerVh = $('header').height();
  $(window).on('scroll resize', function() {
    const top = $(window).scrollTop();
    const width = $(window).width()
    if (headerVh < top || width <= 1000) {
      $('.header__wrap').css('background-color', 'rgba(44,64,135,1)').css('text-shadow', 'none');
      } else {
      $('.header__wrap').css('background-color', 'transparent').css('text-shadow', '0 3px 6px rgba(0, 0, 0, 0.5)');
    }
  });
});

//パララックス
var rellax = new Rellax('.rellax', {
  center: true,
});