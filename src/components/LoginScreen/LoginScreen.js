import { dom, toggleScreen } from "../../utilities/functions";

import template from "./LoginScreen.template";
import LoginFormValidator from "../LoginFormValidator/LoginFormValidator";

import styles from "./LoginScreen.module.scss";
import welcomeStyles from "../Welcome/Welcome.module.scss";

export default class {
  constructor() {
    this.el = document.createElement("div");
    this.el.id = "login-screen";
    this.el.className = welcomeStyles["welcome-container__form"] + " screen";
    this.el.style.display = "none";
  }

  activateForm = () => {
    setTimeout(() => {
      const form = document.querySelector("#loginForm");
      const fields = ["login", "password"];

      const validator = new LoginFormValidator(form, fields);
      validator.initialize();
      this.noAccount();
    });
  };

  noAccount = () => {
    const noAccountButton = dom("#no-account");
    const loginScreenContainer = dom("#login-screen");
    const registerScreenContainer = dom("#register-screen");

    noAccountButton.addEventListener("click", () => {
      toggleScreen(loginScreenContainer, registerScreenContainer);
    });
  };

  getEl = () => {
    this.render();
    this.activateForm();
    return this.el;
  };

  render = () => {
    this.el.innerHTML = template(styles);
  };
}
