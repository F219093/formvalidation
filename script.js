function showSignUpForm() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
}

function showSignInForm() {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
}

function displayMessage(message, isError) {
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = message;
    messageElement.style.color = isError ? 'red' : 'green';
}

function validateSignIn() {
    var emailSignIn = document.getElementById('email').value;
    var passwordSignIn = document.getElementById('password').value;

    if (validateEmail(emailSignIn) && passwordSignIn.trim() !== '') {
        displayMessage('SignIn Successful!', false);
    } else {
        displayMessage('Invalid email or password.', true);
    }
}

function validateSignUp() {
    var firstName = document.getElementById('firstName').value;
    var secondName = document.getElementById('secondName').value;
    var email = document.getElementById('emailSignUp').value;
    var age = document.getElementById('age').value;
    var passwordSignUp = document.getElementById('passwordSignUp').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var address = document.getElementById('address').value;

    if (
        firstName.trim() === '' ||
        secondName.trim() === '' ||
        email.trim() === '' ||
        age.trim() === '' ||
        passwordSignUp.trim() === '' ||
        confirmPassword.trim() === '' ||
        phoneNumber.trim() === '' ||
        address.trim() === ''
    ) {
        displayMessage('All fields are required.', true);
    } else if (!validateEmail(email)) {
        displayMessage('Invalid email format.', true);
    } else if (isNaN(age) || age < 1 || age > 150) {
        displayMessage('Age must be a valid number between 1 and 150.', true);
    } else if (passwordSignUp.length < 8) {
        displayMessage('Password must be at least 8 characters long.', true);
    } else if (!/\d/.test(passwordSignUp) || !/[!@#$%^&*(),.?":{}|<>]/.test(passwordSignUp)) {
        displayMessage('Password must contain at least one numeric and one special character.', true);
    } else if (passwordSignUp !== confirmPassword) {
        displayMessage('Passwords do not match.', true);
    } else if (!/^\+92[0-9]{10}$/.test(phoneNumber)) {
        displayMessage('Invalid phone number format. Use +92XXXXXXXXXXX.', true);
    } else {
        displayMessage('SignUp Successful!', false);
    }
}

function checkPasswordStrength() {
    var passwordStrength = document.getElementById('passwordStrength');
    var password = document.getElementById('passwordSignUp').value;
    var strength = 0;

    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[!@#$%^&*(),.?":{}|<>]+/)) {
        strength += 1;
    }

    if (strength === 0) {
        passwordStrength.className = 'weak';
        passwordStrength.innerHTML = 'Weak';
    } else if (strength === 1 || strength === 2) {
        passwordStrength.className = 'moderate';
        passwordStrength.innerHTML = 'Moderate';
    } else {
        passwordStrength.className = 'strong';
        passwordStrength.innerHTML = 'Strong';
    }
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
