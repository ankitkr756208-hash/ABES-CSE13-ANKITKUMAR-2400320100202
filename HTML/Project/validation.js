function validateForm() {
    // Get form inputs
    let name = document.forms["registrationForm"]["name"].value;
    let password = document.forms["registrationForm"]["password"].value;
    let email = document.forms["registrationForm"]["email"].value;
    let phone = document.forms["registrationForm"]["phone"].value;

    // 1. Name Validation
    // Checks if name is alphabetic and length is at least 6
    let nameRegex = /^[A-Za-z\s]+$/;
    if (name.length < 6 || !nameRegex.test(name)) {
        alert("Name must contain only alphabets and be at least 6 characters long.");
        return false; // Prevents form submission
    }

    // 2. Password Validation
    // Checks if password length is at least 6
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // 3. Email Validation
    // Checks for a standard email pattern
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address (e.g., name@domain.com).");
        return false;
    }

    // 4. Phone Number Validation
    // Checks if the phone number contains exactly 10 digits
    let phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return false;
    }

    // If all validations pass
    alert("Registration successful!");
    return true; // Allows form submission
}