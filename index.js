// JavaScript module to use less plain JavaScript to accomplish simple tasks.

/*	----------------------
	DOM ELEMENT SELECTORS!
	----------------------	*/

// Query Selector All function.

function select(queryString = "*"){
	if(queryString === "")
		queryString = "*";

	return document.querySelectorAll(queryString);
}

// Select DOM Elements by ID function.

function selectById(idString = ""){
	return document.getElementById(idString);
}

// Select DOM Elements by Class Name function.

function selectByCN(className = ""){
	return document.getElementsByClassName(className);
}

// Select DOM Elements by Tag Name function.

function selectByTN(tagName = ""){
	return document.getElementsByTagName(tagName);
}

// Select DOM Elements by Name function.

function selectByN(name = ""){
	return document.getElementsByName(name);
}

/*
	Manipulator functions
*/

// The following is a function to loop over an Array, NodeList or an HTMLCollection and perform some operations on each entry.
// The loop function accepts a function as its argument, whose argument is 'arg'.
// The callback function contains the actions to perform on the argument 'arg'.

function loop(iterable = [], func = function(arg){return;}){
	if(typeof func !== "function")
		throw new Error("Expected a callback as an argument.");

	let i = 0;

	if(Array.isArray(iterable) || NodeList.prototype.isPrototypeOf(iterable) || HTMLCollection.prototype.isPrototypeOf(iterable)){
		// If the iterable is an Array.

		for(i=0;i<iterable.length;i++){
			func(iterable[i]);	// Perform the func operation on each of its element.
		}
	}
	else if(typeof iterable === 'object' && iterable){
		// If the iterable is an object, and not any undefined or null value, since typeof null or undefined also returns object (For some reason, JS is weird!).
		// Iterate over its native properties.

		let keys = Object.keys(iterable);

		for(i=0;i<keys.length;i++){
			if(iterable.hasOwnProperty(keys[i]))
				func(iterable[keys[i]]);
		}
	}
}