var playing = false;
function playMusic() {
    var audio = new Audio('media/music.mp3');
    var video = document.getElementById('video');
    if (playing == false) {
        document.getElementsByClassName('muted')[0].innerText = '';
        video.play();
        audio.play();
        audio.volume = 0.01;
        playing = true;
        video.style = "filter: brightness(100%) blur(0px)";
    } else {
        video.pause();
        audio.pause();
    }
    video.addEventListener("ended", function() {
        video.currentTime = 0;
        video.play();
    })

    audio.addEventListener("ended", function(){
        audio.currentTime = 0;
        audio.play();
   });
}