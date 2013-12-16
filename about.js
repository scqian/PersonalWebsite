$(document).ready(function(){
    $("body").css("display","none");
    $("body").fadeIn();
    $display = false;
    $("#contact-button").click(function(){
        if ($display) {
            $("#contact").slideUp();
            $display = false;
        }
        else {
            $("#contact").slideDown();
            $display = true;
        }
    });
});