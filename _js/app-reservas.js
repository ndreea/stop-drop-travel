
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


//RESEÑAS GENERADAS
document.addEventListener("DOMContentLoaded", () => {
    const opinionBtn = document.getElementById("opinionBtn");
    const comentarios = document.getElementById("comentarios");
    const reseñasContainer = document.querySelector(".resenas-container");

    const opiniones = [
        {
            nombre: "Paula - Chile",
            fecha: "16 de julio del 2024",
            rating: 5,
            imagen: "_img/persona1-lima-barranco.jpg",
            comentario:
                "Agradable Tour por Barranco. Especialmente disfrutamos el arte callejero y el atardecer con vistas al mar al final del tour. También nos proporcionó información y recomendaciones adicionales para realizar fuera del tour. Totalmente recomendado para conocer a fondo y disfrutar de una tarde en el barrio.",
        },
        {
            nombre: "Olivia - Australia",
            fecha: "20 de septiembre del 2024",
            rating: 5,
            imagen: "_img/persona2-lima-barranco.jpg",
            comentario:
                "Diana, fue nuestra guía, fue un encanto. Nos contó muchas curiosidades y luego nos ayudó en todas las dudas que le preguntamos.",
        },
        {
            nombre: "Jimmy - Alemania",
            fecha: "12 de octubre del 2024",
            rating: 4,
            imagen: "_img/persona3-lima-barranco.jpg",
            comentario:
                "Buen tour por los principales lugares del barrio de Barranco. Muy bien explicado.",
        },
    ];

    // Generar reseñas dinámicamente
    opiniones.forEach((opinion) => {
        const reseña = document.createElement("div");
        reseña.classList.add("resena");

        reseña.innerHTML = `
            <div class="estrellas">${generarEstrellas(opinion.rating)}</div>
            <div class="usuario">
                <img src="${opinion.imagen}" alt="Foto de ${opinion.nombre}">
                <div class="nombre">
                    <p>${opinion.nombre}</p>
                    <span class="fecha">${opinion.fecha}</span>
                </div>
            </div>
            <p>${opinion.comentario}</p>
        `;
        reseñasContainer.appendChild(reseña);
    });

    function generarEstrellas(rating) {
        let estrellasHTML = "";
        for (let i = 1; i <= 5; i++) {
            estrellasHTML += `<i class="fa-solid fa-star ${i <= rating ? "rojo" : "estrella-gris"}"></i>`;
        }
        return estrellasHTML;
    }

    opinionBtn.addEventListener("click", () => {
        comentarios.classList.toggle("activo");
        comentarios.style.display = comentarios.classList.contains("activo") ? "block" : "none";
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