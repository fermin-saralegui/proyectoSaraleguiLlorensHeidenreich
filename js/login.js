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

 let form = document.querySelector(".login2");

if (form) {
  form.addEventListener("submit", function (event) {

    event.preventDefault();
    let emailInput = form.querySelector("#Email");
    let passwordInput = form.querySelector("#Password");
    let email = emailInput.value;
    let password = passwordInput.value;

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
    
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    form.action = "./index.html" ;
    form.submit();
  });
}
