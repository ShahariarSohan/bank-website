// withdraw
document.getElementById('withdraw-btn').addEventListener('click',function(){
   const withdrawAmountString = document.getElementById('withdraw-amount')
   const withdrawAmountNumber = parseFloat(withdrawAmountString.value);
   withdrawAmountString.value='';
   const withdrawDisplayString =document.getElementById('withdraw').innerText
   const withdrawDisplayNumber = parseFloat(withdrawDisplayString);
   const finalWithdraw =withdrawAmountNumber+withdrawDisplayNumber;
   document.getElementById('withdraw').innerText=finalWithdraw;
// total balance after withdraw   
   const balanceDisplayString =document.getElementById('balance').innerText
   const balanceDisplayNumber = parseFloat(balanceDisplayString);
   const totalBalance = balanceDisplayNumber-withdrawAmountNumber;
   document.getElementById('balance').innerText=totalBalance;
   
})