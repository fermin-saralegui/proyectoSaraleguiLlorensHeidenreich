
let url = 'https://dummyjson.com/products';
let lista1 = document.querySelector(".cincoprimaleat");

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let productos = data.products; 

    console.log(productos);

    for (let i = 0; i <5; i++) {
      lista1.innerHTML += `
        <article>
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

  let lista2 = document.querySelector(".cincosegaleat");

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let productos = data.products; 

    console.log(productos);

    for (let i = 6; i<10; i++) {
      lista2.innerHTML += `
        <article>
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

  let lista3 = document.querySelector(".cincoprimven");

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let productos = data.products; 

    console.log(productos);

    for (let i = 11; i < 15; i++) {
      lista3.innerHTML += `
        <article>
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

  let lista4 = document.querySelector(".cincosegven");

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let productos = data.products; 

    console.log(productos);

    for (let i = 16; i < 20; i++) {
      lista4.innerHTML += `
        <article>
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
