describe('Test that the button is clickable once the Ajax loader completes loading', function() {
    it('Attempt to click the button ASAP', function(done) {
        browser.url('/Ajax-Loader/index.html');
        browser.click('#button1'); // Expect it to fail
    });

    it('Attempt to click the button after 7 seconds', function(done) {
        browser.url('/Ajax-Loader/index.html');
        // Increase the default timeout of 10 seconds
        this.timeout(20000);
        browser.pause(7000);
        browser.click('#button1');
        browser.pause(7000);
    });
});