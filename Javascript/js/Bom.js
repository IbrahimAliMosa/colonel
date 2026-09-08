// BOM Browser Object Model
alert("Hello, World!");
window.alert("Hello, World!");
this.alert("Hello, World!");

// sweetalert2 for more beautiful alerts

confirm("Are you sure?");

prompt("Please enter your name:", "Harry Potter");

// setTimeout(function, milliseconds,arguments);
setTimeout(function () {
    alert("This alert is shown after 3 seconds");
}, 3000);

let timeoutId = setTimeout(function () {
    alert("This alert is shown after 3 seconds");
}, 3000);

clearTimeout(timeoutId);

// setInterval(function, milliseconds,arguments);
let intervalId = setInterval(function () {
    alert("This alert is shown every 3 seconds");
}, 3000);

clearInterval(intervalId);

// location object
window.location; // returns the Location object
location.href; // returns the href (URL) of the current page
location.hostname; // returns the hostname of the current page
location.host; // returns the hostname and port of the current page
location.pathname; // returns the path and filename of the current page
location.protocol;  // returns the web protocol used (http: or https:)
location.assign("https://www.example.com");  // navigates to the specified URL
location.reload();  // reloads the current page
location.replace("https://www.example.com");  // replaces the current page with the specified URL
location.hash; // returns the anchor part of a URL, including the hash (#)


// history object
window.history; // returns the History object
history.back();  // moves back in the history
history.forward();  // moves forward in the history
history.go(delta);  // moves delta steps in the history
history.length;  // returns the number of entries in the history
history.state;  // returns the state object of the current history entry
history.pushState(state, title, url);  // adds a new entry to the history
history.replaceState(state, title, url);  // modifies the current history entry

// Window Open And Close
window.open("https://www.example.com", "_blank", "width=800,height=600");  // opens a new window
window.close();  // closes the current window

//
window.print();  // opens the print dialog to print the current page
window.stop();  // stops the current page from loading
window.focus();  // brings the current window to the front
window.scrollTo(x, y);  // scrolls the window to the specified coordinates
window.scrollBy(x, y);  // scrolls the window by the specified amount
window.scroll(x, y);  // scrolls the window to the specified coordinates

// scroll to top
window.scrollY;
window.pageYOffset;

// scroll to left
window.scrollX;
window.pageXOffset;

// localStorage
// set
window.localStorage.setItem("key", "value"); // stores a value in localStorage
window.localStorage.key = "value"; // stores a value in localStorage
window.localStorage["key"] = "value"; // stores a value in localStorage

// get
window.localStorage.getItem("key"); // retrieves a value from localStorage
window.localStorage.key; // retrieves a value from localStorage
window.localStorage["key"]; // retrieves a value from localStorage

// remove
window.localStorage.removeItem("key"); // removes a value from localStorage

// get key
window.localStorage.key(index);

// clear
window.localStorage.clear(); // removes all values from localStorage

/*
    no expiration time
    private tab
    http diferr form https
*/


// session storage
// set
window.sessionStorage.setItem("key", "value"); // stores a value in localStorage
window.sessionStorage.key = "value"; // stores a value in localStorage
window.sessionStorage["key"] = "value"; // stores a value in localStorage

// get
window.sessionStorage.getItem("key"); // retrieves a value from localStorage
window.sessionStorage.key; // retrieves a value from localStorage
window.sessionStorage["key"]; // retrieves a value from localStorage

// remove
window.sessionStorage.removeItem("key"); // removes a value from localStorage

// get key
window.sessionStorage.key(index);

// clear
window.sessionStorage.clear(); // removes all values from localStorage