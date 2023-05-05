$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    // $('a.bibtex').click(function() {
    //     $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    // });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');

    $('body').scrollspy({
        target: ".navbar",
        offset: $('nav').outerHeight()
    });
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        event.preventDefault();
        var $anchor = $(this);
        var href = $anchor.attr('href');
        var navHeight = $('nav').outerHeight();
        var offset = 0;
        if (href != '/') {
            offset = Math.max(0, $(href).offset().top - navHeight);
        };
        $('html, body').stop().animate({
            scrollTop: offset
        }, 1500, 'easeInOutExpo');
    })
});

//bibtex popup
$(function(){
    $('#bibtex-modal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget)
        var bibdata = $.trim(button.parent().parent().find(".bibtex.hidden").text())
        $(this).find('#bibtex-content').text(bibdata)
    })
});