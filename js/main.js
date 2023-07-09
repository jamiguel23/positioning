"use strict";

//https://tinyurl.com/dynamic-html-checker
document
  .getElementById("html-checker")
  .setAttribute("href", "https://validator.w3.org/nu/?doc=" + location.href);

document
  .getElementById("css-checker")
  .setAttribute(
    "href",
    "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href
  );

//set current year in span with id of this-year
let b= new Date();
let thisYear = b.getFullYear();
document.getElementById("this-year").innerHTML = thisYear;

//manages mobile nav
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
