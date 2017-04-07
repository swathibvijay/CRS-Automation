var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var loginPageObj = require('/home/swathi/Protractor/protractor/oberoiHotel/pageObjects/loginPageElements.js');
var loginPage = new loginPageObj();
var editingPageObj = require('/home/swathi/Protractor/protractor/oberoiHotel/pageObjects/editingProperty.js');
var editingPage = new editingPageObj();
var propertyPageObj = require('/home/swathi/Protractor/protractor/oberoiHotel/pageObjects/elementsOfAProperty.js');
var propertyPage = new propertyPageObj();
var dashboardObj = require('/home/swathi/Protractor/protractor/oberoiHotel/pageObjects/dashboard.js');
var dashboardPage = new dashboardObj();
var roomObj = require('/home/swathi/Protractor/protractor/oberoiHotel/pageObjects/elementsOfRoomTypeAndRooms.js');
var roomtpes = new roomObj();
var mealplanObj = require('/home/swathi/Protractor/protractor/oberoiHotel/pageObjects/elementsOfMealPlan.js');
var mealplans = new mealplanObj();
var taxplanObj = require('/home/swathi/Protractor/protractor/oberoiHotel/pageObjects/elementsOfTaxPlan.js');
var taxplans = new taxplanObj();
var reservationpageObj = require('/home/swathi/Protractor/protractor/oberoiHotel/pageObjects/elementsOfReservationCal.js');
var reservationPage = new reservationpageObj();
var priceplanObj = require('/home/swathi/Protractor/protractor/oberoiHotel/pageObjects/elementsOfPricePlan.js');
var priceplans = new priceplanObj();
var EC = protractor.ExpectedConditions;

