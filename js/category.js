window.addEventListener('load', function () {

    let queryString = location.search;
    let params = new URLSearchParams(queryString);
    let categoryName = params.get('category'); 



    let tituloCategoria = document.querySelector('.productosgenerales');
    let contenedorcartas = document.querySelector('.todosproductos');



    tituloCategoria.innerText = categoryName;


    let url = 'https://dummyjson.com/products/category/' + categoryName;

    contenedorcartas.innerHTML = "<p>Cargando productos...</p>";

    fetch(url)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (data) {
            let productos = data.products;
            let contenido = "";

            for (let i = 0; i < productos.length; i++) {
                let p = productos[i];

                contenido += `
                    <article class="art">
                        <img class="imgart" src="${p.thumbnail}" alt="${p.title}">
                        <h2>${p.title}</h2>
                        <p>${p.description}</p>
                        <p>$${p.price}</p>
                        <button class="vermas">
                            <a href="./product.html?id=${p.id}" target="_blank">Ver Más</a>
                        </button>
                    </article>
                `;
            }

            contenedorcartas.innerHTML = contenido;
        })
        .catch(function (error) {
            contenedorcartas.innerHTML = "<p>Error al cargar productos.</p>";
            console.log("Error: ", error);
        });

});
  
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
