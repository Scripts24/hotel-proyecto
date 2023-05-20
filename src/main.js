//Navbar open-close
$(document).ready(function(){
    $('#navbar-show-btn').click(() => $('.navbar-box').removeClass('translate-x-full'));
    $('#navbar-hide-btn').click(() => $('.navbar-box').addClass('translate-x-full'));

    //Date picker
    $('[data-toggle="datepicker"]').datepicker();


    // Slick slider
    $('.about-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
        autoplay: true
    });

})


//Botón Top

let boton = document.querySelector('.top')

window.onscroll = function(){
    
    
    if(document.documentElement.scrollTop > 250){
        document.querySelector('.top ').style.display='block'
    }
    else{
        document.querySelector('.top ').style.display='none' 
    }

    boton.addEventListener('click', function(){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    })
}