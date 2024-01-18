import { UtmHandler } from './UtmHandler';

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

  // Inject hidden fields into Marketo form
  if (typeof MktoForms2 != 'undefined') {
    MktoForms2.whenReady(function (form) {
      // form.addHiddenFields({"Results_PDF_URL__c":"assignedCampaignID"});
      for (let key in utmData) {
        if (utmData[key].localStorage) {
          form.addHiddenFields({
            [utmData[key].label]: utmData[key].localStorage,
          });
        }
      }
    });
  }
};
