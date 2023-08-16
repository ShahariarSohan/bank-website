// mouse click
document.getElementById('withdraw-btn').addEventListener('click',function(){
   const withdrawAmount = inputAmountById('withdraw-amount');
   const previousWithdraw = elementAmountById('withdraw')
   const previousBalance = elementAmountById('balance')
   if(withdrawAmount>previousBalance){
      return alert("You do not have such amount of balance")
   }
   const totalWithdraw = withdrawAmount+previousWithdraw;
   totalSetById('withdraw',totalWithdraw);
   const totalBalance = previousBalance - withdrawAmount;
   console.log(previousBalance,totalBalance);
   totalSetById('balance',totalBalance);
})