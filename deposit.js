//deposit
document.getElementById('deposit-btn').addEventListener('click',function(){
   const depositAmountString = document.getElementById('deposit-amount')
   const depositAmountNumber = parseFloat(depositAmountString.value);
   depositAmountString.value='';
   const depositDisplayString =document.getElementById('deposit').innerText
   const depositDisplayNumber = parseFloat(depositDisplayString);
   const finalDeposit =depositAmountNumber+depositDisplayNumber;
   document.getElementById('deposit').innerText=finalDeposit;
// total balance after deposit   
   const balanceDisplayString =document.getElementById('balance').innerText
   const balanceDisplayNumber = parseFloat(balanceDisplayString);
   const balanceDeposit = depositAmountNumber+balanceDisplayNumber;
   document.getElementById('balance').innerText=balanceDeposit;
   
})