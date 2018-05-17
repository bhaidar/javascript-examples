//Install npm package: npm install '@applitools/eyes.webdriverio' --save-dev
//Start appium server
//Run: node webdriverio-android.js

async function main() {
    const webdriverio = require('webdriverio');

    //Open a Chrome Android browser
    const client = webdriverio.remote({
        port: 4723,
        logLevel: 'verbose',
        desiredCapabilities: {
            platformName: 'Android',
            browserName: 'chrome',
            deviceName: 'android',
            //app: webviewApp
        }
    });
    
    let browser = client.init();

    const {Eyes, Target} = require('@applitools/eyes.webdriverio');
    let eyes = new Eyes();
    eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
    
    var ConsoleLogHandler = require('eyes.selenium').ConsoleLogHandler;
    eyes.setLogHandler(new ConsoleLogHandler(true));

    try {

        // Start the test and set the browser's viewport size to 800x600.
        await eyes.open(browser, 'Hello World Android', 'My First WebdriverIO Android Test!');

        // Navigate the browser to the "hello world!" web-site.
        await browser.url('https://applitools.com/helloworld');

        // Visual checkpoint #1.
        await eyes.check('Main Page', Target.window());

        // Click the "Click me!" button.
        await browser.click('button');

        // Visual checkpoint #2.
        await eyes.check('Click!', Target.window());

        // End the test.
        await eyes.close();

    } finally {

        // Close the browser.
        await browser.end();

        // If the test was aborted before eyes.close was called ends the test as aborted.
        await eyes.abortIfNotClosed();

    }

}

main();