var order = [];

function Food(size, sizetwo, total) {
    this.foodSize = size;
    this.foodSiz = sizetwo;
    this.foodTotal = total;
};


Food.prototype.nameSize = function () {
    if (this.foodSize == 250) {
        return "Small";
    }
    if (this.foodSize == 400) {
        return "Medium"
    }
    if (this.foodSize == 550) {
        return "Large"
    }
};
Food.prototype.nameSiz = function () {
    if (this.foodSiz == 100) {
        return "SmllY";
    }
    if (this.foodSiz == 200) {
        return "MediumY"
    }
    if (this.foodSiz == 300) {
        return "LargeY"
    }
};
// $("#burg1").click(function () {
//     $(".card-text").text(foodSize);
// });
// var diplay = document.getElementById("#button1").addEventListener("click", function () {
//     alert("Hello World!");
// });
$("#button1").click(function () {
    var foodSize = parseInt($("#burg").val());
    var matoke = new Food(foodSize);
    $("#subtotal").show();
    $(".carttext").show();
    $(".cartsub").show();
    $(".nproduct").hide();

    $("#burg").val("0");
    order.push(matoke);

    var totalAmount = 0;
    for (let i = 0; i < order.length; i++) {
        totalAmount += order[i].foodSize;
    };

    $("ul#list").append("<li><span class='food'>" + "Burger" + "<br>" + matoke.nameSize() +
        "<span style='padding-left: 120px;'>" + matoke.foodSize + "<br>" + "</span>" + "</span></li>" + "<hr>");
    $("h2#total").text(totalAmount);
    if (foodSize == 0) {
        $("#subtotal").hide();
        $(".carttext").hide();
        $(".cartsub").hide();
        $("ul#list").hide();
        $("h2#total").hide();
        $(".nproduct").show();
        alert("You did not make a selection!");
    }
});
Food.prototype.nameSiz = function () {
    if (this.foodSiz == 100) {
        return "SmllY";
    }
    if (this.foodSiz == 200) {
        return "MediumY"
    }
    if (this.foodSiz == 300) {
        return "LargeY"
    }
};
$("#buttontwo").click(function () {
    var foodSiz = parseInt($("#burgone").val());
    var matokeTwo = new Food(foodSize, foodSiz);
    $("#subtotal").show();
    $(".carttext").show();
    $(".cartsub").show();
    $(".nproduct").hide();

    $("#burgone").val("0");
    order.push(matokeTwo);

    var totalAmount = 0;
    for (let i = 0; i < order.length; i++) {
        totalAmount += order[i].foodSiz;
    };
    $("ul#list").append("<li><span class='food'>" + "Potato" + "<br>" + matokeTwo.nameSiz() +
        "<span style='padding-left: 120px;'>" + matokeTwo.foodSiz + "<br>" + "</span>" + "</span></li>" + "<hr>");
    $("h2#total").text(totalAmount);
    if (foodSiz == 0) {
        $("#subtotal").hide();
        $(".carttext").hide();
        $(".cartsub").hide();
        $("ul#list").hide();
        $("h2#total").hide();
        $(".nproduct").show();
        alert("You did not make a selection!");
    }
});
$("#button3").click(function () {
    $("ul#list").append("<li><span class='food'>" + "Ice Cream" + "</span></li>");
});
$("#button4").click(function () {
    $("ul#list").append("<li><span class='food'>" + "Pizza" + "</span></li>");
});
$("#button5").click(function () {
    $("ul#list").append("<li><span class='food'>" + "Sandwich" + "</span></li>");
});
$("#button6").click(function () {
    $("ul#list").append("<li><span class='food'>" + "Fried Chicken" + "</span></li>");
});
$("#button7").click(function () {
    $("ul#list").append("<li><span class='food'>" + "Onion Rings" + "</span></li>");
});
$("#button8").click(function () {
    $("ul#list").append("<li><span class='food'>" + "Hot Dogs" + "</span></li>");
});
$("#button9").click(function () {
    $("ul#list").append("<li><span class='food'>" + "French Fries" + "</span></li>");
});
$("#button10").click(function () {
    $("ul#list").append("<li><span class='food'>" + "Tacos" + "</span></li>");
});