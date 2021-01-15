//user interface logic
$(document).ready(function () {
    $("#checkout-button").click(function() {
        location.href = "order.html";
        var textInside = ctrl.getElementsByTagName('p')[0].innerHTML;
        console.log(textInside)

    })

    $("#order").click(function() {
        swal({
            title: "Conpleted Order! Wait for delivery",
            text: `You bought and the total is`,
            icon: "success",
          });
    })
})