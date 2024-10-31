const inputSenha = document.getElementById('input_senha');
const iconSenha = document.getElementById('icon_senha');
iconSenha.addEventListener('click', function() {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text';
        iconSenha.textContent = '👁️';
    } else {
        inputSenha.type = 'password';
        iconSenha.textContent = '🙈';
    }
});

const buttonAcessar = document.getElementById('button_acessar');
buttonAcessar.addEventListener('click', function() {
    window.location.href = 'inicial.html';
});