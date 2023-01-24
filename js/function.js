
/** document.getElementById("button").onclick = function (params) {
    console.log("Capturamos el evento click")
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
}

document.addEventListener('click', function() {
    console.log("Hola mundo desde Listener");
    document.getElementById("demo2").innerHTML = "Estamos probando nuestro Listener"
})
*/

document.getElementById("boton").addEventListener('click', function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Gracias por cliquear, ahora debes depositarme dinero."
});

document.getElementById("boton_color").addEventListener('click', function(){
    document.body.style.backgroundColor = '#7B68EE';                 //da otro color de fondo a la pág
});

document.getElementById("boton_default").addEventListener('click', function(){
    document.body.style.backgroundColor = ' rgba(14, 14, 14, 0.877)';           //vuelve al color por defecto
});

document.getElementById("ocultar_titulo").addEventListener('click', function() {
    document.getElementById("titulo").style.display='none';             //oculta el título
});

const collection = document.getElementsByClassName("prueba");
for(let i= 0; i <collection.length; i++) {
    collection[i].style.backgroundColor = 'rgb(4, 252, 37)';
}


    

