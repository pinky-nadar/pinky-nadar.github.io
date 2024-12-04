$('.tabs li a').click(function(event){
    $(this).parent().siblings().find("a").removeClass('active');
    $(this).addClass('active');

    $(this).parents('.work-container').find('.work').removeClass('active');
    var a = $(this).parent().index();
    
    $('.work').each(function(){
        console.log($(this).index());
        if($(this).index() - 1 == a){
            $(this).addClass('active');
        }
    });

    
});
$('.mobile-menu').click(function(){
    $('.menu').addClass('mobile-list');
    $('.mobile-list').toggle();
    $('.menu-content').toggleClass('icon-class');
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 200) {
        //clearHeader, not clearheader - caps H
        $(".nav-menu").addClass("fixedHeader");
    }
    else{
        $(".nav-menu").removeClass("fixedHeader");
    }
}); //missing );