var today = new Date();
var todaydd = today.getDate();
var tomorrowDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var tomorrowdd = tomorrowDate.getDate();
var mm = tomorrowDate.getMonth() + 1;
var yy = tomorrowDate.getFullYear();
var afterTwoDays = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
var aftertwodaysdd = afterTwoDays.getDate();
var mm2 = afterTwoDays.getMonth() + 1;
var yy2 = afterTwoDays.getFullYear();
var after2Months = new Date(new Date().getTime() + 60 * 24 * 60 * 60 * 1000);
var after2Monthsdd = after2Months.getDate();
var after2Monthsmm = after2Months.getMonth() + 1;
var after2Monthyy = after2Months.getFullYear();
if (tomorrowdd < 10){
    tomorrowdd = '0' + tomorrowdd;
}
if (mm < 10){
    mm = '0' + mm;
}
if (aftertwodaysdd < 10){
    aftertwodaysdd = '0' + aftertwodaysdd;
}
if (mm2 < 10){
    mm2 = '0' + mm2;
}
if (after2Monthsdd < 10){
    after2Monthsdd = '0' + after2Monthsdd;
}
if (after2Monthsmm < 10){
    after2Monthsmm = '0' + after2Monthsmm;
}
if (todaydd < 10){
    todaydd = '0' + todaydd;
}
var login = function(logindetails){
    loginPage.userid.clear().sendKeys(logindetails.userid);
    loginPage.password.clear().sendKeys(logindetails.password);
    loginPage.loginButton.click();
    // editingPage.ourChainToEdit.click();
    // dashboardPage.dashBoard.click();
};
var editing = function () {
    editingPage.ourChainToEdit.click();
    editingPage.menuOption.click();
    editingPage.propertyEditButton.click();
};
var editBasicInformation = function(propertyBasicDetails) {
    //dashboardPage.dashboardPageType.click();
    propertyPage.amenities.click();
    propertyPage.wifi.click();
    propertyPage.gym.click();
    propertyPage.submitButton.click();
    propertyPage.propertyName.clear().sendKeys(propertyBasicDetails.propertyName);
    propertyPage.starButton.click();
    propertyPage.propertyType.sendKeys(propertyBasicDetails.propertytype);
    propertyPage.numberOfFloor.clear().sendKeys(propertyBasicDetails.noOfFloor);
    propertyPage.propertyDescription.clear().sendKeys(propertyBasicDetails.description);
    propertyPage.addressline1.clear().sendKeys(propertyBasicDetails.address1);
    propertyPage.addressline2.clear().sendKeys(propertyBasicDetails.address2);
    propertyPage.Country.sendKeys(propertyBasicDetails.country).then(function(){
        propertyPage.state.sendKeys(propertyBasicDetails.state).then(function(){
                propertyPage.city.sendKeys(propertyBasicDetails.city);
        });
    });
    propertyPage.pincode.clear().sendKeys(propertyBasicDetails.citycode);
    propertyPage.additionalEmail.clear().sendKeys(propertyBasicDetails.additionalEmail);
    propertyPage.nextButton.click();
};
var editAdditionalInformation = function(distanceFromLocation,mailheader,mailfooter) {
    var scrollToScript3 = 'document.querySelectorAll(".well")[0].scrollIntoView()';
    browser.driver.executeScript(scrollToScript3).then(function() {
        propertyPage.distanceFromLocationType.sendKeys(distanceFromLocation[0].distancefromlocationtype);
        propertyPage.placeName.clear().sendKeys(distanceFromLocation[0].placename);
        propertyPage.distance.clear().sendKeys(distanceFromLocation[0].distance);
        propertyPage.addButton.click();
    });
    var scrollToScript = 'document.querySelectorAll(".well .col-md-12.p-t-10")[0].querySelectorAll(".btn.btn-primary")[0].scrollIntoView()';
    browser.driver.executeScript(scrollToScript).then(function() {
        propertyPage.mailHeaderButton.click();
        propertyPage.mailHeaderTextArea.clear().sendKeys(mailheader);
        propertyPage.H1Button.click();
        propertyPage.italicButton.click();
        propertyPage.submitButton.click();
    });
    var scrollToScript2 = 'document.querySelectorAll(".well .col-md-12.p-t-10")[0].querySelectorAll(".btn.btn-primary")[1].scrollIntoView()';
    browser.driver.executeScript(scrollToScript2).then(function() {
        propertyPage.mailFooterButton.click();
        propertyPage.mailFooterTextArea.clear().sendKeys(mailfooter);
        propertyPage.rightAlignment.click();
        propertyPage.submitButton.click();
    });
    propertyPage.nextButton.click();
};
var editPolicyInformation = function(policyDetails){
     propertyPage.checkInTime.clear().sendKeys(policyDetails.checkintime);
     propertyPage.checkOutTime.clear().sendKeys(policyDetails.checkouttime);
     // propertyPage.cancellationPolicyButton.click().then(function(){
     //     propertyPage.periodButton.click().then(function(){
     //         propertyPage.stratTime.clear().sendKeys(policyDetails.starttime);
     //         propertyPage.endTime.clear().sendKeys(policyDetails.endtime);
     //         propertyPage.unit.sendKeys(policyDetails.unit);
     //         propertyPage.action.sendKeys(policyDetails.action);
     //         propertyPage.OkButton.click();
     //     });
     // });
     // propertyPage.modificationPolicyButton.click().then(function(){
     //     propertyPage.periodType.click().then(function(){
     //         propertyPage.endTime.clear().sendKeys(policyDetails.endtime);
     //         propertyPage.chargeType.sendKeys(policyDetails.chargeType);
     //         propertyPage.textAreaStatement.sendKeys(policyDetails.textArea);
     //         propertyPage.OkButton.click();
     //     });
     // });
     propertyPage.onHoldExpiryDate.clear().sendKeys(policyDetails.onHoldExpiryDate);
     propertyPage.onHoldExpiryHours.clear().sendKeys(policyDetails.onHoldExpiryHours);
     propertyPage.onHoldFixedExpiry.click();
     propertyPage.chosenPeriod.sendKeys(policyDetails.chosenPeriod);
     propertyPage.addReminderButton.click();
     propertyPage.childWithoutBedMaxAge.clear().sendKeys(policyDetails.childWithoutBedMaxAge);
     propertyPage.childWithBedMaxAge.clear().sendKeys(policyDetails.childWithBedMaxAge);
     propertyPage.nextButton.click();
};
var editBankAccountInformation = function(bankAccountInformation) {
  //  propertyPage.nextButton.click();
    propertyPage.accountName.clear().sendKeys(bankAccountInformation.accounttype);
    propertyPage.accountNumber.clear().sendKeys(bankAccountInformation.accountnumber);
    propertyPage.swiftCode.clear().sendKeys(bankAccountInformation.swiftcode);
    propertyPage.ifscCode.clear().sendKeys(bankAccountInformation.ifsccode);
    propertyPage.accountDetails.clear().sendKeys(bankAccountInformation.accountdetails);
    propertyPage.bankName.clear().sendKeys(bankAccountInformation.bankname);
    propertyPage.bankDetails.clear().sendKeys(bankAccountInformation.bankdetails);
    propertyPage.nextButton.click();
};
var editContactInformation = function(personDetails) {
    propertyPage.personCategory.sendKeys(personDetails.category);
    propertyPage.firstNAme.clear().sendKeys(personDetails.personfirstname);
    propertyPage.lastNAme.clear().sendKeys(personDetails.personlastname);
    propertyPage.phoneNumber.clear().sendKeys(personDetails.personphonenumber);
    propertyPage.personemail.clear().sendKeys(personDetails.personemail);
    propertyPage.addContactDetails.click();
    propertyPage.nextButton.click();
};
var editBookingReferenceInformation = function(bookingReference) {
    propertyPage.prefix.clear().sendKeys(bookingReference.prefix);
    propertyPage.sequence.clear().sendKeys(bookingReference.sequence);
    propertyPage.suffix.clear().sendKeys(bookingReference.suffix);
    propertyPage.finishButton.click();
};
var navigateToDashboard = function(){
    dashboardPage.dashBoard.click();
};
var createRoomTypesAndRooms = function(roomType,roomdetails) {
    roomtpes.roomTypes.click();
    roomtpes.roomTypeAddingButton.click();
    roomtpes.roomName.clear().sendKeys(roomType[0].name);
    roomtpes.roomDescription.clear().sendKeys(roomType[0].description);
    roomtpes.baseOccupancy.clear().sendKeys(roomType[0].baseOccupancy);
    roomtpes.maxExtraBed.clear().sendKeys(roomType[0].maxExtraBed);
    roomtpes.roomtype.sendKeys(roomType[0].roomtype);
    roomtpes.maxChildrenWithoutBed.clear().sendKeys(roomType[0].maxChildrenWithoutBed);
    roomtpes.roomCreateButton.click();
    // roomtpes.saveButton.click();
    roomtpes.roomTypes.click();
    roomtpes.roomTypeAddingButton.click();
    roomtpes.roomName.clear().sendKeys(roomType[1].name);
    roomtpes.roomDescription.clear().sendKeys(roomType[1].description);
    roomtpes.baseOccupancy.clear().sendKeys(roomType[1].baseOccupancy);
    roomtpes.maxExtraBed.clear().sendKeys(roomType[1].maxExtraBed);
    roomtpes.roomtype.sendKeys(roomType[1].roomtype);
    roomtpes.maxChildrenWithoutBed.clear().sendKeys(roomType[1].maxChildrenWithoutBed);
    //roomtpes.dependentRoomType.click();
    roomtpes.roomCreateButton.click();
    //roomtpes.saveButton.click();
    //roomtpes.roomTypes.click();
    roomtpes.roomType1.click();
    roomtpes.plusButton.click();
    roomtpes.bulkCreateRoomOption.click();
    roomtpes.startingNumber.sendKeys(roomdetails[0].startingNumber);
    roomtpes.increment.sendKeys(roomdetails[0].increment);
    roomtpes.stopANumber.sendKeys(roomdetails[0].stopANumber);
    roomtpes.bedType.sendKeys(roomdetails[0].bedType);
    roomtpes.roomView.sendKeys(roomdetails[0].roomView);
    roomtpes.nonSmokingButton.click();
    roomtpes.floor.sendKeys(roomdetails[0].floor);
    roomtpes.bulkCreateButton.click();
    //roomtpes.roomCreateButton.click();
    roomtpes.roomTypes.click();
    roomtpes.roomType2.click();
    roomtpes.plusButton.click();
    roomtpes.bulkCreateRoomOption.click();
    roomtpes.startingNumber.sendKeys(roomdetails[1].startingNumber);
    roomtpes.increment.sendKeys(roomdetails[1].increment);
    roomtpes.stopANumber.sendKeys(roomdetails[1].stopANumber);
    roomtpes.bedType.sendKeys(roomdetails[1].bedType);
    roomtpes.roomView.sendKeys(roomdetails[1].roomView);
    roomtpes.nonSmokingButton.click();
    roomtpes.floor.sendKeys(roomdetails[1].floor);
    roomtpes.bulkCreateButton.click();
};
var createMealPlan = function(mealplan) {
    mealplans.mealPlanOption.click();
    mealplans.addMealPlan.click();
    mealplans.mealName.sendKeys(mealplan.mealName);
    mealplans.mealDescription.sendKeys(mealplan.mealDescription);
    mealplans.mealValidity.click();
    //mealplans.mealDependentPlan.click();
    //mealplans.addMealExclusionsButton.click();
    //mealplans.MealExclusionsButton.click();
    //mealplans.submitButton.click();
    mealplans.saveButton.click();
};
var createTaxPlan = function(taxplan){
    taxplans.taxPlanOption.click();
    taxplans.addTaxPlan.click();
    taxplans.taxPlamForRoonOption.click();
    taxplans.addTaxButton.click();
    taxplans.selectedTax.click();
    taxplans.endDate.clear().sendKeys(taxplan.endDate);
    taxplans.add.click();
    taxplans.fromPriceRange.sendKeys(taxplan.frompriceRange);
    taxplans.aboveCheckBox.click();
    taxplans.saveButton.click();
};
var createPricePlan = function(pricePlan){
    priceplans.priceOption.click();
    priceplans.roomTypeToSet.sendKeys(pricePlan.roomType);
    priceplans.mealPlanToSet.sendKeys(pricePlan.mealPlan);
    priceplans.setPriceButton.click();
    priceplans.priceToDate.clear().sendKeys(after2Monthsdd + '/' + after2Monthsmm + '/' + after2Monthyy);
   // priceplans.thursdayButton.click();
    priceplans.baseprice.sendKeys(pricePlan.baseprice);
    priceplans.singlePrice.sendKeys(pricePlan.singleprice);
    priceplans.doublePrice.sendKeys(pricePlan.doubleprice);
    priceplans.adultPrice.sendKeys(pricePlan.adultprice);
    priceplans.extraBedRentalPrice.sendKeys(pricePlan.extrabedrent);
    priceplans.extraChildWithoutBedPrice.sendKeys(pricePlan.extrabedwithoutbed);
    priceplans.extraChildWithBed.sendKeys(pricePlan.extrachildwithbed);
    priceplans.saveButton.click();
};
var countRoomNumber = function(){
    dashboardPage.reservationCalendar.click();
    dashboardPage.roomTypeInReservationCal.click();
    dashboardPage.roomCount.count();
};
var navigateToReservationCalendar = function(){
    reservationPage.reservationCalendar.click();
};
var countRoomNumber = function(){
return true;
};
var checkBookingOnReservationCalendar = function(reservationData){
    reservationPage.addButtonForBooking.click();
    reservationPage.createBookingOption.click();
    reservationPage.reservationCheckinDate.clear().sendKeys(tomorrowdd + '/' + mm + '/' + yy);
    reservationPage.sourceOfBooking.sendKeys(reservationData.sourceOfBooking);
    reservationPage.reservationRoomType.sendKeys(reservationData.reservationRoomType);
    reservationPage.reservationMealPlan.sendKeys(reservationData.reservationMealPlan);
    reservationPage.reservationRoomNo.sendKeys(reservationData.reservationRoomNo);
    reservationPage.noOfAdults.clear().sendKeys(reservationData.noOfAdults);
    // reservationPage.earlyCheckInOption.click();
    // reservationPage.setEarlyCheckin.click();
    // reservationPage.addOn.clear().sendKeys(reservationData.addOn);
    // reservationPage.addOnQuantity.clear().sendKeys(reservationData.addOnQuantity);
    // reservationPage.addButton.click();
    reservationPage.guestName.clear().sendKeys(reservationData.guestName);
    reservationPage.suggestion.click();
    browser.wait(EC.visibilityOf(reservationPage.guestLastName), 1000);
    reservationPage.guestLastName.sendKeys(reservationData.guestLastName);
    reservationPage.guestEmail.sendKeys(reservationData.guestEmail);
    reservationPage.guestNumber.sendKeys(reservationData.guestNumber);
    reservationPage.reservationCheckOutDAte.clear().sendKeys(aftertwodaysdd + '/' + mm2 + '/' + yy2);
    reservationPage.noOfRoomsToReserve.clear().sendKeys(reservationData.noOfRoomsToReserve);
    reservationPage.saveGuestButton.click();
    //reservationCalendar.click();
    //reservationPage.reservationRemark.clear().sendKeys(reservationData.reservationRemark);
    //reservationPage.reservationType.clear().sendKeys(reservationData.reservationType);
    //reservationPage.addReservationRemark.click();
    //browser.wait(EC.elementToBeSelected((dashboardPage.addReservationSummary)), 5000);
    //browser.touchActions().tap(dashboardPage.addReservationSummary).perform();
    reservationPage.windowScreen.click();
    reservationPage.addReservationSummary.click();
    reservationPage.saveReservationSummary.click();
};

