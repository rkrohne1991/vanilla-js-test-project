import { dom, toggleScreen } from "../../utilities/functions";

import template from "./RegisterScreen.template";

import styles from "../LoginScreen/LoginScreen.module.scss";
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
    this.el.innerHTML = template(styles);
  }
}
