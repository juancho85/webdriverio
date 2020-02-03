const request = require('sync-request');

browser.addCommand("submitDataViaContactUsForm", function (firstName, lastName, emailAddress, comments) {
  if(firstName) {
    browser.setValue("[name='first_name']", firstName);
  }
  if(lastName) {
    browser.setValue("[name='last_name']", lastName);
  }
  if(emailAddress) {
    browser.setValue("[name='email']", emailAddress);
  }
  if(comments) {
    browser.setValue("[name='message']", comments);
  }
  browser.click("[type='submit']");
});

beforeEach(function() {
  browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {
  const res = request('GET', 'https://jsonplaceholder.typicode.com/comments?postId=1');
  const contactUsDetails = JSON.parse(res.getBody().toString('utf8'));
  let contactUsPageTitle;
  beforeEach(function() {
    contactUsPageTitle = browser.getTitle();
    console.log(`navigated to contact Us page. Title is ${contactUsPageTitle}`);
  });

  contactUsDetails.forEach(function (contactUsDetail) {
    it('Should be able to submit a successful submission via contact us form', function(done) {
      browser.submitDataViaContactUsForm('Paco', 'Palotes', contactUsDetail.email, contactUsDetail.body);
      const successfulContactConfirmation = browser.isExisting('#contact_reply h1');
      expect(successfulContactConfirmation, 'Successful submission message does not exist').to.be.true;
      const successFullSubmissionText = browser.getText('#contact_reply h1');
      expect(successFullSubmissionText).to.equal('Thank You for your Message!');
    });
  });


  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']", 'Pepe');
    browser.setValue("[name='last_name']", 'Pelota');
    browser.setValue("[name='email']", 'pepe@test.com');
    browser.click("[type='submit']");

    const successfulContactConfirmation = browser.isExisting('#contact_reply h1');
    expect(successfulContactConfirmation, 'Successful submission message does not exist').to.be.false;
  });


  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']", 'Paola');
    browser.setValue("[name='email']", 'paola@test.com');
    browser.click("[type='submit']");

    const successfulContactConfirmation = browser.isExisting('#contact_reply h1');
    expect(successfulContactConfirmation, 'Successful submission message does not exist').to.be.false;
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']", 'Patricia');
    browser.setValue("[name='last_name']", 'Perales');
    browser.click("[type='submit']");

    const errorText = browser.getText('body');
    expect(errorText).to.include('Error: all fields are required');
  });
});