function _instanceof(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function get(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*";return""===e&&(e="*"),document.querySelectorAll(e)}function getById(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return document.getElementById(e)}function getByCN(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return document.getElementsByClassName(e)}function getByTN(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return document.getElementsByTagName(e)}function getByN(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return document.getElementsByName(e)}function loop(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){};if("function"!=typeof t)throw new Error("Expected a callback as an argument.");var n=0;if(Array.isArray(e)||NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e))for(n=0;n<e.length;n++)t(e[n]);else{if("object"!==_typeof(e)||!e)throw new Error("Expected a proper mutable iterable argument like an Array, NodeList, HTMLCollection or an Object.");var o=Object.keys(e);for(n=0;n<o.length;n++)e.hasOwnProperty(o[n])&&t(e[o[n]])}}function isElement(e){return"object"===("undefined"==typeof HTMLElement?"undefined":_typeof(HTMLElement))?_instanceof(e,HTMLElement):e&&"object"===_typeof(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function HTML(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""===t){if(NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e)){for(var n=[],o=0;o<e.length;o++)n.push(e[o].innerHTML);return n}if(isElement(e))return e.innerHTML;throw new Error("Expected a NodeList, HTMLCollection or a DOM Element.")}if(NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e))for(var r=0;r<e.length;r++)e[r].innerHTML=t;else{if(!isElement(e))throw new Error("Expected a NodeList, HTMLCollection or a DOM Element.");e.innerHTML=t}}function TEXT(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(""===n){if(NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e)){for(var o=[],r=0;r<e.length;r++)o.push(!0===t?e[r].innerText:e[r].textContent);return o}if(isElement(e))return!0===t?e.innerText:e.textContent;throw new Error("Expected a NodeList, HTMLCollection or a DOM Element.")}if(NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e))for(var i=0;i<e.length;i++)!0===t?e[i].innerText=n:e[i].textContent=n;else{if(!isElement(e))throw new Error("Expected a NodeList, HTMLCollection or a DOM Element.");!0===t?e.innerText=n:e.textContent=n}}function createEl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e||"object"!==_typeof(t)||!t)throw new Error("Wrong type of argument passed.");try{for(var n=document.createElement(e),o=Object.keys(t),r=0;r<o.length;r++)t.hasOwnProperty(o[r])&&(n[o[r]]=t[o[r]]);return n}catch(e){throw new Error(e)}}function appendNode(e,t){if(isElement(e)&&isElement(t))return e.appendChild(t),!0;throw new Error("Invalid Arguments, expected DOM Nodes as parent and child.")}function hasClass(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(isElement(e))return e.classList.contains(t);throw new Error("Invalid Argument. Expected an Element.")}function toggleClass(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!isElement(e))throw new Error("Invalid Argument. Expected an Element.");e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)}function addStyles(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.keys(t);if(n.length>0)if(NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e))for(var o=0;o<e.length;o++)for(var r=0;r<n.length;r++)t.hasOwnProperty(n[r])&&(e[o].style[n[r]]=t[n[r]]);else{if(!isElement(e))throw new Error("Expected a NodeList, HTMLCollection or a DOM Element.");for(var s=0;s<n.length;s++)t.hasOwnProperty(n[s])&&(e[i].style[n[s]]=t[n[s]])}}async function AJAX(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if("string"!=typeof t||"function"!=typeof n||"string"!=typeof e)throw new Error("Invalid Arguemnt Types.");try{if(!n||!e||!t)throw new Error("URL, Type and Function required as arguments.");var r=new XMLHttpRequest;switch(r.open(e,t,!0),r.onload=function(){req=r,n(req)},e){case"GET":r.onload=function(){req=r,n(req)},await r.send(null);break;case"POST":if(!o)throw new Error("Required some data to be sent through POST Request.");r.setRequestHeader("Content-type","application/json; charset=utf-8"),r.onload=function(){req=r,n(req)},await r.send(o);break;case"PUT":if(!o)throw new Error("Required some data to be created through PUT Request.");r.setRequestHeader("Content-type","application/json; charset=utf-8"),r.onload=function(){req=r,n(req)},await r.send(o);break;case"DELETE":await r.send(null);break;default:throw new Error("Invalid Type for an xhr.")}}catch(e){throw new Error(e)}}function onEvent(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){};if(!e||!t||!n)throw new Error("All DOM Element, Event descriptor and Callback function required as arguments.");if(NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e))for(var o=0;o<e.length;o++)e[o].addEventListener(t,n);else{if(!isElement(e))throw new Error("Invalid Argument passed as DOM Element.");e.addEventListener(t,n)}}function deleteEl(e){if(!e)throw new Error("DOM Element or its set required as arguments.");if(NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e))for(var t=0;t<e.length;t++)e[t].delete();else{if(!isElement(e))throw new Error("Invalid Argument passed as DOM Element.");e.delete()}}function clone(e){if(!DOMElements)throw new Error("Expected DOM Element as argument.");if(isElement(e)){return e}throw new Error("Invalid DOM Element passed.")}function Stack(){return{stack:[],push:function(e){return this.stack.push(e)},peek:function(){return this.isEmpty()?"Stack Empty.":this.stack[this.stack.length-1]},isEmpty:function(){return this.stack.length<=0},pop:function(){return this.stack.pop()},print:function(){return this.isEmpty()?"Stack Empty.":this.stack}}}