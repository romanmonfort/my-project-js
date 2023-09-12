// Las escusas en arreglos
const quien = ['Mi perro', 'Mi hermana', 'Su gato', 'Mi madre'];
const accion = ['se comió', 'se llevó', 'destrozó', 'desapareció'];
const que = ['mi proyecto', 'las llaves', 'mi almuerzo'];
const cuando = ['antes de irme', 'justo ahora', 'cuando me fui', 'durante la tarde', 'mientras estaba jugando al fútbol'];

//La funcion que genera las escusas,no encontre otra forma que no sea con math.
function generarExcusa() {
    const randomQuien = quien[Math.floor(Math.random() * quien.length)];
    const randomAccion = accion[Math.floor(Math.random() * accion.length)];
    const randomQue = que[Math.floor(Math.random() * que.length)];
    const randomCuando = cuando[Math.floor(Math.random() * cuando.length)];

    return randomQuien+" "+randomAccion+" "+randomQue+" "+randomCuando;
}

// El llalmado a la funcion con el onload para cuando se recarga la pagina llame la funcion
window.onload = function() {
    document.getElementById("excusa").innerHTML = generarExcusa();//el getElement que trae el elemento de id escusa en este caso
};