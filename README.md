# Lesser.js

Day to day, regular JavaScript developers finds themselves writing long lines of plain JavaScript to perform tasks as simple as getting all the elements in the DOM with tag name `p`. (**Note** : Not to say plain JS is bad, it's quite beautiful and fantastic!)

The idea of this library is to reduce that.

## Installation

### Browser

To use Lesser.js in the browser, include the following code in your HTML file : 

```html
<script type='text/javascript' src='https://raw.githubusercontent.com/deve-sh/Lesser.js/master/lesser-browser-min.js'></script>

<!-- Or -->

<script type='text/javascript' src='https://raw.githubusercontent.com/deve-sh/Lesser.js/master/lesser-browser.js'></script>
```

The first one is the minified version of Lesser.js (**Recommended for usage!**) and has been compiled down to ES5, so it will work on basically any Browser.

### Node.js

To install Lesser.js on Node.js, run the following command from your command line :

```bash
npm install lesser.js
```

Require it in your application : 

```js
// CommonJS Method

const lesser = require('lesser.js');

// ES6 Method

import * as lesser from 'lesser.js';

// Or import a specific function from lesser using destructuring.

import {get, getById} from 'lesser.js';

```

### For Development

For further development, just clone the Git Repository or download the zip, and edit it like any other JavaScript project.

```bash
git clone https://github.com/deve-sh/Lesser.js.git
cd Lesser.js
```

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

// To use in the browser, Just remove the lesser. from the beggining of the instructions.
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

// To use in the browser, Just remove the lesser. from the beggining of the instructions.
```

#### Setting Styles of the DOM

The styles of a DOM Element or a list of DOM Nodes can be set in one go using the `addStyles` function.

The addStyles function takes the DOM Node or a list of DOM Nodes as its first argument and an object of styles (**Note** : The object needs to be JavaScript CSS Compliant. Example : Use `className` instead of `class`.)

```js
const DOMList = get('h3');

// Set all h3 Nodes' colors as blue.

addStyles(DOMList, {color: 'blue'});
```

#### Looping over an Iterable

To loop over an iterable element and perform a certain function over all its elements, use the `loop` function, its first argument is the iterable, and the second argument is the callback function that takes the element in the iterable as its argument and performs operations on it.

```js
let numbers = [1,2,3,4,5,6];

loop(numbers, (num) => {
	console.log(num);	// This will log all the items in numbers array to the console.
});
```

#### Cloning a DOM Element

Just use the `clone` function to create a cloned copy of a DOM Element.

#### Creating a DOM Element

The `createEl` function creates a DOM Element. The first argument takes the tagname and the second argument is an object of the options (Like className, ID).

The function returns the created DOM Element.

```js
const element = createEl('h1', {innerHTML:'This is a heading', className : 'classN'}); 	// The element variable is now a DOM element.
```

#### Appending a DOM Element to a Node

To append a DOM Element/Node to a Parent Node, use the `appendNode` function.

It takes the parent node as the first argument and the child node as the second argument. It then appends the child to the parent.

```js
const element = createEl('div', {innerHTML:'This is a div'});
const parent = getById('parentDiv');

appendNode(parent, element);	// The element variable will be appended to the parent.
```

#### Deleting a DOM Node

To delete a DOM Element/Node from the webpage. Use the `deleteEl` function which takes the list of DOM Nodes or a single DOM Node as its argument.

#### Checking if an Element has a particular class.

To check if an element has a particular class. Use the `hasClass` function. It takes the DOM Element as its first argument and the className to check.

It returns true or false accordingly.

```js
hasClass(element, 'classToCheck');
```

#### Toggling a Class for an Element

To add a className to the classList of a DOM Element, use the `toggleClass` function, it will add the className to the element's classList if className isn't already there, and will remove it if it is present.

It takes the element as its first argument and the className as the second argument.

```js
toggleClass(element, 'classToToggle');
```

#### Adding Event Listeners

You can also add event listeners and callbacks to a list of DOM Elements or a single Node, using the `onEvent` function.

The onEvent function takes the DOM Elements' List or the DOM Node as its first argument, the event as a string as the second argument and the callback function to execute on the event as its second argument. The callback function has a default argument as the event object.

```js
const DOMList = get(`p`);		// Get all the paragraphs.

onEvent(DOMList,'click', (event) => {
	console.log(event.target.textContent);
});		// Now every paragraph on the webpage has the event listener.
```

### Miscellaneous Tasks

The following tasks are not related to DOM Operations. But nonetheless, take considerable amount of code to execute and operate.

So its good to use the functions packaged with Lesser.js to perform tasks that does not require a lot of complicated code.

#### Making an AJAX Call

AJAX Calls are essential to front end applications. But since they are tedious to write, especially, the pre-ES6 way without using the `fetch` API.

AJAX Calls can be asynchronously and effortlessly made using Lesser.js.

The inbuild function **`AJAX`** can be used.

**Note** : You need to configure CORS yourself on the backend if you are making requests to a seperate server than your own.

The function takes the type (GET, POST, PUT, DELETE) of the request as the first argument, the URL to make the request to as the second argument, the function to execute when the request loads, and the data to send (If the request is a POST or PUT request).

The callback function takes the req object as the parameter.

```js
// In a CommonJS Module.

lesser.AJAX('GET','URL', (req) => {
	console.log(req.response);
});

// POST Request example in a Browser Environment.

AJAX('POST', 'URL', (req) => {
	console.log(req.response);
}, "Data to send through POST");
```

#### Using the Stack function

Data Structures are very useful. One such useful data structure is the Stack.

There is a predefined function (ES5 Class) known as `Stack` that initializes an instance of a stack.

```js
// CommonJS Implementation

let newStack = new lesser.Stack();

// Browser Implementation

let newStack = new Stack();

// Common Operations on Stack.

newStack.push(2);	// Pushes 2 to the stack.
newStack.push(5);	// Pushes 5 to the stack.
newStack.peek();	// Returns the latest element of the stack.
newStack.print();	// Returns the entire stack.
newStack.pop();		// Pops the latest element of the stack.
newStack.inEmpty();	// Returns true is stack is empty and false if otherwise.
```

## Contribution, Issues and Support

Just make any change you deem necessary or add a feature that might be missing, like : 

* Linked Lists
* Queues

Or any other, and open a pull request to the repo. Pull Requests will be merged to master once they are verified to be valueable to the master branch.

For any issue. Just open an Issue in the repo.

For Support, open an issue or [mail me](mailto:devesh2027@gmail.com).