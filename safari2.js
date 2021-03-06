const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');


var Eyes = require('eyes.selenium').Eyes;
var eyes = new Eyes();

eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
eyes.setForceFullPageScreenshot(true);
eyes.setStitchMode(Eyes.StitchMode.CSS);

describe('USA TODAY LIFE', function() {
  let driver;
  
  test.beforeEach(function() {
    driver = new Builder().forBrowser('safari').build();
    eyes.open(driver, 'Github', 'Home Page', {width: 1440, height: 1012});
    driver.get('http://www.github.com');
    driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
    driver.executeScript("window.scrollBy(0,-250)", "");
  });

  test.it('Test Example', function theTestFunction() {
     eyes.checkWindow('Life');
     eyes.close(false);
  });

  test.afterEach(function() {
    driver.quit();
    eyes.abortIfNotClosed();
  });
});