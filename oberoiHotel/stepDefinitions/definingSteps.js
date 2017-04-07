var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var stepDefinition = require('/home/swathi/Protractor/protractor/oberoiHotel/javascripts/methodImplementation.js');
var logindetails = {
    userid : "swathi.intern@axisrooms.com" ,
    password : "HuotZahZ"
};
var propertyValues = {
    propertyBasicDetails:
        {
            propertyName: "The Oberoi Grand",
            propertytype: "Hotel",
            noOfFloor: "3",
            description: "This is an amazing hotel located in Bangalore, cool ambience!!!",
            address1: "Defence colony",
            address2: "Jalahalli",
            country: "India",
            state: "Karnataka",
            city: "Bangalore",
            citycode: "560090",
            additionalEmail: "writetous@oberoihotels.com"
    },
    distanceFromLocation:  [
        {
            distancefromlocationtype: "Airport",
            placename: "Devanahalli airport",
            distance: "18"
        },
        {
            distancefromlocationtype1: "Bus Station",
            placename1: "Jalahalli cross Bus stand",
            distance1: "2"
        } ],
    mailheader : "Mail Header",
    mailFooter : "Mail Footer",
    policyDetails :
        {
            checkintime : "2:05 AM",
            checkouttime : "4:05 PM",
            starttime : "2",
            endtime : "2",
            unit : "Hrs",
            action : "Disallow",
            chargeType : "Percentage",
            textArea : "-----------",
            onHoldExpiryDate : "1",
            onHoldExpiryHours : "2",
            chosenPeriod : "hours before expiry",
            childWithoutBedMaxAge : "6",
            childWithBedMaxAge : " 10"
    },
    bankAccountInformation : {
            accounttype : "Current",
            accountnumber : "OBER1234",
            swiftcode : "1111",
            ifsccode : "2222",
            accountdetails : "Account",
            bankname : "Indu Bank",
            bankdetails : "XXXXXXXXXXXX",
    },
    personDetails : {
            category : "Accounting",
            personfirstname : "Usha",
            personlastname : "Rani",
            personphonenumber : "99008787654",
            personemail : "usha@axisrooms.com"
    },
    bookingReference : {
            prefix : "CRS",
            sequence : " 2",
            suffix : "------"
    }
};

var Dashboard = {
    roomType : [
        {
            name : "Standard",
            description : "This room contains a queen sized bed.",
            baseOccupancy : "2",
            maxExtraBed : "1",
            maxChildrenWithoutBed : "1",
            roomtype : "Standard"
        },
        {
            name: "Deluxe",
            description: "This room contains a King sized bed.",
            baseOccupancy: "4",
            maxExtraBed: "1",
            maxChildrenWithoutBed: "2",
            roomtype : "Standard"
        } ],
    room : [
        {
            startingNumber: "580",
            increment: "1",
            stopANumber: '584',
            bedType: "Queen Size",
            roomView: "City",
            floor : "1"
        },
        {
            startingNumber: "585",
            increment: "1",
            stopANumber: '589',
            bedType: "King Size",
            roomView: "City",
            floor : "2"
        } ],
    meal : {
        mealName: "South Indian",
        mealDescription: "xxxxxx"
    },
    taxPlan : {
        endDate : "30/08/2017",
        frompriceRange : "500"
    },
    PricePlan : {
        roomType : "Standard",
        mealPlan : "dosa",
        priceToDate : "30/04/2017",
        baseprice : "1000",
        singleprice : "400",
        doubleprice : "800",
        adultprice : "400",
        extrabedrent : "600",
        extrabedwithoutbed : "300",
        extrachildwithbed : "500"
    },
    reservationData : {
        noOfRoomsToReserve : "1",
        sourceOfBooking : "Booking Engine",
        reservationRoomType : "Standard",
        reservationMealPlan : "dosa",
        reservationRoomNo : "582",
        noOfAdults : "2",
        addOn : "transportOne",
        addOnQuantity : "1",
        guestName : "Swathi",
        guestLastName : "Vijay",
        guestEmail : "swathi@a.com",
        guestNumber : "9876422569",
        reservationRemark : "No Remarks",
        reservationType : "Others",
        checkIn : "07,APR 2017",
        checkOut : "09,APR 2017"
    }
};

