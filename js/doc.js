var doc = document.getElementsByClassName("doc");
doc.contentEditable = true;

var msg = document.getElementsByClassName('documento');
var ngt = document.getElementById('negrito').addEventListener('click', negrito);
var itl = document.getElementById('italico').addEventListener('click', italico);
var cp =  document.getElementById('copia').addEventListener('click', copia);
var cl = document.getElementById('cola').addEventListener('click', cola);
var dsfz = document.getElementById('desfaz').addEventListener('click', desfaz);

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
function desfazer(dsfz){
    if(dsfz){
        document.execCommand("undo", false, null);
    }
}

