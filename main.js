objectInput = "";
Status = "";
objects = [];

function setup() {
    canvas = createCanvas(450, 350);
    canvas.center();

    video = createCapture();
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    objectInput = document.getElementById("objectname").innerHTML;
}

function modelLoaded(results) {
    if (results > 0) {
        console.log(results);
        objects = results;
        Status = "True";
    }
}

function draw() {
    image(video, 0, 0, 450, 350);
}