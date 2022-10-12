window.onload=init();

//JSON



function init(){
    peliculas=[
        {"titulo":"Titanic","duracion":"3h 14m","clasificacion":"MPAA","butaca":"Tradicional"},
        {"titulo":"Interestelar","duracion":"2h 49m","clasificacion":"PG-13","butaca":"Premiun",},
        {"titulo":"Evangelion: 2.0 You Can (Not) Advance","duracion":"1h 48m","clasificacion":"PG-15","butaca":"Tradicional",}
        
    ]
    
    horarios=[
        {"primer":"10:00 AM - 13:00 PM"},
        {"primer":"14:00 AM - 17:00 PM"},
        {"primer":"18:00 AM - 21:00 PM"}
    ]

    formatos=[
        {"formato":"3D"},
        {"formato":"2D"},
        {"formato":"DOB"},

    ]

document.getElementById('titulo').innerHTML=peliculas[0].titulo
document.getElementById('cd').innerHTML="Clasificación"+peliculas[0].clasificacion+"  <br>  "+"Duracion: "+peliculas[0].duracion
document.getElementById('fb').innerHTML="Formato: "+formatos[0].formato+" - "+formatos[1].formato+" - "+formatos[2].formato+"<br>Butaca: "+peliculas[0].butaca



for (let index = 0; index < horarios.length; index++) {
    document.getElementById('horarios').innerHTML+="<table>"
    document.getElementById('horarios').innerHTML+="<tr>"+horarios[index].primer+"</tr>"
    
    
}

document.getElementById('titulo2').innerHTML=peliculas[1].titulo
document.getElementById('cd2').innerHTML="Clasificación"+peliculas[1].clasificacion+"  <br>  "+"Duracion: "+peliculas[1].duracion
document.getElementById('fb2').innerHTML="Formato: "+formatos[1].formato+" - "+formatos[2].formato+"<br>Butaca: "+peliculas[1].butaca

document.getElementById('horarios2').innerHTML+="<tr>"+horarios[0].primer+"</tr>"
document.getElementById('horarios2').innerHTML+="<tr>"+horarios[1].primer+"</tr>"

document.getElementById('titulo3').innerHTML=peliculas[2].titulo
document.getElementById('cd3').innerHTML="Clasificación"+peliculas[2].clasificacion+"  <br>  "+"Duracion: "+peliculas[2].duracion
document.getElementById('fb2').innerHTML="Formato: "+formatos[2].formato+" - "+formatos[2].formato+"<br>Butaca: "+peliculas[1].butaca

document.getElementById('horarios3').innerHTML+="<tr>"+horarios[0].primer+"</tr>"





}