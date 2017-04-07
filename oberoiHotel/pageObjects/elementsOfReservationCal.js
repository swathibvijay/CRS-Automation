/**
 * Created by swathi on 6/4/17.
 */
var reservationcal = function(){
    //navigateToReservationCalendar
    this.reservationCalendar = element(by.css('a[href="/chains/91/properties/355/reservation-calendar?allReservations=false"]'));
    //checkingBookingsOnReservation
    this.addButton = element(by.buttonText('ADD'));
    this.addButtonForBooking = element.all(by.css('.btn.btn-primary.f15.p-h-5.m-t-5.dropdown-toggle')).get(0);
    this.createBookingOption = element.all(by.css('a[ui-sref="^.reservations.create({reservationId:0})"]')).get(0);
    this.reservationCheckinDate = element(by.css('input[ng-model="reservation.checkInDate._d"]'));
    this.reservationCheckOutDAte = element(by.css('input[ng-model="reservation.checkOutDate._d"]'));
    this.noOfRoomsToReserve = element(by.css('input[ng-model="reservation.numberOfRooms"]'));
    this.sourceOfBooking = element(by.css('select[ng-model="source"]'));
    this.reservationRoomType = element(by.css('select[ng-model="roomReservation.roomTypeId"]'));
    this.reservationMealPlan = element(by.css('select[ng-model="roomReservation.mealPlanId"]'));
    this.reservationRoomNo = element(by.css('select[ng-model="roomId"]'));
    this.noOfAdults = element.all(by.css('input[ng-model="roomReservation.numberOfAdults"]')).get(0);
    this.earlyCheckInLink = element(by.css('strong[ng-click="openReservationLateEarlyCheckinModal()"]'));
    this.earlyCheckInOption = element(by.model('roomReservation.earlyLateCheckIn'));
    this.setEarlyCheckin = element(by.css('button[ng-click="setConfig()"]'));
    this.addOn = element(by.css('input[ng-model="$mdAutocompleteCtrl.scope.searchText"]'));
    this.addOnQuantity = element(by.css('input[ng-model="addOnList.quantity"]'));
    this.guestName = element.all(by.css('input[ng-model="$mdAutocompleteCtrl.scope.searchText"]')).get(1);
    this.suggestion = element(by.css('div[ng-click="createNewGuest(searchText)"]'));
    this.guestLastName = element(by.css('input[ng-model="guest.lastName"]'));
    this.guestEmail = element(by.css('input[ng-model="guest.email"]'));
    this.guestNumber = element(by.model('guest.mobileNumber'));
    this.saveGuestButton = element(by.buttonText('Create New'));
    this.reservationRemark = element(by.model('remark.remarkData'));
    this.reservationType = element(by.model('selectedEntryId'));
    this.addReservationRemark = element(by.buttonText('Add Remark'));
    this.windowScreen = element(by.css('.modal-backdrop.am-fade'));
    this.addReservationSummary = element(by.css('button[ng-click="goToSummary()"]'));
    this.saveReservationSummary = element(by.css('button[ng-click="saveReservationWithoutEmail()"]'));
    //checkRoomAndPricing
    this.addButton = element(by.buttonText('ADD'));
    this.standardRoomIcon = element(by.css('div[title="Standard"]'));
    this.fetchParentAndclickOnReservationBox = function(roomnum)    {
        return element(by.buttonText(roomnum)).element(by.xpath('ancestor::div[4]')).element(by.css('.reservations-well.reservations-well-new.booking-block.text-ellipsis.fa.booking'));
    };
    this.detailsIcon = element(by.linkText('Details'));
    this.saveButton = element(by.buttonText('Save'));
    this.roomTypeInReservationCal = element.all(by.css('div[title="Standard"]')).get(1);
    this.getRoomNum = element(by.css('div.room-number'));
    this.checkinDate = element(by.binding('content.reservation.checkInDate.format("DD")'));
    this.checkinMonthYear = element(by.binding('content.reservation.checkInDate.format("MMM, YYYY") | uppercase'));
    this.checkoutDate = element(by.binding('content.reservation.checkOutDate.format("DD")'));
    this.checkoutMonthYear = element(by.binding('content.reservation.checkOutDate.format("MMM, YYYY") | uppercase'));
    this.fetchedGuestName = element(by.binding('content.roomReservation.guest.firstName,content.roomReservation.guest.lastName'));
}
module.exports = reservationcal;