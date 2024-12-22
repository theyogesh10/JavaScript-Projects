function calculateMaturityAmount() {

    // Get input values from the form elements

    const principle = parseFloat(document.getElementById("investment-amount").value);
    const rate = parseFloat(document.getElementById("interest-rate").value);
    const tenure = parseFloat(document.getElementById("time-period").value);

    // Perform the simple interest based Calculation

    const maturityAmount = principle + (principle * rate * tenure / 100);

    // Display the Result

    document.getElementById("result").innerText = `Maturity Amount: ₹${maturityAmount.toFixed(2)}`;

}

// Attach the event listener to the calculate Button
document.getElementById("calculate-btn").addEventListener("click", calculateMaturityAmount);