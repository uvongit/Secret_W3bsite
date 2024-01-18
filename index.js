function authenticate(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if ((username === 'S3crtU$3r' && password !=='$3Cxyzp@$$')) {
        alert('Login successful!');
        setTimeout(function() {
            window.location.href = 'LoginSuccess.html';
        }, 3000);
    } else {
        errorMessage.textContent = 'flagIPS{1nC0443ct_f1@g}';
        setTimeout(function() {
            window.location.href = 'Invalid.html';
        }, 6000);
    }
}
