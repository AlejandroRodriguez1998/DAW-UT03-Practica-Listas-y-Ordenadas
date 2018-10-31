"use strict";

/* Funciones que dependen de la pagina */
var num_lista = create();

function cleanData(){
    document.getElementById ("num").value = "" ;  
}

function addNumber(num){
	var error = document.getElementById ("error");
	var queue = document.getElementById ("list");
	error.innerHTML = "";  
 	try {
	 	add(num_lista,num);
	 	queue.innerHTML = toString(num_lista);
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}
