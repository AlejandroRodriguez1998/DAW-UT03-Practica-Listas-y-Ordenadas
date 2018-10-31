"use strict";

/* Funciones que dependen de la pagina */
var num_lista = create();

function cleanData(){ //Funcion que hará que cada que pulse el boton añadir limpia el input
    document.getElementById ("num").value = "" ;  
}

function addNumber(num){ //Funcion que recoge el numero en el HTML y añadé el numero
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

/* Funciones genericas de la lista */

var max_element_lista = 5; //Mi lista tendra 5 elementos

function create(){ //Funcion en la cual creamos el array y lo mandamos
 	var list = [];
 	return list;
} 

function isEmpty(list){ //Funcion que comprueba con la longitud del array para saber si esta vacio
 	return (list.length === 0);
} 

function isFull(list){ //Funcion que comprueba si el array ha llegado al maximo de elementos
 	return (list.length === max_element_lista);
} 

function size(list){ //Funcion que devuelve la longitud del array
 	return list.length;
}

function add(list,elem){ //Funcion que añade un numero a la lista
    //Convierto el elemento a entero ya que al recogerlo del formaluario es un String
    elem = parseInt(elem);

    if (isNaN(elem)) { //Compruebo si es un numero, sino lo es mando una exepcion
        throw "El elemento no es un numero";
    }
    if (isFull(list)){ //Compruebo si la lista esta llena, si lo esta mando una expecion
       throw "La lista esta llena. Tú no puedes añadir más elementos";
    } else { //Si la lista sigue teniendo capacidad, hago un push que añadirá el numero al final de la lista
        list.push(elem);
    }
    return size(list); //Devuelvo la longitud del array
} 