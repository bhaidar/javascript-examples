var config = {
    host: '0.0.0.0',
    port: 4444,
    path: '/wd/hub',
    
   capabilities: [{
          browserName: 'chrome',
          chromeOptions: {
          // to run chrome headless the following flags are required
          // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
          // args: ['--headless', '--disable-gpu'],       
          }        
      }
    ],
    
    services: [
       'selenium-standalone',
       'eyes.selenium'
    ],
    
    applitools: {
        apiKey: process.env.APPLITOOLS_API_KEY,     //Required
        appName: "My Application",                  //Recommended
        viewport: {width: 1000, height: 800},       //Recommended for web, don't use in mobile
        batchName: "Config Batch",                  //Optional
        globalMatchLevel: "Strict",                 //Optional
        disableCSSScrolling: false,                 //Optional
        disableFullPageScreenshot: false,           //Optional
        serverUrl: "https://eyes.applitools.com"    //Optional
    },
    
    specs: [
        './specs/**/*.js'
    ],

    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    //baseUrl: 'https://applitools.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 10 * 60000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        enableTimeouts: false
    },
}

exports.config = config