
const { Given, When, Then } = require('@wdio/cucumber-framework');

const assert = require('assert');
const retirementPage = require('../pageobjects/retirement.page');


Given(/^User is on securian pre-retirement calculator page$/, async () => {
    await retirementPage.openPageUrl();
});

When(/^user should fill "([^"]*)" fields on pre-retirement calculator page$/, async function(string){
    await retirementPage.enterUserDetails(string);
    
});

When(/^user submits the pre-retirement calculator form$/, async function(){
    await retirementPage.submitCalculatorForm();
    
});

Then(/^user should see error message for "([^"]*)" fields$/, async function(string){
	await retirementPage.submitValidateErrorMessage(string);
});

When(/^user selects social security field as "([^"]*)" on pre-retirement calculator$/, async function(string){
    await retirementPage.selectSocialSecurityOption(string);
    
});

Then(/^user should "([^"]*)" social security fields as visible$/, async function(string){
    await retirementPage.assertYesNoSocialSecurity(string);
});

Then(/^user should able to see retirement saving amount for "([^"]*)" fields$/, async function(string){
    await retirementPage.assertRetirementAmount(string);
});

Then(/^user modifies the "([^"]*)" calculator values on pre-retirement calculator$/, async function(string){
    await retirementPage.enterDefaultValues(string);
    
});