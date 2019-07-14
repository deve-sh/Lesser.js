# Lesser.js

Day to day, regular JavaScript developers finds themselves writing long lines of plain JavaScript to perform tasks as simple as getting all the elements in the DOM with tag name `p`. (**Note** : Not to say plain JS is bad, it's quite beautiful and fantastic!)

The idea of this library is to reduce that.

## Installation

[Installation instructions coming soon.]

## Usage

The Library provides a wide range of functions one might need day to day.

### Selecting Elements from DOM.

Selecting DOM Elements is a Breeze with Lesser.js. 

Require it as a CommonJS dependency or a browser script as shown in the Installation above.
You could also import it as an ES6 Dependency.

```javascript

// CommonJS Module

const lesser = require('lesser.js');

lesser.get(`#elementbyquery`);			// Similar to querySelectorAll. Returns a NodeList.
lesser.getById(`elementWithId`);		// Similar to getElementById. Returns the DOM Element.
lesser.getByCN(`elementsWithClass`);		// Similar to getElementsByClassName. Returns a NodeList.
lesser.getByTN(`elementsWithTagname`);	// Similar to getElementsByTagName. Returns a NodeList.
lesser.getByN(`elementsWithName`);		// Similar to getElementsByName. Returns a NodeList.

// Or use it in the browser by including it in a Script tag.

get(`#elementbyquery`);
getById(`elementWithId`);
getByCN(`elementsWithClass`);
getByTN(`elementsWithTagname`);
getByN(`elementsWithName`);
```

Note that the above functions return a NodeList or a Node, do use a variable to store their returns.

### Manipulating DOM Elements

#### Getting and Setting the innerHTML of DOM Elements.

The **`HTML`** function gets and sets the innerHTML of a DOM Element or a list of them (In which case, it will return an array of the innerHTML(s)).

Usage : `HTML(DOMElement(s), innerHTML to set (Optional))`

```javascript
// As a CommonJS module
const lesser = require('lesser.js');

let DOMElement = lesser.getById('IDElement');	// This is a single DOM Element.
let DOMElements = lesser.get('p');				// This is a list of elements.

lesser.HTML(DOMElement);					// Returns the innerHTML of the element.
lesser.HTML(DOMElements);					// Returns an array of the innerHTML of all the elements in DOMElements.
lesser.HTML(DOMElements, '<h2>This is a paragraph.</h2>');	// Sets the innerHTML of all the elements in DOMElements to the second argument.

// To use as a Browser module. Just remove the lesser. from the beggining of the instructions.
```

#### Getting and setting the text of DOM Elements.

The **`TEXT`** function gets and sets the text of a DOM Element or a list of them. Just like the `HTML` function, this function also returns a list of text of the DOM Elements.

Usage : `TEXT(DOMElement(s), innerText = false (Optional), Text to set (Optional))`

The function gets and sets the `textContent` of the DOM Element(s) by default, if you instead want to get the `innerText` of the elements, pass true as the second argument of the function.

```js
// As a CommonJS module
const lesser = require('lesser.js');

let DOMElement = lesser.getById('IDElement');	// This is a single DOM Element.
let DOMElements = lesser.get('p');				// This is a list of elements.

lesser.TEXT(DOMElement);		// Returns the textContent of the DOMElement.
lesser.TEXT(DOMElements, true)	// Returns an array of the innerText of all elements in DOMElements.
lesser.TEXT(DOMElements, false, "Sets the textContent of all the elements inside DOMElements.");
lesser.TEXT(DOMElements, true, "Sets the innerText of all the elements inside DOMElements.");

// To use as a Browser module. Just remove the lesser. from the beggining of the instructions.
```