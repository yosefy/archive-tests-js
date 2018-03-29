const puppeteer = require('puppeteer');
const width = 1920;
const height = 1080;
let browser;
let page;

describe('Setup' , function () {
    beforeAll((async function () {
        browser = await puppeteer.launch({headless: false});
        page = await browser.newPage();
        await page.setViewport({width, height});
    }));


    describe('Jasmin Puppeteer', function () {

        it("Daily Lesson - Filter \"Topics\"", async function () {

            await page.goto('https://archive.kbb1.com/lessons');

            let headerHandle = await page.$('.section-header');
            let headerClassName = await page.evaluate(header => header.className, headerHandle);
            expect(headerClassName).toBe('section-header');

            headerHandle = await page.$('.section-header__title');
            let headerText = await page.evaluate(header => header.innerHTML, headerHandle);
            expect(headerText).toBe('Daily Lessons');
            headerHandle.dispose()

        });

        fit("Daily Lesson - Pagination", async function () {

            await page.goto('https://archive.kbb1.com/lessons');

            let headerHandle = await page.$('.ui.blue.compact.pagination-menu.menu');
            let paginationClassName = await page.evaluate(header => header.className, headerHandle);
            expect(paginationClassName).toBe('ui blue compact pagination-menu menu');

        });
    });

    afterAll(async function () {
        await browser.close();
    });
});
