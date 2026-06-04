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

    const cPassword = document.getElementById("cPassword").value.trim();
    if (cPassword === "") {
        document.getElementById("cPassError").textContent = "Please enter confirm password";
        document.getElementById("cPassword").style = "border: solid red";
        isValid = false;
    } else if (cPassword !== password) {
        document.getElementById("cPassError").textContent = "Password not matched";
        document.getElementById("cPassword").style = "border: solid red";
        isValid = false;
    }

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Enter your email";
        document.getElementById("email").style = "border: solid red";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email Format";
        document.getElementById("email").style = "border: solid red";
        isValid = false;
    }

    const name = document.getElementById("name").value.trim();
    const namePattern = /^[a-zA-Z]{3,15}$/;
    if (name === "") {
        document.getElementById("nameError").textContent = "Please enter your name";
        document.getElementById("name").style = "border: solid red";
        isValid = false;
    } else if (!namePattern.test(name)) {
        document.getElementById("nameError").textContent = "Only text allowed";
        document.getElementById("name").style = "border : solid red";
        isValid = false;
    }

    if (isValid === true) {
        location.href = 'home.html';
    }
    return isValid;
}
