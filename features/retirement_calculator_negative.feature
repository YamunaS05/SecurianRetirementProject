Feature: Calculate retirement savings using securian pre-retirement calculator for nagative scenario

  Background:
    Given User is on securian pre-retirement calculator page

  Scenario Outline: user checking the error message for pre-retirement calculator with different set of invalid sets data
  
    When user should fill "<invalidsetdata>" fields on pre-retirement calculator page
    And user submits the pre-retirement calculator form
    Then user should see error message for "<invalidsetdata>" fields

    Examples:
      | invalidsetdata                  |
      | all empty                       |
      | invalid age                     |
      | age greater than retirement age |
      | age greater than 120            |
