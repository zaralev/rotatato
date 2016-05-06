$(document).ready(function() {
    $("img").hover(function() {
        $(".up").hover(function() {
            // alert("this is up");

            var thisColor = Math.floor(Math.random() * 2) + 1;
            switch (thisColor) {
                case 1:
                    $(this).attr('src', 'img/pink.jpg');
                    break;
                case 2:
                    $(this).attr('src', 'img/blue.jpg');
                    break;
                default:
                    console.log("oops??");
            }

            var thisClass = Math.floor(Math.random() * 3) + 1;
            switch (thisClass) {
                case 1:
                    $(this).removeClass("up").addClass("right");
                    break;
                case 2:
                    $(this).removeClass("up").addClass("left");
                    break;
                case 3:
                    $(this).removeClass("up").addClass("down");
                    break;
                default:
                    console.log("oops??");
            }

        });
        $(".down").hover(function() {
            // alert("this is down");


            var thisColor = Math.floor(Math.random() * 2) + 1;
            switch (thisColor) {
                case 1:
                    $(this).attr('src', 'img/pink.jpg');
                    break;
                case 2:
                    $(this).attr('src', 'img/blue.jpg');
                    break;
                default:
                    console.log("oops??");
            }

            var thisClass = Math.floor(Math.random() * 3) + 1;
            switch (thisClass) {
                case 1:
                    $(this).removeClass("down").addClass("right");
                    break;
                case 2:
                    $(this).removeClass("down").addClass("left");
                    break;
                case 3:
                    $(this).removeClass("down").addClass("up");
                    break;
                default:
                    console.log("oops??");
            }

        });
        $(".left").hover(function() {
            // alert("this is left");

            var thisColor = Math.floor(Math.random() * 2) + 1;
            switch (thisColor) {
                case 1:
                    $(this).attr('src', 'img/pink.jpg');
                    break;
                case 2:
                    $(this).attr('src', 'img/blue.jpg');
                    break;
                default:
                    console.log("oops??");
            }


            var thisClass = Math.floor(Math.random() * 3) + 1;
            switch (thisClass) {
                case 1:
                    $(this).removeClass("left").addClass("right");
                    break;
                case 2:
                    $(this).removeClass("left").addClass("up");
                    break;
                case 3:
                    $(this).removeClass("left").addClass("down");
                    break;
                default:
                    console.log("oops??");
            }
        });
        $(".right").hover(function() {
            // alert("this is right");

            var thisColor = Math.floor(Math.random() * 2) + 1;
            switch (thisColor) {
                case 1:
                    $(this).attr('src', 'img/pink.jpg');
                    break;
                case 2:
                    $(this).attr('src', 'img/blue.jpg');
                    break;
                default:
                    console.log("oops??");
            }

            var thisClass = Math.floor(Math.random() * 3) + 1;
            switch (thisClass) {
                case 1:
                    $(this).removeClass("right").addClass("up");
                    break;
                case 2:
                    $(this).removeClass("right").addClass("left");
                    break;
                case 3:
                    $(this).removeClass("right").addClass("down");
                    break;
                default:
                    console.log("oops??");
            }
        });



    });

});
