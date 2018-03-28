const puppeteer = require('puppeteer');
const width = 1920;
const height = 1080;
let browser;
let page;

describe('Setup' , function () {
    beforeAll((async function () {
        browser = await puppeteer.launch({headless: false});
        page = await browser.newPage();
        await page.goto('https://archive.kbb1.com');
        await page.screenshot({path: 'example.png'});
    }));


    describe('Jasmin Puppeteer', function () {

        it("Daily Lesson - Filter \"Topics\"", async function () {
            page = await browser.newPage();
            await page.setViewport({width, height});

            await page.goto('https://archive.kbb1.com/lessons', {waitUntil: 'load'});
            let header = await page.$('.section-header');

            console.log(header);
            expect(header).not.toBe(null);
        });

    });

    afterAll(async function () {
        await browser.close();
    });
});
