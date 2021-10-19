const inputSenha = document.querySelector('#senha');
const inputConfirmarSenha = document.querySelector('#confirmar-senha');
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    if (inputSenha.value !== inputConfirmarSenha.value) {
        event.preventDefault();
        alert('as senhas precisam ser iguais !');
    }
})

