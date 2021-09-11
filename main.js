// TRAVERSING THE DOM //
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// // ParentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.childern[1]);
// itemList.childern[1].style.backgroundColor = 'yellow';

// FIRSTCHILD
// console.log(itemList.firstChild);
//  firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello'

// lastCHILD
// console.log(itemList.lastChild);
// //  firstElementChild
// console.log(itemList.lastElementChild);
//  itemList.lastElementChild.textContent = 'Hello'

// nextSilibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSilibling
// console.log(itemList.previousSibling);
// // // nextElementSibling
// console.log(itemList.previousElementSibling);

//Create new Div
//var newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello';

// //Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'hello div');

// // create text node 
// var newDivText = document.createTextNode('Hello World');

// //Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// container.insertBefore(newDiv, h1);

// var h2 = document.createElement('h1');
// h2.className = "hello";
// h2.setAttribute('title', 'helloh2');
// var h2Text = document.createTextNode('hello');
// h2.appendChild(h2Text);
// var title = document.querySelector('header .container');
// var h1 = document.querySelector('header 1');

// console.log(h2);
// container.insertBefore(h2, h1);