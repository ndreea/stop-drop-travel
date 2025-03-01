
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

// Dropdown Información General
document.addEventListener("DOMContentLoaded", () => {
    const infoBtn = document.querySelector(".info-btn");
    const informaciones = document.querySelector(".informaciones");

    infoBtn.addEventListener("click", () => {
        informaciones.style.display = informaciones.style.display === "block" ? "none" : "block";
        infoBtn.querySelector("i").classList.toggle("fa-chevron-up");
    });
});

// Dropdown Punto de encuentro
document.addEventListener("DOMContentLoaded", () => {
    const ubicacionBtn = document.getElementById("ubicacionBtn");
    const encuentro = document.getElementById("encuentro");

    ubicacionBtn.addEventListener("click", () => {
        encuentro.classList.toggle("activo");
        encuentro.style.display = encuentro.classList.contains("activo") ? "block" : "none";
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