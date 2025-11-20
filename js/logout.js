let logoutBoton = document.querySelector(".logout a");

if (logoutBoton) {

  logoutBoton.addEventListener("click", function (event) {

    event.preventDefault();

    
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    
    let loginItem = document.querySelector(".login");
    let registerItem = document.querySelector(".register");

    if (loginItem) {
      loginItem.style.display = "block";
    }

    if (registerItem) {
      registerItem.style.display = "block";
    }

    let saludoItem = document.querySelector(".saludo");

    if (saludoItem) {
      saludoItem.innerHTML = "";
      saludoItem.style.display = "none";
    }

    let logoutItem = document.querySelector(".logout");

    if (logoutItem) {
      logoutItem.style.display = "none";
    }

  });
}