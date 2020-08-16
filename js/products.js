//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let url = "https://japdevdep.github.io/ecommerce-api/product/all.json"

function pedido(url){
    return fetch(url)
    .then(function(response){
        if (response.ok){
            return response.json();
        }
    })
};
 document.addEventListener('DOMContentLoaded',function(e){
     pedido(url).then(function(Obj){
         let myObj=Obj
         let contenido=""
         for(i=0;i<4;i++){
             contenido +=`
             <p>
                `+"<span>Nombre: </span>"+ myObj[i].name+`
             </p>
             <img src="`+myObj[i].imgSrc+`">
             <p>
                `+"<span>Descripción: </span>"+myObj[i].description+`
             </p>
             <p class="bottom">
                `+"<span>Precio: </span>"+myObj[i].cost+`
             </p>
             `

         }
         
         document.getElementById("contenedor").innerHTML+= contenido;
     })
     
 });

