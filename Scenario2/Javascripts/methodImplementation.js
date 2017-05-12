/**
 * Created by swathi on 10/4/17.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var loginPageObj = require('/home/swathi/Protractor/protractor/Scenario2/pageObjects/elementsOfLoginPage.js');
var loginPage = new loginPageObj();
var propPageObj = require('/home/swathi/Protractor/protractor/Scenario2/pageObjects/elementsOfChainAndProperty.js');
var proppage = new propPageObj();
var reservationCalObj = require('/home/swathi/Protractor/protractor/Scenario2/pageObjects/elementsOfReservationCalendar.js');
var reservationcal = new reservationCalObj();

var EC = protractor.ExpectedConditions;
var today = new Date();
var todaydd = today.getDate();
var todaymm = today.getMonth() + 1;
var todayyear = today.getFullYear();
var afterTwoDays = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000);
var aftertwodaysdd = afterTwoDays.getDate();
var after2daysmm = afterTwoDays.getMonth() + 1;
var after2daysyy = afterTwoDays.getFullYear();
var enquiry = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
var enquirydd = enquiry.getDate();
var enquirymm = enquiry.getMonth() + 1;
var enquiryyy = enquiry.getFullYear();
if (todaydd < 10){
    todaydd = '0' + todaydd;
}
if (todaymm < 10){
    todaymm = '0' + todaymm;
}
if (aftertwodaysdd < 10){
    aftertwodaysdd = '0' + aftertwodaysdd;
}
if (after2daysmm < 10){
    after2daysmm = '0' + after2daysmm;
}
if (enquirydd < 10){
    enquirydd = '0' + enquirydd;
}
if (enquirymm < 10){
    enquirymm = '0' + enquirymm;
}

var login = function(logindetails){
    loginPage.userid.clear().sendKeys(logindetails.userid);
    loginPage.password.clear().sendKeys(logindetails.password);
    loginPage.loginButton.click();
};
var navigateToProperty = function(){
    proppage.ourChainToEdit.click();
    proppage.dashBoard.click();
};
var navigateToReservationCalendar = function(){
    reservationcal.reservationCalendar.click();
};
var toClickArrow = function(){
    reservationcal.hiddenArrow.click();
};
var createConfirmedBooking = function() {
    reservationcal.plusButtonToBookingOptions.click();
    reservationcal.confirmedBookingOption.click();
};
var confirmConfirmedBooking = function(confirmedBooking){
    reservationcal.checkInDate.clear().sendKeys(todaydd + '/' + todaymm + '/' + todayyear);
    reservationcal.checkOutDate.clear().sendKeys(aftertwodaysdd + '/' + after2daysmm + '/' + after2daysyy);
    reservationcal.numberOfRooms.clear().sendKeys(confirmedBooking.numberOfRooms);
    reservationcal.sourceOfBooking.sendKeys(confirmedBooking.sourceOfBooking);
    reservationcal.roomType1.sendKeys(confirmedBooking.roomType1);
    reservationcal.mealPlan1.sendKeys(confirmedBooking.mealPlan1);
    reservationcal.roomNumber1.sendKeys(confirmedBooking.roomNum1);
    reservationcal.numberOfAdults1.clear().sendKeys(confirmedBooking.numberOfAdults1);
    reservationcal.roomType2.sendKeys(confirmedBooking.roomType2);
    reservationcal.mealPlan2.sendKeys(confirmedBooking.mealPlan2);
    reservationcal.roomNumber2.sendKeys(confirmedBooking.roomNum2);
    reservationcal.numberOfAdults2.clear().sendKeys(confirmedBooking.numberOfAdults2);
    reservationcal.addExtraBedOption.click();
    reservationcal.addExtraBed.click();
    reservationcal.setButton.click();
    reservationcal.guestName.sendKeys(confirmedBooking.guestName);
    reservationcal.suggestion.click();
    browser.wait(EC.visibilityOf(reservationcal.guestLastName), 1000);
    reservationcal.guestLastName.sendKeys(confirmedBooking.guestLastName);
    reservationcal.guestEmail.sendKeys(confirmedBooking.guestEmail);
    reservationcal.guestNumber.sendKeys(confirmedBooking.guestNumber);
    reservationcal.saveGuestButton.click();
    reservationcal.windowScreen.click();
    reservationcal.addReservationSummary.click();
    reservationcal.paymentButton.click();
    reservationcal.denomination.sendKeys(confirmedBooking.denomination);
    reservationcal.amount.sendKeys(confirmedBooking.denominationnumber);
    reservationcal.addButton.click();
    reservationcal.addPaymentButton.click();
    var scrollToScript = 'document.querySelectorAll(".modal-content")[0].querySelectorAll(".modal-footer.well.ng-scope")[0].querySelectorAll(".btn.btn-primary.pull-right")[0].scrollIntoView()';
    browser.driver.executeScript(scrollToScript).then(function() {
        reservationcal.savePayment.click();
    });
    reservationcal.saveReservation.click();
};
var verifyConfirmedBookingDetailsInCard = function(reservationData) {
    //Details in Reservation Card
    reservationcal.standardRoomIcon.click();
    reservationcal.fetchParentAndclickOnReservationBox(reservationData.roomNum1).click();
    var guestnameincard = reservationcal.guestnameInCard.getText();
    var guestnumberincard = reservationcal.numberInCard.getText();
    var guestemailincard = reservationcal.emailIdInCard.getText();
    var checkindate = reservationcal.checkinDateInCard.getText() + reservationcal.checkInMonthYear.getText();
    var checkoutdate = reservationcal.checkoutDateInCard.getText() + reservationcal.checkoutMonthYear.getText();
    var room1incard = reservationcal.roomNum1InCard.getText();
    var room2incard = reservationcal.roomNum2InCard.getText();

    var mon = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    reservationcal.numberOfRoomInCard.getText().then(function (roomCount) {
        var roomNumber = roomCount;
        var actualRoomCount = JSON.parse(roomNumber.split(" ")[3]);
        //var totalRoomCount = Number(actualRoomCount);
        expect(actualRoomCount).to.equal(reservationData.numberOfRooms);
    });
    //expect(guestnameincard).to.eventually.equal(reservationData.guestName);
    expect(guestnumberincard).to.eventually.equal(reservationData.guestNumber);
    expect(guestemailincard).to.eventually.equal(reservationData.guestEmail);
    expect(room1incard).to.eventually.equal(reservationData.roomNum1);
    expect(room2incard).to.eventually.equal(reservationData.roomNum2);
    // reservationcal.sourceOfBookingInCard.getText().then(function(source){
    //     var bookingSource = source;
    //     var bs = bookingSource.split(" ")[2];
    //     expect(bs).to.equal(reservationData.sourceOfBooking);
    // });
};
var verifyConfirmedBookingDetailsInPopup = function(reservationData){
        reservationcal.standardRoomIcon.click();
        reservationcal.fetchParentAndclickOnReservationBox(reservationData.roomNum1).click();
        reservationcal.moreOptionsButton.click();
        reservationcal.detailsOption.click();
    var sourceOfReservationInPopup = reservationcal.sourceOfReservationInPopup.getText();
    var roomType1InPopup = reservationcal.reservationRoomType1InPopup.getText();
    var roomType2InPopup = reservationcal.reservationRoomType2InPopup.getText();
    var mealPlan1InPopup = reservationcal.mealPlan1InPopup.getText();
    var mealPlan2InPopup = reservationcal.mealPlan2InPopup.getText();
    var roomNumber1InPopup = reservationcal.reservationRoomNumber1InPopup.getText();
    var roomNumber2InPopup = reservationcal.reservationRoomNumber2InPopup.getText();
    var numberOfAdults1InPopup = reservationcal.numberOfAdultsInRoom1InPopup.getText();
    var numberOfAdults2InPopup = reservationcal.numberOfAdultsInRoom2InPopup.getText();
    var checkInDateInPopup = reservationcal.checkInDateInPop.getText() + reservationcal.checkInMonthAndYearInPopup.getText();
    var checkoutDateInPopup = reservationcal.checkoutDateInPopup.getText() + reservationcal.chechoutMonthAndYearInPopup.getText();

    //Details in Resrvation Popup details
    //expect(sourceOfReservationInPopup).to.eventually.equal(reservationData.sourceOfBooking);
    expect(roomType1InPopup).to.eventually.equal(reservationData.roomType1);
    expect(roomType2InPopup).to.eventually.equal(reservationData.roomType2);
    expect(mealPlan1InPopup).to.eventually.equal(reservationData.mealPlan1);
    expect(mealPlan2InPopup).to.eventually.equal(reservationData.mealPlan2);
    expect(roomNumber1InPopup).to.eventually.equal(reservationData.roomNum1);
    expect(roomNumber2InPopup).to.eventually.equal(reservationData.roomNum2);
    expect(numberOfAdults1InPopup).to.eventually.equal(reservationData.numberOfAdults1);
    expect(numberOfAdults2InPopup).to.eventually.equal(reservationData.numberOfAdults2);
    // expect(checkInDateInPopup).to.eventually.equal(todaydd + ", " +  mon[todaymm] + " " + todayyear);
    // expect(checkoutDateInPopup).to.eventually.equal(aftertwodaysdd + ", " + mon[after2daysmm]  + " " + after2daysyy);
};
var verifyingPaymentDetails = function(reservationData){
    reservationcal.netAmountInCard.getText().then(function(net){
        reservationcal.dueAmountInCard.getText().then(function(due){
            var dueamount = due;
            var netamount = net;
            var initialpay = JSON.parse(netamount.split(" ")[1]) - JSON.parse(dueamount.split(" ")[1]);
            expect(initialpay).to.equal((reservationData.denomination)*(reservationData.denominationnumber));
        });
    });
    // reservationcal.initialPaymentInPopup.getText().then(function(initialPay){
    //         var initialPayInPopup =  initialPay;
    //         var pay = JSON.parse(initialPayInPopup.split(" ")[1]);
    //     expect(pay).to.equal((reservationData.denomination)*(reservationData.denominationnumber));
    // });
};
var createEnquiryBooking = function(){
    reservationcal.plusButtonToBookingOptions.click();
    reservationcal.enquiryBookingOption.click();
};
var creatingEnquiryBooking = function(enquiryBooking) {
    reservationcal.checkInDate.clear().sendKeys(todaydd + '/' + todaymm + '/' + todayyear);
    reservationcal.checkOutDate.clear().sendKeys(enquirydd + '/' + enquirymm + '/' + enquiryyy);
    reservationcal.numberOfRooms.clear().sendKeys(enquiryBooking.numberOfRooms);
    reservationcal.sourceOfBooking.sendKeys(enquiryBooking.sourceOfBooking);
    reservationcal.roomType.sendKeys(enquiryBooking.roomType);
    reservationcal.mealPlan.sendKeys(enquiryBooking.mealPlan);
    reservationcal.roomNumber.sendKeys(enquiryBooking.roomNum);
    reservationcal.numberOfAdults.clear().sendKeys(enquiryBooking.numberOfAdults);
    reservationcal.guestName.sendKeys(enquiryBooking.guestName);
    reservationcal.suggestion.click();
    browser.wait(EC.visibilityOf(reservationcal.guestLastName), 1000);
    reservationcal.guestLastName.sendKeys(enquiryBooking.guestLastName);
    reservationcal.guestEmail.sendKeys(enquiryBooking.guestEmail);
    reservationcal.guestNumber.sendKeys(enquiryBooking.guestNumber);
    reservationcal.saveGuestButton.click();
    reservationcal.windowScreen.click();
    reservationcal.addReservationSummary.click();
    reservationcal.discountButton.click();
    reservationcal.discountType.sendKeys(enquiryBooking.discountType).then(function(){
        reservationcal.discountValue.clear().sendKeys(enquiryBooking.discountValue);
        reservationcal.saveDiscount.click();
    })

    reservationcal.saveButton.click().then(function () {
        //reservationcal.yesButton.click();
        reservationcal.noButton.click();
    });
};
    var verifyEnquiryBooking = function(enquiryDetails) {
        reservationcal.enquiryOption.click();
        reservationcal.arrowOptionOfEnquiry.click();
        reservationcal.moreOptionsForEnquiry.click();
        reservationcal.detailsOption.click();
       // var sourceOfReservationInPopup = reservationcal.sourceOfReservationInPopup.getText();
        var roomType1InPopup = reservationcal.reservationRoomTypeInPopup.getText();
        var mealPlan1InPopup = reservationcal.mealPlanInPopup.getText();
        var roomNumber1InPopup = reservationcal.reservationRoomNumberInPopup.getText();
        //var numberOfAdults1InPopup = reservationcal.numberOfAdultsInRoomInPopup.getText();
        // var checkInDateInPopup = reservationcal.checkInDateInPop.getText() + reservationcal.checkInMonthAndYearInPopup.getText();
        // var checkoutDateInPopup = reservationcal.checkoutDateInPopup.getText() + reservationcal.chechoutMonthAndYearInPopup.getText();

        //Details in Resrvation Popup details
        //expect(sourceOfReservationInPopup).to.eventually.equal(reservationData.sourceOfBooking);
        expect(roomType1InPopup).to.eventually.equal(enquiryDetails.roomType);
        expect(mealPlan1InPopup).to.eventually.equal(enquiryDetails.mealPlan);
        expect(roomNumber1InPopup).to.eventually.equal(enquiryDetails.roomNum);
       // expect(numberOfAdults1InPopup).to.eventually.equal(enquiryDetails.numberOfAdults1);
    };
    var verifyEnquiryDiscountDetails = function(enquiryDetails){
        reservationcal.enquiryOption.click();
        reservationcal.arrowOptionOfEnquiry.click();
        reservationcal.moreOptionsForEnquiry.click();
        reservationcal.detailsOptionOfEnquiry.click();
        var discountValue = reservationcal.discountValue.getText();
        expect(discountValue).to.eventually.equal(enquiryDetails.discountValue);
    };
    var createSameDayCiCoBooking = function(samedaycico){
        reservationcal.plusButtonToBookingOptions.click();
        reservationcal.confirmedBookingOption.click();

        reservationcal.checkInDate.clear().sendKeys(todaydd + '/' + todaymm + '/' + todayyear);
        reservationcal.checkOutDate.clear().sendKeys(todaydd + '/' + todaymm + '/' + todayyear);
        reservationcal.checkInTime.sendKeys('7:00 AM');
        reservationcal.checkOutTime.sendKeys('7:00 PM');
        reservationcal.numberOfRooms.clear().sendKeys(samedaycico.numberOfRooms);
        reservationcal.sourceOfBooking.sendKeys(samedaycico.sourceOfBooking);
        reservationcal.roomType.sendKeys(samedaycico.roomType);
        reservationcal.mealPlan.sendKeys(samedaycico.mealPlan);
        reservationcal.roomNumber.sendKeys(samedaycico.roomNum);
        reservationcal.numberOfAdults.clear().sendKeys(samedaycico.numberOfAdults);
        reservationcal.guestName.sendKeys(samedaycico.guestName);
        reservationcal.suggestion.click();
        browser.wait(EC.visibilityOf(reservationcal.guestLastName), 1000);
        reservationcal.guestLastName.sendKeys(samedaycico.guestLastName);
        reservationcal.guestEmail.sendKeys(samedaycico.guestEmail);
        reservationcal.guestNumber.sendKeys(samedaycico.guestNumber);
        reservationcal.saveGuestButton.click();
        reservationcal.windowScreen.click();
        reservationcal.addReservationSummary.click().then(function(){
            reservationcal.saveReservation.click().then(function(){
                reservationcal.yesButton.click();
               console.log("Reservation created");
            });
        });

    };
    var verifySameDaiCiCoBooking = function(samedaycico){
        reservationcal.deluxeRoomIcon.click();
        reservationcal.fetchParentAndclickOnReservationBox(samedaycico.roomNum).click();
        var guestnameincard = reservationcal.guestnameInCard.getText();
        var guestnumberincard = reservationcal.numberInCard.getText();
        var guestemailincard = reservationcal.emailIdInCard.getText();
        var checkindate = reservationcal.checkinDateInCard.getText() + reservationcal.checkInMonthYear.getText();
        var checkoutdate = reservationcal.checkoutDateInCard.getText() + reservationcal.checkoutMonthYear.getText();
        var room1incard = reservationcal.roomNumInCard.getText();
        var sourceofbookingincard = reservationcal.sourceOfBookingInCard.getText();
        var mon = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
        reservationcal.numberOfRoomInCard.getText().then(function(roomCount){
            var roomNumber = roomCount;
            var actualRoomCount = JSON.parse(roomNumber.split(" ")[3]);
            //var totalRoomCount = Number(actualRoomCount);
            //expect(actualRoomCount).to.equal(samedaycico.numberOfRooms);   //expected 1 to equal '1'
        });
        expect(guestnameincard).to.eventually.equal(samedaycico.guestName + " " + samedaycico.guestLastName);
        expect(guestnumberincard).to.eventually.equal(samedaycico.guestNumber);
        expect(guestemailincard).to.eventually.equal(samedaycico.guestEmail);
        // expect(checkindate).to.eventually.equal(todaydd + ", " +  mon[todaymm] + " " + todayyear);
        // expect(checkoutdate).to.eventually.equal(aftertwodaysdd + ", " + mon[after2daysmm]  + " " + after2daysyy);
        expect(room1incard).to.eventually.equal(samedaycico.roomNum);
       // expect(sourceofbookingincard).to.eventually.equal(samedaycico.sourceOfBooking);
        //Details in Resrvation Popup details
    };
    var checkinConfirmBooking = function(confirmbooking){
        reservationcal.standardRoomIcon.click();
        reservationcal.fetchParentAndclickOnReservationBox(confirmbooking.roomNum1).click();
        reservationcal.checkinIcon.click();
        reservationcal.roomsToCheckIn.click();
        reservationcal.nextButton.click();
        reservationcal.checkInButton.click();
        reservationcal.checkInConfirmation.click();
    };
    var checkOutConfirmation = function(confirmbooking){
        reservationcal.standardRoomIcon.click();
        reservationcal.fetchParentAndclickOnReservationBox(confirmbooking.roomNum1).click();
        reservationcal.checkOutIcon.click();
        reservationcal.checkoutButton.click();
        reservationcal.finalcheckoutButton.click();
        reservationcal.checkOutConfirm.click();
        reservationcal.gotoReservationCalButton.click();
    };
    var confirmEnquiryBooking = function(){
        reservationcal.enquiryOption.click();
        reservationcal.arrowOptionOfEnquiry.click();
        reservationcal.moreOptionsForEnquiry.click();
        reservationcal.convertToConfirm.click();
    };
    var cancelBooking = function(enquiry){
        reservationcal.standardRoomIcon.click();
        reservationcal.fetchParentAndclickOnReservationBox(enquiry.roomNum).click();
        reservationcal.cancelBookingIcon.click().then(function(){
            reservationcal.cancelBookingButton.click();
        },1000);

    };
    var checkInSameDayCiCo = function(sameDayCiCo) {
        reservationcal.deluxeRoomIcon.click();
        reservationcal.fetchParentAndclickOnReservationBox(sameDayCiCo.roomNum).click();
        reservationcal.checkinIcon.click();
        reservationcal.checkInButton.click();
        reservationcal.checkInConfirmation.click();
    };
    var changeRoomAndVerify = function(sameDayCiCo){

    };
module.exports = {};
module.exports.login = login;
module.exports.navigateToProperty = navigateToProperty;
module.exports.toClickArrow = toClickArrow;
module.exports.navigateToReservationCalendar = navigateToReservationCalendar;
module.exports.createConfirmedBooking = createConfirmedBooking;
module.exports.confirmConfirmedBooking = confirmConfirmedBooking;
module.exports.verifyConfirmedBookingDetailsInCard = verifyConfirmedBookingDetailsInCard;
module.exports.verifyConfirmedBookingDetailsInPopup = verifyConfirmedBookingDetailsInPopup;
module.exports.verifyingPaymentDetails = verifyingPaymentDetails;
module.exports.createEnquiryBooking = createEnquiryBooking;
module.exports.creatingEnquiryBooking = creatingEnquiryBooking;
module.exports.verifyEnquiryBooking = verifyEnquiryBooking;
module.exports.verifyEnquiryDiscountDetails = verifyEnquiryDiscountDetails;
module.exports.createSameDayCiCoBooking = createSameDayCiCoBooking;
module.exports.verifySameDaiCiCoBooking = verifySameDaiCiCoBooking;
module.exports.checkinConfirmBooking = checkinConfirmBooking;
module.exports.checkOutConfirmation = checkOutConfirmation;
module.exports.confirmEnquiryBooking = confirmEnquiryBooking;
module.exports.cancelBooking = cancelBooking;
module.exports.checkInSameDayCiCo = checkInSameDayCiCo;
module.exports.changeRoomAndVerify = changeRoomAndVerify;
