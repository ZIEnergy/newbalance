$(document).ready(function() {  
  
  $('[data-modal]').fancybox();
  
  $("input[name='phone']").mask("7 (999) 999-99-99");
  
  $('[data-catalog-btn]').click(function(e) {
    e.preventDefault();
    $('.item:nth-child(n+16)').fadeIn('fast');
    $(this).fadeOut('fast');
  });
  
});