/**
 * Created by swathi on 6/4/17.
 */
var taxplan = function(){
    //createTaxPlan
    this.addButton = element(by.buttonText('ADD'));
    this.addTaxPlan = element(by.css('.btn.btn-primary.pull-right.m-b-10'));
    this.saveButton = element(by.buttonText('Save'));
    this.taxPlanOption = element(by.linkText('Tax Plans'));
    this.addTaxPlan = element(by.css('.btn.btn-primary.no-p-t.no-p-b.dropdown-toggle'));
    this.taxPlamForRoonOption = element(by.linkText('Tax Plan for Rooms'));
    this.addTaxButton = element(by.css('button[ng-click="showAddSurchargeModal(surchargePlan, surcharges)"]'));
    this.selectedTax = element.all(by.css('tr[ng-repeat="surcharge in surcharges | filter : !!selected track by surcharge.id"]')).get(0);
    this.add = element(by.css('button[ng-click="validateAndAddDate()"]'));
    this.endDate = element(by.css('input[ng-model="surchargePlanDateRange.dateTo._d"]'));
    this.addButton = element(by.buttonText('ADD'));
    this.fromPriceRange = element(by.css('input[ng-model="surchargePlan.valueFrom"]'));
    this.aboveCheckBox = element(by.model('surchargePlan.isUndefinedPrice'));
}
module.exports = taxplan;