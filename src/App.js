import { UtmManager } from './modules/UtmManager/UtmManager';
import { UtmInjector } from './modules/UtmManager/UtmInjector';
const App = () => {
  const utmData = UtmManager();

  window.addEventListener('load', (e) => {
    UtmManager();
    UtmInjector(utmData);
  });
};
export default App;
