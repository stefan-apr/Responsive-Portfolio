import details from "./details.js";

$(document).ready(function() {
    var chosen;
    $(".details").each(function() {
        $(this).click(function() {
            chosen = $(this).attr("id");
            for(let i = 0; i < details.length; i++) {
                if(chosen === details[i].id) {
                    var detail = details[i];
                }
            }
            $("#port").css("display", "none");
            $("#updated-header").css("display", "none");
            $("#nav-instructions").css("display", "none");
            $("#portfolio-header").css("height", "60px");
            $("#back").css("display", "block");
            $("#about").empty();
            $("#about").append("<br>");
            $("#about").append("<h2 id='detail-header'>" + detail.properName + "</h2>");
            $("#about").append("<br><br>");
            $("#about").append("<img src='" + detail.img + "' alt='Profile' id='detail-img' class='singleIMG'>");
            if(detail.id === "sf-rpg") {
                $("#detail-img").attr("id", "ryu");
            } else {
                $("#ryu").attr("id", "detail-img");
            }
            $("#about").append("<p>" + detail.desc + "</p>");
            $("#about").css("display", "block");
        });
    });

    $("#back").click(function() {
        $("#about").css("display", "none");
        $("#back").css("display", "none");
        $("#updated-header").css("display", "inline");
        $("#port").css("display", "block");
        $("#nav-instructions").css("display", "block");
        $("#portfolio-header").css("height", "120px");
    });
});