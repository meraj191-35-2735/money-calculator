function makeUserInputBlanked(inputAmount) {
    const inputText = document.getElementById(inputAmount);
    inputText.value = '';
}
// function for making user Input to Number
function userInput(input) {
    const inputText = document.getElementById(input).value;
    const inputAmount = parseFloat(inputText);
    return inputAmount;
}
// function for total Expense
function totalExpense() {
    const food = userInput('food'); //call userInput function food input field
    const rent = userInput('rent'); //call userInput function rent input field
    const cloth = userInput('cloth'); //call userInput function cloth input field
    const salary = userInput('salary'); //call userInput function salary input field
    // error handler for if inputAmount is not a number
    if (typeof food == "number" && typeof rent == "number" && typeof cloth == "number") {
        // error handler for if inputAmount is not a positive number
        if (food > 0 && rent > 0 && cloth > 0) {
            document.getElementById('alert').innerText = "";
            const expenses = document.getElementById('total-expense');
            const totalExpense = food + rent + cloth;
            // error handler for expenses greater than salary
            if (totalExpense <= salary) {
                expenses.innerText = totalExpense;
            } else {
                document.getElementById('alert').innerText = 'Insufficient Balance!';
            }
            return totalExpense;
        } else {
            document.getElementById('alert').innerText = "Invalid Input!";
        }
    } else {
        document.getElementById('alert').innerText = "Invalid Input!";
    }
}

// function for Balance
function balance() {
    const salary = userInput('salary'); //call userInput function salary input field
    // error handler for if salary is not a number
    if (typeof salary == "number") {
        // error handler for if salary is not a positive number
        if (salary > 0) {
            document.getElementById('alert').innerText = '';
            const balance = document.getElementById('balance');
            const restMoney = salary - totalExpense();
            balance.innerText = restMoney;
            return restMoney;
        } else {
            document.getElementById('alert').innerText = "Invalid Input!";
        }
    } else {
        document.getElementById('alert').innerText = "Invalid Input!";
    }
}

// function for identify saving amount of salary
function percentageAmount() {
    const savePercentage = userInput('save-percentage'); //call userInput function saving percentage input field
    // error handler for if saving percentage is not a number and not a positive number
    if (typeof savePercentage == "number" && savePercentage > 0) {
        document.getElementById('second-alert').innerText = '';
        const percentageAmount = savePercentage / 100;
        const salary = userInput('salary'); //call userInput function salary input field
        const saveAmount = salary * percentageAmount;
        const saveAmountText = document.getElementById('save-amount');
        // error handler for if saving amount greater than balance
        if (saveAmount <= balance()) {
            saveAmountText.innerText = saveAmount;
            return saveAmount;
        } else {
            saveAmountText.innerText = '';
            document.getElementById('second-alert').innerText = 'Insufficient Balance!';
        }
        return saveAmount;
    } else {
        document.getElementById('second-alert').innerText = "Invalid Input!";
    }
}

// function for Remaining Balance
function remainingBalance() {
    const remainingBalance = document.getElementById('rest-balance');
    if (percentageAmount() <= balance()) {
        const restBalance = balance() - percentageAmount();
        remainingBalance.innerText = restBalance;
    } else {
        remainingBalance.innerText = '';
    }
}

// add event handler to calculate button
document.getElementById('calculate-button').addEventListener('click', function() {
    totalExpense(); //call the totalExpense function
    balance(); //call the balance function
})

// add event handler to save button
document.getElementById('save').addEventListener('click', function() {
    percentageAmount(); //call the percentageAmount function
    remainingBalance(); //call the remaining balance function
    makeUserInputBlanked('food');
    makeUserInputBlanked('rent');
    makeUserInputBlanked('cloth');
    makeUserInputBlanked('salary');
    makeUserInputBlanked('save-percentage');
})