import SuccessScreen from "../Success/Success";

class FormValidator {
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
        const fieldLabel =
          event.target.parentElement.querySelector(".form__field__label") ||
          false;
        if (fieldLabel) {
          fieldLabel.style.display = "block";
        }
        this.formValid = false;
        self.validateFields(input);
      });

      input.addEventListener("focus", (event) => {
        const fieldLabel =
          event.target.parentElement.querySelector(".form__field__label") ||
          false;
        if (fieldLabel) {
          fieldLabel.style.display = "block";
        }
        this.formValid = false;
        self.validateFields(input);
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

    // check for a valid email address
    if (field.type === "email") {
      const re = /\S+@\S+\.\S+/;
      if (re.test(field.value)) {
        this.setStatus(field, null, "success");
      } else {
        this.setStatus(field, "komunikat walidacji lorem", "error");
      }
    }

    // check for a valid checkbox privacy
    // if (field.id === "privacy" && field.checked === false) {
    //   // this.setStatus(field, "komunikat walidacji lorem", "error");
    //   this.formValid = false;
    // } else {
    //   // this.setStatus(field, null, "success");
    //   this.formValid = true;
    // }
  };

  setStatus = (field, message, status) => {
    const errorMessage = field.parentElement.querySelector(
      ".form__error-message"
    );
    const fieldLabel =
      field.parentElement.querySelector(".form__field__label") || false;

    if (status === "success") {
      errorMessage.innerText = "";
      errorMessage.style.display = "none";
      field.classList.remove("form__field-error");
      this.formValid = true;
      if (fieldLabel) {
        fieldLabel.style.display = "none";
      }
    }

    if (status === "error") {
      errorMessage.innerText = message;
      errorMessage.style.display = "block";
      field.classList.add("form__field-error");
      this.formValid = false;
      if (fieldLabel) {
        fieldLabel.style.display = "block";
      }
    }
  };

  setSuccess = () => {
    if (this.formValid) {
      const successTemplate = this.SuccessScreen.getEl();
      this.form.parentElement.innerHTML = successTemplate.outerHTML;
    }
  };
}

export default FormValidator;
