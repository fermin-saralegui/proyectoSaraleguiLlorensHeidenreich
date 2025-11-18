let categorias = document.querySelector(".navmainlista")
fetch(('https://dummyjson.com/products/category-list'))


 .then(function(response) {
   return response.json()
 })


 .then(function(data) {


   for (let i = 0; i < data.length; i++) {
       let categoria = data[i];
       if (categoria){
           categorias.innerHTML += `
               <li class="category">
               <a href="./category.html?category=${categoria}">${categoria}</a>
               </li>`
           console.log("Categorias");
       }
   }
 })
 .catch(function(error) {
   console.log("Error: " + error)
 })

 
  let form = document.querySelector(".Registro");

if (form) {
  form.addEventListener("submit", function (event) {

    event.preventDefault();
    let emailInput = form.querySelector(".Email");
    let passwordInput = form.querySelector(".Password");
    let repeatPasswordInput = form.querySelector(".RepeatPassword");
    let terminosInput = form.Terminos; 
    let email = emailInput.value;
    let password = passwordInput.value;
    let repeatPassword = repeatPasswordInput.value;

    if (email === "") {
      alert("Hay que poner un email obligatoriamente.");
      return;
    }

    if (password === "") {
      alert("Tenes que completar la contraseña si o si.");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña tiene que ser de mas de 6 caracteres.");
      return;
    }

    if (repeatPassword === "") {
      alert("Repeti la contraseña, completalo.");
      return;
    }

    if (password !== repeatPassword) {
      alert("La contraseña tiene que ser la misma que cuando repetis la contraseña.");
      return;
    }

    if (terminosInput.checked === false) {
      alert("Debe aceptar los términos y condiciones.");
      return;
    }

    
    form.action = "./login.html";
    form.submit();
  });
}