function Account(options) {
  this.balance = options['balance'] || 0;
  this.depositButton = options['depositButton'];
  this.withdrawButton = options['withdrawButton'];
  this.amountField = options['amountField'];
  this.balanceField = options['balanceField'];

  var self = this;

  // Gets the contents of the 'balance' element and removes the $ from the front
  function getBalanceStr(balanceElement) {
    return balanceElement.text().replace('$', '');
  }

  // Puts the balance back on the page with a $ in front
  function placeBalance(balanceElement, newBalance) {
    return balanceElement.text("$" + newBalance);
  }

  // When the checking deposit button is clicked
  this.depositButton.click(function(event) {
    // Get the deposit amount
    var depositAmount = parseInt(self.amountField.val(), 10);
    // Get the current balance
    var currentBalance = parseInt(getBalanceStr(self.balanceField), 10);
    // Add the two together to get a new balance
    var newBalance = depositAmount + currentBalance;
    // Put the new balance on the page
    placeBalance(self.balanceField, newBalance);
  });

  // When the withdrawal deposit button is clicked
  this.withdrawButton.click(function(event) {
    // Get the withdrawal amount
    var withdrawalAmount = parseInt(self.amountField.val(), 10);
    // Get the current balance
    var currentBalance = parseInt(getBalanceStr(self.balanceField), 10);
    // Subtract the withdrawal amount from the currentBalance
    var newBalance = currentBalance - withdrawalAmount;

    if (withdrawalAmount <= currentBalance) {
      // Put the new balance on the page
      placeBalance(self.balanceField, newBalance);
    }
    else {
      alert("You don't have that much money!");
    }
  });

}
