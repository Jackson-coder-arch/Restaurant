$(document).ready(function(){
    $(".design").click(function(){
        $("#design, .design").toggle("slow");
    });
    $("#design").click(function(){
        $(".design, #design").toggle("slow");
    });
    $(".development").click(function(){
        $("#development, .development").toggle("slow");
    });
    $("#development").click(function(){
        $(".development, #development").toggle("slow");
    });
    $(".product").click(function(){
        $("#product, .product").toggle("slow");
    });
    $("#product").click(function(){
        $(".product, #product").toggle("slow");
    });
   
});
