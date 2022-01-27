import { dom } from "../../utilities/functions";

import template from "./Articles.template";
import styles from "./Articles.module.scss";

export default class {
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "articles-container";
  }

  fetchArticles = async () => {
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

  loadMore = () => {
    setTimeout(() => {
      const loadMoreButton = dom("#loadMore");

      loadMoreButton.addEventListener("click", () => {
        const articlesList = dom("#articles__list");
        const hiddenArticles = articlesList.querySelectorAll(
          "div.article-hidden:not(.active)"
        );

        if (hiddenArticles.length === 0) {
          // To do: Add modal information instead of alert
          window.alert("Wszystkie wiadomości są już załadowane");
          loadMoreButton.style.display = "none";
          return;
        }

        const loaderImg = dom(".loader-img");
        loaderImg.animate(
          [
            // keyframes
            { transform: "rotate(0deg)" },
            { transform: "rotate(360deg)" },
          ],
          {
            // timing options
            duration: 1000,
            iterations: 5,
          }
        );

        this.showNext2Element(hiddenArticles);
      });
    });
  };

  showNext2Element = (hiddenArticles) => {
    for (const [key, value] of Object.entries(hiddenArticles)) {
      if (key <= 1) {
        value.style.display = "block";
        value.classList.add("active");
      }
    }
  };

  getEl = () => {
    this.render();
    this.loadMore();
    return this.el;
  };

  render() {
    this.el.innerHTML = template(styles, this.fetchArticles());
  }
}
