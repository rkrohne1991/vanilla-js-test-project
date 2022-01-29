const template = () => {
  const registrationForm = `
  <form id="registerForm" class="form">
    <div class="form__input-group">
      <label class="form__field__label" for="newLogin">Login</label>
      <input class="form__field" id="newLogin" type="text" placeholder="Login">
      <span class="form__error-message"></span>
    </div>
    <div class="form__input-group">
      <label class="form__field__label" for="newPassword">Hasło</label>
      <input class="form__field" id="newPassword" type="password" placeholder="Hasło">
      <span class="form__error-message"></span>
    </div>
    <div class="divider"></div>
    <div class="form__input-group">
      <label class="form__field__label" for="name">Imię i nazwisko</label>
      <input class="form__field" id="name" type="text" placeholder="Imię i nazwisko">
      <span class="form__error-message"></span>
    </div>
    <div class="form__input-group">
      <label class="form__field__label" for="email">Adres e-mail</label>
      <input class="form__field" id="email" type="email" placeholder="Adres e-mail">
      <span class="form__error-message"></span>
    </div>
    <div class="form__input-group">
      <div class="form__privacy">
        <label class="form__checkbox-container">
          <input class="form__checkbox" id="privacy" type="checkbox">
          <span class="form__checkbox-background"></span>
          <span class="form__error-message form__privacy-message"></span>
        </label>
        <label class="form__label" for="privacy">Wyrażam zgodę na lorem ipsum lorem ipsum</label>
      </div>
    </div>
    <div class="form__buttons" style="margin-top: 30px">
      <input type="submit" class="btn btn-primary" value="Załóż konto">
      <button id="log-me-in" type="button" class="btn btn-link">Chce się zalogować</button>
    </div>
  </form>
  `;
  return `
    <h2>Zrejestruj się</h2>
    ${registrationForm}
    `;
};

export default template;
