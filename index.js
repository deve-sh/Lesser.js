// JavaScript module to use less plain JavaScript to accomplish simple tasks.

/*	----------------------
	DOM ELEMENT SELECTORS!
	----------------------	*/

// Query Selector All function.

function get(queryString = "*"){
	if(queryString === "")
		queryString = "*";

	return document.querySelectorAll(queryString);
}

// Select DOM Elements by ID function.

function getById(idString = ""){
	return document.getElementById(idString);
}

// Select DOM Elements by Class Name function.

function getByCN(className = ""){
	return document.getElementsByClassName(className);
}

// Select DOM Elements by Tag Name function.

function getByTN(tagName = ""){
	return document.getElementsByTagName(tagName);
}

// Select DOM Elements by Name function.

function getByN(name = ""){
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
	else{
		throw new Error("Expected a proper mutable iterable argument like an Array, NodeList, HTMLCollection or an Object.");
	}
}

// Function to check if an object is an HTML Element or Node.

function isElement(object){
  return (
    typeof HTMLElement === "object" ? object instanceof HTMLElement : //DOM2
    object && typeof object === "object" && object !== null && object.nodeType === 1 && typeof object.nodeName==="string"
  );
}

// DOM innerHTML getter and setter function.

function HTML(DOMElements = [], html = ""){
	if(html !== ""){
		// If the user wants to set the innerHTML Of DOMElements passed as the argument.

		if(NodeList.prototype.isPrototypeOf(DOMElements) || HTMLCollection.prototype.isPrototypeOf(DOMElements)){
			for(let i = 0;i<DOMElements.length;i++){
				DOMElements[i].innerHTML = html;
			}
		}
		else if(isElement(DOMElements)){
			// If the DOMElements argument is just one single DOM Element.

			DOMElements.innerHTML = html;
		}
		else{
			throw new Error("Expected a NodeList, HTMLCollection or a DOM Element.");
		}
	}
	else{
		// If the user wants to get the innerHTML of DOMElements passed as the argument.

		if(NodeList.prototype.isPrototypeOf(DOMElements) || HTMLCollection.prototype.isPrototypeOf(DOMElements)){

			let htmlList = [];	// This would be the returned. An array of HTMLs.

			for(let i = 0;i<DOMElements.length;i++){
				htmlList.push(DOMElements[i].innerHTML);
			}

			return htmlList;
		}
		else if(isElement(DOMElements)){
			// If the DOMElements argument is just one single DOM Element.

			return DOMElements.innerHTML;
		}
		else{
			throw new Error("Expected a NodeList, HTMLCollection or a DOM Element.");
		}
	}
}

// Function to return or set the text of a node.
// If one wants innerText of a DOM Node instead of the textContent, then set the innerText argument to true.

function TEXT(DOMElements = [], text = "", innerText = false){
	if(text !== ""){
		// If the user wants to set the innerHTML Of DOMElements passed as the argument.

		if(NodeList.prototype.isPrototypeOf(DOMElements) || HTMLCollection.prototype.isPrototypeOf(DOMElements)){
			for(let i = 0;i<DOMElements.length;i++){
				if(innerText === true)
					DOMElements[i].innerText = text;
				else
					DOMElements[i].textContent = text;
			}
		}
		else if(isElement(DOMElements)){
			// If the DOMElements argument is just one single DOM Element.

			(innerText===true)?DOMElements.innerText = text:DOMElements.textContent=text;
		}
		else{
			throw new Error("Expected a NodeList, HTMLCollection or a DOM Element.");
		}
	}
	else{
		// If the user wants to get the innerHTML of DOMElements passed as the argument.

		if(NodeList.prototype.isPrototypeOf(DOMElements) || HTMLCollection.prototype.isPrototypeOf(DOMElements)){

			let textList = [];	// This would be the returned. An array of HTMLs.

			for(let i = 0;i<DOMElements.length;i++){
				textList.push((innerText === true)?DOMElements[i].innerText:DOMElements[i].textContent);
			}

			return textList;
		}
		else if(isElement(DOMElements)){
			// If the DOMElements argument is just one single DOM Element.

			return (innerText === true)?DOMElements.innerText:DOMElements.textContent;
		}
		else{
			throw new Error("Expected a NodeList, HTMLCollection or a DOM Element.");
		}
	}
}

