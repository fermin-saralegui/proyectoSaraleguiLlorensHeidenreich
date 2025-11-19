let lista1 = document.querySelector(".diezdeportes");

fetch(('https://dummyjson.com/products/category/sports-accessories'))
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let productos = data.products; 

    console.log(productos);

    for (let i = 0; i <10; i++) {
      lista1.innerHTML += `
        <article class= "productosdeportivos">
          <img src="${productos[i].thumbnail}" alt="">
          <p>${productos[i].title}</p>
          <p>${productos[i].category}</p>
          <p>${productos[i].description}</p>
          <p>${productos[i].price}</p>
        </article>
      `;
    }
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });

  

  let lista2 = document.querySelector(".diezcelulares");

fetch(('https://dummyjson.com/products/category/smartphones'))
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let productos = data.products; 

    console.log(productos);

    for (let i = 0; i < 10; i++) {
      lista2.innerHTML += `
        <article class= "productoscelulares">
          <img src="${productos[i].thumbnail}" alt="">
          <p>${productos[i].title}</p>
          <p>${productos[i].category}</p>
          <p>${productos[i].description}</p>
          <p>${productos[i].price}</p>
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