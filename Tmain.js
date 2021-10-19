function preload(){

}

function setup(){
    canvas = createCanvas(400, 350);
    canvas.position(450, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw(){
    image(video, 0, 0, 400, 350);
    tint(tint_color);
}

function Filter_Color(){
    tint_color = document.getElementById("Filter color").value;
}

function take_snapshot(){
    Name = document.getElementById("name").value;
    save(Name + ".png");
}
function Home() {
    window.location = "index.html";
}