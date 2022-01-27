import template from "./Success.template";

export default class {
  constructor() {
    this.el = document.createElement("div");
  }

  getEl = () => {
    this.render();
    return this.el;
  };

  render() {
    this.el.innerHTML = template();
  }
}
