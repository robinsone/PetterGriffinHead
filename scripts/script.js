

$(document).ready(function () {
    var audio = document.getElementById("sound");
    audio.play();
    var playpause = true;
    

    $('#playsound').click(function () {
        if (playpause) {
            audio.pause();
            $('#playicon').addClass('glyphicon-play').removeClass('glyphicon-pause');
            playpause = false;
        } else {
            audio.play();
            $('#playicon').addClass('glyphicon-pause').removeClass('glyphicon-play');
            playpause = true;
        }
    });

    $("#foobar").bind("ended", function () {
        $('#playicon').addClass('glyphicon-play').removeClass('glyphicon-pause');
    });
});