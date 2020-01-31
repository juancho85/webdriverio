beforeEach(function() {
  browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {
  let contactUsPageTitle;
  beforeEach(function() {
    contactUsPageTitle = browser.getTitle();
    console.log(`navigated to contact Us page. Title is ${contactUsPageTitle}`);
  });

  it('Should be able to submit a successful submission via contact us form', function(done) {
    browser.setValue("[name='first_name']", 'Paco');
    browser.setValue("[name='last_name']", 'Palotes');
    browser.setValue("[name='email']", 'paco@test.com');
    browser.setValue("[name='message']", 'Hola qué tal?');
    browser.click("[type='submit']");
    browser.waitUntil(
        function() {
          return browser.getTitle() !== contactUsPageTitle
        },
        2000,
        "No navigation to another page after contact us form submission"
    );
    const reply = browser.isExisting('#contact_reply');
    expect(reply).to.equal(true);
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']", 'Pepe');
    browser.setValue("[name='last_name']", 'Pelota');
    browser.setValue("[name='email']", 'pepe@test.com');
    browser.click("[type='submit']");
    browser.waitUntil(
        function() {
          return browser.getTitle() !== contactUsPageTitle
        },
        2000,
        "No navigation to another page after contact us form submission"
    );
    const reply = browser.isExisting('#contact_reply');
    expect(reply).to.equal(false);
  });


  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']", 'Paola');
    browser.setValue("[name='email']", 'paola@test.com');
    browser.click("[type='submit']");
    browser.waitUntil(
        function() {
          return browser.getTitle() !== contactUsPageTitle
        },
        2000,
        "No navigation to another page after contact us form submission"
    );
    const reply = browser.isExisting('#contact_reply');
    expect(reply).to.equal(false);
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']", 'Patricia');
    browser.setValue("[name='last_name']", 'Perales');
    browser.click("[type='submit']");
    browser.waitUntil(
        function() {
          return browser.getTitle() !== contactUsPageTitle
        },
        2000,
        "No navigation to another page after contact us form submission"
    );
    const reply = browser.isExisting('#contact_reply');
    expect(reply).to.equal(false);
  });
});