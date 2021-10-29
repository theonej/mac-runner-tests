import wd from 'wd';

const caps = {
    'build':'',
    'name':'iOsTest',
    'platformName':'iOS',
    'platformVersion':'14.5',
    'deviceName':'iPhone 12',
    'app':'https://saucelabs-mac-runner-apps.s3.amazonaws.com/TestApp.app.zip'
};

const proxyUrl = 'http://127.0.0.1:9001/proxy/wd'
const driver = wd.promiseRemote(proxyUrl);

driver
    .init(caps)
    .fin(()=>{
        console.info(`driver initialized;  quiting`);
        return driver.quit();
    })
    .then(response=>{
        console.info(response);
    })
    .done(response=>{
        console.info(response);
    });