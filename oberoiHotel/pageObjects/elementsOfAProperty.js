/**
 * Created by swathi on 22/3/17.
 */
var propertyElements = function(){
    //Edit
    this.submitButton = element(by.buttonText('Submit'));
    this.ourChainToEdit = element(by.css('.card-gradient'));
    this.menuOption = element.all(by.css('.dropdown-toggle.pull-right.pointer.btn.btn-round-sm.btn-link.withoutripple.ng-scope')).get(0);
    this.propertyEditButton = element(by.linkText('Edit'));
    //EditingBasicInformation
    this.propertyType = element(by.model('selectedEntryId'));
    this.propertyName = element(by.id('inputName'));
    this.starButton = element.all(by.css('li[ng-class="star"]')).get(4);
    this.numberOfFloor = element(by.id('noOfFloorsInput'));
    this.propertyDescription = element(by.id('textAreaDescription'));
    this.addressline1 = element(by.id('inputAddressLine1'));
    this.addressline2 = element(by.id('inputAddressLine2'));
    this.Country = element(by.model('country'));
    this.state = element(by.model('state'));
    this.city = element(by.model('address.city'));
    this.pincode = element(by.id('inputPinCode'));
    //this.amenities = element.all(by.css('.button.btn.btn-primary'));
    this.amenities = element.all(by.css('button.btn.btn-primary')).get(1);
    this.wifi = element.all(by.css('input[ng-model="item.selected"]')).get(2);
    this.gym = element.all(by.css('input[ng-model="item.selected"]')).get(1);
    this.additionalEmail = element(by.id('inputContactEmail'));
    this.nextButton = element(by.buttonText('Next'));
    //EdittingAdditionalInformation
    this.distanceFromLocationType = element.all(by.css('select.form-control'));
    this.placeName = element(by.model('place.name'));
    this.distance = element(by.model('place.distance'));
    this.mailHeaderButton = element.all(by.css('.btn.btn-primary')).get(2);
    this.mailHeaderTextArea = element.all(by.css('div[ta-bind="ta-bind"]'));
    this.H1Button = element.all(by.buttonText('H1'));
    this.italicButton = element.all(by.css('.fa.fa-italic'));
    this.mailFooterButton = element.all(by.css('.btn.btn-primary')).get(3);
    this.mailFooterTextArea = element(by.css('div[contenteditable="true"]'));
    this.rightAlignment = element(by.css('.fa.fa-align-right'));
    this.addButton = element(by.buttonText('ADD'));
    this.addContactDetails = element(by.css('button[style="padding-left: 30px; padding-right: 30px"]'));
    //Policy
    this.checkInTime = element(by.css('input[ng-model="checkInAtOrAfter"]'));
    this.checkOutTime = element(by.css('input[ng-model="checkOutAtOrBefore"]'));
    this.cancellationPolicyButton = element.all(by.css('button[ng-click="definePolicy()"]'));
    this.periodButton = element(by.css('input[value="PERIODS"]'));
    this.stratTime = element(by.css('#startTime'));
    this.endTime = element(by.css('#endTime'));
    this.unit = element(by.css('select[ng-model="policyItem.unit"]'));
    this.action = element(by.css('select[ng-model="policyItem.action"]'));
    this.OkButton = element(by.buttonText('OK'));
    this.modificationPolicyButton = element(by.buttonText('Define modification policy'));
    this.periodType = element(by.css('input[ng-model="policy.periodsType"]'));
    this.chargeType = element(by.css('select[ng-model="policyItem.chargeType"]'));
    this.textAreaStatement = element(by.css('#textAreaStatement'));
    this.onHoldExpiryDate = element(by.css('input[ng-model="property.onHoldBookingPolicy.expiryDaysBefore"]'));
    this.onHoldExpiryHours = element(by.css('input[ng-model="property.onHoldBookingPolicy.expiryHoursBefore"]'));
    this.onHoldFixedExpiry = element(by.css('input[ng-model="property.onHoldBookingPolicy.fixedExpiryDate"]'));
    this.chosenPeriod = element(by.css('select[ng-model="chosenPeriod"]'));
    this.addReminderButton = element(by.css('div.col-md-2.text-center'));
    this.childWithoutBedMaxAge = element(by.css('input[ng-model="property.childAgeConfiguration.childWithoutBedMaxAge"]'));
    this.childWithBedMaxAge = element(by.css('input[ng-model="property.childAgeConfiguration.childWithBedMaxAge"]'));
    //Bank Account Information
    this.accountName = element(by.id('accountName'));
    this.accountNumber = element(by.id('accountNumber'));
    this.swiftCode = element(by.id('swiftCode'));
    this.ifscCode = element(by.id('ifscCode'));
    this.accountDetails = element(by.id('details'));
    this.bankName = element(by.id('bankName'));
    this.bankDetails = element(by.id('bankDetails'));
    //Person Details
    this.personCategory = element(by.css('.form-floating')).element(by.model('selectedEntryId'));
    this.firstNAme = element(by.id('inputFirstName'));
    this.lastNAme = element(by.id('inputLastName'));
    this.phoneNumber = element(by.id('inputPhone'));
    this.personemail = element(by.id('inputEmail'));
    //Bookings Reference Configuration
    this.prefix = element(by.id('prefix'));
    this.finishButton = element(by.id('finish_btn'));
    this.sequence = element(by.css('input[ng-model="property.bookingsReferenceConfig.digitsToSequence"]'));
    this.suffix = element(by.css('input[ng-model="property.bookingsReferenceConfig.suffix"]'));
}
module.exports = propertyElements;
