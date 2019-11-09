$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 300) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });

    $(function(){
        $('#orderModal').on('show.bs.modal', function (e) {
        var price = $(e.relatedTarget).data('price');
        var name = $(e.relatedTarget).data('name');
    
        //Pass Values
        $('#price').html(price);
     $('#name').html(name);

  
});

var btn = $('#topBtn');

$(window).scroll(function() {
if ($(this).scrollTop()) {
    btn.fadeIn();
} else {
    btn.fadeOut();
}
});

btn.click(function(){
    $('html, body').animate({
        scrollTop : 0},500);
    return false;
});

});
});