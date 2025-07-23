function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    document.getElementById('respsoma').textContent = numero1 + numero2
}

function div(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    var resposta = document.getElementById('respdiv')
    if (numero2 !==0){
        resposta.innerHTML = numero1 / numero2
    }else{
        resposta.textContent = "nao se divide por 0"
    }
}


function mult(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    document.getElementById('respmult').textContent = numero1 * numero2
}

function sub(){
    var numero1 = document.getElementById("n7").valueAsNumber
    var numero2 = document.getElementById("n8").valueAsNumber
    document.getElementById('respsub').textContent = numero1 - numero2
}