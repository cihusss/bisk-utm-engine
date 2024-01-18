import { UtmManager } from './modules/UtmManager/UtmManager';
import { UtmInjector } from './modules/UtmManager/UtmInjector';
const App = () => {
  window.addEventListener('load', (e) => {
    const utmData = UtmManager();
    UtmInjector(utmData);
  });
};
export default App;
