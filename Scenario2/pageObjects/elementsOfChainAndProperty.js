/**
 * Created by swathi on 11/4/17.
 */
var propertyPage = function(){
    this.ourChainToEdit = element(by.css('.card-gradient'));
    this.dashBoard = element.all(by.css('.card-content')).get(0);
}
module.exports = propertyPage;