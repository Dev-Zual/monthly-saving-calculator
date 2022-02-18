// get income function
function totalIncome() {
  const incomeInputText = document.getElementById('income-input');
  const incomeNumber = incomeInputText.value;
  if (isNaN(incomeNumber) || incomeNumber < 0 || incomeNumber == '') {
    return alert('Please input a valid income amount');
  } else {
    const incomeAmount = parseFloat(incomeNumber);
    return incomeAmount;
  }
}
// total expenses function

function totalExpensesAmount() {
  // get the food input amount
  const foodInputText = document.getElementById('food-input');
  const foodNumber = foodInputText.value;
  const foodAmount = parseFloat(foodNumber);
  //get the rent input amount
  const rentText = document.getElementById('rent-input');
  const rentTextAmount = rentText.value;
  const rentAmount = parseFloat(rentTextAmount);
  // get the clothes input amount
  const clothesInputText = document.getElementById('clothes-input');
  const clothesNumber = clothesInputText.value;
  const clothesAmount = parseFloat(clothesNumber);
  // validation expenses input
  if (isNaN(foodNumber) || foodNumber < 0 || foodNumber == '') {
    return alert('Please input a valid food amount');
  } else if (
    isNaN(rentTextAmount) ||
    rentTextAmount < 0 ||
    rentTextAmount == ''
  ) {
    return alert('Please input a valid rent amount');
  } else if (isNaN(clothesNumber) || clothesNumber < 0 || clothesNumber == '') {
    return alert('Please input a valid clothes amount');
  } else {
    const totalExpenses = foodAmount + rentAmount + clothesAmount;
    return totalExpenses;
  }
}
function getTotalExpenses() {
  // called income amount function
  const incomeAmount = totalIncome();
  // called total expenses function
  const totalExpenses = totalExpensesAmount();
  // validation if expenses amount larger than income amount
  if (totalExpenses > incomeAmount) {
    alert('you do not have  sufficient balance to expenses');
  } else {
    // get total expenses amount
    const totalExpensesText = document.getElementById('total-Expenses');
    totalExpensesText.innerText = totalExpenses;
    const totalBalance = incomeAmount - totalExpenses;
    // get balance
    const balanceText = document.getElementById('balance');
    balanceText.innerText = totalBalance;
  }
}

document.getElementById('calculate-btn').addEventListener('click', function () {
  getTotalExpenses();
});

// savings function
document.getElementById('saving').addEventListener('click', function () {
  // called income amount function
  const incomeAmount = totalIncome();
  // called total expenses function
  const totalExpenses = totalExpensesAmount();
  // get balance
  const totalBalance = incomeAmount - totalExpenses;
  // call saving input
  const savingInputText = document.getElementById('saving-input');
  const savingParsentAmount = savingInputText.value;
  if (
    isNaN(savingParsentAmount) ||
    savingParsentAmount < 0 ||
    savingParsentAmount == ''
  ) {
    return alert('Please input a valid saving amount of parsentage');
  } else {
    const savingAmountNumber = parseFloat(savingParsentAmount);
    // get the saving amount
    const savingAmoutText = document.getElementById('saving-amount');
    const savingAmount = (totalBalance / 100) * savingAmountNumber;
    // validation if saving amount is larger than balance
    if (savingAmount > totalBalance) {
      alert('Your balance is to low to savings');
    } else {
      savingAmoutText.innerText = savingAmount;
      // get remaining amount
      const remainingBalance = document.getElementById('remainig-Balance');
      remainingBalance.innerText = totalBalance - savingAmount;
    }
  }
});
