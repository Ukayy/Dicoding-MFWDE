import DrawerInitiator from '@utils/DrawerUtils';
import routes from '@routes/route';
import UrlParser from '@routes/url-parser';

class App {
  /**
   *
   * @param {Object} param0
   * @param {HTMLElement} param0.button
   * @param {HTMLElement} param0.drawer
   * @param {HTMLElement} param0.content
   */
  constructor({button, drawer, content}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
