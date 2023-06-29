let formulario = document.getElementById('form_email');
let entrada = document.getElementById('email_input');
let submit = document.getElementById('subscribe');
let popupFundo = document.querySelector('.popup_background');
let popupCorpo = document.querySelector('.wrapper_confirmation');
let fecharPopup = document.getElementById('close_popup');
let exibirEmail = document.getElementById('client_email');

formulario.addEventListener('submit', (event) =>{
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    exibirEmail.innerHTML = email;
    if (!entrada.checkValidity()) {
        entrada.classList.add('invalid');
    } else {
        entrada.classList.remove('invalid');
        popupFundo.style.display = 'block';
        popupCorpo.style.display = 'block';
}})

fecharPopup.addEventListener('click', () => {
    popupFundo.style.display = 'none';
    popupCorpo.style.display = 'none';
})