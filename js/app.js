// function for making input field blanked
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
            if (totalExpense < salary) {
                expenses.innerText = totalExpense;
            } else {
                document.getElementById('alert').innerText = 'Insufficient Balance!';
                document.getElementById('balance').innerText = '';
                document.getElementById('total-expense').innerText = '';
            }
            return totalExpense;
        } else {
            document.getElementById('alert').innerText = "Input must be a positive number!";
            document.getElementById('balance').innerText = '';
            document.getElementById('total-expense').innerText = '';
        }
    } else {
        document.getElementById('alert').innerText = "Input must be a positive number!";
        document.getElementById('balance').innerText = '';
        document.getElementById('total-expense').innerText = '';
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
            if (totalExpense() > salary) {
                document.getElementById('balance').innerText = '';
            } else {
                balance.innerText = restMoney;
                return restMoney;
            }
        } else {
            document.getElementById('alert').innerText = "Input must be a positive number!";
            makeUserInputBlanked('food'); //call the makeUserInputBlanked function for food input field blank
            makeUserInputBlanked('rent'); //call the makeUserInputBlanked function for rent input field blank
            makeUserInputBlanked('cloth'); //call the makeUserInputBlanked function for cloth input field blank
            makeUserInputBlanked('salary'); //call the makeUserInputBlanked function for salary input field blank
        }
    } else {
        document.getElementById('alert').innerText = "Input must be a positive number!";
        makeUserInputBlanked('food'); //call the makeUserInputBlanked function for food input field blank
        makeUserInputBlanked('rent'); //call the makeUserInputBlanked function for rent input field blank
        makeUserInputBlanked('cloth'); //call the makeUserInputBlanked function for cloth input field blank
        makeUserInputBlanked('salary'); //call the makeUserInputBlanked function for salary input field blank
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
            saveAmountText.innerText = saveAmount.toFixed(2);
            return saveAmount;
        } else {
            saveAmountText.innerText = '';
            document.getElementById('second-alert').innerText = 'Insufficient Balance!';
        }
        return saveAmount;
    } else {
        document.getElementById('second-alert').innerText = "Input must be a positive number!";
    }
}
// function for Remaining Balance
function remainingBalance() {
    const remainingBalance = document.getElementById('rest-balance');
    if (percentageAmount() <= balance()) {
        const restBalance = balance() - percentageAmount();
        remainingBalance.innerText = restBalance.toFixed(2);
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
    makeUserInputBlanked('food'); //call the makeUserInputBlanked function for food input field blank
    makeUserInputBlanked('rent'); //call the makeUserInputBlanked function for rent input field blank
    makeUserInputBlanked('cloth'); //call the makeUserInputBlanked function for cloth input field blank
    makeUserInputBlanked('salary'); //call the makeUserInputBlanked function for salary input field blank
    makeUserInputBlanked('save-percentage'); //call the makeUserInputBlanked function for saving percentage input field blank
})