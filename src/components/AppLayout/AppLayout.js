import { dom } from "../../utilities/functions";

import Welcome from "../Welcome/Welcome";
import Articles from "../Articles/Articles";
import Technologies from "../Technologies/Technologies";

import "../../styles/Base.scss";
import styles from "./AppLayout.module.scss";
import template from "./AppLayout.template";

const openMenu = require("../../assets/images/menu-hamburger-icon.svg");
const closeMenu = require("../../assets/images/menu-close-icon.svg");

class AppLayout {
  constructor() {
    this.welcomeTemplate = new Welcome();
    this.articlesTemplate = new Articles();
    this.technologiesTemplate = new Technologies();
    this.mobileNavActive = false;
  }

  start() {
    this.render();
  }

  didRender = () => {
    this.initSelectors();
    this.appendElements();
    this.findNavButtons();
    this.mobileNav();
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
    const desktopNav = document.getElementsByTagName("nav");
    const desktopButtons = desktopNav[0].getElementsByTagName("a");

    const mobileNav = dom(".mobile-nav");
    const mobileButtons = mobileNav.getElementsByTagName("a");

    for (const button of desktopButtons) {
      this.navClickHandler(button);
    }

    for (const button of mobileButtons) {
      this.navClickHandler(button);
    }
  };

  navClickHandler = (button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const mainParent = event.target.parentElement.parentElement;

      if (mainParent.classList.contains("mobile-nav")) {
        this.mobileNavActive = false;
        this.isMobileNavActive(false);
      }

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

  mobileNav = () => {
    const openNav = dom(".mobile-nav__toggle-open");
    openNav.addEventListener("click", (event) => {
      this.mobileNavActive = !this.mobileNavActive;

      const currentButton = event.target;
      currentButton.setAttribute(
        "src",
        this.mobileNavActive ? closeMenu : openMenu
      );
      this.isMobileNavActive(this.mobileNavActive);
    });
  };

  isMobileNavActive = (isActive) => {
    const mobileNav = dom(".mobile-nav");
    const body = dom("body");

    if (isActive) {
      mobileNav.classList.add("mobile-nav-active");
      body.classList.add("mobile-nav-active");
    } else {
      mobileNav.classList.remove("mobile-nav-active");
      body.classList.remove("mobile-nav-active");
    }
  };

  render() {
    document.body.insertAdjacentHTML("afterbegin", template(styles, openMenu));
    this.didRender();
  }
}

export default AppLayout;
