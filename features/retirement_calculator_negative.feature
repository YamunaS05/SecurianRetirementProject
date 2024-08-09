Feature: Negative Scenario for pre-retirement calculator.

  Background:
    Given User is on retirement calculator page

  Scenario: User submitting all as empty fields and checking the error message
    When user should fill "allEmpty" fields on pre-retirement calculator page
    Then user should see error message for "allEmpty" fields

  Scenario: User submitting current age greater than retirement age.
    When user should fill "invalid age" fields on pre-retirement calculator page
    Then user should see error message for "invalid age" fields

  Scenario: User submitting current age greater than retirement age.
    When user should fill "age greater than retirement age" fields on pre-retirement calculator page
    Then user should see error message for "age greater than retirement age" fields

  Scenario: User submitting current age greater than 120
    When user should fill "age greater than 120" fields on pre-retirement calculator page
    Then user should see error message for "age greater than 120" fields
