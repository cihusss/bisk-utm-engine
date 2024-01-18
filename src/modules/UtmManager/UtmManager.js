import { UtmHandler } from './UtmHandler';

export const UtmManager = () => {
  // console.log(`\nUTM MANAGER ------------------------->!`);

  // Instantiate URLSearchParams object
  const searchParams = new URLSearchParams(window.location.search);
  // Instantiate utmData object
  const utmData = {};
  // Define utmParameters array
  const utmParameters = ['utm_medium', 'utm_campaign', 'utm_source'];

  utmParameters.forEach((parameter) => {
    utmData[parameter] = {
      utm: searchParams.get(parameter),
      localStorage: localStorage.getItem(parameter),
      label: parameter,
    };
  });

  // Run UtmHandler for each utmData object
  for (let key in utmData) {
    if (utmData[key].utm) {
      UtmHandler(
        utmData[key].utm,
        utmData[key].localStorage,
        utmData[key].label
      );
    }
  }
};
