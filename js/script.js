//課題①　スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

//課題②　アコーディオン
$(function(){
$('.accordion_header').click(function(){
  $(this).next('.accordion_inner').slideToggle();
  $('.accordion_header').not($(this)).next('.accordion_inner').slideUp();
  $('.accordion_header').not($(this)).removeClass("open");
});
});



//課題③
$(function(){
$('.js-modal-open').on('click',function(){
    $('.js-modal').fadeIn();
    return false;
});
$('.js-modal-close').on('click',function(){
    $('.js-modal').fadeOut();
    return false;
});
});



$(function() {
  $('#menu li').hover(function() {
    $(this).find('.menu_contents').stop().slideDown();
  }, function() {
    $(this).find('.menu_contents').stop().slideUp();
 
  });
 
});




/*課題④*/
$(function() {
  var $header = $('#top-head');
  // Nav Fixed
  $(window).scroll(function() {
      if ($(window).scrollTop() > 350) {
          $header.addClass('fixed');
      } else {
          $header.removeClass('fixed');
      }
  });
  // Nav Toggle Button
  $('#nav-toggle').click(function(){
      $header.toggleClass('open');
  });
});



/*課題⑥ */
$(function(){
  var thumbnailItem = "#subgraphic .change";
 // サムネイル画像アイテムに data-index でindex番号を付与
 $(thumbnailItem).each(function(){
  var index = $(thumbnailItem).index(this);
  $(this).attr("data-index",index);
 });
 
 $('#graphic').on('init',function(slick){
  var index = $(".graphic-item.slick-slide.slick-current").attr("data-slick-index");
  $(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnail-current");
 });

 $('#graphic').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  prevArrow: '<img src="images/arrow_left.png" class="slide-arrow prev-arrow"></img>',
  nextArrow:  '<img src="images/arrow_right.png" class="slide-arrow next-arrow"></img>',
 
});

$(thumbnailItem).on('click',function(){
  var index = $(this).attr("data-index");
  $('#graphic').slick("slickGoTo",index,false);
});



});



/*課題⑦ */

$(function(){
  let tabs = $('.tab-show');
  $('.tab-show').on("click",function(){
    $('.select').removeClass('select');
    $(this).addClass('select');
    const index = tabs.index(this);
    $('.hide').removeClass('hide-show').eq(index).addClass('hide-show');
  });
});


/*課題⑧*/


$(function(){
  $('.js-modal-open1').on('click',function(){
      $('.js-modal1').fadeIn();
      return false;
  });
  $('.js-modal-close1').on('click',function(){
      $('.js-modal1').fadeOut();
      return false;
  });
  });
  $.ajax({

    beforeSend:
function(xhr){

    xhr.overrideMimeType('application/json;charset=UTF-8');

    },

    type: 'GET',

    url: 'https://kakigawa-1219.github.io/json-1/sample.json',

    dataType: 'json',

    success:
function(json){
    
  $("#button1").on("click", function()  {
    var message = $("#box1").val();
  
    alert("店舗："+json[message].店舗+"住所："+json[message].住所);
  });

}
    

});

