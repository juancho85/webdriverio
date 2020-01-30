describe('Verify whether webdriveruniversity links on homepage work correcly', function() {
    it('check that the contact us button opens the contact us page', function(done) {
        return browser
            .setViewportSize({
                width: 1200,
                height: 800
            })
            .url('http://www.webdriveruniversity.com/')
            .getTitle().then(function (title) {
            console.log('Title is: ' + title); // Log navigation through the home page
        })
            .click('#contact-us')
            .pause(3000); // Pause to see what is going on (value in milliseconds)
    });

    it('check that login button opens the login portal page', function(done) {
        return browser
            .url('http://www.webdriveruniversity.com/')
            .click('#login-portal')
            .getTitle().then(function (title) {
            console.log('Title is: ' + title);
        })
            .pause(3000);
    });
});