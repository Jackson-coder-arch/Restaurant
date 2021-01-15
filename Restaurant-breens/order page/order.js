//user interface logic
$(document).ready(function () {
    $("#add-cart").click(function() {
        var itemName = $("p").val();
        var price = $("h2").val();
        var number = $("").val();
        swal({
            title: "Conpleted Order! Wait for delivery",
            text: `You bought ${number} ${itemName} ${price} and the total is ${priceTotal()}`,
            icon: "success",
          });
    })
})

//backend logic
function priceTotal() {
    var total = itemName * number
    return total;
}