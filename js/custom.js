$('.tabs li a').click(function(){
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

