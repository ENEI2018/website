$(function(){
    $('.navbar-container-custom').affix({
        offset: {
          /* Affix the navbar after scroll below header */
          top: $(window).height()}
    });
    $('.page-content-container').affix({
    offset: {
        /* Affix the navbar after scroll below header */
        top: $(window).height()}
    });
});