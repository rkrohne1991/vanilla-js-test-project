const logo = require("../../assets/images/logo.svg");

const AppLayout = (styles, openMenu) => {
  const navigationButtons = (classContainer, classElement) => {
    return `
      <nav class="${classContainer}">
        <a class="${classElement}" href="#wiadomosci">Wiadomości</a>
        <a class="${classElement}" href="#technologie">Technologie</a>
      </nav>
    `;
  };

  return `
  <header class="${styles.header}">
    <div class="${styles["logo__section"]}">
        <img src="${logo}" id="logo" class="${
    styles["logo__img"]
  }" alt="Front-End" />
        <h1 class="${styles["logo__title"]}">Front-End</h1>
    </div>
    <div class="${styles["nav__section"]}">
        <button class="mobile-nav__toggle mobile-nav__toggle-open">
          <img src="${openMenu}" id="menuOpen" alt="Menu Open" />
        </button>
        ${navigationButtons(styles.nav, styles["nav__element"])}
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

  <div class="mobile-nav">
    ${navigationButtons(
      styles.nav + " mobile-nav__buttons",
      styles["nav__element"] + " mobile-nav__element"
    )}
  </div>
`;
};

export default AppLayout;
