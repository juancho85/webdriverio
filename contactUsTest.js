var webdriverio = require('webdriverio');
var options = {desiredCapabilities: {browserName: 'chrome'}};
var client = webdriverio.remote(options);

client
    .init() // set viewport size to avoid issues of not being able to click
    .setViewportSize({
        width: 1200,
        height: 800
    })
    .url('http://www.webdriveruniversity.com/')
    .getTitle().then(function (title) {
        console.log('Title is: ' + title); // Log navigation through the home page
    })
    .click('#contact-us')
    .pause(3000) // Pause to see what is going on (value in milliseconds)
    .end();