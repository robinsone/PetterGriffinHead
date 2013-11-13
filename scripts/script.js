var sound = document.getElementById("foobar");

$(document).ready(function () {
    var sound = document.getElementById("foobar");
    var playpause = true;
    sound.play();

    $('#playsound').click(function () {
        if (playpause) {
            sound.pause();
            $('#playicon').addClass('glyphicon-play').removeClass('glyphicon-pause');
            playpause = false;
        } else {
            sound.play();
            $('#playicon').addClass('glyphicon-pause').removeClass('glyphicon-play');
            playpause = true;
        }
    });

    $("#foobar").bind("ended", function () {
        $('#playicon').addClass('glyphicon-play').removeClass('glyphicon-pause');
    });
});