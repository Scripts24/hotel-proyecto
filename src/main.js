//Navbar open-close
$(document).ready(function(){
    $('#navbar-show-btn').click(() => $('.navbar-box').removeClass('translate-x-full'));
    $('#navbar-hide-btn').click(() => $('.navbar-box').addClass('translate-x-full'));

    //Date picker
    $('[data-toggle="datepicker"]').datepicker();

})

