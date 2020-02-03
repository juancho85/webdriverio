const ContactUs_Page = require('../pageObjects/ContactUs_Page');
const request = require('sync-request');

beforeEach(function() {
  browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {
  const res = request('GET', 'https://jsonplaceholder.typicode.com/comments?postId=1');
  const contactUsDetails = JSON.parse(res.getBody().toString('utf8'));

  function setFirstName(firstName) {
    return ContactUs_Page.firstName.setValue(firstName);
  }

  function setLastName(lastName) {
    return ContactUs_Page.lastName.setValue(lastName);
  }

  function setEmailAddress(emailAddress) {
    return ContactUs_Page.emailAddress.setValue(emailAddress);
  }

  function setComments(comments) {
    return ContactUs_Page.comments.setValue(comments);
  }

  function clickSubmitButton() {
    return ContactUs_Page.submitButton.click();
  }

  function confirmSuccessfulSubmissions() {
    const validateSubmissionHeader = browser.waitUntil(function () {
      return ContactUs_Page.successfulSubmissionHeader.getText() === 'Thank You for your Message!'
    }, 3000);
    expect(validateSubmissionHeader, 'Successful submission message does not exist').to.be.true;
  }

  function confirmUnsuccessfulSubmissions() {
    expect(ContactUs_Page.unsuccessfulSubmissionHeader.getText()).to.include('Error: all fields are required');
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