import { UtmManager } from './modules/UtmManager/UtmManager';
import { UtmInjector } from './modules/UtmManager/UtmInjector';
const App = () => {
  const utmData = {};

  window.addEventListener('load', (e) => {
    UtmManager(utmData);
    UtmInjector(utmData);
  });
};
export default App;
