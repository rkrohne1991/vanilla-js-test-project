import { dom } from "../../utilities/functions";

const template = (styles) => {
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
    <h2>Dzień Dobry</h2>
    <button id="login" class='btn btn-primary'>Zaloguj się</button>
    <div class=${styles["welcome-container__lub"]}>lub</div>
    <button id="register" class='btn btn-secondary'>Zarejestruj</button>
  `;
};

export default template;
