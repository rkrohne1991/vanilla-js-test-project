import template from "./WelcomeScreen.template";
import welcomeStyles from "../Welcome/Welcome.module.scss";

export default class {
  constructor() {
    this.el = document.createElement("div");
    this.el.id = "welcome-screen";
    this.el.className =
      welcomeStyles["welcome-container__form"] + " screen active";
  }

  getEl = () => {
    this.render();
    return this.el;
  };

  render() {
    this.el.innerHTML = template(welcomeStyles);
  }
}
