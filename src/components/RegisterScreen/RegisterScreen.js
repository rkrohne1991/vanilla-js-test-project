import { dom, toggleScreen } from "../../utilities/functions";

import template from "./RegisterScreen.template";
import FormValidator from "../FormValidator/FormValidator";

import welcomeStyles from "../Welcome/Welcome.module.scss";

export default class {
  constructor() {
    this.el = document.createElement("div");
    this.el.id = "register-screen";
    this.el.className = welcomeStyles["welcome-container__form"] + " screen";
    this.el.style.display = "none";
  }

  activateForm = () => {
    setTimeout(() => {
      const form = document.querySelector("#registerForm");
      // const fields = ["newLogin", "newPassword", "name", "email", "privacy"];
      const fields = ["newLogin", "newPassword", "name", "email"];

      const validator = new FormValidator(form, fields);
      validator.initialize();
      this.logMeIn();
    });
  };

  logMeIn = () => {
    const logMeInButton = dom("#log-me-in");
    const loginScreenContainer = dom("#login-screen");
    const registerScreenContainer = dom("#register-screen");
    logMeInButton.addEventListener("click", () => {
      toggleScreen(registerScreenContainer, loginScreenContainer);
    });
  };

  getEl = () => {
    this.render();
    this.activateForm();
    return this.el;
  };

  render() {
    this.el.innerHTML = template();
  }
}
