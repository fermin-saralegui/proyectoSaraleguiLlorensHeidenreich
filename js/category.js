 let lista1 = document.querySelector(".menswatches")

fetch("https://dummyjson.com/products/category/mens-watches")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let productos = data.products; 

    console.log(productos);

    for (let i = 0; i<productos.length; i++) {
      lista1.innerHTML += `
        <article class="relojhombre">
          <img src="${productos[i].thumbnail}" alt="">
          <p>${productos[i].title}</p>
          <a class="verdetalle" href="./product.html">Ver detalle</a>
        </article>
      `;
    }
  })
  .catch(function(error) {
    console.log("Error: " + error);
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
