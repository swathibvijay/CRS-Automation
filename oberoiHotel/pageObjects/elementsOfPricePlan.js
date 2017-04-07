/**
 * Created by swathi on 6/4/17.
 */
var priceplan = function(){
    this.addButton = element(by.buttonText('ADD'));
    this.priceOption = element(by.css('a[ui-sref="app.chains.properties.property.prices"]'));
    this.roomTypeToSet = element(by.model('$parent.currentRoomType'));
    this.mealPlanToSet = element(by.model('$parent.currentMealPlan'));
    this.setPriceButton = element(by.css('button[ng-click="setPriceFor(currentRoomType, currentMealPlan)"]'));
    this.priceToDate = element(by.css('input[ng-model="endDate._d"]'));
    this.thursdayButton = element(by.buttonText('Thu'));
    this.baseprice = element.all(by.css('#basePrice')).get(0);
    this.singlePrice = element.all(by.css('#basePrice')).get(1);
    this.doublePrice = element.all(by.css('#basePrice')).get(2);
    this.adultPrice = element.all(by.css('#basePrice')).get(3);
    this.extraBedRentalPrice = element.all(by.css('#basePrice')).get(4);
    this.extraChildWithoutBedPrice = element.all(by.css('#basePrice')).get(5);
    this.extraChildWithBed = element.all(by.css('#basePrice')).get(6);
    this.saveButton = element(by.buttonText('Save'));
}
module.exports = priceplan;