Feature: Negative Scenario for pre-retirement calculator.

  Background:
    Given User is on securian pre-retirement calculator page

  Scenario Outline: user checking the error message for preretirement calculator with different invalid sets of data
    When user should fill "<invalidSetDATA>" fields on pre-retirement calculator page
    Then user should see error message for "<invalidSetDATA>" fields

      Examples:
      | invalidSetDATA  |
      | all empty    |
      |invalid age|
      | age greater than retirement age    |
      |age greater than 120|

