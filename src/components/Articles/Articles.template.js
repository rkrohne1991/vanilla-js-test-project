import {
  dom,
  setAttribute,
  newElement,
  timestampFormat,
} from "../../utilities/functions";

import quotes from "../../assets/images/quotes.svg";
import loader from "../../assets/images/loader.svg";

const template = (styles) => {
  const fetchArticlesJSON = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/TomaszJaworski/test-api/news"
    );

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const articles = await response.json();
    return articles;
  };

  fetchArticlesJSON().then((articles) => {
    const selectContainer = dom("#articles__list");

    for (const article of articles) {
      // Article
      const createArticle = newElement("div");
      setAttribute(createArticle, "class", "article");

      // Article Container
      const createArticleContainer = newElement("div");
      setAttribute(createArticleContainer, "class", "article__container");

      // Article Title
      const createArticleTitle = newElement("div");
      setAttribute(createArticleTitle, "class", "article__title");

      const createArticleQuotes = newElement("img");
      setAttribute(createArticleQuotes, "src", quotes);

      const createArticleHeader = newElement("h3");
      createArticleHeader.innerHTML = `${article.title}`;

      createArticleTitle.append(createArticleQuotes, createArticleHeader);

      // Article Date
      const createArticleDate = newElement("div");
      setAttribute(createArticleDate, "class", "article__date");
      createArticleDate.innerHTML = `Data dodania: ${timestampFormat(
        article.date,
        "date"
      )} ${timestampFormat(article.date, "time")}`;

      // Article Image
      const createArticleImageContainer = newElement("div");
      setAttribute(
        createArticleImageContainer,
        "class",
        "article__image-container"
      );

      const createArticleImg = newElement("img");
      setAttribute(createArticleImg, "src", article.image);
      createArticleImageContainer.appendChild(createArticleImg);

      //Article Text
      const createArticleText = newElement("div");
      setAttribute(createArticleText, "class", "article__text");
      createArticleText.innerHTML = `${article.text}`;

      createArticleContainer.append(
        createArticleTitle,
        createArticleDate,
        createArticleImageContainer,
        createArticleText
      );

      createArticle.appendChild(createArticleContainer);
      selectContainer.appendChild(createArticle);
    }
  });

  return `<div>
      <div class="${styles["articles__heading"]}">
        <h2>Wiadomości</h2></div>
      </div>
      <div id="articles__list" class="${styles["articles__list"]}"></div>
      <div class="${styles["articles__load-more"]}">
        <button class="btn btn-link">Załaduj więcej <img src="${loader}" alt="" /></button>
      </div>
    </div>
  `;
};

export default template;
