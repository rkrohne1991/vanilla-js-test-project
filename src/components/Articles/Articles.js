import template from "./Articles.template";
import styles from "./Articles.module.scss";

export default class {
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "articles-container";
  }

  getEl = () => {
    this.render();
    return this.el;
  };

  render() {
    this.el.innerHTML = template(styles);
  }
}
