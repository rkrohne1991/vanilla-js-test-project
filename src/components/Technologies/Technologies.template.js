import { dom, newElement, setAttribute } from "../../utilities/functions";

import webpackLogo from "../../assets/images/webpack-logo.png";
import jsLogo from "../../assets/images/js-logo.png";
import npmLogo from "../../assets/images/npm-logo.png";
import htmlLogo from "../../assets/images/html-logo.png";

const template = (styles) => {
  const technologies = [
    {
      title: "Webpack",
      imgURL: webpackLogo,
      height: "75px",
      website: "https://webpack.js.org/",
    },
    {
      title: "JavaScript",
      imgURL: jsLogo,
      height: "66px",
      website: "https://www.javascript.com/",
    },
    {
      title: "Node package Manager",
      imgURL: npmLogo,
      height: "31px",
      website: "https://www.npmjs.com/",
    },
    {
      title: "HTML",
      imgURL: htmlLogo,
      height: "74px",
      website: "https://html.spec.whatwg.org/",
    },
  ];

  setTimeout(() => {
    const selectContainer = document.getElementById("technologies__list");

    for (const technology of technologies) {
      // Technology
      const createTechnology = newElement("div");
      setAttribute(createTechnology, "class", "technology");

      // Technology Box
      const createTechnologyBox = newElement("a");
      setAttribute(createTechnologyBox, "class", "technology__box");
      setAttribute(createTechnologyBox, "href", technology.website);
      setAttribute(createTechnologyBox, "target", "_blank");

      // Technology Image
      const createTechnologyImageContainer = newElement("div");
      setAttribute(
        createTechnologyImageContainer,
        "class",
        "technology__image-container"
      );

      const createTechnologyImg = newElement("img");
      setAttribute(createTechnologyImg, "src", technology.imgURL);
      setAttribute(
        createTechnologyImg,
        "style",
        "max-height:" + technology.height
      );
      createTechnologyImageContainer.appendChild(createTechnologyImg);

      // Technology Title
      const createTechnologyTitle = newElement("h4");
      setAttribute(createTechnologyTitle, "class", "technology__title");
      createTechnologyTitle.innerHTML = `${technology.title}`;

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
