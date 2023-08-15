let previous = 0;
function add(value) {

    const depoTk = document.getElementById("depo-tk");
    const balanceTk = document.getElementById("balance");

    if (isNaN(value)) {
      alert("Please input valid number");
    } else {
      previous += value;
      
      depoTk.innerText = previous;
      balanceTk.innerText = previous;

    }
}

   let preWithdraw = 0;
 function subtractWithdraw(value) {
    const balanceInput = document.getElementById('balance');
    let balanceValue = parseFloat(balanceInput.innerText)
    

    const withdrawBalance = document.getElementById("withdraw-balance");
    if (isNaN(value)) {
        alert("Please valid number");
    }
    else if (value > balanceValue) {
        alert("you can't withdraw, because your balance is insufficient")
    }
    else {
         
        balanceValue = balanceValue - value
        preWithdraw += value;
        withdrawBalance.innerText = preWithdraw;
        balanceInput.innerText = balanceValue;
    }
 }
// Deposit section

document.getElementById("depositId").addEventListener("click", function () {

  const depositInput = document.getElementById("deposit-input");
  const depositInputValue = parseFloat(depositInput.value);
   add(depositInputValue);

   depositInput.value = "";
   
});




// withdraw

document.getElementById("withdrawId").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdrawInput");
  const withdrawInputValue = parseFloat(withdrawInput.value);
  subtractWithdraw(withdrawInputValue);

  withdrawInput.value = "";
});