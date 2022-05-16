
function copiar(){

    var copiado = document.getElementById("mensagem").value;

    if (navigator.clipboard.writeText(copiado)) {
        document.getElementById("idBotao").textContent = "copiado";
       
    }

    setInterval(function(){
        document.getElementById("idBotao").textContent = "Copiar texto";
    }, 3000
    );



    


}