var myStepDefinitionsWrapper = function () {

    this.Given(/^Raju go to "([^"]*)"$/, function(site) {
        browser.get(site);
    });
    this.When(/^Raj enters login credentials$/, function() {
        stepDefinition.login(logindetails);
        expect(browser.getCurrentUrl()).to.eventually.equal('https://crs.axisrooms.com/chains/0');
    });
    this.When(/^Raj would like to edit all the fields of a property..!$/, function() {
        stepDefinition.editing();
        expect(browser.getCurrentUrl()).to.eventually.equal('https://crs.axisrooms.com/chains/91/properties/355/edit');
    });
    this.When(/^Raj edits the basic information of the property$/, function(){
        stepDefinition.editBasicInformation(propertyValues.propertyBasicDetails);
    });
    this.When(/^Raj adds addtional information such as distance from location of property$/, function(){
        stepDefinition.editAdditionalInformation(propertyValues.distanceFromLocation,propertyValues.mailheader,propertyValues.mailFooter);
    });
    this.When(/^Raj edits policy details$/, function(){
        stepDefinition.editPolicyInformation(propertyValues.policyDetails);
    });
    this.When(/^Raj edits bank and account details$/, function(){
        stepDefinition.editBankAccountInformation(propertyValues.bankAccountInformation);
    });
    this.When(/^Raj enters contacts details$/, function(){
        stepDefinition.editContactInformation(propertyValues.personDetails);
    });
    this.When(/^Finally Raj edits Bookings Reference Configuration$/, function(){
        stepDefinition.editBookingReferenceInformation(propertyValues.bookingReference);
        browser.getCurrentUrl().then(function(url){
            expect(url).to.match(/^https:\/\/crs.axisrooms.com\/chains\/([0-9]+)\/properties$/);
            console.log(url);
        });
    });
    this.When(/^He navigates to dashboard/,function(){
        stepDefinition.navigateToDashboard();
        browser.getCurrentUrl().then(function(url){
            expect(url).to.match(/^https:\/\/crs.axisrooms.com\/chains\/([0-9]+)\/properties\/([0-9]+)\/dashboard$/);
            console.log(url);
        });
    });
    this.When(/^Raj creates 2 Room Types with 5 rooms each/,function(){
        stepDefinition.createRoomTypesAndRooms(Dashboard.roomType,Dashboard.room);
    });
    this.When(/^Raj set up 1 meal plan/,function(){
        stepDefinition.createMealPlan(Dashboard.meal);
        browser.getCurrentUrl().then(function(url){
            expect(url).to.match(/^https:\/\/crs.axisrooms.com\/chains\/([0-9]+)\/properties\/([0-9]+)\/mealPlans$/);
            console.log(url);
        });
    });
    this.When(/^Raj sets tax plans for property/,function(){
        stepDefinition.createTaxPlan(Dashboard.taxPlan);
        browser.getCurrentUrl().then(function(url){
            expect(url).to.match(/^https:\/\/crs.axisrooms.com\/chains\/([0-9]+)\/properties\/([0-9]+)\/surchargePlans$/);
            console.log(url);
        });
    });
    this.When(/^Raj sets price for room types and meal plan for next 2 months./,function(){
        stepDefinition.createPricePlan(Dashboard.PricePlan);
        browser.getCurrentUrl().then(function(url){
            expect(url).to.match(/^https:\/\/crs.axisrooms.com\/chains\/([0-9]+)\/properties\/([0-9]+)\/prices$/);
            console.log(url);
        });
    });
    this.When(/^Raj navigates to reservation calendar/,function(){
        stepDefinition.navigateToReservationCalendar();
        browser.getCurrentUrl().then(function(url){
            expect(url).to.match(/^https:\/\/crs.axisrooms.com\/chains\/([0-9]+)\/properties\/([0-9]+)\/reservation-calendar\?allReservations=false$/);
            console.log(url);
        });
    });
    this.When(/^Raj creates reservation for next 2 days/,function(){
        stepDefinition.checkBookingOnReservationCalendar(Dashboard.reservationData);
        browser.getCurrentUrl().then(function(url){
            expect(url).to.match(/^https:\/\/crs.axisrooms.com\/chains\/([0-9]+)\/properties\/([0-9]+)\/reservation-calendar\?allReservations=false$/);
           console.log(url);
        });
    });
    this.When(/^He verifies the resevation/,function(){
        stepDefinition.checkReservation(Dashboard.reservationData);
        stepDefinition.expectReservationCreation(Dashboard.reservationData);
    });
};
module.exports = myStepDefinitionsWrapper;








