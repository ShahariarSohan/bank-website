//  input
 function inputAmountById(inputId){
    const inputAmountString = document.getElementById(inputId)
    const inputAmount =parseFloat(inputAmountString.value);
    inputAmountString.value='';
    if(isNaN(inputAmount)){
        return alert("Enter valid amount");
    }
    else{
        return inputAmount;
    }
}
// element 
function elementAmountById(elementId){
    const elementAmountString =document.getElementById(elementId).innerText
    const elementAmount = parseFloat(elementAmountString);
    return elementAmount;

}
function totalDepositWithdraw(inputAmount,elementAmount){
    const addOrSub = inputAmount+elementAmount;
    return addOrSub;
}