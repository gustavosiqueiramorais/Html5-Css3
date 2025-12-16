const n1 = window.document.getElementById("n1");
const n2 = window.document.getElementById("n2");
const result = window.document.getElementById("result");
const somar = window.document.getElementById("somar");

somar.addEventListener("click", soma);

function soma(){
    let final = Number(n1.value) + Number(n2.value);
    console.log(final);
    result.innerHTML += final;

}

