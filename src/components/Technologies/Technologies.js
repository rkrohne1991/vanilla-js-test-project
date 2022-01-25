import template from "./Technologies.template";
import styles from "./Technologies.module.scss";

export default class {
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "technologies-container";
  }

  getEl = () => {
    this.render();
    return this.el;
  };

  render() {
    this.el.innerHTML = template(styles);
  }
}
