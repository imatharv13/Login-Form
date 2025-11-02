document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const generalMessage = document.getElementById('submit');


    usernameError.textContent = '';
    passwordError.textContent = '';
    generalMessage.textContent = '';
    generalMessage.className = 'submit';

    let isValid = true; 
    const MIN_LENGTH = 6;
    const MAX_LENGTH = 15;
    
    // --- Password Validation ---
    if (password.length < MIN_LENGTH || password.length > MAX_LENGTH) {
        passwordError.textContent = `Password must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters.`;
        isValid = false;
    } else if (password.length === 0) {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    }


    if (isValid) {
        generalMessage.textContent = 'Login Successful!';
        generalMessage.classList.add('success');
        
    } else {
        generalMessage.textContent = 'Please correct the errors.';
    }
});