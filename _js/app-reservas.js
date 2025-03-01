
//HEADER DROPDOWNS

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


//DROPDOWNS

document.addEventListener("DOMContentLoaded", () => {
    // 📌 Dropdown Información General
    const infoBtn = document.querySelector(".info-btn");
    const informaciones = document.querySelector(".informaciones");

    if (infoBtn && informaciones) {
        infoBtn.addEventListener("click", () => {
            informaciones.classList.toggle("activo");
        });
    }

    // 📌 Dropdown Punto de Encuentro
    const ubicacionBtn = document.getElementById("ubicacionBtn");
    const encuentro = document.getElementById("encuentro");

    if (ubicacionBtn && encuentro) {
        ubicacionBtn.addEventListener("click", () => {
            encuentro.classList.toggle("activo");
        });
    }

    // 📌 Dropdown Opiniones
    const opinionBtn = document.getElementById("opinionBtn");
    const comentarios = document.getElementById("comentarios");

    if (opinionBtn && comentarios) {
        opinionBtn.addEventListener("click", () => {
            comentarios.classList.toggle("activo");
        });
    }
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