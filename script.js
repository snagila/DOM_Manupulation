// const elm = document.getElementById("first");
// const elm = document.getElementsByClassName("first");
// const elm = document.getElementsByTagName("div");
// const elm = document.querySelector(".first");
// const elm = document.querySelectorAll(".first");

// const elm = document.querySelector(".info");
// // const value = elm.innerText;
// const value = elm.innerHTML;
// console.log(value);

// document.write("hey just adding more content");

// const elm = document.querySelector(".message");
// const val = elm.innerText;
// elm.innerText = "Hey jsut got text updated";
// console.log(val);

const elm = document.querySelector("body");
// const textNode = document.createTextNode("Hi this is dynamic content")
// elm.appendChild(textNode);
// console.log(elm);

const paraElm = document.createElement("p");
paraElm.innerText = "This is the dynamic text";
// elm.appendChild(paraElm);
const e1 = document.querySelector(".display");
elm.insertBefore(paraElm, e1);
