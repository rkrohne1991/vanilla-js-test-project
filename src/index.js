// if (process.env.NODE_ENV !== "production") {
//   console.log("Looks like we are in development mode!");
// }

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
