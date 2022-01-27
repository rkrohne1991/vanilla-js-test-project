import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import LoginScreen from "../LoginScreen/LoginScreen";
import RegisterScreen from "../RegisterScreen/RegisterScreen";

import template from "./Welcome.template";
import styles from "./Welcome.module.scss";

export default class {
  constructor() {
    this.WelcomeScreen = new WelcomeScreen();
    this.LoginScreen = new LoginScreen();
    this.RegisterScreen = new RegisterScreen();
    this.el = document.createElement("div");
    this.el.className = "welcome-container";
  }

  getEl = () => {
    this.render();
    return this.el;
  };

  render() {
    this.el.innerHTML = template(
      styles,
      this.WelcomeScreen.getEl(),
      this.LoginScreen.getEl(),
      this.RegisterScreen.getEl()
    );
  }
}
