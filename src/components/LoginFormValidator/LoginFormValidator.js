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
        const fieldLabel = event.target.parentElement.querySelector(
          ".form__field__label"
        );
        fieldLabel.style.display = "block";
        this.formValid = false;
        self.validateFields(input);
      });

      input.addEventListener("focus", (event) => {
        const fieldLabel = event.target.parentElement.querySelector(
          ".form__field__label"
        );
        fieldLabel.style.display = "block";
      });
    });
  };

  validateFields = (field) => {
    // Check presence of values
    if (field.value.trim() === "") {
      this.setStatus(field, "komunikat walidacji lorem", "error");
      this.formValid = false;
    } else {
      this.setStatus(field, null, "success");
      this.formValid = true;
    }
  };

  setStatus = (field, message, status) => {
    const errorMessage = field.parentElement.querySelector(
      ".form__error-message"
    );
    const fieldLabel = field.parentElement.querySelector(".form__field__label");

    if (status === "success") {
      if (errorMessage) {
        errorMessage.innerText = "";
      }
      field.classList.remove("form__field-error");
      this.formValid = true;
      fieldLabel.style.display = "none";
    }

    if (status === "error") {
      field.parentElement.querySelector(".form__error-message").innerText =
        message;
      field.classList.add("form__field-error");
      this.formValid = false;
      fieldLabel.style.display = "block";
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
