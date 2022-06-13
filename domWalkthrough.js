// console.dir(document);

// console.log(document.domain); //<--Shows IP Address
// console.log(document.URL);

// console.log(document.title);
// console.log(document.doctype);

// console.log(document.head);

// console.log(document.body);

// console.log(document.all);

// console.log(document.all)[10];

// document.all[10].textContent = 'We just changed the header';

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


///////////////////////////////////////////////////////////////////////////////////////////////////

// accessing the DOM with GETELEMENTBYID

// console.log(document.form);
// console.log(document.links)
// console.log(document.images);

// console.log(document.getElementById('header-title'));

// /// Creation of an object variable using the document function///

// let headerTitle = document.getElementById('header-title');

// headerTitle.textContent = "I'm Changing The Header";

// headerTitle.style.color = "hotpink";


// /////////////////////////////////////////////////////
                    //  GetElementByClassName  //

// var items = document.getElementsByClassName('list-group-item');

// console.log(items);
// console.log(items[1]);

// // styling

// items[1].textContent = "HelloWorld";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'purple';
// items[1].textContent = 'Go Huskies';
// items[1].style.color = 'gold';

// items[0].textContent = "HelloWorld";
// items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = 'blue';
// items[0].textContent = 'Seahawks';
// items[0].style.color = 'green';

// items[2].textContent = "HelloWorld";
// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'aqua';
// items[2].textContent = 'Kraken';
// items[2].style.color = 'blue';

// This is a counter which loops until 10//
// for (let i = 1; i <= 10; i++) {

//     console.log(i);
// }

// counter that goes to 20 and counts by 2//
// for (let i = 0; i <= 20; i +=2) {

//     console.log(i);
// }

// // decrement
// for (let i = 100; i >= 0; i -=2) {

//     console.log(i);
// }

// incrementing the for loop in the header
// for (var i = 0; i < items.length; i++) {

//     items[i].style.backgroundColor = 'grey';
//     items[i].style.textContent = "I Changed The List";
//     items[i].style.color = 'green';
// }

//
// const myDiamonds = ['Snacky', 'Scary','Piggy','Pinchie','Lily','IttyBitty','Nibbles','Lanky','Kibbles'];

// for(let i = 0; i < myDiamonds.length; i++) {

//     console.log(i, myDiamonds[i]);
// }

//// getElementsByTagName ///////

// calling the list element, then using console.log to get the list number that we specify (1)
// var li = document.getElementsByTagName('li');

//     console.log(li);
//     console.log(li[1]);

// we can change the text content, and other styling properties like we can in CSS with backgroundColor, font weight etc.
    // li[1].textContent = "Hello 2";

    // li[1].style.fontWeight = 'bold';
    // li[1].style.backgroundColor = 'crimson';
    // li[1].style.color = 'white';
    
    // for(var i = 0; li.length; i++) {

    //     li[i].style.backgroundColor = 'lightgrey';
    //     li[i].textContent = "Changed Content";

    // }


    ////////////////////////////////////////////////////
    ////////// querySelector ///////////////

    the # says we are indentifying an id, returns the first element 
    
    var header = document.querySelector('#main-header');

    header.style.borderBottom = 'solid 8px hotpink';

    var input = document.querySelector('input');
    input.value  = "Changed the input box text";

    var submit = document.querySelector("input[type='submit']");

    submit.value = "SEND";

    var item = document.querySelector('.list-group-item');
    item.style.color = 'red';

    var lastItem = document.querySelector('.list-group-item: last-child');
    lastItem.style.color = 'coral';

    /////////////////////////////////////////////////////////////////////////////////
    /////////////////// querySelectorAll ///////////////////////////////////////////

    var titles = document.querySelectorAll('.title');
    console.log(titles);
    titles[0].textContent = 'Hello Colton';

    var odd = document.querySelectorAll('li:nth-child(odd)');

    var even = document.querySelectorAll('li:nth-child(even)');

    //

    for (var i = 0; i < odd.length; i++) {

        odd[i].style.background
    }