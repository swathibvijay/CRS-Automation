Feature: To test CRS using Protractor and Cucumber Test

  Scenario: To create property and test booking
    Given Susmita go to "https://crs.axisrooms.com"
    When Susmita enters login credentials and clicks login
    And Susmita navigates to Reservation Calendar
#    And Susmita would like to create confirmed booking
#        Then Susmitha likes to create booking for 2 days for 2 rooms for 3 adults with 1 extra bed with initial payment 300
#        And Boom!! Susmita is done with booking
#        When Susmita wants to verify confirmed booking
#        Then Susmita navigates to reservation calendar
#        And Susmita verifies booking details on reservation details popup and resrvation card
#        And Susmita verifies payment record
#    Then Susmita goes to reservation calendar
#    When Susmita wants to create an enquiry booking
#        Then Susmita creates enquiry booking 1 room booking for 3 days with 10% discount on sell rate
#        And Susmita wants to verify enquiry booking
#        And Susmita go to Reservation calendar
#        And Susmita verifies booking details
##        And Susmita verifies discount value
##
###    When Susmita would like to create on-hold booking
###        Then Susmita creates on-hold booking with expiry after 30 sec of current time
###        And Susmita navigates to reservation calendar
###        And Susmita verifies on-hold booking
###        And waits for 30 sec collapse and checks booking expires or not
###
#    When Susmita wants to create same day checkin-checkout booking
#        Then Susmita return to reservation calendar
#        And Susmita verifies the booking
#    When Susmita decides to check complete booking flow
#        Then Susmita navigates to check-in confirmed booking
#        And Does a checkout by applying charges for all stay days
#        And Susmita converts the enquiry into confirmed booking
#        And Susmita cancells the booking
        And Susmita check-in same day checkin checkout booking
        And does room change if available
    And Finally, she took a deep breath after verifying the complete booking flow.








