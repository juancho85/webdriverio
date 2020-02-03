const request = require('sync-request');

beforeEach(function() {
  browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {
  const res = request('GET', 'https://jsonplaceholder.typicode.com/comments?postId=1');
  const contactUsDetails = JSON.parse(res.getBody().toString('utf8'));

  const firstNameSelector = "[name='first_name']";
  const lastNameSelector = "[name='last_name']";
  const emailSelector = "[name='email']";
  const commentsSelector = "[name='message']";
  const submitSelector = "[type='submit']";
  const successfulSubmissionsSelector = "#contact_reply h1";
  const unsuccessfulSubmissionsSelector = "body";

  function setFirstName(firstName) {
    browser.setValue(firstNameSelector, firstName);
  }

  function setLastName(lastName) {
    browser.setValue(lastNameSelector, lastName);
  }

  function setEmailAddress(emailAddress) {
    browser.setValue(emailSelector, emailAddress);
  }

  function setComments(comments) {
    browser.setValue(commentsSelector, comments);
  }

  function clickSubmitButton() {
    browser.click(submitSelector);
  }

  function confirmSuccessfulSubmissions() {
    const validateSubmissionHeader = browser.waitUntil(function () {
      return browser.getText(successfulSubmissionsSelector) === 'Thank You for your Message!'
    }, 3000);
    expect(validateSubmissionHeader, 'Successful submission message does not exist').to.be.true;
  }

  function confirmUnsuccessfulSubmissions() {
    expect(browser.getText(unsuccessfulSubmissionsSelector)).to.include('Error: all fields are required');
  }

  contactUsDetails.forEach(function (contactUsDetail) {
    it('Should be able to submit a successful submission via contact us form', function(done) {
      setFirstName('Paco');
      setLastName('Palotes');
      setEmailAddress(contactUsDetail.email);
      setComments(contactUsDetail.body);
      clickSubmitButton();
      confirmSuccessfulSubmissions();
    });
  });


  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    setFirstName('Paco');
    setLastName('Palotes');
    setEmailAddress('paco@palotes.com');
    clickSubmitButton();
    confirmUnsuccessfulSubmissions();
  });


  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    setFirstName('Paola');
    setEmailAddress('paola@perales.com');
    clickSubmitButton();
    confirmUnsuccessfulSubmissions();
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    setFirstName('Paco');
    setLastName('Palotes');
    clickSubmitButton();
    confirmUnsuccessfulSubmissions();
  });
});