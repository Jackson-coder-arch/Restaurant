var order = [];

function Food(size) {
    this.foodSize = size;
};


Food.prototype.nameSize = function () {
    if (this.foodSize == 200) {
        return "Rice Beef Stew";
    }
};
$("#button1").click(function () {
    var foodSize = parseInt($("#burg").val());
    var matoke = new Food(foodSize);
    $("#subtotal").show();
    $(".carttext").show();
    $(".cartsub").show();
    $(".nproduct").hide();

    $("#burg").val("200");
    order.push(matoke);

    var totalAmount = 0;
    for (let i = 0; i < order.length; i++) {
        totalAmount += order[i].foodSize;
    };

    $("ul#list").append("<li><span class='food'>" + matoke.nameSize() +
        "<span style='padding-left: 120px;'>" + matoke.foodSize + "<br>" + "</span>" + "</span></li>" + "<hr>");
    $("h2#total").text(totalAmount);
    if (foodSize == 250) {
        $("#checkout").show();
        $(".nproduct").show();
    }
});
function FoodOne(size) {
    this.foodSizeOne = size;
};
FoodOne.prototype.nameSizeOne = function () {
    if (this.foodSizeOne == 200) {
        return "Ugali Beef Stew";
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

    $("#burgone").val("200");
    order.push(matokeTwo);



    var totalAmount = 0;
    for (let i = 0; i < order.length; i++) {
        totalAmount += order[i].foodSizeOne;
    };
    $("ul#list").append("<li><span class='food'>" + matokeTwo.nameSizeOne() +
        "<span style='padding-left: 120px;'>" + matokeTwo.foodSizeOne + "<br>" + "</span>" + "</span></li>" + "<hr>");
    $("h2#total").text(totalAmount);
    if (foodSizeOne == 200) {
        $("#checkout").show();
        $(".nproduct").show();
    }
});
function FoodTwo(size) {
    this.foodSizeTwo = size;
};
FoodTwo.prototype.nameSizeTwo = function () {
    if (this.foodSizeTwo == 300) {
        return "Ugali Chicken Stew";
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

    $("#burgtwo").val("300");
    order.push(matokeThree);



    var totalAmount = 0;
    for (let i = 0; i < order.length; i++) {
        totalAmount += order[i].foodSizeTwo;
    };
    $("ul#list").append("<li><span class='food'>" + matokeThree.nameSizeTwo() +
        "<span style='padding-left: 120px;'>" + matokeThree.foodSizeTwo + "<br>" + "</span>" + "</span></li>" + "<hr>");
    $("h2#total").text(totalAmount);
    if (foodSizeTwo == 300) {
        $("#checkout").show();
        $(".nproduct").show();
    }
});
function FoodThree(size) {
    this.foodSizeThree = size;
};
FoodThree.prototype.nameSizeThree = function () {
    if (this.foodSizeThree == 400) {
        return "Rice Chicken Stew";
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

    $("#burgthree").val("400");
    order.push(matokeFour);



    var totalAmount = 0;
    for (let i = 0; i < order.length; i++) {
        totalAmount += order[i].foodSizeThree;
    };
    $("ul#list").append("<li><span class='food'>" + matokeFour.nameSizeThree() +
        "<span style='padding-left: 120px;'>" + matokeFour.foodSizeThree + "<br>" + "</span>" + "</span></li>" + "<hr>");
    $("h2#total").text(totalAmount);
    if (foodSizeThree == 400) {
        $("#checkout").show();
        $(".nproduct").show();
    }
});
function FoodFour(size) {
    this.foodSizeFour = size;
};
FoodFour.prototype.nameSizeFour = function () {
    if (this.foodSizeFour == 200) {
        return "Githeri";
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

    $("#burgfour").val("200");
    order.push(matokeFive);



    var totalAmount = 0;
    for (let i = 0; i < order.length; i++) {
        totalAmount += order[i].foodSizeFour;
    };
    $("ul#list").append("<li><span class='food'>" + matokeFive.nameSizeFour() +
        "<span style='padding-left: 120px;'>" + matokeFive.foodSizeFour + "<br>" + "</span>" + "</span></li>" + "<hr>");
    $("h2#total").text(totalAmount);
    if (foodSizeFour == 1) {
        $("#checkout").show();
        $(".nproduct").show();
    }
});
// function FoodFive(size) {
//     this.foodSiz = size;
// };
// FoodFive.prototype.nameSiz = function () {
//     if (this.foodSiz == 100) {
//         return "SmllY";
//     }
//     if (this.foodSiz == 200) {
//         return "MediumY"
//     }
//     if (this.foodSiz == 300) {
//         return "LargeY"
//     }
// };
// $("#button6").click(function () {
//     $("ul#list").append("<li><span class='food'>" + "Fried Chicken" + "</span></li>");
// });
// function FoodSiz(size) {
//     this.foodSiz = size;
// };
// FoodSiz.prototype.nameSiz = function () {
//     if (this.foodSiz == 100) {
//         return "SmllY";
//     }
//     if (this.foodSiz == 200) {
//         return "MediumY"
//     }
//     if (this.foodSiz == 300) {
//         return "LargeY"
//     }
// };
// $("#button7").click(function () {
//     $("ul#list").append("<li><span class='food'>" + "Onion Rings" + "</span></li>");
// });
// function FoodSeven(size) {
//     this.foodSiz = size;
// };
// FoodSeven.prototype.nameSiz = function () {
//     if (this.foodSiz == 100) {
//         return "SmllY";
//     }
//     if (this.foodSiz == 200) {
//         return "MediumY"
//     }
//     if (this.foodSiz == 300) {
//         return "LargeY"
//     }
// };
// $("#button8").click(function () {
//     $("ul#list").append("<li><span class='food'>" + "Hot Dogs" + "</span></li>");
// });
// function FoodEight(size) {
//     this.foodSiz = size;
// };
// FoodEight.prototype.nameSiz = function () {
//     if (this.foodSiz == 100) {
//         return "SmllY";
//     }
//     if (this.foodSiz == 200) {
//         return "MediumY"
//     }
//     if (this.foodSiz == 300) {
//         return "LargeY"
//     }
// };
// $("#button9").click(function () {
//     $("ul#list").append("<li><span class='food'>" + "French Fries" + "</span></li>");
// });
// function FoodNine(size) {
//     this.foodSiz = size;
// };
// FoodNine.prototype.nameSiz = function () {
//     if (this.foodSiz == 100) {
//         return "SmllY";
//     }
//     if (this.foodSiz == 200) {
//         return "MediumY"
//     }
//     if (this.foodSiz == 300) {
//         return "LargeY"
//     }
// };
// $("#button10").click(function () {
//     $("ul#list").append("<li><span class='food'>" + "Tacos" + "</span></li>");
// });