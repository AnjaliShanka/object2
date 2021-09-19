img = "";
status1 = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();   
}

function preload(){
  img = loadImage('Tools.jpg');  
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    
}

function modelLoaded() {
    console.log("Model Loaded!")
    status1 = true;
    objectDetector.detect(img, gotResults);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}