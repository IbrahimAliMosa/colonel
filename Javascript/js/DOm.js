// Dom => document object model

// selecting elements
document.getElementById(); // Select element by the id
document.getElementsByClassName(); // Select elements by class name
document.getElementsByTagName(); // Select elements by tag name
document.querySelector(); // Select the first element that matches a CSS selector
document.querySelectorAll(); // Select all elements that match a CSS selector
document.body; // Select the body element
document.forms[index]; // Select a form by index
document.images[index]; // Select an image by index
document.links[index]; // Select a link by index
document.title; // Select the title element
document.head; // Select the head element

// Get and Set elements content and attribbutes
// .innerHTML; // Get or set the HTML content of an element
// .textContent; // Get or set the text content of an element
// .innerText; // Get or set the visible text content of an element
// .getAttribute(); // Get the value of an attribute of an element
// .setAttribute(); // Set the value of an attribute of an element

// Check attributes
// .attributes; // Get a collection of all attributes of an element
// .hasAttribute(); // Check if an element has a specific attribute
// .hasAttributes(); // Check if an element has any attributes
// .removeAttribute(); // Remove an attribute from an element

// Create elements
// document.createElement(); // Create a new element
// document.createTextNode(); // Create a new text node
// document.createComment(); // Create a new comment node
// document.createAttribute(); // Create a new attribute node
// element.appendChild(); // Append a child element to a parent element

// Children
// .childNodes; // Get a collection of all child nodes of an element
// .children; // Get a collection of all child elements of an element
// .firstChild; // Get the first child node of an element
// .firstElementChild; // Get the first child element of an element
// .lastChild; // Get the last child node of an element
// .lastElementChild; // Get the last child element of an element

// Dom events
// preventDefault(); // Prevent the default action of an event
// onclick = function() {}; // Add a click event listener to an element
// onmouseover = function() {}; // Add a mouseover event listener to an element
// onmouseout = function() {}; // Add a mouseout event listener to an element
// onsubmit = function() {}; // Add a submit event listener to a form
// onload = function() {}; // Add a load event listener to the window
// onresize = function() {}; // Add a resize event listener to the window
// onscroll = function() {}; // Add a scroll event listener to the window
// onfocus = function() {}; // Add a focus event listener to an element
// onblur = function() {}; // Add a blur event listener to an element
// click = function() {}; // Add a click event listener to an element
// blur = function() {}; // Add a blur event listener to an element
// focus = function() {}; // Add a focus event listener to an element

// Dom manipulation
// .appendChild(); // Append a child element to a parent element
// .removeChild(); // Remove a child element from a parent element
// .replaceChild(); // Replace a child element with another element

// classList
// .classList; // Get a collection of all classes of an element
// .length; // Get the number of classes of an element
// .add(); // Add a class to an element
// .remove(); // Remove a class from an element
// .toggle(); // Toggle a class on an element
// .contains(); // Check if an element has a specific class
// .item(index); // Get a class by index from an element

// Dom css
// .style.property = "value"; // Set a CSS property of an element
// .style.cssText = "property: value; property: value;"; // Set multiple CSS properties of an element
// .style.setProperty("property", "value"); // Set a CSS property of an element
// .style.setProperty("property", "value", "important"); // Set a CSS property of an element with priority
// .style.removeProperty("property"); // Remove a CSS property of an element
// document.styleSheets[index].rules[index].style.removeProperty("property"); // Remove a CSS property of an element from a stylesheet
// document.styleSheets[index].rules[index].style.setProperty("property", "value"); // Set a CSS property of an element from a stylesheet

// Deal with elements
// .before(); // Insert an element before another element
// .after(); // Insert an element after another element
// .prepend(); // Insert an element as the first child of another element
// .append(); // Insert an element as the last child of another element
// .replaceWith(); // Replace an element with another element
// .remove(); // Remove an element from the DOM

// Dom traversal
// .nextSibling; // Get the next sibling node of an element
// .nextElementSibling; // Get the next sibling element of an element
// .previousSibling; // Get the previous sibling node of an element
// .previousElementSibling; // Get the previous sibling element of an element
// .parentElement; // Get the parent element of an element
// .parentNode; // Get the parent node of an element

// Dom cloning
// .cloneNode(true); // Clone an element and its child nodes
// .cloneNode(false); // Clone an element without its child nodes