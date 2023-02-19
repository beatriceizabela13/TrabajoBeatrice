const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const clave = document.getElementById('pass');
const passconfirma = document.getElementById('passConfirma');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const passConfirmaValue = passConfirma.value.trim();

    if (nombreValue === '') {
        console.log('Rellene este campo')
        setErrorFor(nombre, 'Rellene este campo')
    }
    else {
        setSuccessFor(nombre);
    }

    if (emailValue === '') {
        setErrorFor('Rellene este campo');
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido');
    } else {
        setSuccessFor(email)
    }

    if (passValue === '') {
        setErrorFor(pass, 'Rellene este campo');
    }
    else if (passValue.length > 8) {
        setErrorFor(pass, 'No debe tener más de 8 caracteres')
    }
    else {
        setSuccessFor(pass);
    }

    if (passConfirmaValue === '') {
        setErrorFor(passConfirma, 'Rellene este campo')
    } else if (passValue !== passConfirmaValue) {
        setErrorFor(passConfirma, 'Las contraseñas no coinciden')
    }
    else {
        setSuccessFor(pass)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = message
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email)
}

