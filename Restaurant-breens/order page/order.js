//user interface logic
$(document).ready(function () {
    $("#checkout").click(function() {
        location.href = "order.html";
    })

    $("#order").click(function() {
        swal({
            title: "Conpleted Order! Wait for delivery",
            text: `You bought and the total is`,
            icon: "success",
          });
    })
})
