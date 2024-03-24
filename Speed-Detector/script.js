const button=document.querySelector(".button");
let speedDetector=document.querySelector(".speed_detector")
function calculate(){
    // Get speed value from input
    let speed=document.querySelector("#speed").value;
      // Check if speed is less than or equal to 70
    if (parseFloat(speed)<=70){
        // Display OK if speed is within limit
        speedDetector.innerHTML="OK"
    }else if(parseFloat(speed)>70){
        // Calculate points based on speed over limit
        let points=Math.floor((parseFloat(speed)-70)/5)
          // Check if points are greater than 12
        if (points>12){
            // Display License Suspended if points are greater than 12
            speedDetector.innerHTML="License Suspended"
        }else{
            speedDetector.innerHTML=`Points: ${points}`
        }
    }   
}
// Adds event listener to the button
button.addEventListener("click",calculate)