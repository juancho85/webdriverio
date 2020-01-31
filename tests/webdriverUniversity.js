const expect = require('chai').expect;
const should = require('chai').should();

describe('Verify whether webdriveruniversity links on homepage work correcly', function() {
    it('check that the contact us button opens the contact us page', function(done) {
        browser.setViewportSize({
            width: 1200,
            height: 800
        });
        browser.url('/')
        const title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');
        console.log('Title is: ' + title); // Log navigation through the home page
        browser.click('#contact-us');
        browser.pause(3000); // Pause to see what is going on (value in milliseconds)
    });

    it('check that login button opens the login portal page', function(done) {
        browser.url('/');
        browser.click('#login-portal');
        const title = browser.getTitle();
        title.should.equal('WebDriverUniversity.com');
        console.log('Title is: ' + title);
        browser.pause(3000);
    });
});