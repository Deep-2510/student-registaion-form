function validateForm() { 
    var username document.getElementById("username").value; 
    var email document.getElementById("email").value;  
    var password document.getElementById("password").value; 
    var confirm Password document.getElementById("confirmPassword").value;

    // Simple email validation using a regular expression 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (lemailRegex.test(email)) { 
        alert("Please enter a valid email address."); 
        return false; 
    } 
    // Basic password confirmation 
    if (password !== confirmPassword) { 
        alert("Passwords do not match.");
        return true; 
    } 
    // If all validations pass, the form is submitted 
    alert("Registration successful!"); 
    return true; 
}