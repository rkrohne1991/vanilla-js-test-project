import {
  dom,
  setAttribute,
  newElement,
  timestampFormat,
} from "../../utilities/functions";

import quotes from "../../assets/images/quotes.svg";
import loader from "../../assets/images/loader.svg";

const template = (styles, fetch) => {
  const errorMessage = () => {
    dom("#loadMore").style.display = "none";
    const selectContainer = dom("#articles__list");
    selectContainer.style.display = "block";
    selectContainer.style.margin = "0";

    // Article Error
    const createArticle = newElement("div");
    setAttribute(createArticle, "class", "article__error");

    // Article Error Title
    const createErrorTitle = newElement("h2");
    setAttribute(createErrorTitle, "class", "article__title-error");
    createErrorTitle.innerHTML =
      "Ups... coś poszło nie tak, spróbuj ponownie później...";
    createArticle.append(createErrorTitle);
    selectContainer.append(createArticle);
  };

  fetch
    .then((articles) => {
      const selectContainer = dom("#articles__list");

      if (articles.length === 0) {
        errorMessage();
      }

      for (const [key, value] of Object.entries(articles)) {
        const hiddenArticle = key > 4 ? "article-hidden" : "";

        // Article
        const createArticle = newElement("div");
        setAttribute(createArticle, "class", "article " + hiddenArticle);

        // Article Container
        const createArticleContainer = newElement("div");
        setAttribute(createArticleContainer, "class", "article__container");

        // Article Title
        const createArticleTitle = newElement("div");
        setAttribute(createArticleTitle, "class", "article__title");

        const createArticleQuotes = newElement("img");
        setAttribute(createArticleQuotes, "src", quotes);

        const createArticleHeader = newElement("h3");
        createArticleHeader.innerHTML = `${value.title}`;

        createArticleTitle.append(createArticleQuotes, createArticleHeader);

        // Article Date
        const createArticleDate = newElement("div");
        setAttribute(createArticleDate, "class", "article__date");
        createArticleDate.innerHTML = `Data dodania: ${timestampFormat(
          value.date,
          "date"
        )} ${timestampFormat(value.date, "time")}`;

        // Article Image
        const createArticleImageContainer = newElement("div");
        setAttribute(
          createArticleImageContainer,
          "class",
          "article__image-container"
        );

        const createArticleImg = newElement("img");
        setAttribute(createArticleImg, "src", value.image);
        createArticleImageContainer.appendChild(createArticleImg);

        //Article Text
        const createArticleText = newElement("div");
        setAttribute(createArticleText, "class", "article__text");
        createArticleText.innerHTML = `${value.text}`;

        createArticleContainer.append(
          createArticleTitle,
          createArticleDate,
          createArticleImageContainer,
          createArticleText
        );

        createArticle.appendChild(createArticleContainer);
        selectContainer.appendChild(createArticle);
      }
    })
    .catch(() => {
      errorMessage();
    });

  return `<div>
      <div class="${styles["articles__heading"]}">
        <h2>Wiadomości</h2>
      </div>
      <div id="articles__list" class="${styles["articles__list"]}"></div>
      <div class="${styles["articles__load-more"]}">
        <button id="loadMore" class="btn btn-link" type="button">Załaduj więcej <img class="loader-img" src="${loader}" alt="Load More" /></button>
      </div>
    </div>
  `;
};

export default template;
