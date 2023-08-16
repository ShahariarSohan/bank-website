// mouse click
document.getElementById('deposit-btn').addEventListener('click',function(){
     const depositInput = inputAmountById('deposit-amount')
     const previousDeposit = elementAmountById('deposit')
     const totalDeposit = depositInput+previousDeposit;
     totalSetById('deposit',totalDeposit)
     const previousBalance =elementAmountById('balance')
     const balanceTotal =depositInput+previousBalance;
     totalSetById('balance',balanceTotal);
})
