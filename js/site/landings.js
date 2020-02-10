function page_position_init() {
    $('.page:eq(0)').css('margin-top', $('#top').outerHeight());
}

function main_init(){
    page_position_init();
    
    $('body').scrollspy({ target: '#menu' });
    
    $('[data-toggle="tooltip"]').tooltip();
    
    $(window).resize(function(){
        page_position_init();
    })
}
var t;
function menu_fix_init(){
    if($('body').scrollTop() < 53)
        $('nav').hide()
    else
        $('nav').show();
}

$(document).ready(function(){
    main_init();
    menu_fix_init();
});

$(window).scroll(function(){
    menu_fix_init();
});
