
document.getElementById("boton").onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
}
document.getElementById('boton').addEventListener('click', function () {
    console.log("Buenos dias desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
}

document.getElementById('boton_color').addEventListener('click', function () {
    console.log("capturamos el evento click");
    document.body.style.backgroundColor = '#FF0000';