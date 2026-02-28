function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const display = document.getElementById('bmi-display');

    if (weight > 0 && height > 0) {
        // Formula: kg / m^2
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

        let category = "";
        // Requirement 2: JS If statement for different categories
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            category = "Normal Weight";
        } else if (bmi >= 25 && bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        // Requirement 1: Add an alert for the result
        alert("Your BMI is: " + bmi + "\nCategory: " + category);

        // Display on page
        display.innerHTML = "Result: BMI = " + bmi + " (" + category + ")";
    } else {
        alert("Please enter valid numbers!");
    }
}