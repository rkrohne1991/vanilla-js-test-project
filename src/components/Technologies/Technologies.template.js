import { dom, newElement, setAttribute } from "../../utilities/functions";

import webpackLogo from "../../assets/images/webpack-logo.png";
import jsLogo from "../../assets/images/js-logo.png";
import npmLogo from "../../assets/images/npm-logo.png";
import htmlLogo from "../../assets/images/html-logo.png";

const template = (styles) => {
  const technologiesLogos = [
    { title: "Webpack", imgURL: webpackLogo, height: "75px" },
    { title: "JavaScript", imgURL: jsLogo, height: "66px" },
    { title: "Node package Manager", imgURL: npmLogo, height: "31px" },
    { title: "HTML", imgURL: htmlLogo, height: "74px" },
  ];

  setTimeout(() => {
    const selectContainer = document.getElementById("technologies__list");

    for (const logo of technologiesLogos) {
      // Technology
      const createTechnology = newElement("div");
      setAttribute(createTechnology, "class", "technology");

      // Technology Box
      const createTechnologyBox = newElement("div");
      setAttribute(createTechnologyBox, "class", "technology__box");

      // Technology Image
      const createTechnologyImageContainer = newElement("div");
      setAttribute(
        createTechnologyImageContainer,
        "class",
        "technology__image-container"
      );

      const createTechnologyImg = newElement("img");
      setAttribute(createTechnologyImg, "src", logo.imgURL);
      setAttribute(createTechnologyImg, "style", "max-height:" + logo.height);
      createTechnologyImageContainer.appendChild(createTechnologyImg);

      // Technology Title
      const createTechnologyTitle = newElement("h4");
      setAttribute(createTechnologyTitle, "class", "technology__title");
      createTechnologyTitle.innerHTML = `${logo.title}`;

      createTechnologyBox.append(
        createTechnologyImageContainer,
        createTechnologyTitle
      );
      createTechnology.append(createTechnologyBox);
      selectContainer.append(createTechnology);
    }
  });

  return `<div>
        <div class="${styles["technologies__heading"]}">
            <h2>Nasze Technologie</h2>
        </div>
        <div id="technologies__list" class="${styles["technologies__list"]}"></div>
    </div>`;
};

export default template;
