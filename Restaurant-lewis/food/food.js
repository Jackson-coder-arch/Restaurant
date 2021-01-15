var order = [];

function Food(size) {
    this.foodSize = size;
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
$("#button1").click(function () {
    var foodSize = parseInt($("#burg").val());
    var matoke = new Food(foodSize);
    $("#subtotal").show();
    $(".carttext").show();
    $(".cartsub").show();
    $(".nproduct").hide();
    $("#checkout").show();
    $("#burg").val("400");
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
function FoodOne(size) {
    this.foodSizeOne = size;
};
FoodOne.prototype.nameSizeOne = function () {
    if (this.foodSizeOne == 100) {
        return "Small";
    }
    if (this.foodSizeOne == 200) {
        return "Medium"
    }
    if (this.foodSizeOne == 300) {
        return "Large"
    }
};
$("#buttontwo").click(function () {
    var foodSizeOne = parseInt($("#burgone").val());
    console.log(foodSizeOne);
    var matokeTwo = new FoodOne(foodSizeOne);
    $("#subtotal").show();
    $(".carttext").show();
    $(".cartsub").show();
    $(".nproduct").hide();
    $("#checkout").show();
    $("#burgone").val("200");
    order.push(matokeTwo);



    var totalAmount = 0;
    for (let i = 0; i < order.length; i++) {
        totalAmount += order[i].foodSizeOne;
    };
    $("ul#list").append("<li><span class='food'>" + "Potato Chips" + "<br>" + matokeTwo.nameSizeOne() +
        "<span style='padding-left: 120px;'>" + matokeTwo.foodSizeOne + "<br>" + "</span>" + "</span></li>" + "<hr>");
    $("h2#total").text(totalAmount);
    if (foodSizeOne == 1) {
        $("#subtotal").hide();
        $(".carttext").hide();
        $(".cartsub").hide();
        $("ul#list").hide();
        $("h2#total").hide();
        $(".nproduct").show();
        
        alert("You did not make a selection!");
    }
});
function FoodTwo(size) {
    this.foodSizeTwo = size;
};
FoodTwo.prototype.nameSizeTwo = function () {
    if (this.foodSizeTwo == 50) {
        return "Small";
    }
    if (this.foodSizeTwo == 100) {
        return "Medium"
    }
    if (this.foodSizeTwo == 150) {
        return "Large"
    }
};
$("#buttonthree").click(function () {
    var foodSizeTwo = parseInt($("#burgtwo").val());
    console.log(foodSizeTwo);
    var matokeThree = new FoodTwo(foodSizeTwo);
    $("#subtotal").show();
    $(".carttext").show();
    $(".cartsub").show();
    $(".nproduct").hide();
    $("#checkout").show();
    $("#burgtwo").val("200");
    order.push(matokeThree);



    var totalAmount = 0;
    for (let i = 0; i < order.length; i++) {
        totalAmount += order[i].foodSizeTwo;
    };
    $("ul#list").append("<li><span class='food'>" + "Ice cream" + "<br>" + matokeThree.nameSizeTwo() +
        "<span style='padding-left: 120px;'>" + matokeThree.foodSizeTwo + "<br>" + "</span>" + "</span></li>" + "<hr>");
    $("h2#total").text(totalAmount);
    if (foodSizeTwo == 1) {
        $("#subtotal").hide();
        $(".carttext").hide();
        $(".cartsub").hide();
        $("ul#list").hide();
        $("h2#total").hide();
        $(".nproduct").show();
        
        alert("You did not make a selection!");
    }
});
function FoodThree(size) {
    this.foodSizeThree = size;
};
FoodThree.prototype.nameSizeThree = function () {
    if (this.foodSizeThree == 500) {
        return "Small";
    }
    if (this.foodSizeThree == 700) {
        return "Regular"
    }
    if (this.foodSizeThree == 900) {
        return "Large"
    }
};
$("#buttonfour").click(function () {
    var foodSizeThree = parseInt($("#burgthree").val());
    console.log(foodSizeThree);
    var matokeFour = new FoodThree(foodSizeThree);
    $("#subtotal").show();
    $(".carttext").show();
    $(".cartsub").show();
    $(".nproduct").hide();
    $("#checkout").show();
    $("#burgthree").val("200");
    order.push(matokeFour);



    var totalAmount = 0;
    for (let i = 0; i < order.length; i++) {
        totalAmount += order[i].foodSizeThree;
    };
    $("ul#list").append("<li><span class='food'>" + "Pizza" + "<br>" + matokeFour.nameSizeThree() +
        "<span style='padding-left: 120px;'>" + matokeFour.foodSizeThree + "<br>" + "</span>" + "</span></li>" + "<hr>");
    $("h2#total").text(totalAmount);
    if (oodSizeThree == 1) {
        $("#subtotal").hide();
        $(".carttext").hide();
        $(".cartsub").hide();
        $("ul#list").hide();
        $("h2#total").hide();
        $(".nproduct").show();
        
        alert("You did not make a selection!");
    }
});
function FoodFour(size) {
    this.foodSizeFour = size;
};
FoodFour.prototype.nameSizeFour = function () {
    if (this.foodSizeFour == 150) {
        return "Small";
    }
    if (this.foodSizeFour == 250) {
        return "Medium"
    }
    if (this.foodSizeFour == 400) {
        return "Large"
    }
};
$("#buttonfive").click(function () {
    var foodSizeFour = parseInt($("#burgfour").val());
    console.log(foodSizeFour);
    var matokeFive = new FoodFour(foodSizeFour);
    $("#subtotal").show();
    $(".carttext").show();
    $(".cartsub").show();
    $(".nproduct").hide();
    $("#checkout").show();
    $("#burgfour").val("200");
    order.push(matokeFive);



    var totalAmount = 0;
    for (let i = 0; i < order.length; i++) {
        totalAmount += order[i].foodSizeFour;
    };
    $("ul#list").append("<li><span class='food'>" + "Sandwich" + "<br>" + matokeFive.nameSizeFour() +
        "<span style='padding-left: 120px;'>" + matokeFive.foodSizeFour + "<br>" + "</span>" + "</span></li>" + "<hr>");
    $("h2#total").text(totalAmount);
    if (foodSizeFour == 1) {
        $("#subtotal").hide();
        $(".carttext").hide();
        $(".cartsub").hide();
        $("ul#list").hide();
        $("h2#total").hide();
        $(".nproduct").show();
        
        alert("You did not make a selection!");
    }
});
$("#checkout").click(function() {
    var checkout = prompt("Enter you address?");
    alert("Thank you for ordering with us, your order will be delivered to" + " " + checkout + " " + "as soon as possible");
});
function FoodFive(size) {
    this.foodSiz = size;
};
FoodFive.prototype.nameSiz = function () {
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
$("#button6").click(function () {
    $("ul#list").append("<li><span class='food'>" + "Fried Chicken" + "</span></li>");
});
function FoodSiz(size) {
    this.foodSiz = size;
};
FoodSiz.prototype.nameSiz = function () {
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
$("#button7").click(function () {
    $("ul#list").append("<li><span class='food'>" + "Onion Rings" + "</span></li>");
});
function FoodSeven(size) {
    this.foodSiz = size;
};
FoodSeven.prototype.nameSiz = function () {
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
$("#button8").click(function () {
    $("ul#list").append("<li><span class='food'>" + "Hot Dogs" + "</span></li>");
});
function FoodEight(size) {
    this.foodSiz = size;
};
FoodEight.prototype.nameSiz = function () {
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
$("#button9").click(function () {
    $("ul#list").append("<li><span class='food'>" + "French Fries" + "</span></li>");
});
function FoodNine(size) {
    this.foodSiz = size;
};
FoodNine.prototype.nameSiz = function () {
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
$("#button10").click(function () {
    $("ul#list").append("<li><span class='food'>" + "Tacos" + "</span></li>");
});
