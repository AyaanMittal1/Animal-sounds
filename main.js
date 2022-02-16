console.log(document.getElementById("s1").style.fontFamily);
function start_mic(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/MkSlSdKdp/model.json",model_ready);
}
function model_ready(){
    classifier.classify(got_results);
}
function got_results(error,results){
    console.log("got results");
    if (error){
        console.log(error);
    }
    else{
        console.log(results)
        sound=results[0].label;
        confidence=(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("sound").innerHTML=sound
        document.getElementById("accuracy").innerHTML=confidence;
        img1=document.getElementById("alien1");
        img2=document.getElementById("alien2");
        img3=document.getElementById("alien3");
        img4=document.getElementById("alien4");
        font1=document.getElementById("s1");
        font2=document.getElementById("s2");
        font3=document.getElementById("s3");
        font4=document.getElementById("s4");
        if (sound == "Dog"){
            img1.src="https://cdnb.artstation.com/p/assets/images/images/026/286/471/original/hai-chi-dog-barking.gif?1588366199&dl=1";
            img2.src="Cow.png";
            img3.src="https://www.freeiconspng.com/thumbs/cat-png/cat-png-17.png";
            img4.src="Sound.png";
        }
        else if(sound == "Cow"){
            img1.src="Dog.png";
            img2.src="https://media0.giphy.com/media/eeN1xWYujLSvufhMwY/200w.gif";
            img3.src="https://www.freeiconspng.com/thumbs/cat-png/cat-png-17.png";
            img4.src="Sound.png";
        }
        else if(sound == "Cat"){
            img1.src="Dog.png";
            img2.src="Cow.png";
            img3.src="https://thumbs.gfycat.com/ShamefulRequiredAsiaticwildass-max-1mb.gif";
            img4.src="Sound.png";
        }
        else{
            img1.src="Dog.png";
            img2.src="Cow.png";
            img3.src="https://www.freeiconspng.com/thumbs/cat-png/cat-png-17.png";
            img4.src="https://i.gifer.com/YdBO.gif";
        }
    }
    
}