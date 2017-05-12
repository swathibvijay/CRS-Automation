/**
 * Created by swathi on 11/4/17.
 */
var reservationCalendar = function(){
    this.hiddenArrow = element(by.css('button.show-hide-arrow'));
    this.reservationCalendar = element(by.css('a[href="/chains/91/properties/355/reservation-calendar?allReservations=false"]'));
    this.plusButtonToBookingOptions = element.all(by.css('button.btn.btn-primary.f15.p-h-5.m-t-5.dropdown-toggle')).get(0);
    //To create Confirmed booking
    this.confirmedBookingOption = element(by.linkText('Create Booking'));
    this.checkInDate = element(by.model('reservation.checkInDate._d'));
    this.checkOutDate = element(by.model('reservation.checkOutDate._d'));
    this.numberOfRooms = element(by.id('numberOfRooms'));
    this.sourceOfBooking = element(by.id('sourceOfBooking3'));
    this.roomType1 = element.all(by.model('roomReservation.roomTypeId')).get(0);
    this.roomType2 = element.all(by.model('roomReservation.roomTypeId')).get(1);
    this.mealPlan1 = element.all(by.model('roomReservation.mealPlanId')).get(0);
    this.mealPlan2 = element.all(by.model('roomReservation.mealPlanId')).get(1);
    this.roomNumber1 = element.all(by.model('roomId')).get(0);
    this.roomNumber2 = element.all(by.model('roomId')).get(1);
    this.numberOfAdults1 = element.all(by.model('roomReservation.numberOfAdults')).get(0);
    this.numberOfAdults2 = element.all(by.model('roomReservation.numberOfAdults')).get(1);
    this.addExtraBedOption = element.all(by.css('strong[ng-click="openReservationExtraBedModal()"]')).get(0);
    this.addExtraBed = element(by.buttonText('+'));
    this.setButton = element(by.buttonText('Set'));
    this.paymentButton = element(by.buttonText('Payment'));
    this.savePayment = element(by.css('button[ng-click="saveReservationPaymentAndCloseModal()"]'));
    this.denomination = element(by.model('denomination'));
    this.amount = element(by.id('number'));
    this.addButton = element(by.buttonText('Add'));
    this.addPaymentButton = element(by.css('button[ng-click="saveReservationPayment()"]'));
    this.saveButton = element(by.buttonText('Save'));
    this.saveReservation = element(by.css('button[ng-click="saveReservationWithoutEmail()"]'));
    this.guestName = element(by.id('fl-input-0'));
    this.suggestion = element(by.css('div[ng-click="createNewGuest(searchText)"]'));
    this.guestLastName = element(by.css('input[ng-model="guest.lastName"]'));
    this.guestEmail = element(by.css('input[ng-model="guest.email"]'));
    this.guestNumber = element(by.model('guest.mobileNumber'));
    this.saveGuestButton = element(by.buttonText('Create New'));
    this.windowScreen = element(by.css('.modal-backdrop.am-fade'));
    this.addReservationSummary = element(by.css('button[ng-click="goToSummary()"]'));
    //verification of confirmed booking details in reservation card
    this.standardRoomIcon = element(by.css('div[title="Standard"]'));
    this.deluxeRoomIcon = element(by.css('div[title="Deluxe"]'));
    this.fetchParentAndclickOnReservationBox = function(roomnum)    {
        return element(by.buttonText(roomnum)).element(by.xpath('ancestor::div[4]')).element(by.css('.reservations-well.reservations-well-new.booking-block.text-ellipsis.fa.booking'));
    };
    this.guestnameInCard = element(by.binding('content.roomReservation.guest.firstName'));
    this.numberInCard = element(by.binding('content.roomReservation.guest.mobileNumber'));
    this.emailIdInCard = element(by.binding('content.roomReservation.guest.email'));
    //this.checkInDateInCard = element.all(by.css('div.col-md-6')).get(0);
    //this.checkoutDateInCard = element.all(by.css('div.col-md-6')).get(1);
    this.roomNum1InCard = element.all(by.css('span.badge.confirmed')).get(0);
    this.roomNum2InCard = element.all(by.css('span.badge.confirmed')).get(1);
    this.numberOfRoomInCard = element(by.binding('content.reservation.numberOfRooms'));
    this.sourceOfBookingInCard = element(by.binding('content.reservation.originalSourceName'));
    this.checkinDateInCard = element(by.binding('content.reservation.checkInDate.format("DD")'));
    this.checkInMonthYear = element(by.binding('content.reservation.checkInDate.format("MMM, YYYY") | uppercase'));
    this.checkoutDateInCard = element(by.binding('content.reservation.checkOutDate.format("DD")'));
    this.checkoutMonthYear = element(by.binding('content.reservation.checkOutDate.format("MMM, YYYY") | uppercase'));
    //verification of confirmed booking in reservation details popup
    this.moreOptionsButton = element(by.css('button[title="More Options"]'));
    this.detailsOption = element(by.linkText('Details'));
    this.sourceOfReservationInPopup = element(by.binding('reservation.sourceName'));
    this.reservationRoomType1InPopup = element.all(by.binding('roomReservation.roomTypeName')).get(0);
    this.reservationRoomType2InPopup = element.all(by.binding('roomReservation.roomTypeName')).get(1);
    this.mealPlan1InPopup = element.all(by.binding('roomReservation.mealPlanName')).get(0);
    this.mealPlan2InPopup = element.all(by.binding('roomReservation.mealPlanName')).get(1);
    this.reservationRoomNumber1InPopup = element.all(by.binding('getRoomName(roomReservation.roomId)')).get(0);
    this.reservationRoomNumber2InPopup = element.all(by.binding('getRoomName(roomReservation.roomId)')).get(1);
    this.numberOfAdultsInRoom1InPopup = element.all(by.binding('roomReservation.numberOfAdults')).get(0);
    this.numberOfAdultsInRoom2InPopup = element.all(by.binding('roomReservation.numberOfAdults')).get(1);
    this.checkInDateInPop = element(by.binding('content.reservation.checkInDate.format("DD")'));
    this.checkInMonthAndYearInPopup = element(by.binding('content.reservation.checkInDate.format("MMM, YYYY") | uppercase'));
    this.checkoutDateInPopup = element(by.binding('content.reservation.checkOutDate.format("DD")'));
    this.chechoutMonthAndYearInPopup = element(by.binding('content.reservation.checkOutDate.format("MMM, YYYY") | uppercase'));
    //verification of confirmed booking payment details
    this.netAmountInCard = element.all(by.binding('content.reservation.sellingPrice.currency.sign')).get(0);
    this.dueAmountInCard = element.all(by.binding('content.reservation.sellingPrice.currency.sign')).get(1);
    this.initialPaymentInPopup = element.all(by.css('strong.f18')).get(3);
    //To create enquiry booking
    this.enquiryBookingOption = element(by.linkText('Create Enquiry'));
    this.roomType = element(by.model('roomReservation.roomTypeId'));
    this.mealPlan = element(by.model('roomReservation.mealPlanId'));
    this.roomNumber = element(by.model('roomId'));
    this.numberOfAdults = element(by.model('roomReservation.numberOfAdults'));
    this.discountButton = element(by.buttonText('Discount'));
    this.discountType = element(by.model('discount.type'));
    this.discountValue = element(by.css('input[ng-model="discount.value"]'));
    this.saveDiscount = element(by.css('div.modal-content')).element(by.buttonText('Save'));
    this.yesButton = element(by.buttonText('Yes'));
    this.noButton = element(by.binding('dialog.cancel'));
    //To verify enquired reservation
    this.roomNumInCard = element(by.css('span.badge.confirmed'));
    this.enquiryOption = element(by.linkText('Enquiry'));
    this.arrowOptionOfEnquiry = element.all(by.css('div.row.reservation-card-header.p-v-5.enquiry')).get(1);
    this.moreOptionsForEnquiry = element.all(by.css('div.dropdown-toggle.inline.pointer.pull-right.setting-icon-horizontal')).get(1);
    this.detailsOptionOfEnquiry = element(by.css('li[ng-click="openReservationDetailsModal(reservation)"]'));
   // this.discountValue = element(by.binding('reservation.discount.sellingPrice.total.toFixed(2)'))
    this.checkInTime = element.all(by.css('input[bs-timepicker=""]')).get(0);
    this.checkOutTime = element.all(by.css('input[bs-timepicker=""]')).get(1);

    this.sourceOfReservationInPopup = element(by.binding('reservation.sourceName'));
    this.reservationRoomTypeInPopup = element(by.binding('roomReservation.roomTypeName'));
    this.mealPlanInPopup = element(by.binding('roomReservation.mealPlanName'));
    this.reservationRoomNumberInPopup = element(by.binding('getRoomName(roomReservation.roomId)'));
    this.numberOfAdultsInRoomInPopup = element(by.binding('roomReservation.numberOfAdults'));
    //final verification
    this.checkinIcon = element(by.css('button[ng-click="onReservationSelected(content.reservation)"]'));
    this.roomsToCheckIn = element.all(by.css('input[ng-model="reservationCopy.selectAllRooms"]'));
    this.checkInButton = element(by.css('button[ng-click="checkInRoomReservation($event)"]'));
    this.checkInConfirmation = element.all(by.css('button[ng-click="dialog.hide()"]'));
    this.checkOutIcon = element(by.css('button[ng-click="checkOutReservation(content.reservation)"]'));
    this.checkoutButton = element(by.id('early_check_out_submit_id'));
    this.finalcheckoutButton = element(by.css('button[ng-click="checkOut($event)"]'));
    this.checkOutConfirm = element(by.binding('dialog.ok'));
    this.gotoReservationCalButton = element.all(by.css('button[ng-click="$hide()"]'));
    this.convertToConfirm = element.all(by.css('li[ng-click="convertToConfirmedAndSave(reservation)"]'));
    this.cancelBookingIcon = element.all(by.css('button[ng-click="openCancellationModal(content.reservation, $event)"]'));
    this.cancelBookingButton = element.all(by.css('button[ng-click="reservation.sendMail = false"]'));
    this.nextButton = element.all(by.buttonText('Next'));
    //this.multipleOptions = element.all(by.css('button[title="More Options"]'));

}
module.exports = reservationCalendar;