function totalExpense() {
    const foodText = document.getElementById('food').value;
    const food = parseFloat(foodText);

    const rentText = document.getElementById('rent').value;
    const rent = parseFloat(rentText);

    const clothText = document.getElementById('cloth').value;
    const cloth = parseFloat(clothText);

    if (typeof food == "number" && typeof rent == "number" && typeof cloth == "number") {
        if (food > 0 && rent > 0 && cloth > 0) {
            document.getElementById('alert').innerText = "";
            const expenses = document.getElementById('total-expense');
            const totalExpense = food + rent + cloth;
            expenses.innerText = totalExpense;
            return totalExpense;

        } else {
            document.getElementById('alert').innerText = "Give number greater than 0";
        }
    } else {
        document.getElementById('alert').innerText = "Give number type data";
    }
}

function balance() {
    const salaryText = document.getElementById('salary').value;
    const salary = parseFloat(salaryText);
    if (typeof salary == "number") {
        if (salary > 0) {
            document.getElementById('alert').innerText = "";
            const balance = document.getElementById('balance');
            const restMoney = salary - totalExpense();
            balance.innerText = restMoney;
        } else {
            document.getElementById('alert').innerText = "Give number greater than 0";
        }
    } else {
        document.getElementById('alert').innerText = "Give number type data";
    }
}

document.getElementById('calculate-button').addEventListener('click', function() {
    totalExpense();
    balance();
})

document.getElementById('save').addEventListener('click', function() {
    const savePercentageText = document.getElementById('save-percentage');
    const savePercentage = parseFloat(savePercentageText.value);

    const salary = document.getElementById('salary');

})