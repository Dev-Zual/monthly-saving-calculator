function calculateExpenses(isTrue) {
  const incomeInputText = document.getElementById('income-input');
  if (incomeInputText > 0) {
    console.log('succes');
  } else {
    console.log('opps');
  }
  const incomeNumber = incomeInputText.value;
  const incomeAmount = parseFloat(incomeNumber);

  const foodInputText = document.getElementById('food-input');
  const foodNumber = foodInputText.value;
  const foodAmount = parseFloat(foodNumber);

  const rentText = document.getElementById('rent-input');
  const rentTextAmount = rentText.value;
  const rentAmount = parseFloat(rentTextAmount);

  const clothesInputText = document.getElementById('clothes-input');
  const clothesNumber = clothesInputText.value;
  const clothesAmount = parseFloat(clothesNumber);
  const totalExpenses = foodAmount + rentAmount + clothesAmount;

  // get total expenses amount
  let totalExpensesText = document.getElementById('total-Expenses');
  totalExpensesText.innerText = totalExpenses;
  const totalBalance = incomeAmount - totalExpenses;
  if (isTrue == true) {
    // get balance

    const balanceText = document.getElementById('balance');
    balanceText.innerText = totalBalance;
  } else {
    // get saving amount
    const savingInputText = document.getElementById('saving-input');
    const savingParsentAmount = savingInputText.value;
    const savingAmountNumber = parseFloat(savingParsentAmount);

    const savingAmoutText = document.getElementById('saving-amount');
    const savingAmount = totalBalance / savingAmountNumber;
    savingAmoutText.innerText = savingAmount;

    // get remaining amount
    const remainingBalance = document.getElementById('remainig-Balance');
    remainingBalance.innerText = totalBalance - savingAmount;
  }
}

document.getElementById('calculate-btn').addEventListener('click', function () {
  calculateExpenses(true);
});

// savings function
document.getElementById('saving').addEventListener('click', function () {
  calculateExpenses(false);
});
