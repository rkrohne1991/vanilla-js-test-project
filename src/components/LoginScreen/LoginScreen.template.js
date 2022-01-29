import { togglePassword } from "../../utilities/functions";

import showPasswordIcon from "../../assets/images/show-password-icon.svg";

const template = () => {
  togglePassword();

  const loginForm = `
  <form id="loginForm" class="form">
    <div class="form__input-group">
      <label class="form__field__label" for="login">Login</label>
      <input class="form__field" id="login" type="text" placeholder="Login">
      <span class="form__error-message"></span>
    </div>
    <div class="form__input-group">
      <label class="form__field__label" for="password">Hasło</label>
      <input class="form__field" id="password" type="password" placeholder="Hasło">
      <button type="button" id="togglePassword" class="form__toggle-password">
        <img src="${showPasswordIcon}" alt="Toggle Password" />
      </button>
      <span class="form__error-message"></span>
    </div>
    <div class="form__input-group form__input-switch">
      <div class="form__switch-container">
        <label class="form__switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
        <span>Zapamiętaj moją sesję</span>
      </div>
    </div>
    <div class="form__buttons">
      <input type="submit" class="btn btn-primary" value="Dalej">
      <button id="no-account" type="button" class="btn btn-link">Nie mam konta</button>
    </div>
  </form>
  `;

  return `
    <h2>Zaloguj się</h2>
    ${loginForm}
    `;
};

export default template;
