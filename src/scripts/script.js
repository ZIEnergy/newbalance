$(document).ready(function() {  
  
  $('[data-modal]').fancybox();
  
  $("input[name='phone']").mask("7 (999) 999-99-99");
  
  $('[data-catalog-btn]').click(function(e) {
    e.preventDefault();
    $('.item:nth-child(n+16)').fadeIn('fast');
    $('.items-bottom').css("display", "flex");
    $(this).hide();
  });
  
  $('[data-size-popup]').click(function(e) {
    e.preventDefault();
    $('.size-question__popup').fadeToggle('fast');
  });
  
  $('.size-question__table-btn').click(function(e) {
    $('.size-question__table-btn').toggleClass('size-question__table-btn--active');
  });
  
  $('.size-question__table-btn--man').click(function(e) {
    $('.size-question__table--woman').hide();
    $('.size-question__table--man').fadeIn('fast');
  });
  
  $('.size-question__table-btn--woman').click(function(e) {
    $('.size-question__table--man').hide();
    $('.size-question__table--woman').fadeIn('fast');
  });
  
  $("img.lazy").lazyload();
  
});