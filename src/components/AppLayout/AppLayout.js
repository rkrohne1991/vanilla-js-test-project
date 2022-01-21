import { dom } from "../../utilities/functions";

import Welcome from "../Welcome/Welcome";

import "../../styles/Base.scss";
import styles from "./AppLayout.module.scss";
import template from "./AppLayout.template";

class AppLayout {
  constructor() {
    this.welcomeTemplate = new Welcome();
  }

  start() {
    this.render();
  }

  didRender = () => {
    this.initSelectors();
    this.appendElements();
  };

  initSelectors = () => {
    this.welcomeContainer = dom(".welcome-section");
  };

  appendElements = () => {
    this.welcomeContainer.appendChild(this.welcomeTemplate.getEl());
  };

  render() {
    document.body.insertAdjacentHTML("afterbegin", template(styles));
    this.didRender();
  }
}

export default AppLayout;
