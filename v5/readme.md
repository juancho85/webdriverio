# Testing WebdriverIO V4
## Initial setup
* Installing the dependencies and launching the standalone selenium server
```
npm install
./node_modules/.bin/selenium-standalone install
./node_modules/.bin/selenium-standalone start
```

* Launching a test
`node <testName>`

## Generating a WDIO conf file
```bash
juancho@juancho-ubuntu:~/tuts/webdriverIoFramework$ ./node_modules/.bin/wdio

=========================
WDIO Configuration Helper
=========================

? Where do you want to execute your tests? On my local machine
? Which framework do you want to use? mocha
? Shall I install the framework adapter for you? Yes
? Where are your test specs located? ./tests/**/*.js
? Which reporter do you want to use? 
? Do you want to add a service to your test setup? 
? Level of logging verbosity silent
? In which directory should screenshots gets saved if a command fails? ./errorShots/
? What is the base url? www.webdriveruniversity.com

Installing wdio packages:

Packages installed successfully, creating configuration file...

Configuration file was created successfully!
To run your tests, execute:

$ wdio wdio.conf.js

```
* Install wdio selenium standalone service to have wdio launch the seleniun server
`npm install wdio-selenium-standalone-service --save-dev`

* Run a specific test
`npm test -- --spec=tests/ajaxClick.js`

* Run the tests - Will use the wdio config file
`npm test`
