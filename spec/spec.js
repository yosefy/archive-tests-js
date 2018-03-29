const puppeteer = require('puppeteer');
const width = 1920;
const height = 1080;
let browser;
let page;

describe('Setup' , function () {
    beforeAll((async function () {
        browser = await puppeteer.launch({headless: true});
        page = await browser.newPage();
        await page.setViewport({width, height});
    }));


    describe('Jasmin Puppeteer', function () {

        it("Daily Lesson - Filter \"Topics\"", async function () {

            await page.goto('https://archive.kbb1.com/lessons');
            let headerHandle = await page.$('.section-header');

            let headerClassName = await page.evaluate(header => header.className, headerHandle);

            expect(headerClassName).toBe('section-header');

        });

    });

    afterAll(async function () {
        await browser.close();
    });
});
