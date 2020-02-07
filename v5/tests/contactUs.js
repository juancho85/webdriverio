const ContactUs_Page = require('../pageObjects/ContactUs_Page');
const request = require('sync-request');

beforeEach(function() {
  browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {
  const res = request('GET', 'https://jsonplaceholder.typicode.com/comments?postId=1');
  const contactUsDetails = JSON.parse(res.getBody().toString('utf8'));

  contactUsDetails.forEach(function (contactUsDetail) {
    it('Should be able to submit a successful submission via contact us form', function(done) {
      ContactUs_Page.submitFormWithData('Paco', 'Palotes', contactUsDetail.email, contactUsDetail.body);
    });
  });


  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    ContactUs_Page.setFirstName('Paco');
    ContactUs_Page.setLastName('Palotes');
    ContactUs_Page.setEmailAddress('paco@palotes.com');
    ContactUs_Page.clickSubmitButton();
    ContactUs_Page.confirmUnsuccessfulSubmission();
  });


  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    ContactUs_Page.setFirstName('Paola');
    ContactUs_Page.setEmailAddress('paola@perales.com');
    ContactUs_Page.setComments('A comment');
    ContactUs_Page.clickSubmitButton();
    ContactUs_Page.confirmUnsuccessfulSubmission();
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    ContactUs_Page.setFirstName('Paco');
    ContactUs_Page.setLastName('Palotes');
    ContactUs_Page.clickSubmitButton();
    ContactUs_Page.confirmUnsuccessfulSubmission();
  });
});