// mouse click
document.getElementById('deposit-btn').addEventListener('click',function(){
     const depositAmount = inputAmountById('deposit-amount')
     if(isNaN(depositAmount)){
          return alert("Enter a valid amount");
      }
      else{
     const previousDeposit = elementAmountById('deposit')
     const totalDeposit = depositAmount+previousDeposit;
     totalSetById('deposit',totalDeposit)
     const previousBalance =elementAmountById('balance')
     const totalBalance =depositAmount+previousBalance;
     totalSetById('balance',totalBalance);
      }
})
// Enter key press
document.getElementById('deposit-amount').addEventListener('keyup',function(event){
     if(event.key==='Enter'){
          const depositAmount =inputAmountById('deposit-amount')
          if(isNaN(depositAmount)){
               return alert("Enter a valid amount");
           }
           else{
          const previousDeposit= elementAmountById('deposit')
          const totalDeposit = depositAmount+previousDeposit;
          totalSetById('deposit',totalDeposit);
          const previousBalance = elementAmountById('balance')
          const totalBalance = previousBalance+depositAmount;
          totalSetById('balance',totalBalance);
           }
     }
})