window.onload= init();

//JSON de combos
combos=[
   {"name":"combo super","precio":7.25},
    {"name":"combo personal","precio":5.25},
    {"name":"combo infantil","precio":3.50}
 ];
//JSON de productos

productos=[
    {"name":"ensalada","precio":1.50},
    {"name":"papa frita","precio":1.25},
    {"name":"pieza de pollo grande","precio":1.15},
    {"name":"pieza de pollo mediana","precio":1.50},
    {"name":"pieza de pollo pequeña","precio":1.25},
    {"name":"bebida grande","precio":1.50},
    {"name":"bebida mediana","precio":1.25},
    {"name":"bebida pequeña","precio":1.00},
    {"name":"cafe","precio":0.50},
    {"name":"postre","precio":1.25}
]
  
//array de precion

var bandera
var nombre

//funcion de sumar todo

//funcion inicial
function init(){
    
    const mensaje = document.getElementById('view')


    let totalPrecio = [];
    let totalNombre = [];
    let sugerencia = [];
const button = document.getElementById('btnGuardar');
const btnSugerencia = document.getElementById('btnSugerencia')
//elementos de los combos guardados en variables
const cbSuper = document.getElementById('comboSuper');
const cbPersonal = document.getElementById('comboPersonal');
const cbInfantil = document.getElementById('comboInfantil');

const pdEnsalada = document.getElementById('btnEnsalada');
const pdPapaFrita = document.getElementById('btnPapaFritas');
const pdPiezaGrande = document.getElementById('btnPPGrabge');
const pdPiezaMeidana = document.getElementById('btnPPMeidana');
const pdPiezaMPequena = document.getElementById('btnPPPequena');
const pdBGrande = document.getElementById('btnBebidaGrande');
const pdBMediana = document.getElementById('btnBebidaMediana');
const pdBPequena = document.getElementById('btnBebidapequeña');
const pdCafe = document.getElementById('btnCafe');
const pdPostre = document.getElementById('btnPostre');

//area de div de sugrencias
 var area = document.getElementById('area');


document.onkeydown = function(e) {
    e = e || event;
  //mostrar
    if ((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0))) {
        console.log('ok')
        mostrar()
        return false;
    }
    if((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0))) {
    console.log('ok')
    guardar();
    return false;
    }
   }
   







//botones de combos
cbSuper.onchange=function(){
    
        console.log('click');
            bandera=combos[0].precio;
            nombre=combos[0].name;
            totalNombre.push(nombre);
            totalPrecio.push(bandera);
            console.log(totalNombre);
            console.log(totalPrecio);
            sumar();

            
}
            

cbPersonal.onchange=function(){
    console.log('click');
        bandera=combos[1].precio;
        nombre=combos[1].name;
        totalNombre.push(nombre);
        totalPrecio.push(bandera);
        console.log(totalNombre);
        console.log(totalPrecio);
        sumar();

        
}

cbInfantil.onchange=function(){
    console.log('click');
        bandera=combos[2].precio;
        nombre=combos[2].name;
        totalNombre.push(nombre);
        totalPrecio.push(bandera);
        console.log(totalNombre);
        console.log(totalPrecio);
        sumar();

     

}

//botones de productos

pdEnsalada.onchange=function(){
        console.log('click');
        bandera=productos[0].precio;
        nombre=productos[0].name;
        totalNombre.push(nombre);
        totalPrecio.push(bandera);
        console.log(totalNombre);
        console.log(totalPrecio);
        sumar();

}
pdPapaFrita.onchange=function(){
    console.log('click');
    bandera=productos[1].precio;
    nombre=productos[1].name;
    totalNombre.push(nombre);
    totalPrecio.push(bandera);
    console.log(totalNombre);
    console.log(totalPrecio);
    sumar();
   
}
pdPiezaGrande.onchange=function(){
    console.log('click');
    bandera=productos[2].precio;
    nombre=productos[2].name;
    totalNombre.push(nombre);
    totalPrecio.push(bandera);
    console.log(totalNombre);
    console.log(totalPrecio);
    sumar();

   
}
pdPiezaMeidana.onchange=function(){
    console.log('click');
    bandera=productos[3].precio;
    nombre=productos[3].name;
    totalNombre.push(nombre);
    totalPrecio.push(bandera);
    console.log(totalNombre);
    console.log(totalPrecio);
    sumar();

    
}

pdPiezaMPequena.onchange=function(){
    console.log('click');
    bandera=productos[4].precio;
    nombre=productos[4].name;
    totalNombre.push(nombre);
    totalPrecio.push(bandera);
    console.log(totalNombre);
    console.log(totalPrecio);
    sumar();

   
}

pdBGrande.onchange=function(){
    console.log('click');
    bandera=productos[5].precio;
    nombre=productos[5].name;
    totalNombre.push(nombre);
    totalPrecio.push(bandera);
    console.log(totalNombre);
    console.log(totalPrecio);
    sumar();

    
}

pdBMediana.onchange=function(){
    console.log('click');
    bandera=productos[6].precio;
    nombre=productos[6].name;
    totalNombre.push(nombre);
    totalPrecio.push(bandera);
    console.log(totalNombre);
    console.log(totalPrecio);
    sumar();

    
}

pdBPequena.onchange=function(){
    console.log('click');
    bandera=productos[7].precio;
    nombre=productos[7].name;
    totalNombre.push(nombre);
    totalPrecio.push(bandera);
    console.log(totalNombre);
    console.log(totalPrecio);
    sumar();

    
}

pdCafe.onchange=function(){
    console.log('click');
    bandera=productos[8].precio;
    nombre=productos[8].name;
    totalNombre.push(nombre);
    totalPrecio.push(bandera);
    console.log(totalNombre);
    console.log(totalPrecio);
    sumar();

    
}
pdPostre.onchange=function(){
    console.log('click');
    
}

//boton sugerencia


//botom imprimir
    button.onclick=function(){
        if(totalNombre ==""){
            alert('No puede haber contenido vacio');
            location.reload();
        }else{
       recivo()};

    };


    function recivo(){

      
        document.getElementById('recivo').innerHTML="<p>Nombre -- Precio"
        for (var i = 0; i < totalPrecio.length; i++) {
            
            document.getElementById('recivo').innerHTML+="<li>"+totalNombre[i]+" -- $"+totalPrecio[i]+"</li>";
            };

            sumarFinal();
    
}

    //funcion de  suma e impresion de datos
   
function sumar(){
    let sum = 0;

for (let i = 0; i < totalPrecio.length; i++) {
    sum += totalPrecio[i];
}
document.getElementById('total').innerHTML="<p>El total a pagar es $"+sum+"</p>";

}

function sumarFinal(){
    let sum2 = 0;

for (let i = 0; i < totalPrecio.length; i++) {
    sum2 += totalPrecio[i];
}
document.getElementById('suma').innerHTML="<p>El total a pagar es $"+sum2+"</p>";

}





function mostrar(){
    var id = "id"
      mensaje.innerHTML="<textarea id="+id+"></textarea>"

}

function guardar(){

    sugerencia.push(document.getElementById('id').value)
    document.getElementById('view').innerHTML="<br>"+sugerencia[0]+"<br>"
}



} 


