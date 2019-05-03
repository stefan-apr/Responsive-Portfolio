$(document).ready(function() {
    $(".details").each(function() {
        $(this).click(function() {
            let chosen = $(this).attr("id");
            console.log(chosen);
        });
    });
});