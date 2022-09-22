//Variables
let city = [
    {nombre: "Cordoba", climaHoy: "agradable"},
    {nombre: "Santa Fe", climaHoy: "lluvioso"},
    {nombre: "Parana", climaHoy: "caluroso"},
    {nombre: "Mendoza", climaHoy: "nublado"},
];

let ciudadesFavoritas = [];
let ciudad;

//Dom y eventos
const texto = document.getElementById("texto")
let nombrePersona = prompt("Ingrese su nombre");

texto.innerHTML = `Hola ${nombrePersona}, bienvenido a Weather Channel!`

const respuesta = document.getElementById("respuesta");
respuesta.innerText = `La temperatura promedio es de ... grados`



let botonPrincipal = document.getElementById("formulario");
botonPrincipal.addEventListener("submit", boton);


function boton(evento){
    evento.preventDefault();
    console.log("Ciudad Enviada");
};

//Funciones
function listaCiudades(){
    console.log(ciudadesFavoritas.length);
    console.log(ciudadesFavoritas);
};

/*function inicio(){
    alert(`Hola ${nombrePersona}, bienvenido a Weather Channel!`)
};*/

function temperaturaPromedio (tempMaxima, tempMinima){
    let resultadoPromedio = (tempMaxima + tempMinima) / 2;
    return resultadoPromedio;
};

function opcionCiudad(){
    ciudad = prompt(`por favor elije una ciudad: 1.Cordoba
                                                 2.Santa Fe
                                                 3.Parana
                                                 4.Mendoza
                                                 5.Salir`);

    if (ciudad === "1"){
        eleccion = city[0].nombre;
        clima = city[0].climaHoy;
        alert(`El clima en la ciudad de ${eleccion} es ${clima}`);
        pregunta = prompt (`Desea agregarla a ciudades favoritas?: 1.SI
                                                                   2.NO`);
        if (pregunta === "1"){
        ciudadesFavoritas.push(city[0]);
        }else{
        nuevaPregunta = prompt(`Desea consultar otra ciudad?: 1.SI
                                                                2.NO`);
            if (nuevaPregunta == "1"){
                opcionCiudad();
            }
        }
    };

    if (ciudad === "2"){
        eleccion = city[1].nombre;
        clima = city[1].climaHoy;
        alert(`El clima en la ciudad de ${eleccion} es ${clima}`);
        pregunta = prompt (`Desea agregarla a ciudades favoritas?: 1.SI
                                                                   2.NO`);
        if (pregunta === "2"){
        ciudadesFavoritas.push(city[1]);
        }else{
        nuevaPregunta = prompt(`Desea consultar otra ciudad?: 1.SI
                                                              2.NO`);
            if (nuevaPregunta == "1"){
                opcionCiudad();
            }
        }
    };

    if (ciudad === "3"){
        eleccion = city[2].nombre;
        clima = city[2].climaHoy;
        alert(`El clima en la ciudad de ${eleccion} es ${clima}`);
        pregunta = prompt (`Desea agregarla a ciudades favoritas?: 1.SI
                                                                   2.NO`);
        if (pregunta === "3"){
        ciudadesFavoritas.push(city[2]);
        }else{
        nuevaPregunta = prompt(`Desea consultar otra ciudad?: 1.SI
                                                              2.NO`);
            if (nuevaPregunta == "1"){
                opcionCiudad();
            }
        }
    };

    if (ciudad === "4"){
        eleccion = city[3].nombre;
        clima = city[3].climaHoy;
        alert(`El clima en la ciudad de ${eleccion} es ${clima}`);
        pregunta = prompt (`Desea agregarla a ciudades favoritas?: 1.SI
                                                                   2.NO`);
        if (pregunta === "4"){
        ciudadesFavoritas.push(city[3]);
        }else{
        nuevaPregunta = prompt(`Desea consultar otra ciudad?: 1.SI
                                                              2.NO`);
            if (nuevaPregunta == "1"){
                opcionCiudad();
            }
        }
    };
};


/*inicio();*/

while (opcionCiudad !== "5"){
    let opcionActividad = prompt(`que desea saber: 1.Temperatura actual
                                                    2.Temperatura promedio
                                                    3. Salir`);
    if(opcionActividad == "1"){
        opcionCiudad();
    };
    if(opcionActividad == "2") {
        ciudad = prompt("Ingrese una ciudad");
        let tempMaxima = parseInt(prompt("por favor ingrese temperatura maxima"));
        let tempMinima = parseInt(prompt("por favor ingrese temperatura minima"));
        alert("La temperatura promedio de la ciudad " + ciudad + " es de " + temperaturaPromedio(tempMaxima, tempMinima) + " grados.");
        opcionCiudad();
    };
    if (opcionActividad === "3"){
        alert("Gracias por su visita")
        listaCiudades();
        break;  
    };
};