// Function to create a DOM Element.

// Example : options = {className : 'cl', id: 'idname'} will return a DOM Element with id : idname and class : cl.

function createEl(tagName = "", options = {}){
	// options is an object of attributes for the Element to be created.

	if(typeof tagName !== "string" || (typeof options !== 'object' || !options))
		throw new Error("Wrong type of argument passed.");

	try{
		let newElement = document.createElement(tagName);
		let attr = Object.keys(options);

		for(let i = 0; i < attr.length; i++){
			if(options.hasOwnProperty(attr[i]))
				newElement[attr[i]] = options[attr[i]];
		}

		return newElement; // Return the new created DOM Element.
	}
	catch(e){
		throw new Error(e);
	}
}

// Function to append a DOM Element to a parent Node.

function appendNode(parent, child){
	if(isElement(parent) && isElement(child)){
		parent.appendChild(child);
		return true;
	}
	else{
		throw new Error("Invalid Arguments, expected DOM Nodes as parent and child.");
	}
}

// Function to add a className to the classList of a DOM Element.

function toggleClass(element, className = ""){
	if(isElement(element)){
		if(element.classList.contains(className)){
			element.classList.remove(className);
		}
		else{
			element.classList.add(className);
		}
	}
	else
		throw new Error("Invalid Argument. Expected an Element.");
}

// Function to add a style-set to a DOM Element or Elements.

function addStyles(DOMElements, styles = {}){
	// styles is an object of JS Styles to be applied to a DOM Element.

	let attr = Object.keys(styles);

	if(attr.length > 0){
		if(NodeList.prototype.isPrototypeOf(DOMElements) || HTMLCollection.prototype.isPrototypeOf(DOMElements)){
			for(let i = 0;i<DOMElements.length;i++){
				for(let j = 0;j<attr.length;j++){
					if(styles.hasOwnProperty(attr[j]))
						DOMElements[i].style[attr[j]] = styles[attr[j]];
				}
			}
		}
		else if(isElement(DOMElements)){
			// If the DOMElements argument is just one single DOM Element.

			for(let j = 0;j<attr.length;j++){
				if(styles.hasOwnProperty(attr[j]))
					DOMElements[i].style[attr[j]] = styles[attr[j]];
			}
		}
		else{
			throw new Error("Expected a NodeList, HTMLCollection or a DOM Element.");
		}
	}

	return;
}

// ----------------------------------------
// Async Function to perform an AJAX call.
// The type argument takes the operation to perform. One of 'GET','POST','PUT' and 'DELETE'.
// The url is the link to call the AJAX request to.
// The func argument is the callback function that will get called when the AJAX request has loaded. Otherwise, none at all will fire.
// The data is an object that will be sent to the URL in case the type of request is POST or PUT.

// NOTE:
// ------
// To access the response or properties of the request in the func argument, use the req object.
// Example : To access the response text of the request, use xhr.responseText inside the callback function.

async function AJAX(type = "GET", url = "", func = (req) => {return;}, data = {}){

	if(typeof url !== 'string' || typeof func !== 'function' || typeof type !== 'string' || typeof data !== 'object')
		throw new Error("Invalid Arguemnt Types.");

	try{

		if(!func || !type || !url){
			throw new Error("URL, Type and Function required as arguments.");
		}

		let xhr = new XMLHttpRequest();
		
		xhr.open(type,url,true);

		xhr.onload = function(){
			req = xhr;
			func(req);
		};

		switch(type){
			case 'GET': {
				xhr.onload = function(){
					req = xhr;
					func(req);
				};
				await xhr.send(null);
				break;
			}
			case 'POST':{
				xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
				xhr.onload = function(){
					req = xhr;
					func(req);
				};
				await xhr.send(data);
				break;
			}
			case 'PUT': {
				xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
				xhr.onload = function(){
					req = xhr;
					func(req);
				};
				await xhr.send(data);
				break;
			}
			case 'DELETE': {
				await xhr.send(null);
				break;
			}
			default: {
				throw new Error("Invalid Type for an xhr.");
				break;
			}
		}
	}
	catch(err){
		throw new Error(err);	// This is going to return an error such as 404,401,400, etc. or a CORS error.
	}
}