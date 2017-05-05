function countdown(id){
    var fecha = new Date('2017','04','12','08','30','00')
    var hoy = new Date() 
    var dias = 0
    var horas = 0
    var minutos = 0
    var segundos = 0

    if (fecha>hoy){
        var diferencia = (fecha.getTime()-hoy.getTime())/1000
        dias = Math.floor(diferencia/86400)
        diferencia = diferencia-(86400*dias)
        horas = Math.floor(diferencia/3600)
        diferencia = diferencia-(3600*horas)
        minutos = Math.floor(diferencia/60)
        diferencia = diferencia-(60*minutos)
        segundos = Math.floor(diferencia)

        document.getElementById(id).innerHTML = dias + ' d&iacute;as / '+ horas + ' horas / ' + minutos + ' min / ' + segundos + ' seg.'

        if (dias>0 || horas>0 || minutos>0 || segundos>0){
            setTimeout("countdown(\"" + id + "\")",1000)
        }
    }
    else{
        document.getElementById('restante').innerHTML = 'El evento ya finalizo'
    }
}

$(document).ready(function(){
    countdown('count');
    var altura = $('.nav ul').offset().top;
    console.log(altura);
    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > altura ){
            $('.nav').addClass('menu-fixed');
        } else {
            $('.nav').removeClass('menu-fixed');
        }
    }); 
    menu();
    $(".button-collapse").sideNav();
    
});
function menu(){
    var nav = document.querySelector('.div-menu');
    nav.addEventListener('click',function(){
        $('#nav-mobile').toggleClass('hidenn');   
    })

}