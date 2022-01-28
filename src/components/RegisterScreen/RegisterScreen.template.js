const template = (styles) => {
  const registrationForm = `
  <form id="registerForm" class=${styles["form"]}}>
    <div class="${styles["form__input-group"]}">
      <input class="${styles["form__input"]}" id="login" type="text" placeholder="Login">
      <span class="error-message"></span>
    </div>
    <div class="${styles["form__input-group"]}">
      <input class="${styles["form__input"]}" id="password" type="text" placeholder="Hasło">
      <span class="error-message"></span>
    </div>
    <div class="divider"></div>
    <div class="${styles["form__input-group"]}">
      <input class="${styles["form__input"]}" id="nameSurname" type="text" placeholder="Imię i nazwisko">
      <span class="error-message"></span>
    </div>
    <div class="${styles["form__input-group"]}">
      <input class="${styles["form__input"]}" id="email" type="text" placeholder="Adres e-mail">
      <span class="error-message"></span>
    </div>
    <div class="${styles["form__input-group"]} ${styles["form__input-checkbox"]}">
      <input class="${styles["form__checkbox-field"]}" id="privacy" type="checkbox">
      <label for="privacy">Wyrażam zgodę na lorem ipsum lorem ipsum</label>
    </div>
    <div class="${styles["form__buttons"]}" style="margin-top: 45px">
      <input type="submit" class="btn btn-primary" value="Załóż konto">
      <button id="no-account" type="button" class="btn btn-link">Chce się zalogować</button>
    </div>
  </form>
  `;
  return `
    <h2>Zrejestruj się</h2>
    ${registrationForm}
    `;
};

export default template;
