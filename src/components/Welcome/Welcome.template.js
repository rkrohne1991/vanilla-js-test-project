const image = require("../../assets/images/welcome-img.png");

const template = (styles) => {
  return `
    <div class=${styles["welcome-container"]}>
      <div class=${styles["welcome-container__image-container"]}>
        <img src="${image}" class=${styles["welcome-container__image"]} alt="Welcome Image" />
      </div>
      <div class=${styles["welcome-container__login-container"]}>
        <div class=${styles["welcome-container__login"]}>
          <h2>Dzień Dobry</h2>
          <button class='btn btn-primary'>Zaloguj się</button>
          <div class=${styles["welcome-container__lub"]}>lub</div>
          <button class='btn btn-secondary'>Zarejestruj</button>
        </div>
      </div>
    </div>
`;
};

export default template;
