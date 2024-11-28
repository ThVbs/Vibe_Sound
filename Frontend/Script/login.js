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

button_acessar = document.getElementById("button_acessar");
button_acessar.addEventListener("click", async () => {
    const inputs = document.querySelectorAll('#container_inputs input');
    const data = {
        email: inputs[0].value,
        senha: inputs[1].value
    };

    try {
        const response = await fetch("/api/acessar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            window.location.href = 'principal.html';
        } else {
            const erroMessage = await response.json();
            alert(erroMessage.message || "Erro ao acessar");
        }
    } catch (erro) {
        console.erro("Erro na requisição: ", erro);
        alert("Erro na requisição: " + erro.message);
    }

     inputs.forEach((item) => { item.value = ""; }); /* limpa os campos */
});