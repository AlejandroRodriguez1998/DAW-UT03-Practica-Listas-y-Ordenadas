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

function create(){
    var list = [];
    for (var i=0; i < max_element_lista; i++){
        list[i] = Number.NaN;
    }
    return list;
} 

function isEmpty(list){
    var isEmpty = false;
    if (isNaN(list[0])){
        isEmpty = true;
    }
    return isEmpty;
} 

function isFull(list){
    var isFull = false;
    if (!isNaN(list[max_element_lista - 1])){
        isFull = true;
    }
    return isFull;
} 

function size(list){
    var length = 0;
    while (length < max_element_lista && !isNaN(list[length])){
        length++;
    }
    return length;
} 

function add(list,elem){
    elem = parseInt(elem);
    if (isNaN(elem)) {
        throw "El elemento no es un numero";
    }
    if (isFull(list)){
       throw "La lista esta llena. Tú no puedes introduccir más numeros";
    } else { 
        list[size(list)] = elem;
    }
    return size(list);
}

function addAt(list,elem,index){ //Funcion que añade un numero a la posicion deseada
	//Convierto el elemento a entero ya que al recogerlo del formaluario es un String
    elem = parseInt(elem);

    if (isNaN(elem)) { //Compruebo si es un numero, sino lo es mando una exepcion
        throw "El elemento no es un numero";
    }
    if (isFull(list)){ //Compruebo si la lista esta llena, si lo esta mando una expecion
       throw "La lista esta llena. Tú no puedes añadir más elementos";
    } else { //Si la lista sigue teniendo capacidad, meto el elemento
        var aux;
        var long = size(list);
        for(let i = index; i <= long; i++){
            aux = array[i];
            array[i] = elem;
            elem = aux;
        }
    }
    return size(list); //Devuelvo la longitud del array
}

function get(list,index){ //Funcion que devuelve un numero en la posicion deseada
	if(index > size(list)){ //Si la posicion es mayor que la longitud del array mando una exepcion
		throw "El indice deseado es mayor que el array";
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

function indexOf(list,elem){
    var position = -1;
    elem = parseInt(elem);
    if (isNaN(elem)) {
        throw "El elemento no es un numero";	
    } else{
        if (!isEmpty(list)){
            var length = size(list);	
            var i=0;
            while (i < length && position === -1){
                if (list[i] === elem) {
                    position = i;
                }
                i++;
            } 		 		
        } 
    }
    return position;
}

function lastIndexOf(list,elem){
    var position = -1;
    elem = parseInt(elem);
    if (isNaN(elem)) {
        throw "El elemento no es un numero";	
    } else{
        if (!isEmpty(list)){
            var i = size(list);	
            while (i > -1 && position === -1){
                if (list[i] === elem) {
                    position = i;
                }
                i--;
            } 		 		
        } 
    }
    return position;
} 

function capacity(list){ //Funcion que devuelve la capacidad de la lista
	return max_element_lista;
} 

function clear(queue){
    var elem = Number.NaN;
    if (!isEmpty(queue)){
        var length = size(queue);	
        for (var i=0; i<length;i++){
            queue[i] = Number.NaN;
        } 		 		 		
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
	if(index > size(list)){ //Si la posicion es mayor que la longitud del array mando una exepcion
		throw "El indice deseado es mayor que el array";
	}else{ //Sino devuelvo el numero de la posicion deseada
        var num = list[index];
        var aux;
        var long = size(list);
        for(let i = index; i <= long; i++){
            aux = array[i+1];
            array[i] = aux;
        }
	}
	return num; //Devuelvo el numero borrado
}

function removeElement(list,elem){ //Funcion que elimina un elemento buscandolo
	var comprobacion = false;
	elem = parseInt(elem); //Convierto el elemento a un number
	if (isNaN(elem)) { //Compruebo si es un numero si NO lo es mando una expecion
		throw "El elemento no es un numero";	
	} else{ //SI es un numero...
		var posicion = indexOf(list,elem); //Recojo la posicion donde esta el numero

		if(posicion != -1){ //Si el numero es distinto de -1 significa que lo ha encontrado
			var aux;
            var long = size(list);
            for(let i = posicion; i <= long; i++){
                aux = array[i+1];
                array[i] = aux;
            }
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
		if(index > size(list)){ //Compruebo que el indice no sea mayor que la longitud del array
			throw "El indice deseado es mayor que el array";
		}else{ //Si es menor remplazo
			num = list[index];
			list[index] = elem;
		}
	}
	return num; //Devuelvo el numero remplazado
}