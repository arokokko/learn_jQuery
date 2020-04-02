$(document).ready(function(){
    let overlay = $('.overlay'),
        modal = $('.modal'),
        btnClose = $('.close'),
        btnSelect = $('.main_btna'), 
        btnAdvice = $('.main_btn'), 
        btnTimetable = $('nav ul li:eq(1)'); 
 
    function openModal(){
        
        overlay.fadeTo(500, 0.7);
        
        modal.slideDown(500);
    }

    btnSelect.on('click', openModal);
 
    btnAdvice.on('click', openModal);
 
    btnTimetable.on('click', openModal);
 
    btnClose.on('click', function(){
        overlay.fadeTo(500, 0, function() {
            overlay.css({
                display:'none'
            });
        });
        
        modal.slideUp(500);
    });
 
});