var checkReservation = function(reservationData2){
    //dashboardPage.reservationCalendar.click();
    browser.get('https://crs.axisrooms.com/chains/91/properties/355/reservation-calendar?allReservations=false&startDate=' + yy + '-'+ mm + '-' + tomorrowdd );
    reservationPage.standardRoomIcon.click();
    reservationPage.fetchParentAndclickOnReservationBox(reservationData2.reservationRoomNo).click();
};

var expectReservationCreation = function(reservationData2) {
    var roomnum = reservationPage.getRoomNum.getText();
    var ourGuestName = reservationPage.fetchedGuestName.getText();
    var checkInDate = reservationPage.checkinDate.getText();
    var checkInYear = reservationPage.checkinMonthYear.getText();
    var checkin = checkInDate + ", " + checkInYear;
    var checkOutDate = reservationPage.checkoutDate.getText() + ", " + reservationPage.checkoutMonthYear.getText();
    // expect(roomnum).to.equal(reservationData2.reservationRoomNo);
    // expect(ourGuestName).to.equal(reservationData2.guestName);
    // expect(checkin).to.eventually.equal(reservationData2.checkIn);
    // expect(checkOutDate).to.eventually.equal(reservationData2.checkOut);
    expect(element.all(by.css('div.room-number')).get(0).getText()).to.eventually.equal(reservationData2.reservationRoomNo);
    expect(element(by.buttonText(reservationData2.reservationRoomNo)).element(by.xpath('ancestor::div[4]')).element(by.css('.reservations-well.reservations-well-new.booking-block.text-ellipsis.fa.booking')).isPresent()).to.eventually.be.true;
};

module.exports = {};
module.exports.login = login;
module.exports.editing = editing;
module.exports.editBasicInformation = editBasicInformation;
module.exports.editAdditionalInformation = editAdditionalInformation;
module.exports.editBankAccountInformation = editBankAccountInformation;
module.exports.editContactInformation = editContactInformation;
module.exports.editBookingReferenceInformation = editBookingReferenceInformation;
module.exports.navigateToDashboard = navigateToDashboard;
module.exports.createRoomTypesAndRooms = createRoomTypesAndRooms;
module.exports.editPolicyInformation = editPolicyInformation;
module.exports.countRoomNumber = countRoomNumber;
module.exports.createMealPlan = createMealPlan;
module.exports.createTaxPlan = createTaxPlan;
module.exports.createPricePlan = createPricePlan;
module.exports.navigateToReservationCalendar = navigateToReservationCalendar;
module.exports.countRoomNumber = countRoomNumber;
module.exports.checkBookingOnReservationCalendar = checkBookingOnReservationCalendar;
module.exports.checkReservation = checkReservation;
module.exports.expectReservationCreation = expectReservationCreation;