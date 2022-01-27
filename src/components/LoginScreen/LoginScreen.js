import { dom, toggleScreen } from "../../utilities/functions";

import template from "./LoginScreen.template";
import SuccessScreen from "../Success/Success";

import styles from "./LoginScreen.module.scss";
import welcomeStyles from "../Welcome/Welcome.module.scss";

class LoginFormValidator {
  constructor(form, fields) {
    this.SuccessScreen = new SuccessScreen();
    this.form = form;
    this.fields = fields;
    this.formValid = false;
  }

  initialize = () => {
    this.noAccount();
    this.validateOnEntry();
    this.validateOnSubmit();
  };

  validateOnSubmit = () => {
    let self = this;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
        self.validateFields(input);
      });
      this.setSuccess();
    });
  };

  validateOnEntry = () => {
    let self = this;
    this.fields.forEach((field) => {
      const input = document.querySelector(`#${field}`);

      input.addEventListener("input", (event) => {
        this.formValid = false;
        self.validateFields(input);
      });
    });
  };

  validateFields = (field) => {
    // Check presence of values
    if (field.value.trim() === "") {
      this.setStatus(field, "Pole nie może być puste", "error");
      this.formValid = false;
    } else {
      this.setStatus(field, null, "success");
      this.formValid = true;
    }
  };

  setStatus = (field, message, status) => {
    const errorMessage = field.parentElement.querySelector(".error-message");

    if (status === "success") {
      if (errorMessage) {
        errorMessage.innerText = "";
      }
      field.classList.remove("input-error");
      this.formValid = true;
    }

    if (status === "error") {
      field.parentElement.querySelector(".error-message").innerText = message;
      field.classList.add("input-error");
      this.formValid = false;
    }
  };

  setSuccess = () => {
    if (this.formValid) {
      const successTemplate = this.SuccessScreen.getEl();
      const currentScreen = dom("#login-screen");
      currentScreen.innerHTML = successTemplate.outerHTML;
    }
  };

  noAccount = () => {
    const noAccountButton = dom("#no-account");
    const loginScreenContainer = dom("#login-screen");
    const registerScreenContainer = dom("#register-screen");

    noAccountButton.addEventListener("click", () => {
      toggleScreen(loginScreenContainer, registerScreenContainer);
    });
  };
}

export default class {
  constructor() {
    this.el = document.createElement("div");
    this.el.id = "login-screen";
    this.el.className = welcomeStyles["welcome-container__form"] + " screen";
    this.el.style.display = "none";
  }

  activateForm = () => {
    setTimeout(() => {
      const form = document.querySelector("#loginForm");
      const fields = ["login", "password"];

      const validator = new LoginFormValidator(form, fields);
      validator.initialize();
    });
  };

  getEl = () => {
    this.render();
    this.activateForm();
    return this.el;
  };

  render = () => {
    this.el.innerHTML = template(styles);
  };
}
