"use strict";

/* Funciones que dependen de la pagina */
var num_lista = create();

function cleanData(){ //Funcion que hará que cada que pulse el boton añadir limpia el input
    document.getElementById ("num").value = "" ;  
}

function addNumber(num){ //Funcion que recoge el numero en el HTML y añadé el numero
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";  
 	try {
	 	add(num_lista,num);
	 	list.innerHTML = toString(num_lista);
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}

