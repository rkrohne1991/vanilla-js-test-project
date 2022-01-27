import { dom } from "../../utilities/functions";

const image = require("../../assets/images/welcome-img.png");

const template = (styles) => {
  const welcomeScreen = `
    <div id="welcome-screen" class="${styles["welcome-container__form"]} screen active">
        <h2>Dzień Dobry</h2>
        <button id="login" class='btn btn-primary'>Zaloguj się</button>
        <div class=${styles["welcome-container__lub"]}>lub</div>
        <button id="register" class='btn btn-secondary'>Zarejestruj</button>
    </div>
  `;

  const loginScreen = `
    <div id="login-screen" class="${styles["welcome-container__form"]} screen" style="display: none;">
      <h2>Login</h2>
    </div>
  `;

  const registerScreen = `
    <div id="register-screen" class="${styles["welcome-container__form"]} screen" style="display: none;">
      <h2>Register</h2>
    </div>
  `;

  setTimeout(() => {
    const loginButton = dom("#login");
    const registerButton = dom("#register");

    // Screens
    const welcomeScreenContainer = dom("#welcome-screen");
    const loginScreenContainer = dom("#login-screen");
    const registerScreenContainer = dom("#register-screen");

    const toggleScreen = (hide, show) => {
      hide.classList.remove("active");
      hide.classList.add("hide");

      setTimeout(() => {
        hide.style.display = "none";
        show.classList.add("active");
        show.style.display = "block";
      }, 500);
    };

    loginButton.addEventListener("click", () => {
      toggleScreen(welcomeScreenContainer, loginScreenContainer);
    });

    registerButton.addEventListener("click", () => {
      toggleScreen(welcomeScreenContainer, registerScreenContainer);
    });
  });

  return `
    <div class=${styles["welcome-container"]}>
      <div class=${styles["welcome-container__image-container"]}>
        <img src="${image}" class=${styles["welcome-container__image"]} alt="Welcome Image" />
      </div>
      <div class=${styles["welcome-container__form-container"]}>
        ${welcomeScreen}
        ${loginScreen}
        ${registerScreen}
      </div>
    </div>
`;
};

export default template;
