let button = document.querySelector(".button")
let result = document.querySelector(".result");

let grade = document.querySelector(".grade")
function calculate() {
    let js = document.querySelector("#javascript").value;
    let css = document.querySelector("#css").value;
    let python = document.querySelector("#python").value;
    let react = document.querySelector("#react").value;
    let ruby = document.querySelector("#ruby").value;
    if (document.querySelector("input").value==''){
        result.innerHTML=`<p>Please Enter A value</p>`
    }
    let sum = parseFloat(js) + parseFloat(css) + parseFloat(python) + parseFloat(react) + parseFloat(ruby);
    let average = (sum / 500) * 100;
    if (average > 79 && average <= 100) {
        grade.innerHTML = `Grade: A`
    } else if (average > 60 && average <= 79) {
        grade.innerHTML = `Grade: B`
    }else if (average > 49 && average <= 60) {
        grade.innerHTML = `Grade: C`
    } else if (average > 40 && average <= 49) {
        grade.innerHTML = `Grade: D`
    } else {
        grade.innerHTML = `Grade: E`
    }
    let totalMarks = document.querySelector('.total_marks');
    let percentage = document.querySelector('.Percentage')
    totalMarks.innerHTML = `Total Marks : ${sum}/500`
    percentage.innerHTML = `Percentage : ${Math.round(average)}%`

}

button.addEventListener("click", calculate)