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

  getEl = () => {
    this.render();
    return this.el;
  };

  render() {
    this.el.innerHTML = template(styles);
  }
}
