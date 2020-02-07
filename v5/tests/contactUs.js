const ContactUs_Page = require('../pageObjects/ContactUs_Page');

beforeEach(async() => {
  await browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', () => {


  it('Test 1: Should be able to submit a successful submission via contact us form', () => {
    ContactUs_Page.submitFormWithData('Paco', 'Palotes', 'paco@palotes.com', 'Hello');
    // TODO: Parametrize max timeouts: SMALL, MEDIUM, LARGE
    ContactUs_Page.successfulSubmissionHeader.waitForDisplayed(3000);
    expect(ContactUs_Page.successfulSumbissionHeaderText).to.equal("Thank You for your Message!");
  });

  it('Test 2: Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    ContactUs_Page.setFirstName('Paco');
    ContactUs_Page.setLastName('Palotes');
    ContactUs_Page.clickSubmitButton();
    expect(ContactUs_Page.unsuccessfulSumbissionHeaderText).to.have.string("Error: all fields are required");
  });
});