var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var stepDefinition = require('/home/swathi/Protractor/protractor/Scenario2/Javascripts/methodImplementation.js');
var logindetails = {
    userid : "swathi.intern@axisrooms.com" ,
    password : "HuotZahZ"
};
var Booking = {
    confirmedBooking : {
        numberOfRooms: 2,
        sourceOfBooking : "Booking Engine",
        roomType1 : "Standard",
        mealPlan1 : "dosa",
        roomNum1 : "580",
        numberOfAdults1 : "1",
        denomination : "100",
        denominationnumber : "2",
        roomType2 : "Standard",
        mealPlan2 : "dosa",
        roomNum2 : "581",
        numberOfAdults2 : "2",
        guestName : "Swathi",
        guestLastName : "Vijay",
        guestEmail : "swathi@a.com",
        guestNumber : "9876422569",
        guestName2 : "Indu",
        guestLastName2 : "Vijay",
        guestEmail2 : "indu@d.com",
        guestNumber2 : "9876423421"
    },
    enquiryBooking : {
        numberOfRooms: "1",
        sourceOfBooking : "Agent",
        roomType : "Standard",
        mealPlan : "dosa",
        roomNum : "583",
        numberOfAdults : "1",
        guestName : "Chaithra",
        guestLastName : "Chandra",
        guestEmail : "chaithra@g.com",
        guestNumber : "9876543987",
        discountType : "FIXED",
        discountValue : 10
    },
    sameDayCICOBooking : {
        numberOfRooms: "1",
        sourceOfBooking : "Direct",
        roomType : "Deluxe",
        mealPlan : "dosa",
        roomNum : "586",
        numberOfAdults : "1",
        denomination : "100",
        guestName : "Payal",
        guestLastName : "JoshiD",
        guestEmail : "payaljoshi@a.com",
        guestNumber : "9876411122"
    }
};
var myStepDefinitionsWrapper = function () {

    this.Given(/^Susmita go to "([^"]*)"$/, function(site) {
        browser.get(site);
    });
    this.When(/^Susmita enters login credentials and clicks login$/, function() {
        stepDefinition.login(logindetails);
        expect(browser.getCurrentUrl()).to.eventually.equal('https://crs.axisrooms.com/chains/0');
    });
    this.When(/^Susmita navigates to Reservation Calendar$/, function() {
        stepDefinition.navigateToProperty();
        stepDefinition.navigateToReservationCalendar();
        browser.getCurrentUrl().then(function(url){
            expect(url).to.match(/^https:\/\/crs.axisrooms.com\/chains\/([0-9]+)\/properties\/([0-9]+)\/reservation-calendar\?allReservations=false$/);
            console.log(url);
        });
    });
    this.When(/^Susmita would like to create confirmed booking$/, function() {
        stepDefinition.createConfirmedBooking();
        browser.getCurrentUrl().then(function(url){
            expect(url).to.match(/^https:\/\/crs.axisrooms.com\/chains\/([0-9]+)\/properties\/([0-9]+)\/reservations\/([0-9]+)$/);
            console.log(url);
        });
    });
    this.Then(/^Susmitha likes to create booking for 2 days for 2 rooms for 3 adults with 1 extra bed with initial payment 300$/, function() {
        stepDefinition.confirmConfirmedBooking(Booking.confirmedBooking);
        browser.getCurrentUrl().then(function(url){
            expect(url).to.match(/^https:\/\/crs.axisrooms.com\/chains\/([0-9]+)\/properties\/([0-9]+)\/reservation-calendar\?allReservations=false$/);
            console.log(url);
        });
    });
    this.Then(/^Boom!! Susmita is done with booking$/, function() {
        console.log("Confirmed Booking Done");
    });
    this.When(/^Susmita wants to verify confirmed booking$/, function() {
        console.log("Verifying Confirmed Booking");
    });
    this.Then(/^Susmita navigates to reservation calendar$/, function() {
        stepDefinition.toClickArrow();
        stepDefinition.navigateToReservationCalendar();
        browser.getCurrentUrl().then(function(url){
            expect(url).to.match(/^https:\/\/crs.axisrooms.com\/chains\/([0-9]+)\/properties\/([0-9]+)\/reservation-calendar\?allReservations=false$/);
            console.log(url);
        });
    });
    this.Then(/^Susmita verifies booking details on reservation details popup and resrvation card$/, function() {
        stepDefinition.verifyConfirmedBookingDetailsInCard(Booking.confirmedBooking);
        browser.getCurrentUrl().then(function(url){
            browser.get(url);
        });
        stepDefinition.verifyConfirmedBookingDetailsInPopup(Booking.confirmedBooking);
    });
    this.Then(/^Susmita verifies payment record$/, function() {
        stepDefinition.verifyingPaymentDetails(Booking.confirmedBooking);
    });
    this.Then(/^Susmita goes to reservation calendar$/, function() {
        browser.getCurrentUrl().then(function(url){
            browser.get(url);
        });
        stepDefinition.toClickArrow();
        stepDefinition.navigateToReservationCalendar();
    });
    this.When(/^Susmita wants to create an enquiry booking$/, function() {
        stepDefinition.createEnquiryBooking();
    });
    this.Then(/^Susmita creates enquiry booking 1 room booking for 3 days with 10% discount on sell rate$/, function() {
        stepDefinition.creatingEnquiryBooking(Booking.enquiryBooking);
        browser.getCurrentUrl().then(function(url){
            expect(url).to.match(/^https:\/\/crs.axisrooms.com\/chains\/([0-9]+)\/properties\/([0-9]+)\/reservation-calendar\?allReservations=false$/);
            console.log(url);
        });
    });
    this.Then(/^Susmita wants to verify enquiry booking$/, function() {
        console.log("Verifying Enquiry Booking");
    });
    this.Then(/^Susmita go to Reservation calendar$/, function() {
        browser.getCurrentUrl().then(function(url){
            browser.get(url);
        });
    });
    this.Then(/^Susmita verifies booking details$/, function() {
        stepDefinition.verifyEnquiryBooking(Booking.enquiryBooking);
    });
    this.Then(/^Susmita verifies discount value$/, function() {
        browser.getCurrentUrl().then(function(url){
            browser.get(url);
        });
        stepDefinition.verifyEnquiryDiscountDetails(Booking.enquiryBooking);
    });


    this.When(/^Susmita wants to create same day checkin-checkout booking$/, function() {
        browser.getCurrentUrl().then(function(url){
            browser.get(url);
        });
        stepDefinition.createSameDayCiCoBooking(Booking.sameDayCICOBooking);
    });
    this.Then(/^Susmita return to reservation calendar$/, function() {
        browser.getCurrentUrl().then(function(url){
            browser.get(url);
        });
    });
    this.Then(/^Susmita verifies the booking$/, function() {
        console.log("Verifying Enquiry Booking");
        stepDefinition.verifySameDaiCiCoBooking(Booking.sameDayCICOBooking);
    });

    this.When(/^Susmita decides to check complete booking flow$/, function() {
        console.log("Checking complete Flow");
        browser.getCurrentUrl().then(function(url){
            browser.get(url);
        });
    });
    this.Then(/^Susmita navigates to check-in confirmed booking$/, function() {
        browser.getCurrentUrl().then(function(url){
            browser.get(url);
        });
       stepDefinition.checkinConfirmBooking(Booking.confirmedBooking);
    });
    this.Then(/^Does a checkout by applying charges for all stay days$/, function() {
        stepDefinition.checkOutConfirmation(Booking.confirmedBooking);
    });
    this.Then(/^Susmita converts the enquiry into confirmed booking$/, function() {
        stepDefinition.confirmEnquiryBooking();
    });
    this.Then(/^Susmita cancells the booking$/, function() {
        stepDefinition.cancelBooking(Booking.enquiryBooking);
    });
    this.Then(/^Susmita check-in same day checkin checkout booking$/, function() {
        console.log("Verifying Enquiry Booking");
        browser.getCurrentUrl().then(function(url){
            browser.get(url);
        });
        stepDefinition.checkInSameDayCiCo(Booking.sameDayCICOBooking);
    });
    this.Then(/^does room change if available$/, function() {
        console.log("Verifying Enquiry Booking");
        stepDefinition.changeRoomAndVerify(Booking.sameDayCICOBooking);
    });
    this.Then(/^Finally, she took a deep breath after verifying the complete booking flow.$/, function() {
        console.log("Verifying Enquiry Booking");
    });
};
module.exports = myStepDefinitionsWrapper;