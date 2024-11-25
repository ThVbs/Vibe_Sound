/* Obtendo referências dos elementos de entrada do frontend */
const dataNascimento = document.getElementById('input_date');
const numeroTelefone = document.getElementById('input_phone_number');
const inputEmail = document.getElementById('input_email');
const inputConfirmarEmail = document.getElementById('input_confirm_email');
const inputSenha = document.getElementById('input_password');
const iconSenha = document.getElementById('icon_password');
const inputConfirmarSenha = document.getElementById('input_confirm_pasword');
const iconConfirmarSenha = document.getElementById('icon_confirm_password');
const buttonCancelar = document.getElementById('button_cancelar');

/* Evento de clique para adicionar máscara no campo de data de nascimento */
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

/* Evento de clique para adicionar máscara no campo de telefone */
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

/* Evento de clique aos ícones de senha e confirmar senha para alternar a visibilidade das senhas */
iconSenha.addEventListener('click', function() {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text';
        iconSenha.textContent = 'visibility';
    } else {
        inputSenha.type = 'password';
        iconSenha.textContent = 'visibility_off';
    }
});
iconConfirmarSenha.addEventListener('click', function() {
    if (inputConfirmarSenha.type === 'password') {
        inputConfirmarSenha.type = 'text';
        iconConfirmarSenha.textContent = 'visibility';
    } else {
        inputConfirmarSenha.type = 'password';
        iconConfirmarSenha.textContent = 'visibility_off';
    }
});

/* Direcionando o usuário para a tela inicial quando o botão for clicado */
buttonCancelar.addEventListener('click', function() {
    window.location.href = 'login.html';
});

/* Função para validar se todos os campos do formulário de cadastro foram preenchidos */
function criarConta() {
    const email = inputEmail.value;
    const emailConfirmacao = inputConfirmarEmail.value;
    const senha = inputSenha.value;
    const senhaConfirmacao = inputConfirmarSenha.value;
    const inputs = document.querySelectorAll('#cadastros input');

    let allInputs = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allInputs = false;
        }
    });

    if (email !== emailConfirmacao) {
        alert('Os emails precisam ser iguais!');
    } else if (senha !== senhaConfirmacao) {
        alert('As senhas precisam ser iguais!');
    } else if (allInputs) {
        window.location.href = 'login.html';
    } else {
        alert('Por favor, preencha todos os campos para depois finalizar o cadastro!');
    }
}
