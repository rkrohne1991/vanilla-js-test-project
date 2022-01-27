import { dom } from "../../utilities/functions";

import Welcome from "../Welcome/Welcome";
import Articles from "../Articles/Articles";
import Technologies from "../Technologies/Technologies";

import "../../styles/Base.scss";
import styles from "./AppLayout.module.scss";
import template from "./AppLayout.template";

class AppLayout {
  constructor() {
    this.welcomeTemplate = new Welcome();
    this.articlesTemplate = new Articles();
    this.technologiesTemplate = new Technologies();
  }

  start() {
    this.render();
  }

  didRender = () => {
    this.initSelectors();
    this.appendElements();
    this.findNavButtons();
  };

  initSelectors = () => {
    this.welcomeContainer = dom(".section-welcome");
    this.articlesContainer = dom(".section-articles");
    this.technologiesContainer = dom(".section-technologies");
  };

  appendElements = () => {
    this.welcomeContainer.appendChild(this.welcomeTemplate.getEl());
    this.articlesContainer.appendChild(this.articlesTemplate.getEl());
    this.technologiesContainer.appendChild(this.technologiesTemplate.getEl());
  };

  findNavButtons = () => {
    const nav = document.getElementsByTagName("nav");
    const buttons = nav[0].getElementsByTagName("a");

    for (const button of buttons) {
      this.navClickHandler(button);
    }
  };

  navClickHandler = (button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const href = button.getAttribute("href");
      this.scrollToContent(dom(href));
    });
  };

  scrollToContent = (element) => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop,
    });
  };

  render() {
    document.body.insertAdjacentHTML("afterbegin", template(styles));
    this.didRender();
  }
}

export default AppLayout;
