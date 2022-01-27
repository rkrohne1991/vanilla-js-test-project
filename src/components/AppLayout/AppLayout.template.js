const logo = require("../../assets/images/logo.svg");

const AppLayout = (styles) => `
  <header class="${styles.header}">
    <div class="${styles["logo__section"]}">
        <img src="${logo}" id="logo" class="${styles["logo__img"]}" alt="Front-End K2">
        <h1 class="${styles["logo__title"]}">Front-End</h1>
    </div>
    <div class="${styles["nav__section"]}">
        <nav class="${styles.nav}">
            <a class="${styles["nav__element"]}" href="#wiadomosci">Wiadomości</a>
            <a class="${styles["nav__element"]}" href="#technologie">Technologie</a>
        </nav>
    </div>
  </header>

  <main class="${styles.main}">
    <section class="section-welcome"></section>
    <section id="wiadomosci" class="section-articles"></section>
    <section id="technologie" class="section-technologies"></section>
  </main>

  <footer class="${styles.footer}">
    <div>K2</div>
  </footer>
`;

export default AppLayout;
