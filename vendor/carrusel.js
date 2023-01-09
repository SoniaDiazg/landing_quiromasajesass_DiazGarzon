
var clics = 0

function moverIzquierda () {

    clics++
    console.log(clics)
    if (clics < 0){
        // $(".carrusel").css(`transform`, `translateX(`+ ((clics * 12.5 * -1) - 6.5) +`%)`)
    }else{
        // $(".carrusel").css(`transform`, `translateX(-`+ ((clics * 12.5) + 6.5) +`%)`)
    }  

    if (clics === 1) {
        var posicion1 = $('.posicion1').get();
        $('.posicion1').css('margin-left', '-12.5%');
        setTimeout(() => {
            $('.posicion1').css('margin-left', '0');
            $('.posicion1').remove();
            $('.carrusel').append(posicion1);
        }, 500);
    }

    if (clics === 2) {
        var posicion2 = $('.posicion2').get();
        $('.posicion2').css('margin-left', '-12.5%');
        setTimeout(() => {
            $('.posicion2').css('margin-left', '0');
            $('.posicion2').remove();
            $('.carrusel').append(posicion2);
        }, 500);
    }

    if (clics === 3) {
        var posicion3 = $('.posicion3').get();
        $('.posicion3').css('margin-left', '-12.5%');
        setTimeout(() => {
            $('.posicion3').css('margin-left', '0');
            $('.posicion3').remove();
            $('.carrusel').append(posicion3);
        }, 500);
    }

    if (clics === 4) {
        var posicion4 = $('.posicion4').get();
        $('.posicion4').css('margin-left', '-12.5%');
        setTimeout(() => {
            $('.posicion4').css('margin-left', '0');
            $('.posicion4').remove();
            $('.carrusel').append(posicion4);
        }, 500);
    }

    if (clics === 5) {
        var posicion5 = $('.posicion5').get();
        $('.posicion5').css('margin-left', '-12.5%');
        setTimeout(() => {
            $('.posicion5').css('margin-left', '0');
            $('.posicion5').remove();
            $('.carrusel').append(posicion5);
        }, 500);
    }

    if (clics === 6) {
        var posicion6 = $('.posicion6').get();
        $('.posicion6').css('margin-left', '-12.5%');
        setTimeout(() => {
            $('.posicion6').css('margin-left', '0');
            $('.posicion6').remove();
            $('.carrusel').append(posicion6);
        }, 500);
    }

    if (clics === 7) {
        var posicion7 = $('.posicion7').get();
        $('.posicion7').css('margin-left', '-12.5%');
        setTimeout(() => {
            $('.posicion7').css('margin-left', '0');
            $('.posicion7').remove();
            $('.carrusel').append(posicion7);
        }, 500);
    }

    if (clics === 8) {
        var posicion8 = $('.posicion8').get();
        $('.posicion8').css('margin-left', '-12.5%');
        setTimeout(() => {
            $('.posicion8').css('margin-left', '0');
            $('.posicion8').remove();
            $('.carrusel').append(posicion8);
        }, 500);
        clics = 0;
    }
}

function moverDerecha () {

    clics--
    if (clics < 0){
        $(".carrusel").css(`transform`, `translateX(`+ ((clics * 12.5 * -1) - 6.5) +`%)`)
    }else{
        $(".carrusel").css(`transform`, `translateX(-`+ ((clics * 12.5) + 6.5) +`%)`)
    }  
}

