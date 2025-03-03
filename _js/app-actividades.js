
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

document.querySelector(".login .form").style.display = "block";
document.querySelectorAll(".login .caja").forEach(el => el.style.display = "block");

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

