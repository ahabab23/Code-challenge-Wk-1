let benefits = document.querySelector("#benefits").value
const button = document.querySelector(".button")
benefits = parseFloat(benefits)
let nhif;
let nssf;
let insuranceRelief;
let personalRelief;
let payee;
let taxablePay;
let netPay;

function nhifCalc() {
    let basicSalary = document.querySelector("#salary").value

    basicSalary = parseFloat(basicSalary)

    if (basicSalary >= 600 && basicSalary < 6000) {
         nhif = 150
    }
    else if (basicSalary >= 6000 && basicSalary < 8000) {
        nhif = 300
    } else if (basicSalary >= 8000 && basicSalary < 12000) {
        nhif = 400
    } else if (basicSalary >= 12000 && basicSalary < 15000) {
         nhif = 500
    } else if (basicSalary >= 15000 && basicSalary < 20000) {
         nhif = 600
    } else if (basicSalary >= 20000 && basicSalary < 25000) {
         nhif = 750

    } else if (basicSalary >= 25000 && basicSalary < 30000) {
         nhif = 850
    } else if (basicSalary >= 30000 && basicSalary < 40000) {
        nhif = 950
    } else if (basicSalary >= 40000 && basicSalary < 45000) {
        nhif = 1000
    } else if (basicSalary >= 45000 && basicSalary < 50000) {
         nhif = 1100
    } else if (basicSalary >= 50000 && basicSalary < 60000) {
         nhif = 1200
    } else if (basicSalary >= 60000 && basicSalary < 70000) {
         nhif = 1300
    } else if (basicSalary >= 70000 && basicSalary < 80000) {
         nhif = 1400
    } else if (basicSalary >= 80000 && basicSalary < 90000) {
         nhif = 1500
    } else if (basicSalary >= 90000 && basicSalary < 100000) {
         nhif = 1600
    } else if (basicSalary >= 100000) {
         nhif = 1700
    }else{
        nhif=0
    }
    return nhif
}
function nssfCalc(){
    let basicSalary = document.querySelector("#salary").value
    basicSalary = parseFloat(basicSalary)
    if(basicSalary>1000 && basicSalary<=7000){
        nssf=420

    }else if(basicSalary>7000 && basicSalary<=36000){
        nssf=Math.round(420+0.06*(basicSalary-7000))
    }else if(basicSalary>36000){
        nssf=2160
    }else{
        nssf=0
    }
   return nssf

}
function insuranceReliefCalc(){
    nhif=nhifCalc()
    insuranceRelief=Math.round(0.15*nhif)
    return insuranceRelief

}
function payeeCalc(){
    let basicSalary = document.querySelector("#salary").value
    let benefits = document.querySelector("#benefits").value
    basicSalary = parseFloat(basicSalary)
    benefits = parseFloat(benefits)
    let personalRelief=2400
    let insuranceRelief=insuranceReliefCalc()
    let nssf=nssfCalc()
    taxablePay=basicSalary-benefits-nssf
    if(taxablePay===24001){
        payee=2400-personalRelief-insuranceRelief
    }else if(taxablePay>24001 && taxablePay <=32333){
        payee=Math.round(2400+0.25*(taxablePay-24001)-personalRelief-insuranceRelief)
    }else if (taxablePay>32333){
        payee=Math.round(2400+0.25*(32333-24000)+0.3*(taxablePay-32333) - personalRelief -insuranceRelief)
    }else{
        payee=0
    }
    return payee

}
function netPayCalc(){
    let basicSalary = document.querySelector("#salary").value
    let benefits = document.querySelector("#benefits").value
    basicSalary = parseFloat(basicSalary)
    benefits = parseFloat(benefits)
    let payee=payeeCalc()
    let nssf=nssfCalc()
    let  nhif=nhifCalc()
    netPay=basicSalary-benefits-payee-nssf-nhif
    return Math.round(netPay)
}




function calc() {
    let basicSalary = document.querySelector("#salary").value
    let benefits = document.querySelector("#benefits").value
    basicSalary = parseFloat(basicSalary)
    benefits = parseFloat(benefits)
    let nssf=nssfCalc()
    let  nhif=nhifCalc()
    let personalRelief=2400
    let insuranceRelief=insuranceReliefCalc()
    let payee=payeeCalc()
    let netPay=netPayCalc()
    const output=document.querySelector(".output")
    output.innerHTML=`<table>
    <tr><td> <h2>Gross Pay</h2></td>
        <td><h2>${basicSalary}</h2></td>
    </tr>
    <tr>
        <td><h2>Contribution Benefit</h2></td>
        <td><h2>${benefits}</h2></td>
    </tr>
    <tr>
        <td> <h2>NHIF Deductions</h2></td>
        <td><h2>${nhif}</h2></td>
    </tr>

    <tr>
        <td> <h2>NSSF Deductions</h2></td>
        <td><h2>${nssf}</h2></td>
    </tr>

    <tr>
        <td> <h2>Insurance Relief</h2></td>
        <td><h2>${insuranceRelief}</h2></td>
    </tr>

    <tr>
    <td> <h2>Personal Relief</h2></td>
    <td><h2>${personalRelief}</h2></td>
     </tr>


    <tr>
        <td><h2>Payee</h2></td>
        <td><h2>${payee}</h2></td>
    </tr>
    <tr>
        <td><h2>Net salary</h2></td>
        <td><h2>${netPay}</h2></td>
    </tr>
    </table>`
    output.style.cssText=" background-color:  rgba(211, 222, 223, 0.35);padding: 5rem;width: 30%;border-radius: 1rem;margin: auto;color: white;text-align: initial;"
}
button.addEventListener('click', calc)