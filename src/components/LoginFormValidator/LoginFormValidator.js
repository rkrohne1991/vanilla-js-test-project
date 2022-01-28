import { dom } from "../../utilities/functions";

import SuccessScreen from "../Success/Success";

class LoginFormValidator {
  constructor(form, fields) {
    this.SuccessScreen = new SuccessScreen();
    this.form = form;
    this.fields = fields;
    this.formValid = false;
  }

  initialize = () => {
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
}

export default LoginFormValidator;
