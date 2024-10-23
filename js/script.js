function agregar(valor){
    document.getElementById('pantalla').value += valor
}

function borrar(){
    document.getElementById('pantalla').value = ""
}

function calcular(){
    const valorResultado = document.getElementById('pantalla').value
    const resultado = eval(valorResultado)
    document.getElementById('pantalla').value = resultado
}
