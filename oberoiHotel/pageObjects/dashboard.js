var dashboardPage = function(){
    //Dashboard
    this.dashBoard = element.all(by.css('.card-content')).get(0);
    //CountRoomNumber
    this.addButton = element(by.buttonText('ADD'));
    this.roomCount = element.all(by.css('button.btn.btn-block.room-number.no-p-t.no-p-b.dropdown-toggle.occupancy'));
}
module.exports = dashboardPage;
