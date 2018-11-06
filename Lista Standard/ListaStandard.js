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

function addAt(list,elem,index){ //Funcion que añade un numero a la posicion deseada
	//Convierto el elemento a entero ya que al recogerlo del formaluario es un String
    elem = parseInt(elem);

    if (isNaN(elem)) { //Compruebo si es un numero, sino lo es mando una exepcion
        throw "El elemento no es un numero";
    }
    if (isFull(list)){ //Compruebo si la lista esta llena, si lo esta mando una expecion
       throw "La lista esta llena. Tú no puedes añadir más elementos";
	} 
	if(index > size(list) || index <= -1){
		throw "El indice esta fuera de los limites de la lista";
	}else { //Si la lista sigue teniendo capacidad, hago un splice que añadirá 
			//el numero al posicion deseada de la lista
        list.splice(index, 0, elem);
    }
    return size(list); //Devuelvo la longitud del array
}

function get(list,index){ //Funcion que devuelve un numero en la posicion deseada
	if(index > size(list) || index <= -1){ //Si la posicion es mayor que la longitud del array mando una exepcion
		throw "El indice esta fuera de los limites de la lista";
	}else{ //Sino devuelvo el numero de la posicion deseada
		return list[index];
	}
}

function toString(list){ //Funcion que convierte el array a un formato especifico
	var str = "";
	if (!isEmpty(list)){ //Compruebo que el array NO esta vacio 
		var length = size(list); //Obtengo la longitud del array con la funcion size
		//Con el for voy recorriendo el array para meterlo en una variable aux y darle el formato
		for (var i=0; i<length-1;i++){
			str = str + list[i] + " - ";
		} 		 		
		str = str + list[i]; //Recojo el ultimo valor del array
	} 	
	return str; //Devuelvo el array con formato siendo String
}

function indexOf(list,elem){ //Funcion que devuelve la posicion de un elemento 
	var position = -1; //Pongo a no encontrado el elemento
	elem = parseInt(elem); //Convierto el elemento a un number
	if (isNaN(elem)) { //Compruebo si es un numero si NO lo es mando una expecion
		throw "El elemento no es un numero";	
	} else{ //SI es un numero...
		if (!isEmpty(list)){ //Compruebo si la lista NO esta vacia
			position = list.indexOf(elem); //Recojo la posicion
		} 
	}
	return position; //La devuelvo
}

function lastIndexOf(list,elem){ //Funcion que devuelve la posicion de un elemento EMPEZANDO por el final
	var position = -1; //Pongo a no encontrado el elemento
	elem = parseInt(elem); //Convierto el elemento a un number
	if (isNaN(elem)) { //Compruebo si es un numero si NO lo es mando una expecion
		throw "El elemento no es un numero";	
	} else{ //SI es un numero...
		if (!isEmpty(list)){ //Compruebo si la lista NO esta vacia
			position = list.lastIndexOf(elem); //Recojo la posicion
		} 
	}
	return position; //La devuelvo
}

function capacity(list){ //Funcion que devuelve la capacidad de la lista
	return max_element_lista;
} 

function clear(list){ //Funcion que borra el array
	if (!isEmpty(list)){
		list.splice(0, list.length);	 		 		
	} 	
} 

function firstElement(list){ //Funcion que devuelve la primera posicion
	var first;
	if (isEmpty(list)){ //Compruebo que la lista no esta vacia, si lo esta devuelvo una exepcion
		throw "La lista esta vacia."; 		
	} else {
		first = list[0];
	}
	return first;
} 

function lastElement(list){ //Funcion que devuelve la ultima posicion
	var last;
	if (isEmpty(list)){ //Compruebo que la lista no esta vacia, si lo esta devuelvo una exepcion
		throw "La lista esta vacia.";			
	} else {
		last = list[list.length-1];
	}
	return last;
} 

function remove(list,index){ //Funcion que elimina un elemento desde la posicion
	var num;
	if(index > size(list) || index <= -1){ //Si la posicion es mayor que la longitud del array mando una exepcion
		throw "El indice esta fuera de los limites de la lista";
	}else{ //Sino devuelvo el numero de la posicion deseada
		num = list.splice(index,1);
	}
	return num; //Devuelvo el numero borrado
}

function removeElement(list,elem){ //Funcion que elemina un elemento buscandolo
	var comprobacion = false;
	elem = parseInt(elem); //Convierto el elemento a un number
	if (isNaN(elem)) { //Compruebo si es un numero si NO lo es mando una expecion
		throw "El elemento no es un numero";	
	} else{ //SI es un numero...
		var posicion = indexOf(list,elem); //Recojo la posicion donde esta el numero

		if(posicion != -1){ //Si el numero es distinto de -1 significa que lo ha encontrado
			list.splice(posicion,1); //Lo borro
			comprobacion = true; //Cambio a true porque lo he encontrado
		}
	}
	return comprobacion;
}

function set(list,elem,index){ //Funcion que remplaza un elemento por otro mediante la posicion
	var num;
	elem = parseInt(elem); //Convierto el elemento a un number
	if (isNaN(elem)) { //Compruebo si es un numero si NO lo es mando una expecion
		throw "El elemento no es un numero";	
	} else{ //SI es un numero...
		if(index > size(list) || index <= -1){ //Compruebo que el indice no sea mayor que la longitud del array
			throw "El indice esta fuera de los limites de la lista";
		}else{ //Si es menor remplazo
			num = list[index];
			list.splice(index, 1, elem);
		}
	}

	return num; //Devuelvo el numero remplazado
}

function testlist(){
	//var list = create (); 	
	var list=[]; 	
	console.log ("Capacidad: " + capacity(list));
	console.log("Es vacía: " + isEmpty(list));
	console.log("Longitud: " + size(list));

	try {
		for (var i=0; i < 4; i++){
			console.log("Nº de elementos: " + add(list,i*10));
		}
		addAt(list,50,2);
		console.log("Añado el 50 en la posicion 2");
		add(list,i); //Para que genere una exepcion
	} catch (err) {
		console.log(err);
	}

	console.log ("La lista llena: " + toString(list));
	console.log ("Quiero conseguir el numero de la posicion 3: " + get(list,3));

	console.log ("Esta 50 en la lista: " + indexOf(list,50));	 	
	console.log ("Esta -50 en la lista: " + lastIndexOf(list,-50));

	console.log ("El primer elemento de la lista: " + firstElement(list));
	console.log ("El ultimo elemento de la lista: " + lastElement(list));

	//clear(list);

	console.log ("Voy a borrar el 40: " + removeElement(list,40));
	console.log ("Cambio el 50 por el 40: " +set(list,40,2));
	console.log ("La lista llena: " + toString(list));

	try {
		var i = size(list) - 1;
		while (true){
			console.log ("Elemento borrado: " + remove(list,i));
			console.log ("La lista: " + toString(list));
			i--;		 	
		}
	} catch (err) {
		console.log(err); //Cuando la lista este vacia, una exception sera capturada.
	}
} 
window.onload = testlist;

