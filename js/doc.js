var doc = document.getElementsByClassName("doc");
doc.contentEditable = true;

var msg = document.getElementsByClassName('documento');
var ngt = document.getElementById('negrito').addEventListener('click', negrito);
var itl = document.getElementById('italico').addEventListener('click', italico);
var cp =  document.getElementById('copia').addEventListener('click', copia);
var cl = document.getElementById('cola').addEventListener('click', cola);
var dsfz = document.getElementById('desfaz').addEventListener('click', desfaz);
var jstfc = document.getElementById('justificaCentro').addEventListener('click', justificaCentro);
var rfz = document.getElementById('refaz').addEventListener('click', refaz);
var subl = document.getElementById('sublinha').addEventListener('click', sublinha);
var jstfcDireita = document.getElementById('justificaDireita').addEventListener('click', justificaDireita);
var jstfcEsquerda = document.getElementById('justificaEsquerda').addEventListener('click', justificaEsquerda);


function negrito(ngt){

    if(ngt){
        document.execCommand("bold", false, null);
    }
}
function italico(itl){
    if(itl){
    document.execCommand("italic", false, null);
} 
}
function copia(cp){
    if(cp){
        document.execCommand("copy", false, null);
    }
}
function cola(cl){
    if(cl){
        document.execCommand("paste", false, null);
    }
}
function desfaz(dsfz){
    if(dsfz){
        document.execCommand("undo", false, null);
    }
}
function justificaCentro(jstfc){
    if(jstfc){
        document.execCommand("justifyCenter", false, null );
    }
}
function refaz(rfz){
    if(rfz){
        document.execCommand("redo", false, null);
    }
}
function sublinha(subl){
    if(subl){
        document.execCommand("underline", false, null);
    }
}
function justificaDireita(jstfcDireita){
    if(jstfcDireita){
        document.execCommand("justifyRight", false, null);
    }
}
function justificaEsquerda(jstfcEsquerda){
    if(jstfcEsquerda){
        document.execCommand("justifyLeft", false, null);
    }
}


