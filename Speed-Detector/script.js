const button=document.querySelector(".button");
let speedDetector=document.querySelector(".speed_detector")
function calculate(){
    let speed=document.querySelector("#speed").value;
    if (parseFloat(speed)<=70){
        speedDetector.innerHTML="OK"
    }else if(parseFloat(speed)>70){
        let points=Math.floor((parseFloat(speed)-70)/5)
        if (points>12){
            speedDetector.innerHTML="License Suspended"
        }else{
            speedDetector.innerHTML=`Points: ${points}`
        }
    }   
}

button.addEventListener("click",calculate)