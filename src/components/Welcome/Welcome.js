import template from "./Welcome.template";
import styles from "./Welcome.module.scss";

export default class {
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "welcome-container";
  }

  getEl = () => {
    this.render();
    return this.el;
  };

  render() {
    this.el.innerHTML = template(styles);
  }
}
