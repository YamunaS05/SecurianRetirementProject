Feature: Positive Scenario for pre-retirement calculator.

  Background:
    Given User is on securian pre-retirement calculator page

Scenario: User selecting Social Security as yes option
    When user selects social security field as "yes" on preretirement calculator
    Then user should "see" social security fields as visible

  Scenario: User selecting Social Security as no option
    When user selects social security field as "no" on preretirement calculator
    Then user should "not see" social security fields as visible

 Scenario Outline: user entering required and all fields on pre-retirement calculator page
    When user should fill "<requiredAll>" fields on pre-retirement calculator page
    Then user should able to see my retirement amount "<requiredAll>" fields

     Examples:
      | requiredAll  |
      | required    |
      |all|

 Scenario: user entering the default assumption values on pre-retirement calculator
 When user should fill "required" fields on pre-retirement calculator page
 Then user modifies the "default" calculator values  on Preretirement calculator