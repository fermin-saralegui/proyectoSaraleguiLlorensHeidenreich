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
let contenedor = document.querySelector(".productodescripcion");

fetch("https://dummyjson.com/products/1")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    let htmlProducto = `
      <article class="productpelota">
        <h1>${data.title}</h1>
        <h3>${data.brand}</h3>

        <img src="${data.thumbnail}" alt="${data.title}">

        <p>${data.description}</p>
        <p>Precio: $${data.price}</p>
        <p>Categoría: ${data.category}</p>
        <p>Stock: ${data.stock}</p>

        <h4>Tags:</h4>
        <ul>
          <li>${data.tags[0] || ""}</li>
          <li>${data.tags[1] || ""}</li>
          <li>${data.tags[2] || ""}</li>
        </ul>
      </article>
    `;

    let htmlReviews = "<h2>Reviews</h2>";

    for (let i = 0; i < data.reviews.length; i++) {
      htmlReviews += `
        <article class="review">
          <p>Rating: ${data.reviews[i].rating}</p>
          <p>Comentario: ${data.reviews[i].comment}</p>
          <p>Fecha:${data.reviews[i].date}</p>
          <p>Usuario: ${data.reviews[i].reviewerName}</p>
        </article>
      `;
    }

    contenedor.innerHTML = htmlProducto + htmlReviews;

  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
 