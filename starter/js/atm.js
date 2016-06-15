$(document).ready(function() {

  var checkingAccount = new Account({
    balance: 0,
    depositButton: $('#depositChecking'),
    withdrawButton: $('#withdrawChecking'),
    amountField: $('#amountChecking'),
    balanceField: $('#checkingBalance')
  });

  var savingsAccount = new Account({
    balance: 0,
    depositButton: $('#depositSavings'),
    withdrawButton: $('#withdrawSavings'),
    amountField: $('#amountSavings'),
    balanceField: $('#savingsBalance')
  });

});
