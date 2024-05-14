
// question no 01 
// 1
let mainContent = document.getElementById("form-content");
console.log(mainContent);

let childsOfMainContonent = mainContent.children;

for (var i = 0; i < childsOfMainContonent.length; i++) {
    console.log(childsOfMainContonent[i]);
}
// 2
let renderClass = document.getElementsByClassName("render");
console.log(renderClass);

for (var j = 0; j < renderClass.length; j++) {
    document.write(`<div class="card">
    <h4>Printing the InnerHtml of "render" class elements in Browser</h4>
    <span>${renderClass[j].innerHTML}</span>
    </div>`);
}
//  3
let firstName = document.getElementById("first-name");
firstName.value = "Shahzaib"

// 4
let last_name = document.getElementById("last-name");
last_name.value = "Anees";

// 5
let email = document.getElementById("email");
email.value = "shahzaib123@gmail.com"

// Question no 02 

// 1
let formContent = document.getElementById("form-content");
console.log(formContent.nodeType);

// 2
let lastName = document.getElementById("lastName");
console.log(lastName.nodeType);
console.log(lastName.childNodes);

// 3
let lastNameChildNodes = lastName.childNodes;
lastNameChildNodes[0].innerHTML = "Shahzaib";
console.log(lastName);


// 4
let firstChildOfMainContent = mainContent.firstChild;
console.log(firstChildOfMainContent);

let lastChildOfMainContent = mainContent.lastChild;
console.log(lastChildOfMainContent);

// 5
let previousSiblingOfLastName = lastName.previousElementSibling;
console.log("Previous Sibbling of elemnt having id 'lastName' is ", previousSiblingOfLastName );

let nextSiblingOfLastName = lastName.nextElementSibling;
console.log("Next Sibbling of elemnt having id 'lastName' is ", nextSiblingOfLastName );

// 6
console.log("Node Type of Element having id 'email' is " , email.nodeType);
let parentOfEmail = email.parentElement;
let parentNodeOfEmail = parentOfEmail.nodeType;
console.log("Parent Node of Element having Id 'email' is " + parentNodeOfEmail );
