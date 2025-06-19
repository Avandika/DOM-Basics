// Get the <h1> element
const headingElement = document.querySelector("h1");
if (headingElement !== null) {
    console.log("nodeType: ", headingElement.nodeType);
    console.log("nodeName: ", headingElement.nodeName);
    console.log("nodeValue: ", headingElement.nodeValue);
}

// Get the text node inside the <p> element  
const paragraphElement = document.querySelector("p");
const textNode = paragraphElement.firstChild;
if (textNode !== null) {
    console.log("nodeType:", textNode.nodeType);
    console.log("nodeName:", textNode.nodeName);
    console.log("nodeValue:", textNode.nodeValue);
}

// Getthe <ul> element
const listElement = document.getElementById("purchases");
if (listElement !== null) {
    console.log("nodeType:", listElement.nodeType);
    console.log("nnodeName:", listElement.nodeName);
    console.log("nodeValue:", listElement.nodeValue);
}

// Accessing parent, children, and siblings nodes

// Get the parent element with ID "parent"
const parentElement = document.getElementById("parent");
console.log("Parent Element:", parentElement);

// Get the parent node of the <div> element
console.log("Parent Node: ", parentElement.parentNode);

// Get the imediate child elements of the present element
const listParentElement = document.getElementById("parent");
const children = listParentElement.children;
console.log("Child Elements: ", children);

//Get the First child node of parent element
const firstChild = parentElement.firstChild;
console.log("First Child: ", firstChild);

// Get the last child node of the parent element
const lastChild = parentElement.lastChild;
console.log("Last Child: ", lastChild);

// Get the previous sibling of the <ul> element
const ulElement = document.getElementById("purchases");
const previousSibling = ulElement.previousSibling;
console.log("Previous Sibling of <ul>: ", previousSibling);

// Get the next sibling of the <ul> element
const nextSibling = ulElement.nextSibling;
console.log("Next Sibling of <ul>: ", nextSibling);

