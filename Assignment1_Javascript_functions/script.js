function add() {
    // Retrieve values from input fields
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    // Perform addition
    let result = number1 + number2;

    // Log the result in console
    console.log("Addition Result:", result);

    // Display the result in the HTML
    document.getElementById('result').textContent = result;
}

function subtract() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 - number2;
    console.log("Subtraction Result:", result);
    document.getElementById('result').textContent = result;
}

function multiply() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 * number2;
    console.log("Multiplication Result:", result);
    document.getElementById('result').textContent = result;
}

function divide() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    // Check for division by zero
    if (number2 === 0) {
        console.log("Error: Division by zero");
        document.getElementById('result').textContent = "Error: Division by zero";
        return;
    }

    let result = number1 / number2;
    console.log("Division Result:", result);
    document.getElementById('result').textContent = result;
}