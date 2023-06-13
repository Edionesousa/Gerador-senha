


let sliderElement = document.querySelector("#slider");
let buttonElementMist = document.querySelector("#buttonMist");
let buttonElementeNum = document.querySelector("#")
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");



let charsetMist = "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM12345678$%90!@#¨&*()_+:><|";
let charsetNum = "1234546789";
let novaSenha = "$%90!@#¨&*()_+:><";

sizePassword.innerHTML = sliderElement.value;


slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}


function geradorSenhaMist() {
    
    let passMist = "";
    
    for (let mist = 0, m = charsetMist.length; m < sliderElement.value; ++m) {
        passMist += charsetMist.charAt(Math.floor(Math.random() * m));
        if(mist == true){
        }
        console.log();
    }
    password.innerHTML = passMist;
    novaSenha = passMist;

}
  /* function geradorSenhaNum(){
    let passNun = "";
        for (let num = 0, n = charsetNum.length; i < sliderElement.value; ++num) {
            pass += charsetNum.charAt(Math.floor(Math.random() * n));
            if(num === true){
                return;
            }
        }
        password.innerHTML = passNun;
        novaSenha = passNun;
    
    
/*
    }
     for (let carct = 0, c = charset.length; i < sliderElement.value; ++carct) {
         pass += charset.charAt(Math.floor(Math.random() * c));
         
     }
 */

   /* password.innerHTML = pass;
    novaSenha = pass;
    novaSenha = passNun;

}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada!")
    if (alert !== false) {
        return;
    }
    console.log(i)
}
*/




