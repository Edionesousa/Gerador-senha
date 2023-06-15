


const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");

const buttonElementeNum = document.querySelector("#buttonNum")
const buttonElementeCact = document.querySelector("#buttonCact")

const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");

/* VARIAVEL DADOS DE CONSUMO */
const charset = "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM1234567890%!@&*()+:><;#¨";
const charsetNum = "1234546789";
const charsetCact = "%!@&*()+:><;#¨";

sizePassword.innerHTML = sliderElement.value;
const novaSenha = "";


slider.oninput = function () {
    sizePassword.innerHTML = this.value;

}
/** INICIO DAS FUNÇOES */

function geradorSenha() {

    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    password.innerHTML = pass;
    console.log(pass)
}
/**FUNNAÇAO SENHA NUMERICA */
function geradorSenhaNum() {
    let pass = "";

    for (let a = 0, n = charsetNum.length; a < sliderElement.value; ++a) {
        pass += charsetNum.charAt(Math.floor(Math.random() * n));
    }

    password.innerHTML = pass;
    console.log(pass);

}
/**FUNÇAO SENHA SO DE CARACTERES */
function geradorSenhaCarct() {

    let pass = "";

    for (let c = 0, n = charsetCact.length; c < sliderElement.value; ++c) {
        pass += charsetCact.charAt(Math.floor(Math.random() * n));
    }

    password.innerHTML = pass;
    console.log(pass)
}

/**FUNÇAO PARA COMPIAR A SENHA  */
function copyPassword() {
    alert("Senha copiada!")

}





