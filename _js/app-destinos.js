
/*

En este js están:
1.Dropdown Usuario y Buscar (header principal)
2.Menú de navegación Manual
3.Modales: Iniciar sesión y crear cuenta

*/


/* -------------------------------------- */


//HEADER DROPDOWNS

/* En el header general de la página, están los dropdown de buscar y el otro del usuario (iniciar sesión y crear cuenta */

//Dropdown Usuario (Iniciar sesión y crear cuenta)
let MenuUser = document.getElementById("MenuUser"); //Creamos una variable para el botón

function toggleMenuUser(){ //Aplicamos la función toggle que al hacer click, este se abra y se cierre de nuevo
    MenuUser.classList.toggle("abrir-user");
};


//Dropsown Search (lupa)
let MenuSearch = document.getElementById("MenuSearch"); //Creamos una variable para el botón

function toggleMenuSearch(){ //Aplicamos la función toggle que al hacer click, este se abra y se cierre de nuevo
    MenuSearch.classList.toggle("abrir-search");
};


/* -------------------------------------- */


//MENÚ DE NAVEGACIÓN LATERAL BOTONES (NAVEGACIÓN MANUAL)

/* Estos botones manuales permiten al usuario navegar por la página una vez que se haya hecho click en cada uno de ellos */

//Creamos variables para todos los contenedores y todos los botones
var contenedores = document.querySelectorAll(".contenedor");
var btns = document.querySelectorAll(".btn");
let currentContenedores = 1;

var manualNav = function(manual){ //Añadimos una función manual para cada contenedor de la página
    contenedores.forEach((contenedor) => {
        contenedor.classList.remove("active"); //Removemos la clase "active" para cada contenedor
    
    btns.forEach((btn) => { //Removemos la clase "active" para cada botón
        btn.classList.remove("active");
    });
});

    contenedores[manual].classList.add("active"); //Añadimos la clase "active" a los contenedores junto con la función manual
    btns[manual].classList.add("active"); //Añadimos la clase "active" a los botones junto con la función manual
}

btns.forEach((btn, i) => { //Añadimos un bucle manual para cada botón de la página (esto servirá para cada uno de ellos)
    btn.addEventListener("click", () => { //Al hacer click, el bucle afecta a la navegación
        manualNav(i);
        currentContenedores = i;
    });
});



/* -------------------------------------- */



//MODAL LOGIN

//Llamamos al botón para abrir el modal y añadimos una función
document.querySelector("#open-login").addEventListener("click", function() {

    //El caso de que se presione el botón, la modal de muestre
    document.querySelector(".login").classList.add("show");
});

//Llamamos al botón para cerrar el modal y añadimos una función
document.querySelector(".login #close-login").addEventListener("click", function() {

    //El caso de que se presione el botón, la modal se cierre
    document.querySelector(".login").classList.remove("show");
});

/* -------------------------------------- */

//MODAL REGISTRO

//Llamamos al botón para abrir el modal y añadimos una función
document.querySelector("#open-registro").addEventListener("click", function() {

    //El caso de que se presione el botón, la modal de muestre
    document.querySelector(".registro").classList.add("show");
});

//Llamamos al botón para cerrar el modal y añadimos una función
document.querySelector(".registro #close-registro").addEventListener("click", function() {

    //El caso de que se presione el botón, la modal se cierre
    document.querySelector(".registro").classList.remove("show");
});





