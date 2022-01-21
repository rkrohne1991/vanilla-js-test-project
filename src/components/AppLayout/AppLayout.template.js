const logo = require("../../assets/images/logo.svg");

export default (styles) =>
  `
  <header class="${styles.header}">
    <div>
        <img src="${logo}" id="logo" class="${styles.logo}" alt="Front-End K2">
        <h1>Front-End</h1>
    </div>
    <div>
        <nav>
            <a href="#">Wiadomości</a>
            <a href="#">Technologie</a>
        </nav>
    </div>
  </header>

  <main class="${styles.main}">
    Main Section
  </main>

  <footer class="${styles.footer}">
    <div>K2</div>
  </footer>
`;
