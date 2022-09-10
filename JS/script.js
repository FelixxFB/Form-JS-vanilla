// pegando elementos pelo id
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password_confirmation");


// pegando o evento de submit do botão enviar

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {

    //pegando valores do inputs
    const usernamevalue = username.value
    const emailvalue = email.value
    const passwordvalue = password.value
    const passwordConfirmationvalue = password_confirmation.value

    if (usernamevalue === '') {
        setErrorFor(username, "O nome de usuário é obrigatório!")
    } else {
        setSuccessFor(username)
    }
    if (emailvalue === '') {
        setErrorFor(email, "O email é obrigatório!")
    } else if (!checkEmail(emailvalue)) {
        setErrorFor(email, "Insira um email válido!")
    } else {
        setSuccessFor(email)
    }

    if (passwordvalue === '') {
        setErrorFor(password, "Crie uma senha !")
    } else if (passwordvalue.length < 7) {
        setErrorFor(password, "A senha deve conter 7 caracteres")

    } else {
        setSuccessFor(password)
    }
    if (passwordConfirmationvalue == '') {
        setErrorFor(passwordConfirmation, "Confirme a senha!")

    } else if (passwordConfirmationvalue != passwordvalue) {
        setErrorFor(passwordConfirmation, "As senhas devem ser iguais!")

    } else {
        setSuccessFor(passwordConfirmation)
    }

    // vendo se todos os inputs estão validos
    const formControls = form.querySelectorAll('.form_control')
    const formIsValid = [...formControls].every(formControl => {
        return formControl.className === "form_control success"
    })
    if(formIsValid){
        console.log("tudo valido !");
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    // add msg de error
    small.innerText = message

    // add class de error
    formControl.className = "form_control error"


}

function setSuccessFor(input) {
    // pegando o form control
    const formControl = input.parentElement;

    // adicionar a classe de sucesso
    formControl.className = "form_control success"
}


// validação de email com regex
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}