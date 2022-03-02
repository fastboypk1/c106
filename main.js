Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90,
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="snapshot" src ="'+data_uri+'"/>';

    });



}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hs8qh2p2H/model.json',modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
    
}
function check(){
    picture = document.getElementById("snapshot");
    classifier.classify(picture, gotResult);
} 
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML= results[0].label;
        document.getElementById("result_object_accuracy").innerHTML= results[0].confidence.toFixed(1);
    }
}