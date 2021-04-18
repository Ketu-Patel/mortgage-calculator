

function myFunction(addForm){
   
    document.getElementById("calculate").innerHTML ="Done";    
    
    var loan = addForm.loan.value;
    var term = addForm.term.value;
    var rate = addForm.interest.value/100;
    rate /=12;
    var payment = loan*((rate*(1+rate)**term))/(((1+rate)**term) -1);
    payment=Math.round(payment*100);
    payment = payment/100;
    document.getElementById("hehe").innerHTML="$"+payment;
}