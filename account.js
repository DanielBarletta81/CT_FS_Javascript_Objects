


//Task 1: Create a constructor function for the Account object with properties for accountNumber,
// balance, and owner.



function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance || 0;
    this.owner = owner;
  };


 // Task 2: Implement methods within the Account object to deposit and withdraw funds.

  function deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `You deposited ${amount}. Your new balance: ${this.balance}`;
    } else {
      return "Invalid deposit amount.";
    }
  };

  function withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return `Withdrew ${amount}. New balance: ${this.balance}`;
    } else {
      return "Insufficient funds or invalid withdrawal amount.";
    }

  };

//Task 3: Create a method to calculate compound interest based on the balance and specified
 //interest rate.

 function calculateCompoundInterest(principal, rate, time, n) {
   
    const amount = principal * Math.pow(1 + (rate / n), n * time);
    const interest = amount - principal;
  
    return interest.toFixed(2);
  }

const principal = 1000;
const rate = 0.05; // 5%  example
const time = 2; // 2 years
const n = 12; // Calculating with interest compounded monthly

const interest = calculateCompoundInterest(principal, rate, time, n);
console.log("Compound Interest:", interest);