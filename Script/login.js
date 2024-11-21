/* Obtendo referências dos elementos de entrada do frontend */
const inputSenha = document.getElementById('input_password');
const iconSenha = document.getElementById('icon_password');
const buttonAcessar = document.getElementById('button_acessar');

/* Evento de clique no ícones de senha para alternar a visibilidade da senha */
iconSenha.addEventListener('click', function() {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text';
        iconSenha.textContent = 'visibility';
    } else {
        inputSenha.type = 'password';
        iconSenha.textContent = 'visibility_off';
    }
});

/* Evento de clique para validar as entradas */
buttonAcessar.addEventListener('click', function() {
    window.location.href = 'principal.html';
});