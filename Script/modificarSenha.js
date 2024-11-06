const inputSenha = document.getElementById('input_password');
const iconSenha = document.getElementById('icon_password');
iconSenha.addEventListener('click', function() {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text';
        iconSenha.textContent = 'visibility';
    } else {
        inputSenha.type = 'password';
        iconSenha.textContent = 'visibility_off';
    }
});

const inputConfirmarSenha = document.getElementById('input_confirm_pasword');
const iconConfirmarSenha = document.getElementById('icon_confirm_password');
iconConfirmarSenha.addEventListener('click', function() {
    if (inputConfirmarSenha.type === 'password') {
        inputConfirmarSenha.type = 'text';
        iconConfirmarSenha.textContent = 'visibility';
    } else {
        inputConfirmarSenha.type = 'password';
        iconConfirmarSenha.textContent = 'visibility_off';
    }
});

const buttonCancelar = document.getElementById('button_cancelar');
buttonCancelar.addEventListener('click', function() {
    window.location.href = 'login.html';
});

const buttonSalvar = document.getElementById('button_salvar');
buttonSalvar.addEventListener('click', function() {
    const senha = inputSenha.value;
    const senhaConfirmacao = inputConfirmarSenha.value;
    console.log(senha);
    
    if (!senha || !senhaConfirmacao) {
        alert('Preencha todos os campos');
      } else if (senha !== senhaConfirmacao) {
        alert('As senhas precisam ser iguais!');
      } else {
        window.location.href = 'login.html';
      }
});