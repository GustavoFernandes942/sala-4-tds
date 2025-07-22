function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    document.getElementById('respsoma').textContent = numero1 + numero2
}

function divisao(){
    var numero1 = document.getElementById("n3").valueAsNumber
    var numero2 = document.getElementById("n4").valueAsNumber
    document.getElementById('respdiv').textContent = numero1 / numero2
}

function multiplicação(){
    var numero1 = document.getElementById("n5").valueAsNumber
    var numero2 = document.getElementById("n6").valueAsNumber
    document.getElementById('respmult').textContent = numero1 * numero2
}

function subtracao(){
    var numero1 = document.getElementById("n7").valueAsNumber
    var numero2 = document.getElementById("n8").valueAsNumber
    document.getElementById('respsub').textContent = numero1 - numero2
}