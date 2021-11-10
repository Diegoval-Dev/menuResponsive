$(document).ready(function(){
    $("#menu-principal").prepend('<div id="menu-entrada">Menú</div>');
    $("#menu-entrada").on('click', function(){
        $("#menu").slideToggle();
    });
});