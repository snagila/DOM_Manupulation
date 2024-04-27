// MANIPULATING HTML ELEMENTS

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

// const elm = document.querySelector("body");
// const textNode = document.createTextNode("Hi this is dynamic content")
// elm.appendChild(textNode);
// console.log(elm);

// const paraElm = document.createElement("p");
// paraElm.innerText = "This is the dynamic text";
// // elm.appendChild(paraElm);
// // const e1 = document.querySelector(".display");
// // elm.insertBefore(paraElm, e1);

// // CHANGING CSS PROPERTIES

// const googleElm = document.querySelector("[href='google.com']");

// googleElm.style.fontSize = "2rem";
// googleElm.style.color = "red";
// googleElm.style.textDecoration = "none";

// CHANGING HTML ATTRIBUTE

// const attbr = googleElm.getAttribute("href");
// console.log(attbr);

// JAVASCRIPT DOM EVENTS
// events

const changeUI = (e) => {
  console.log("you got triggered");
  alert("hehe");
};

const elm = document.querySelector(".display");
elm.addEventListener("click", (e) => {
  console.log("you got triggered");
  alert("hehe");
});
