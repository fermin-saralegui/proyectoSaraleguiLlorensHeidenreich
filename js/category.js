let url1 = "https://dummyjson.com/products/category/sports-accesories" 
let lista1 = document.querySelector(".productosdeportivos")

fetch(url1)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let productos = data.products; 

    console.log(productos);

    for (let i = 0; i <productos.length; i++) {
      lista1.innerHTML += `
        <article>
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

  
let url2 = 'https://dummyjson.com/products/categories';
let navmain1 = document.querySelector(".navmainlista");

fetch(url2)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let productos = data.products; 

    console.log(productos);

    for (let i=0; i<productos.length; i++) {
      navmain1.innerHTML += `
        <li class=" navmainjs">
          ${productos[i].name}
        </li>
      `;
    }
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
