function agregar(valor){
    document.getElementById('pantalla').value += valor
}

function limpiar(){
    document.getElementById('pantalla').value = ""
}

function calcular(){
    const valorResultado = document.getElementById('pantalla').value
    const resultado = eval(valorResultado)
    document.getElementById('pantalla').value = resultado
}

function deshacer(){
    const valorResultado = document.getElementById('pantalla').value
    document.getElementById('pantalla').value = valorResultado.slice(0, -1)
}