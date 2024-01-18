import { UtmHandler } from './UtmHandler';
import { UtmInjector } from './UtmInjector';
export const UtmManager = () => {
  // console.log(`\nUTM MANAGER ------------------------->!`);

  // Instantiate URLSearchParams object
  const searchParams = new URLSearchParams(window.location.search);

  // Instantiate utmData object
  const utmData = {};

  // Define utmParameters array
  const utmParameters = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'campaignid',
    'vendorid',
    'device',
    'utm_content',
    'utm_term',
    'utm_matchtype',
  ];

  utmParameters.forEach((parameter) => {
    utmData[parameter] = {
      utm: searchParams.get(parameter),
      localStorage: localStorage.getItem(parameter),
      label: parameter,
    };
  });

  console.log('utmData:', utmData);

  let counter = 0;
  // Run UtmHandler for each utmData object
  for (let key in utmData) {
    counter++;
    if (utmData[key].utm) {
      UtmHandler(
        utmData[key].utm,
        utmData[key].localStorage,
        utmData[key].label
      );
    }

    setTimeout(() => {
      console.log('setTimeout()');
      UtmInjector(utmData);
    }, 1000);
  }
};
