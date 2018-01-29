$(function(){
    $('.navbar-container-custom').affix({
        offset: {
          /* Affix the navbar after scroll below header */
          top: $('.logo-area').height()}
    });
    $('.page-content-container').affix({
    offset: {
        /* Affix the navbar after scroll below header */
        top: $('.logo-area').height()}
    });
});