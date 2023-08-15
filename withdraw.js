// mouse click
// withdraw
document.getElementById('withdraw-btn').addEventListener('click',function(){
   const withdrawAmountString = document.getElementById('withdraw-amount')
   const withdrawAmountNumber = parseFloat(withdrawAmountString.value);
   withdrawAmountString.value='';
   if(isNaN(withdrawAmountNumber)){
      return alert('Please enter valid amount')
   }
   const balanceDisplayString =document.getElementById('balance').innerText
   const balanceDisplayNumber = parseFloat(balanceDisplayString);
//if anyone withdraw amount more than total balance
    if(withdrawAmountNumber>balanceDisplayNumber){
     return alert('You do not have such amount of money')
   }
//withdraw amount display
   const withdrawDisplayString =document.getElementById('withdraw').innerText
   const withdrawDisplayNumber = parseFloat(withdrawDisplayString);
   const finalWithdraw =withdrawAmountNumber+withdrawDisplayNumber;
   document.getElementById('withdraw').innerText=finalWithdraw;
// total balance after withdraw   
   const totalBalance = balanceDisplayNumber-withdrawAmountNumber;
   document.getElementById('balance').innerText=totalBalance;
   
})
// keypress
document.getElementById('withdraw-amount').addEventListener('keyup',function(event){
   if(event.key==='Enter'){
   const withdrawAmountString = document.getElementById('withdraw-amount')
   const withdrawAmountNumber = parseFloat(withdrawAmountString.value);
   withdrawAmountString.value='';
   if(isNaN(withdrawAmountNumber)){
      return alert('Please enter valid amount')
   }
   const balanceDisplayString =document.getElementById('balance').innerText
   const balanceDisplayNumber = parseFloat(balanceDisplayString);
//if anyone withdraw amount more than total balance
    if(withdrawAmountNumber>balanceDisplayNumber){
     return alert('You do not have such amount of money')
   }
//withdraw amount display
   const withdrawDisplayString =document.getElementById('withdraw').innerText
   const withdrawDisplayNumber = parseFloat(withdrawDisplayString);
   const finalWithdraw =withdrawAmountNumber+withdrawDisplayNumber;
   document.getElementById('withdraw').innerText=finalWithdraw;
// total balance after withdraw   
   const totalBalance = balanceDisplayNumber-withdrawAmountNumber;
   document.getElementById('balance').innerText=totalBalance;
}
})
