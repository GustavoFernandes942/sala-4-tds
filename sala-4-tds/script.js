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

const media = () =>{
    var nota1 = parseFloat(document.getElementById("m1").value)
    var nota2 = parseFloat(document.getElementById("m2").value)
    var nota3 = parseFloat(document.getElementById("m3").value)
    var nota4 = parseFloat(document.getElementById("ma").value)
    var nota5 = parseFloat(document.getElementById("m5").value)
    var media = document.getElementById('media')
    media.innerHTML = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
    if(resp>=7){
        media.style.color = 'green'
    }else{
        media.style.color = 'red'
    }
}