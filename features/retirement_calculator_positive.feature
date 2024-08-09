Feature: Calculate retirement savings using securian pre-retirement calculator for positive scenario

  Background:
    Given User is on securian pre-retirement calculator page

  Scenario Outline: user submits the pre-retirement calculator form with required fields and all fields
    When user should fill "<requiredall>" fields on pre-retirement calculator page
    And user submits the pre-retirement calculator form
    Then user should able to see retirement saving amount for "<requiredall>" fields

    Examples:
      | requiredall |
      | required    |
      | all         |

  Scenario: user submits the default assumption values on pre-retirement calculator
    When user should fill "required" fields on pre-retirement calculator page
    Then user modifies the "default" calculator values on pre-retirement calculator
    And user submits the pre-retirement calculator form
    And user should able to see retirement saving amount for "<default>" fields

  Scenario: user selects social security option as enable/disable on pre-retirement calculator page
    When user selects social security field as "yes" on pre-retirement calculator
    Then user should "see" social security fields as visible
    When user selects social security field as "no" on pre-retirement calculator
    Then user should "not see" social security fields as visible
