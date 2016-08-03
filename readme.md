#ATM application
We're going to build an application to keep track of the checking and savings balances. You can play with an example of what a working version will do in the `exampleATM` folder.

###User Stories
- As a user, I want to deposit money into one of the bank accounts
- As a user, I want to withdraw money from one of the bank accounts
  - Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction. (if...else)
- As a user, I want the color of my bank account to reflect it's balance (there's a CSS class called .zero already written for this!)
- Are there ways to refactor your code to make it DRYer or more Object-Oriented?

###Bonus
- As a user, I want overdraft protection
  - What happens when the user wants to withdraw more money from the checking account than is in the account? 
  - If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.
  - If the withdrawal amount is more than the combined account balance, ignore it.

###Tips
* Tackle making your accounts work individually first
* Only start working with the DOM _after_ you have the logic down
* Then tackle them working together with overdraft protection


###Resources
* [What is document ready for?](https://api.jquery.com/ready/)
* [Adding Event Listeners so things happen when you click](https://api.jquery.com/category/events/)
* [Attributes for jQuery](https://api.jquery.com/category/attributes/)
* [Adding or removing a CSS class using jQuery](https://api.jquery.com/category/css/)
* [Adding HTML with jQuery](http://api.jquery.com/category/manipulation/dom-insertion-inside/)
* [Removing HTML with jQuery](https://api.jquery.com/category/manipulation/dom-removal/)

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
