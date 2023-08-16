// mouse click
document.getElementById('deposit-btn').addEventListener('click',function(){
     const depositInput = inputAmountById('deposit-amount')
     const previousDeposit = elementAmountById('deposit')
     const depositTotal = depositInput+previousDeposit;
     totalSetById('deposit',depositTotal);
     const balance =elementAmountById('balance')
     const balanceTotal =depositInput+balance;
     totalSetById('balance',balanceTotal);
})
