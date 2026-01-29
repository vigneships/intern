function validateForm() {
    // Validate Text Input
    const username = document.getElementById("username").value;
    if (username === "") {
        alert("Username must be filled out");
        return false;
    }

    // Validate Password Input
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Validate Email Input
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate Number Input (Age)
    const age = document.getElementById("age").value;
    if (age < 18 || age > 99) {
        alert("Age must be between 18 and 99");
        return false;
    }

    // Validate Date Input (Date of Birth)
    const dob = document.getElementById("dob").value;
    if (dob === "") {
        alert("Date of Birth must be selected");
        return false;
    }

    // Validate Dropdown (Select) Input
    const country = document.getElementById("country").value;
    if (country === "") {
        alert("Please select your country");
        return false;
    }

    // Validate Checkbox Input (Terms)
    const terms = document.getElementById("terms").checked;
    if (!terms) {
        alert("You must accept the terms");
        return false;
    }

    // Validate Radio Button Input (Gender)
    const gender = document.querySelector('input[name="gender"]:checked');
    if (gender === null) {
        alert("Please select your gender");
        return false;
    }

    // Validate File Input (Resume)
    const resume = document.getElementById("resume").value;
    if (resume === "") {
        alert("Please upload your resume");
        return false;
    }

    // If all validations pass
    return true;
}