export const InjectUTM = (key, value) => {
  // Inject hidden fields into Marketo form with localStorage values
  if (typeof MktoForms2 != 'undefined') {
    // MktoForms2.whenReady(function (form) {
    // form.addHiddenFields({"Results_PDF_URL__c":"assignedCampaignID"});
    console.log('injecting hidden fields to form:', key, value);
    form.addHiddenFields({
      [key]: value,
    });
    // for (let key in utmData) {
    //   if (utmData[key].localStorage) {
    //     console.log('utmData[key].localStorage:', utmData[key].localStorage);
    //     form.addHiddenFields({
    //       [utmData[key].label]: utmData[key].localStorage,
    //     });
    //   }
    // }
    // });
  }
};
