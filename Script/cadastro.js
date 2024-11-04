const dataNascimento = document.getElementById('input_date');
dataNascimento.addEventListener("input", function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");

    if (value.length >= 5) {
      value = value.replace(/^(\d{2})(\d{2})(\d{0,4}).*/, "$1/$2/$3");
    } else if (value.length >= 3) {
      value = value.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
    }

    e.target.value = value;
});

const numeroTelefone = document.getElementById('input_phone_number');
numeroTelefone.addEventListener("input", function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, ""); 

    if (value.length >= 11) {
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "$1 $2-$3");
    } else if (value.length >= 7) {
      value = value.replace(/^(\d{2})(\d{0,5})/, "$1 $2");
    } else if (value.length >= 3) {
      value = value.replace(/^(\d{2})(\d{0,4})/, "$1 $2");
    }

    e.target.value = value;
  });

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
