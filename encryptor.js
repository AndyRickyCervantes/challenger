function presionEncriptar(){
    let cambio = { "e":"enter", "i":"imes", "a":"ai", "o":"ober", "u":"ufat"};
    let mensajeOriginal = document.getElementById('comentario').value;
    console.log(mensajeOriginal)
    let mensajeModificado = mensajeOriginal.replace(/[eiaou]/g, letra => cambio[letra] ? cambio[letra] : letra);
    let tituloCaja2 = document.getElementById("bloque-texto");
    tituloCaja2.innerHTML  = mensajeModificado

}

function presionDesencriptar(){
    let cambio = { "enter":"e", "imes":"i", "ai":"a", "ober":"o", "ufat":"u"};
    let mensajeOriginal = document.getElementById('comentario').value;
    let mensajeModificado = mensajeOriginal.replace(/(enter|imes|ai|ober|ufat)/g, letra => cambio[letra] ? cambio[letra] : letra);
    let tituloCaja2 = document.getElementById("bloque-texto");
    tituloCaja2.innerHTML  = mensajeModificado
}

function presionCopiar(){
    let mensajeCopiar = document.getElementById('bloque-texto').value;
    console.log(mensajeCopiar)
    alert('Mensaje copiado')
    navigator.clipboard.writeText(mensajeCopiar)
    .then(() => {
        console.log('Texto copiado al portapapeles correctamente.');
    })
    .catch(err => {
        console.error('Error al copiar el texto al portapapeles:', err);
    });
}
