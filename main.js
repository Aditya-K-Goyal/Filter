function preload()
{

}
function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw()
{
    image(video,0,0,400,400);
}
function take_snapshot()
{
    save("MyMustacheOrlipstickImage.png");
}
function modelLoaded()
{
    console.log("Your Model Is Loaded");
}
function gotPoses(result)
{
    if(result.length > 0){
        console.log(result);
        console.log("x position of nose =" + result[0].pose.nose.x);
        console.log("y position of nose =" + result[0].pose.nose.y);
    }
}