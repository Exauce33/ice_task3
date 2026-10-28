// Show the answer to the experience question.
function showExperience() {
    var experienceLabel = document.getElementById("experienceLabel");
    experienceLabel.textContent = "This is my first JavaScript code";
}

// Double the number entered by the user.
function doubleNumber() {
    var enteredValue = document.getElementById("doubleInput").value;
    var resultDisplay = document.getElementById("doubleResult");

    // Check that the input is filled in and contains a valid number.
    if (enteredValue.trim() === "" || isNaN(Number(enteredValue))) {
        resultDisplay.textContent = "Please enter a valid number.";
    } else {
        var doubledValue = Number(enteredValue) * 2;
        resultDisplay.textContent = "Double: " + doubledValue;
    }
}

// Calculate the average of the two numbers entered by the user.
function calculateAverage() {
    var firstValue = document.getElementById("firstNumber").value;
    var secondValue = document.getElementById("secondNumber").value;
    var resultDisplay = document.getElementById("averageResult");

    // Check that both inputs are filled in and contain valid numbers.
    if (firstValue.trim() === "" || secondValue.trim() === "" ||
        isNaN(Number(firstValue)) || isNaN(Number(secondValue))) {
        resultDisplay.textContent = "Please enter two valid numbers.";
    } else {
        var averageValue = (Number(firstValue) + Number(secondValue)) / 2;
        resultDisplay.textContent = "Average: " + averageValue;
    }
}
