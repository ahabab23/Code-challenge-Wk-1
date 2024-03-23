let button = document.querySelector(".button")
let result = document.querySelector(".result");
let grade = document.querySelector(".grade")
function check() {
    // Get the values of the HTML elements with the IDs javascript, css, python, react, and ruby
    let js = document.querySelector("#javascript").value;
    let css = document.querySelector("#css").value;
    let python = document.querySelector("#python").value;
    let react = document.querySelector("#react").value;
    let ruby = document.querySelector("#ruby").value;
    let totalMarks = document.querySelector('.total_marks');
    let percentage = document.querySelector('.Percentage')
    let sum = parseFloat(js) + parseFloat(css) + parseFloat(python) + parseFloat(react) + parseFloat(ruby);
    let average = (sum / 500) * 100;

    // Check if any of the input values are empty or out of range
    if (js === '' || css === '' || python === '' || react === '' || ruby === '' ||
        js < 0 || js > 100 || css < 0 || css > 100 || python < 0 || python > 100 ||
        react < 0 || react > 100 || ruby < 0 || ruby > 100) {
        // If it is, display a message in the result element
        grade.innerHTML = `<p>Please Enter A Valid Value Between 0 and 100</p>`
        totalMarks.innerHTML = ``
        percentage.innerHTML = ``

    } else {
        if (average > 79 && average <= 100) {
            grade.innerHTML = `Grade: A`
        } else if (average > 60 && average <= 79) {
            grade.innerHTML = `Grade: B`
        } else if (average > 49 && average <= 60) {
            grade.innerHTML = `Grade: C`
        } else if (average > 40 && average <= 49) {
            grade.innerHTML = `Grade: D`
        } else {
            grade.innerHTML = `Grade: E`
        }
        totalMarks.innerHTML = `Total Marks : ${sum}/500`
        percentage.innerHTML = `Percentage : ${Math.round(average)}%`
    }


}


button.addEventListener("click", check)