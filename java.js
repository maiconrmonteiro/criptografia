const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage="none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "al"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }

    return stringEncriptada;
}

//fazer a parte contraria 

function btnDesencriptar() {
    textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado;
    mensagem.style.backgroundImage="none"
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["al", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }

    return stringDesencriptada;

}


function btnLimpar() {

    location.reload();

}

}

function btnCopiaECola() {
    var mensagem = document.querySelector(".mensagem");
    var inputTexto = document.querySelector(".input-texto");
    mensagem = mensagem.value
    mensagem.value = "";
    inputTexto.value = mensagem;
}
