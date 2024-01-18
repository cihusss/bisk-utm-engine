export const UtmInjector = (kkk, ppp) => {
  console.log('running UTM injector...');
  // Inject hidden fields into Marketo form with localStorage values
  if (typeof MktoForms2 != 'undefined') {
    MktoForms2.whenReady(function (form) {
      // form.addHiddenFields({"Results_PDF_URL__c":"assignedCampaignID"});
      console.log('injecting hidden fields...');
      form.addHiddenFields({
        kkk: ppp,
      });
    });
  }
};
