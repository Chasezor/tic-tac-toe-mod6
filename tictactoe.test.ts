import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await driver.findElement(By.id('start-game'));
    await button.click();
    
});

test('Click game board', async () => {

    let button = await driver.findElement(By.id('cell-4'));
    await button.click();
    
});

test('Check top left', async () => {

    let button = await driver.findElement(By.id('cell-0'));
    await button.click();
    
});

test('Check bottom left', async () => {

    let button = await driver.findElement(By.id('cell-6'));
    await button.click();
    
});

test('Check top right', async () => {

    let button = await driver.findElement(By.id('cell-2'));
    await button.click();
    
});

test('Click bottom right', async () => {

    let button = await driver.findElement(By.id('cell-8'));
    await button.click();
    
});

test('Win a game', async () => {

    let button = await driver.findElement(By.id('cell-8'));
    await button.click();
    let button2 = await driver.findElement(By.id('cell-7'));
    await button2.click();
    let button3 = await driver.findElement(By.id('cell-6'));
    await button3.click();
    
});