Song1="music.mp3"
Song2="music2.mp3"

function preload()
{
    Song1 = loadSound("music.mp3");
    Song2 = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}



