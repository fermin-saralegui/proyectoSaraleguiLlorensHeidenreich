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

let queryString = location.search
let urlBu = new URLSearchParams(queryString)
let searchValores = urlBu.get('search')

let noBuscar = document.querySelector('.nobusqueda')
let valoresCaja = document.querySelector('.Productosdeportivos1')

noBuscar.innerHTML = "Resultados de tu búsqueda: " + searchValores

fetch('https://dummyjson.com/products/search?q=' + searchValores)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        let productos = data.products
        let contenido = ""

        if (productos.length === 0) {
            noBuscar.innerText = "No hay resultados para: " + searchValores
            valoresCaja.innerHTML = ""
        }

        for (let i = 0; i < productos.length; i++) {
                let p = productos[i]
    
                contenido += `
                    <article class="art">
                        <img class="imgart" src="${p.thumbnail}" alt="${p.title}">
                        <h4>${p.title}</h4>
                        <p>${p.description}</p>
                        <p>$${p.price}</p>
                        <button class="vermas">
                        <a href="./product.html?id=${productos[i].id}" target="_blank">Ver Más</a>
                        </button>
                    </article>
                `
            }
        

        valoresCaja.innerHTML = contenido
    })
    .catch(function(err){
        console.log("Error: " + err)
    })