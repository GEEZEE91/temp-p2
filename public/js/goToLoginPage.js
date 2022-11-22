const loginBtn = document.getElementById('loginBtn');

function goToLoginPage() {
    document.location.replace('login');
}

loginBtn.addEventListener('click', goToLoginPage);