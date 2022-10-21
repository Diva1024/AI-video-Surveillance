objects=[];
video="";
status1="";
function preload(){
video=createVideo("video.mp4");

}
function setup(){
canvas=createCanvas(450,300);
canvas.center();
video.hide();
}
function draw(){
image(video,0,0,450,300);
if(status1!=""){
objectDetector.detect(video,gotResult);
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="Status : Objects detected";
        document.getElementById("xyz").innerHTML="Number of Objects Detected are : "+objects.length;
        fill("#8d2e8f");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+ percent +"%",objects[i].x,objects[i].y);
        noFill();
        stroke("#8d2e8f");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        
    }
}
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
    
}
function modelLoaded(){
    console.log("modelloaded");
    status1=true;
    video.loop();
    video.speed(1);
    video.volume(1);
}
function gotResult(error,results){
    if(error){
        console.log(error);

    }
    console.log(results);
    objects=results;
}