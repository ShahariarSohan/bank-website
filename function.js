//  input amount
 function inputAmountById(inputId){
    const inputAmountString = document.getElementById(inputId)
    const inputAmount =parseFloat(inputAmountString.value);
    inputAmountString.value='';
    return inputAmount;
    
}
// element amount
function elementAmountById(elementId){
    const elementAmountString =document.getElementById(elementId).innerText
    const elementAmount = parseFloat(elementAmountString);
    return elementAmount;
    
}
function totalSetById(elementId,newValue){
    document.getElementById(elementId).innerText=newValue;
}

