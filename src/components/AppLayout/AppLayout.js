import { dom } from "../../utilities/functions";

import Welcome from "../Welcome/Welcome";
import Articles from "../Articles/Articles";

import "../../styles/Base.scss";
import styles from "./AppLayout.module.scss";
import template from "./AppLayout.template";

class AppLayout {
  constructor() {
    this.welcomeTemplate = new Welcome();
    this.articlesTemplate = new Articles();
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
    this.articlesContainer = dom(".articles-section");
  };

  appendElements = () => {
    this.welcomeContainer.appendChild(this.welcomeTemplate.getEl());
    this.articlesContainer.appendChild(this.articlesTemplate.getEl());
  };

  render() {
    document.body.insertAdjacentHTML("afterbegin", template(styles));
    this.didRender();
  }
}

export default AppLayout;
