function validateInput() {
    let isValid = true;

    const num = document.getElementById("num").value.trim();
    const numberPattern = /^[0-9]{10}$/;
    if (num === "") {
        document.getElementById("numError").textContent = "Mobile number is required.";
        document.getElementById("num").style = "border: solid red";
        isValid = false;
    } else if (!numberPattern.test(num)) {
        document.getElementById("numError").textContent = "Enter 10 digits number";
        document.getElementById("num").style = "border: solid red";
        isValid = false;
    }

    const password = document.getElementById("password").value.trim();
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (password === "") {
        document.getElementById("passError").textContent = "Enter your password";
        document.getElementById("password").style = "border: solid red";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById("passError").textContent = "Invalid Password Format";
        document.getElementById("password").style = "border: solid red";
        isValid = false;
    }
    
    if (isValid === true) {
        location.href = 'home.html';
    }
    return isValid;
}
