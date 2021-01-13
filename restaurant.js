$(document).ready(function(){
    $(".about").click(function(){
        $("#about, .about").toggle("slow");
    });
    $("#about").click(function(){
        $(".about, #about").toggle("slow");
    });
    $(".contact").click(function(){
        $("#contact, .contact").toggle("slow");
    });
    $("#contact").click(function(){
        $(".contact, #contact").toggle("slow");
    });
    $(".payment").click(function(){
        $("#payment, .payment").toggle("slow");
    });
    $("#payment").click(function(){
        $(".payment, #payment").toggle("slow");
    });
   
});
