import 'regenerator-runtime'; /* for async await transpile */

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


import '../styles/main.css';
import '../styles/responsive.css';

import App from '@views/app';
import swRegister from './sw-register';

const app = new App({
  button: document.getElementById('toggle-nav'),
  drawer: document.getElementById('drawer'),
  content: document.getElementById('main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
