const inputSenha = document.getElementById('input_password');
const iconSenha = document.getElementById('icon_password');
iconSenha.addEventListener('click', function() {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text';
        iconSenha.textContent = '👁️';
    } else {
        inputSenha.type = 'password';
        iconSenha.textContent = '🙈';
    }
});

const inputConfirmarSenha = document.getElementById('input_confirm_pasword');
const iconConfirmarSenha = document.getElementById('icon_confirm_password');
iconConfirmarSenha.addEventListener('click', function() {
    if (inputConfirmarSenha.type === 'password') {
        inputConfirmarSenha.type = 'text';
        iconConfirmarSenha.textContent = '👁️';
    } else {
        inputConfirmarSenha.type = 'password';
        iconConfirmarSenha.textContent = '🙈';
    }
});

function criarConta() {
    const inputs = document.querySelectorAll('#cadastros input');
    let allInputs = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allInputs = false;
        }
    });

    if (allInputs) {
        window.location.href = 'inicial.html';
    } else {
        alert('Por favor, preencha todos os campos para depois finalizar o cadastro!');
    }
}
