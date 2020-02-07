describe('Verify whether webdriveruniversity links on homepage work correcly', function() {
    it('check that the contact us button opens the contact us page', function(done) {
        browser.setViewportSize({
            width: 1200,
            height: 800
        });
        browser.url('/')
        const title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');

        browser.click('#contact-us');
        const tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);

        const contactUsTitle = browser.getTitle();
        expect(contactUsTitle).to.equal('WebDriver | Contact Us');

        const contactUsUrl = browser.getUrl();
        expect(contactUsUrl).to.include('Contact-Us', 'URL mismatch');
        browser.close();
    });

    it('check that login button opens the login portal page', function(done) {
        browser.url('/');
        const title = browser.getTitle();
        title.should.equal('WebDriverUniversity.com');

        browser.click('#login-portal');
        const tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);

        const LoginPortalTitle = browser.getTitle();
        expect(LoginPortalTitle).to.equal('WebDriver | Login Portal');

        const contactUsUrl = browser.getUrl();
        expect(contactUsUrl).to.include('Login-Portal', 'URL mismatch');
        browser.close();
    });
});