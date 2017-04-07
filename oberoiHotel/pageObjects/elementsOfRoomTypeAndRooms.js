/**
 * Created by swathi on 6/4/17.
 */
var rooms = function(){
    //CreateRoomTypesAndRooms
    this.addButton = element(by.buttonText('ADD'));
    this.roomTypes = element(by.css('a[ui-sref="app.chains.properties.property.roomTypes"]'));
    this.roomTypeAddingButton = element(by.css('i.md.md-add.f20'));
    this.roomName = element(by.id('inputName'));
    this.roomDescription = element(by.id('textAreaDescription'));
    this.baseOccupancy = element(by.id('baseOccupancy'));
    this.maxExtraBed = element(by.id('maxExtraBed'));
    this.roomtype = element(by.model('selectedEntryId'));
    this.maxChildrenWithoutBed = element(by.id('maxChildrenWithoutBed'));
    this.saveButton = element(by.buttonText('Save'));
    //this.roomCreateButton = element(by.css('.btn.-primary.pullbtn-right.ng-scope'));
    this.saveButton = element(by.css('.md-primary.md-button.md-default-theme'));
    this.roomCreateButton = element(by.css('button.btn.btn-primary.pull-right'));
    this.roomType1 = element.all(by.css('img[src="/assets/img/card-gradient.png"]')).get(0);
    this.roomType2 = element.all(by.css('img[src="/assets/img/card-gradient.png"]')).get(1);
    this.addRoomButton = element(by.css('.btn.btn-primary.dropdown-toggle'));
    this.bulkCreateRoomOption = element(by.linkText('Bulk Create Room'));
    this.dependentRoomType = element(by.id('dependent_room_type_checkbox_id'));
    this.plusButton = element(by.css('.btn.btn-primary.dropdown-toggle'));
    this.startingNumber = element(by.css('#startingNumber'));
    this.increment = element(by.model('bulkCreate.increment'));
    this.stopANumber = element(by.css('input[ng-model="bulkCreate.stopNumber"]'));
    this.nonSmokingButton = element(by.css('button[ng-click="bulkCreate.smoking = false"]'));
    this.bulkCreateButton = element(by.css('button.btn.form-group.btn-primary.pull-right'));
    this.bedType = element.all(by.css('select.form-control')).get(0);
    this.roomView = element.all(by.css('select.form-control')).get(1);
    this.floor = element.all(by.css('select.form-control')).get(2);
}
module.exports = rooms;