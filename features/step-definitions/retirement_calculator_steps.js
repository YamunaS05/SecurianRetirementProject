
const { Given, When, Then } = require('@wdio/cucumber-framework');

const assert = require('assert');
const retirementPage = require('../pageobjects/retirement.page');



Given(/^User is on securian pre-retirement calculator page$/, async () => {
    await retirementPage.openPageUrl();
});


When(/^user should fill "([^"]*)" fields on pre-retirement calculator page$/, async function(string){
    await retirementPage.enterUserDetails(string);
    
});

Then(/^user should see error message for "([^"]*)" fields$/, async function(string){
	await retirementPage.submitValidateErrorMessage(string);
});

When(/^user selects social security field as "([^"]*)" on preretirement calculator$/, async function(string){
    await retirementPage.selectSocialSecurityOption(string);
    
});

Then(/^user should "([^"]*)" social security fields as visible$/, async function(string){
    await retirementPage.assertYesNoSocialSecurity(string);
});

Then(/^user should able to see my retirement amount "([^"]*)" fields$/, async function(string){
    await retirementPage.assertRetirementAmount(string);
});

Then(/^user modifies the "([^"]*)" calculator values  on Preretirement calculator$/, async function(string){
    await retirementPage.enterDefaultValues(string);
    
});












When(/^the user selects "([^"]*)" for Social Security$/, async function(testCase){
	const securityData = socialSecurityData[testCase];
    await socialSecurityPage.selectSocialSecurityOption(securityData.socialSecurityOption);
});



Then(/^Marital status and override radio button should be visible for "([^"]*)"$/, async function(testCase){
	const data = socialSecurityData[testCase];
    const isMaritalStatusVisible = await socialSecurityPage.isMaritalStatusVisible();
    assert.strictEqual(isMaritalStatusVisible, data.expectedMaritalStatusVisible, "Marital Status radio button visibility should be ${data.expectedMaritalStatusVisible}");
    const isOverrideSocialSecurityVisible = await socialSecurityPage.isOverrideSocialSecurityVisible();
    assert.strictEqual(isOverrideSocialSecurityVisible, data.expectedOverrideSocialSecurity, "Override Social Security field visibility should be ${data.expectedOverrideSocialSecurity}");
});


When(/^the user select "([^"]*)" for social security$/,  async function(option){
    await socialSecurityPage.selectSocialSecurityOption(option);
});

When(/^the user select "([^"]*)" for marital status$/, async function(status){
    await socialSecurityPage.selectMaritalStatusOption(status);
});

