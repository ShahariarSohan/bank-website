//deposit
document.getElementById('deposit-btn').addEventListener('click',function(){
   const depositAmountString = document.getElementById('deposit-amount')
   const depositAmountNumber = parseFloat(depositAmountString.value);
   if(isNaN(depositAmountNumber)){
      return alert('Please enter valid amount')
   }
   depositAmountString.value='';
   const depositDisplayString =document.getElementById('deposit').innerText
   const depositDisplayNumber = parseFloat(depositDisplayString);
   const finalDeposit =depositAmountNumber+depositDisplayNumber;
   document.getElementById('deposit').innerText=finalDeposit;
// total balance after deposit   
   const balanceDisplayString =document.getElementById('balance').innerText
   const balanceDisplayNumber = parseFloat(balanceDisplayString);
   const totalBalance = depositAmountNumber+balanceDisplayNumber;
   document.getElementById('balance').innerText=totalBalance;
})