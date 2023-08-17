function StartClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AuJuZ7XE5/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear-'+ results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy-'+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color=
        "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color=
        "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        
        img=document.getElementById('ear.png')

        if (results[0].label=="barking"){
            img.src='dog2.jpg';

        }else if (results[0].label=="meowing"){
            img.src='cat.jpg';

        }else if (results[0].label=="roar"){
            img.src='lion.jpg';

        }else if (results[0].label=="mooing"){
            img.src='cow.jpg';

        }else{
            img.src='ear.png'
        }
    }
}