/* This repository is for practicing DOM manipulation. Feel free to uncomment
all the examples and see its functions in the console: */

//-----------------------------------------------------------------------------------------------

// Part I: Selecting Elements

// 1. .getElementById(); --> returns the element with the specified ID.

/*const container = document.getElementById('container-ingredients');
console.log(container);*/

/*const container = document.getElementById('container-ingredients');
console.log(container.innerHTML);*/ 

/* 
  a. .innerHTML returns the HTML content of an element
  b. .innerText returns the text content of an element
  c. .tagName returns the tag name of the element it's called on
*/

// 2. .getElementsByClassName(); --> returns a collection of all elements in the document with the specified class name.

/*const ingredients = document.getElementsByClassName('ingredients');
console.log(ingredients);
console.log(ingredients[0]);*/ // [0] is used to access the first element in the collection.

// 3. .getElementsByTagName(); --> returns a collection of all elements in the document with the specified tag name.

/*const myIngredients = document.getElementsByTagName('li');
console.log(myIngredients);*/

// 4. .querySelector(); --> returns the first element that matches a specified CSS selector(s) in the document.

/*const firstIngredient = document.querySelector('.ingredients.background-brown');
console.log(firstIngredient);*/

// 5. .querySelectorAll(); --> returns a static NodeList representing a list of the document's elements that match the specified group of selectors.

/*const allIngredients = document.querySelectorAll('.ingredients');
console.log(allIngredients);*/

//-----------------------------------------------------------------------------------------------

// Part II: manipulating Elements

// 1. Assign styles

/*const firstIngredient = document.querySelector('.ingredients');
firstIngredient.style.backgroundColor = 'lightblue';
firstIngredient.style.color = '#333';*/

// 2. Access the text and text modification

/*const listIngredients = document.getElementById('list-ingredients');
console.log(listIngredients.innerText);
console.log(listIngredients.textContent); // --> returns the text content of the element.
console.log(listIngredients.innerHTML);*/

/*const titulo = document.getElementById('titulo');
titulo.innerText = 'Favorite Ingredients:';*/

// 3. Attributes

/*const link = document.getElementsByTagName('a');
console.log(link[0].getAttribute('href'));*/

// console.log(link[0].removeAttribute('href')); // --> removes the href attribute from the link.
// console.log(link[0].setAttribute('href', 'https://www.freecodecamp.org')); // --> setAttribute() method adds the href attribute to the link.

// 4. Classes

/*const firstIngredient = document.querySelector('.ingredients');
console.log(firstIngredient.classList);*/

// 5. Adding classes

/*const firstIngredient = document.querySelector('.ingredients');
firstIngredient.classList.add('myIngredient');
console.log(firstIngredient.classList);*/

// 6. Check for classes

/*const primerToping = document.querySelector('.ingredients');
console.log(primerToping.classList.contains('background-brown'));
console.log(primerToping.classList);*/

// 7. Delete classes

/*const primerToping = document.querySelector('.ingredients');
primerToping.classList.remove('background-brown');
console.log(primerToping.classList);*/

/* 
The classList property is a read-only property of an HTML element that returns a live
DOMTokenList collection of the class attributes of the element. This provides methods to add,
remove, toggle and check for the presence of CSS classes on a element.

Here are some common methods available on classList:

- add() Adds the specified class to the element
- remove() Removes the specified class from the element.
- toggle()  Toggles the specified class on the element.
- contains() Check if the element contains the specified class.
- replace()  Replaces an existing class with a new class.
*/