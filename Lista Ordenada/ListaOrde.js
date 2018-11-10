"use strict";
/* Funciones que dependen de la pagina */
var num_lista = create();

function cleanData(){ //Funcion que hará que cada que pulse el boton añadir limpia el input
    document.getElementById ("num").value = "";  
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

function pollNumber (){ //Funcion que borra un numero
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	list.innerHTML = "";  
 	try {
		remove(num_lista,size(num_lista)-1);
	 	list.innerHTML = toString(num_lista);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}