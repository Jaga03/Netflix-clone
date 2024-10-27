const validCredentials = {
    username: 'Netflix',
    password: 'net123'
};
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === validCredentials.username && password === validCredentials.password) {
        alert('Login Successful') 
    } else {
        alert('Invalid username or password');
    }
}

function forgotPassword() {
    let email = prompt('Enter the email');
    if (email) {
        alert('Verification code sent to your email');
    }
}


function showpassword(){
    let password = document.getElementById('password')
    let eye = document.getElementById('eye')

    if (password.type ==='password'){
            password.type = 'text'
            eye.classList.remove('fa-eye');
            eye.classList.add('fa-eye-slash')
    }
    else{
        password.type = 'password'
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye')
    }
}

function Homepage(){
    window.location.href = 'index.html'
}