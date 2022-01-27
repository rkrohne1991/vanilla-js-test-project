const image = require("../../assets/images/welcome-img.png");

const template = (styles, welcomeTemplate, loginTemplate, registerTemplate) => {
  return `
    <div class=${styles["welcome-container"]}>
      <div class=${styles["welcome-container__image-container"]}>
        <img src="${image}" class=${styles["welcome-container__image"]} alt="Welcome Image" />
      </div>
      <div class=${styles["welcome-container__form-container"]}>
        ${welcomeTemplate.outerHTML}
        ${loginTemplate.outerHTML}
        ${registerTemplate.outerHTML}
      </div>
    </div>
`;
};

export default template;
