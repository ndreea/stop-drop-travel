
/*

En este js están:
1. Dropdown Usuario y Buscar (header principal)
2. Dropdown del contenido de la página: Información general, punto de encuentro y opiniones (estos se "activan" cuando se llegue a formato responsive
3. Menú interno Sticky (al hacer scroll, el menñu interno se queda "anclado" arriba
4. Dropdown del cuadro de reserva de la página: nº de participantes, fecha (con calendario), idioma y horario
5. Calendario: Este está situado dentro del dropdown de fecha que hay dentro del cuadro de reserva
6. Modales Inciar sesión y crear cuenta

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


//DROPDOWNS CONTENIDO DE LA PÁGINA

/* Estos dropdowns se activan una vez que todo el contenido de la página llegue a tablet y móvil */

//Dropdown Información general de la Actividad (Esto se activa a partir de tablet)
let informaciones = document.getElementById("informaciones"); //Creamos una variable para el botón

function toggleInformacion(){ //Aplicamos la función toggle que al hacer click, este se abra y se cierre de nuevo
    informaciones.classList.toggle("abrir-info");
};

//Dropdown Ubicación de la Actividad (Esto se activa a partir de tablet)
let ubicacion = document.getElementById("encuentro"); //Creamos una variable para el botón

function toggleUbicacion(){ //Aplicamos la función toggle que al hacer click, este se abra y se cierre de nuevo
    ubicacion.classList.toggle("abrir-ubicacion");
};


//Dropdown Opiniones de la Actividad (Esto se activa a partir de tablet)
let opiniones = document.getElementById("comentarios"); //Creamos una variable para el botón

function toggleOpinion(){ //Aplicamos la función toggle que al hacer click, este se abra y se cierre de nuevo
    opiniones.classList.toggle("abrir-opinion");
};


/* -------------------------------------- */


//MENÚ INTERNO STICKY (Scroll)

/* Para que el menú stiky funcione y se posicione arriba del todo sin necesidad de css */

//Creamos una función para todo el contenido de la página
window.onscroll = function(){miFuncion()};

//Creamos una variable para el id (navbar) en html que hay en el menú de navegación
var navbar = document.getElementById("navbar"); 

//Creamos otra variable para que el navbar se quede arriba
var sticky = navbar.offsetTop;

//Función if/else
function miFuncion(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
};



/* -------------------------------------- */



//DROPDOWNS CUADRO INTERACTIVO DE RESERVA DE LA PÁGINA

//Seleccionamos todos los elementos del dropdown que hay disponibles
const dropDowns = document.querySelectorAll(".seleccion-menu");
const botones = document.querySelectorAll(".seleccion-btn");
const menu = document.querySelectorAll(".options");
const textoMenu = document.querySelectorAll(".option");

// Añadimos un click para abrir cada uno de los dropdowns
botones.forEach((boton, i) => {
    boton.addEventListener("click", () => {
        dropDowns[i].classList.toggle("abrir");
    });
});

//Añadimos un click para cada dropdown abierto
menu.forEach((opcion) => {
    opcion.addEventListener("click", (e) => {

        //Obtenemos el dropdown relacionado con la opción que se ha seleccionado
        const dropdownPadre = e.target.closest(".seleccion-menu");
        
        //Seleccionamos el botón asociado a este dropdown
        const botonRelacionado = dropdownPadre.querySelector(".seleccion-btn");

        //Seleccionamos el contenedor de texto dentro del botón
        const textoBtn = botonRelacionado.querySelector(".texto-btn");

        //Actualizamos solo el texto sin tocar los iconos
        const opcionSeleccionada = e.target.querySelector(".option-text").innerText;
        textoBtn.innerText = opcionSeleccionada;

        console.log(opcionSeleccionada);

        //Cerramos los dropdown
        dropdownPadre.classList.remove("abrir");
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