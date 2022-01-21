// import _ from "lodash";
// import printMe from "./print.js";

// import "./scss/styles.scss";
// import Icon from "./icon.png";

// if (process.env.NODE_ENV !== "production") {
//   console.log("Looks like we are in development mode!");
// }

// function component() {
//   const element = document.createElement("div");
//   const btn = document.createElement("button");

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   element.classList.add("hello");

//   // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);

//   btn.innerHTML = "Click me and check the console!";
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());
import "core-js/stable";
import "regenerator-runtime/runtime";

import App from "./app";
import AppLayout from "./components/AppLayout/AppLayout";

const app = new App({});
const appLayout = new AppLayout();

window.onload = async () => {
  await app.start();
  appLayout.start();
};
