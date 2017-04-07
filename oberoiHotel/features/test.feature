Feature: To test CRS using Protractor and Cucumber Test

  Scenario: To create property and test booking
    Given Raju go to "https://crs.axisrooms.com"
    When Raj enters login credentials
    And Raj would like to edit all the fields of a property..!
    And  Raj edits the basic information of the property
    And Raj adds addtional information such as distance from location of property
    And Raj edits policy details
    And Raj edits bank and account details
    And Raj enters contacts details
    And Finally Raj edits Bookings Reference Configuration
    And He navigates to dashboard
    And Raj creates 2 Room Types with 5 rooms each
    And Raj set up 1 meal plan
    And Raj sets tax plans for property
    And Raj sets price for room types and meal plan for next 2 months.
    And Raj navigates to reservation calendar
    And Raj creates reservation for next 2 days
    And He verifies the resevation
