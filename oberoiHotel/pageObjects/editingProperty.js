var editingProperty = function(){
    this.ourChainToEdit = element(by.css('.card-gradient'));
    this.menuOption = element.all(by.css('.dropdown-toggle.pull-right.pointer.btn.btn-round-sm.btn-link.withoutripple.ng-scope')).get(0);
    this.propertyEditButton = element(by.linkText('Edit'));
    this.submitButton = element(by.buttonText('Submit'));
}
module.exports = editingProperty;
