export const UtmInjector = (kkk, ppp) => {
  // Inject hidden fields into Marketo form with localStorage values
  if (typeof MktoForms2 != 'undefined') {
    MktoForms2.whenReady(function (form) {
      // form.addHiddenFields({"Results_PDF_URL__c":"assignedCampaignID"});
      form.addHiddenFields({
        kkk: ppp,
      });
    });
  }
};
