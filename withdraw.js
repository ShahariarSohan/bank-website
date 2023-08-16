// mouse click
document.getElementById('withdraw-btn').addEventListener('click',function(){
   const withdrawAmount = inputAmountById('withdraw-amount');
   if(isNaN(withdrawAmount)){
      return alert("Enter a valid amount");
  }
  else{
   const previousWithdraw = elementAmountById('withdraw')
   const previousBalance = elementAmountById('balance')
   if(withdrawAmount>previousBalance){
      return alert("You do not have such amount of balance")
   }
   else{
   const totalWithdraw = withdrawAmount+previousWithdraw;
   totalSetById('withdraw',totalWithdraw);
   const totalBalance = previousBalance - withdrawAmount;
   totalSetById('balance',totalBalance);
   }
  }
})
//Enter key press 
document.getElementById('withdraw-amount').addEventListener('keyup',function(event){
   if(event.key==='Enter'){
      const withdrawAmount = inputAmountById('withdraw-amount')
      if(isNaN(withdrawAmount)){
         return alert("Enter a valid amount");
     }
     else{
      const previousWithdraw =elementAmountById('withdraw')
      const previousBalance = elementAmountById('balance')
      if(withdrawAmount>previousBalance){
         return alert("You do not have such amount of balance")
      }
      else{
         const totalWithdraw =withdrawAmount+previousWithdraw;
         totalSetById('withdraw',totalWithdraw)
         const totalBalance =previousBalance-withdrawAmount;
         totalSetById('balance',totalBalance);
      }
     }
   }
})