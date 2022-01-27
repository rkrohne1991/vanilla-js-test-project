const template = (styles) => {
  const loginForm = `
  <form id="loginForm" class=${styles["form"]}}>
    <div class="${styles["form__input-group"]}">
      <input class="${styles["form__input"]}" id="login" type="text" placeholder="Login">
      <span class="error-message"></span>
    </div>
    <div class="${styles["form__input-group"]}">
      <input class="${styles["form__input"]}" id="password" type="text" placeholder="Hasło">
      <span class="error-message"></span>
    </div>
    <div class="${styles["form__input-group"]} ${styles["form__input-switch"]}">
      <div class="form__switch-container">
        <label class="form__switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
        <span>Zapamiętaj moją sesję</span>
      </div>
    </div>
    <div class="${styles["form__buttons"]}">
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
