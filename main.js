function start(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/DH8PHPLMR/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("respective").innerHTML = results[0].label;
        document.getElementById("result_audio").innerHTML = (results[0].confidence * 100).toFixed(0) + " %";
    
    
       image = document.getElementById('image');
       

        if(results[0].label == 'Background Noise'){
            image.src = "hi.png";
        }
    
        if(results[0].label == 'Barking'){
            image.src = "dog.jpg";
        }
    
        if(results[0].label == 'Elephant'){
            image.src = "elephant.jpg";
        }
    
        if(results[0].label == 'Meowing'){
            image.src = "cat.jpg";
        }

        if(results[0].label == 'Tiger '){
            image.src = "tiger.jpeg";
        }
    }
}