import { dom, toggleScreen } from "../../utilities/functions";

const template = (styles) => {
  setTimeout(() => {
    const loginButton = dom("#loginScreen");
    const registerButton = dom("#registerScreen");

    // Screens
    const welcomeScreenContainer = dom("#welcome-screen");
    const loginScreenContainer = dom("#login-screen");
    const registerScreenContainer = dom("#register-screen");

    loginButton.addEventListener("click", () => {
      toggleScreen(welcomeScreenContainer, loginScreenContainer);
    });

    registerButton.addEventListener("click", () => {
      toggleScreen(welcomeScreenContainer, registerScreenContainer);
    });
  });

  return `
    <h2>Dzień Dobry</h2>
    <button id="loginScreen" class="btn btn-primary">Zaloguj się</button>
    <div class=${styles["welcome-container__lub"]}>lub</div>
    <button id="registerScreen" class='btn btn-secondary'>Zarejestruj</button>
  `;
};

export default template;
