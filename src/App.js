import { UtmManager } from './modules/UtmManager/UtmManager';
const App = () => {
  window.addEventListener('load', (e) => {
    UtmManager();
  });
};
export default App;
