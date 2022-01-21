import "../../styles/Base.scss";
import styles from "./AppLayout.module.scss";
import template from "./AppLayout.template";

class AppLayout {
  start() {
    this.render();
  }

  render() {
    document.body.insertAdjacentHTML("afterbegin", template(styles));
  }
}

export default AppLayout;
