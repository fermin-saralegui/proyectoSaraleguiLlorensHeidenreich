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

let contenedorproducto = document.querySelector(".productodescripcion");
let contenedorreview = document.querySelector(".reviews")
let queryString = location.search;              
let params = new URLSearchParams(queryString);  
let id = params.get('id');

fetch("https://dummyjson.com/products/" + id)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        contenedorproducto.innerHTML =
            `<img src= "${data.images[0]}" alt= "${data.titles}"}>
            <div class="detalles">
                <h2>Nombre del Producto: ${data.title} </h2>
                <p>Marca: ${data.brand} </p>
                <p>Descripcion: ${data.description} </p>
                <p>Precio: $${data.price} </p>
                <p>Categoría: ${data.category} </p>
                <p>Stock: ${data.stock} </p>
                <p>Tags: ${data.tags} </p>
            </div>`;

            let reviews = data.reviews;
            let htmlReviews = "<h2>Reseñas</h2>"

            for (let i = 0; i < reviews.length; i++) {
                let review = reviews[i];
                htmlReviews += `
                    <article class= "reviews"
                    <h3> Rating: ${review.rating}/5</h3>
                    <p>${review.comment}</p>
                    <p>Fecha: ${review.date}</p>
                    <p>Usuario: ${review.reviewerName}</p>
                    </article>`;
            }
            contenedorreview.innerHTML = htmlReviews
    })
    .catch(function(err){
        console.log("Error: " + err);
    });

 