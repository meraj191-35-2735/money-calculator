// Function for total Expense
function totalExpense() {
    const foodText = document.getElementById('food').value;
    const food = parseFloat(foodText);

    const rentText = document.getElementById('rent').value;
    const rent = parseFloat(rentText);

    const clothText = document.getElementById('cloth').value;
    const cloth = parseFloat(clothText);

    const salaryText = document.getElementById('salary').value;
    const salary = parseFloat(salaryText);

    if (typeof food == "number" && typeof rent == "number" && typeof cloth == "number") {
        if (food > 0 && rent > 0 && cloth > 0) {
            document.getElementById('alert').innerText = "";
            const expenses = document.getElementById('total-expense');
            const totalExpense = food + rent + cloth;
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
    const salaryText = document.getElementById('salary').value;
    const salary = parseFloat(salaryText);
    if (typeof salary == "number") {
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
    const savePercentageText = document.getElementById('save-percentage');
    const savePercentage = parseFloat(savePercentageText.value);
    if (typeof savePercentage == "number" && savePercentage > 0) {
        document.getElementById('second-alert').innerText = '';
        const percentageAmount = savePercentage / 100;
        const salaryText = document.getElementById('salary').value;
        const salary = parseFloat(salaryText);
        const saveAmount = salary * percentageAmount;
        const saveAmountText = document.getElementById('save-amount');
        if (saveAmount <= balance()) {
            saveAmountText.innerText = saveAmount;
        } else {
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
    const restBalance = balance() - percentageAmount();
    remainingBalance.innerText = restBalance;
}
// add event handler to button
document.getElementById('calculate-button').addEventListener('click', function() {
    totalExpense(); //call the totalExpense function
    balance(); //call the balance function
})

document.getElementById('save').addEventListener('click', function() {
    percentageAmount(); //call the percentageAmount function
    remainingBalance(); //call the remaining balance function
})