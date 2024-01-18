export const UtmInjector = (utmData) => {
  // Inject hidden fields into Marketo form with localStorage values
  if (typeof MktoForms2 != 'undefined') {
    MktoForms2.whenReady(function (form) {
      // form.addHiddenFields({"Results_PDF_URL__c":"assignedCampaignID"});
      for (let key in utmData) {
        if (utmData[key].localStorage) {
          console.log('utmData[key].localStorage:', utmData[key].localStorage);
          form.addHiddenFields({
            [utmData[key].label]: utmData[key].localStorage,
          });
        }
      }
    });
  }
};
