// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import domBuilder from './helpers/domBuilder';
import domEvents from './helpers/domEvents';

const init = () => {
  domBuilder();
  domEvents();

  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();
