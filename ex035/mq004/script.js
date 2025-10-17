const menu = window.document.getElementById("menu");
const opçoes = window.document.getElementsByTagName("menu")[0];

menu.addEventListener("click", chamarmenu);

function chamarmenu(){
    console.log("Funcionou, Einstein");
    if (opçoes.style.display == 'none'){
        opçoes.style.display = 'block';
    } else {
        opçoes.style.display = 'none';
    }
    
}