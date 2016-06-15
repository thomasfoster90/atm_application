function Account(options) {
  // Set up a 'balance' property that will keep track of our balance in the object, instead of in the DOM
  this.balance = options['balance'] || 0;

  // Set up variables that can be accessed in the following methods that refer to the DOM elements we need
  var depositButton = options['depositButton'];
  var withdrawButton = options['withdrawButton'];
  var amountField = options['amountField'];
  var balanceField = options['balanceField'];

  // Create a 'self' var so we can refer to the parent object in any of our functions/methods
  var self = this;

  // The init method gets called when the object is instantiated. You'll see it invoked at the end of this function.
  function init() {
    addDepositListener();
    addWithdrawalListener();
  }

  // The render method takes whatever the current balance is and puts it in the correct DOM element
  this.render = function() {
    balanceField.text("$" + this.balance);
  }

  // The addDepositListener function adds a click listener on the deposit button,
  // adds the deposit amount to the current balance,
  // and render the new balance
  function addDepositListener() {
    // When the checking deposit button is clicked
    depositButton.click(function(event) {
      // Get the deposit amount
      var depositAmount = parseInt(amountField.val(), 10);
      // Add to the current balance to get a new balance
      self.balance += depositAmount;
      // Put the new balance on the page
      self.render();
    });
  }

  // The addWithdrawalListener function adds a click listener on the withdrawal button,
  // subtracts the withdrawal amount from the current balance IF there is enough money in the account,
  // and renders the new balance
  function addWithdrawalListener() {
    // When the withdrawal deposit button is clicked
    withdrawButton.click(function(event) {
      // Get the withdrawal amount
      var withdrawalAmount = parseInt(amountField.val(), 10);
      // Subtract the withdrawal amount from the current balance
      var newBalance = self.balance - withdrawalAmount;

      if (withdrawalAmount <= self.balance) {
        // Put the new balance on the page
        self.balance = newBalance;
        self.render();
      }
      else {
        alert("You don't have that much money!");
      }
    });
  }

  init();
}
