$(document).ready(function() {

  // Call this function to initialize either the checking or savings bank accounts, with different selectors
  function initBankAccount(depositButtonSelector, withdrawButtonSelector, amountSelector, balanceSelector) {
    var amountField = $(amountSelector);
    var balanceElement = $(balanceSelector);

    // When the checking deposit button is clicked
    $(depositButtonSelector).click(function(event) {
      // Get the deposit amount
      var depositAmount = parseInt(amountField.val(), 10);
      // Get the current balance
      var currentBalance = parseInt(getBalanceStr(balanceElement), 10);
      // Add the two together to get a new balance
      var newBalance = depositAmount + currentBalance;
      // Put the new balance on the page
      placeBalance(balanceElement, newBalance);
    });

    // When the withdrawal deposit button is clicked
    $(withdrawButtonSelector).click(function(event) {
      // Get the withdrawal amount
      var withdrawalAmount = parseInt(amountField.val(), 10);
      // Get the current balance
      var currentBalance = parseInt(getBalanceStr(balanceElement), 10);
      // Subtract the withdrawal amount from the currentBalance
      var newBalance = currentBalance - withdrawalAmount;

      if (withdrawalAmount <= currentBalance) {
        // Put the new balance on the page
        placeBalance(balanceElement, newBalance);
      }
      else {
        alert("You don't have that much money!");
      }
    });
  }

  // Gets the contents of the 'balance' element and removes the $ from the front
  function getBalanceStr(balanceElement) {
    return balanceElement.text().replace('$', '');
  }

  // Puts the balance back on the page with a $ in front
  function placeBalance(balanceElement, newBalance) {
    return balanceElement.text("$" + newBalance);
  }

  initBankAccount('#depositChecking', '#withdrawChecking', '#amountChecking', '#checkingBalance');
  initBankAccount('#depositSavings', '#withdrawSavings', '#amountSavings', '#savingsBalance');

});
