function generateTable() {
    // Retrieve the number from the input field
    const number = parseInt(document.getElementById('numberInput').value);

    // Check if the input is valid
    if (isNaN(number) || number < 1) {
        alert("Please enter a valid positive number.");
        return;
    }

    // Loop through numbers 1 to 10
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        let resultElementId = `result${i}`;

        // Update the text content of the p element with the result
        document.getElementById(resultElementId).textContent = `${number} x ${i} = ${result}`;

        // Check if the result is even and apply a different background color
        if (result % 2 === 0) {
            document.getElementById(resultElementId).classList.add('even');
        } else {
            document.getElementById(resultElementId).classList.remove('even');
        }
    }
}