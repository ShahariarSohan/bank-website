// mouse click
//deposit 
document.getElementById('deposit-btn').addEventListener('click',function(){
     const depositInput = inputAmountById('deposit-amount')
     const previousDeposit = elementAmountById('deposit')
     const totalDeposit = totalDepositWithdraw(depositInput,previousDeposit);
     console.log(totalDeposit); 
// total balance after deposit   
      // const totalBalance = depositInput+previousBalance;
      // document.getElementById('balance').innerText=totalBalance;
   
})
// keypress
// document.getElementById('deposit-amount').addEventListener('keyup',function(event){
//    if(event.key==='Enter'){
//    const depositAmountString = document.getElementById('deposit-amount')
//    const depositAmountNumber = parseFloat(depositAmountString.value);
//    depositAmountString.value='';
//    if(isNaN(depositAmountNumber)){
//       return alert('Please enter valid amount')
//    }
//    else{
//       //display deposit
//       const depositDisplayString =document.getElementById('deposit').innerText
//       const depositDisplayNumber = parseFloat(depositDisplayString);
//       const finalDeposit =depositAmountNumber+depositDisplayNumber;
//       document.getElementById('deposit').innerText=finalDeposit;
//       // total balance after deposit   
//       const balanceDisplayString =document.getElementById('balance').innerText
//       const balanceDisplayNumber = parseFloat(balanceDisplayString);
//       const totalBalance = depositAmountNumber+balanceDisplayNumber;
//       document.getElementById('balance').innerText=totalBalance;
//    }
// }
// })
