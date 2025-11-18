let emailGuardado = localStorage.getItem("email");
let login = document.querySelector(".login");
let register = document.querySelector(".register");
let saludo = document.querySelector(".saludo");
let logout = document.querySelector(".logout");

if (emailGuardado !== null) {

    if (login) {
        login.style.display = "none";
    }

    if (register) {
        register.style.display = "none";
    }

    if (saludo) {
        saludo.innerText = "Bienvenido: " + emailGuardado;
        saludo.style.display = "block";
    }

    if (logout) {
        logout.style.display = "block";
    }
}