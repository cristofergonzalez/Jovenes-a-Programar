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
         for(i=0;i<myObj.length;i++){
             contenido +=`
             <img src="`+myObj[i].imgSrc+`">
             <p>
                `+"<span>Nombre: </span>"+ myObj[i].name+`
             </p>
             
             <p>
                `+"<span>Descripción: </span>"+myObj[i].description+`
             </p>
             <p class="bottom">
                `+"<span>Precio: </span>"+myObj[i].cost+`
             </p>
             <hr>
             `

         }
         
         document.getElementById("container").innerHTML+= contenido;
     })
     
 });

