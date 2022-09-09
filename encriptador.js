var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var muneco = document.querySelector(".seccion-muneco");
var h3 = document.querySelector(".seccion-h3");
var parrafo = document.querySelector(".seccion-parrafo");
var resultado = document.querySelector(".texto-encriptado")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarSeccion()
    var mensaje = recuperarMensaje()
    resultado.textContent = encriptarMensaje(mensaje);
}
function desencriptar(){
    ocultarSeccion()
    var mensaje = recuperarMensaje()
    resultado.textContent = desencriptarMensaje(mensaje);

}
function recuperarMensaje(){
    var mensaje = document.querySelector(".mensaje");
    return mensaje.value;
}
function ocultarSeccion(){
    muneco.classList.add("ocultar")
    h3.classList.add("ocultar")
    parrafo.classList.add("ocultar")
}
function encriptarMensaje(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] === "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] === "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] === "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] === "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] === "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}
function desencriptarMensaje(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i=i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i=i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i=i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i=i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i=i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}