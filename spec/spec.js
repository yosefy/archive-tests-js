const puppeteer = require('puppeteer');
const width = 1920;
const height = 1080;
let browser;
let page;
const lessonsUrl = 'https://archive.kbb1.com/lessons'

describe('Setup' , function () {
    beforeAll((async function () {
        browser = await puppeteer.launch({headless: false});
        page = await browser.newPage();
        await page.setViewport({width, height});
    }));


    describe('Archive Test Suite ', function () {

        it('Daily Lesson Section ', async function () {
            await page.goto(lessonsUrl);
            // header
            expect(await page.$('.section-header')).toBeDefined();
            // header title
            expect(await page.$eval('.section-header__title',(selector) => {return selector.innerHTML})).toBe('Daily Lessons');
            // filters
            expect(await page.$$eval('.ui.container.padded.horizontally a', (selector) => {return selector.length})).toBe(3);
        });

        it('Daily Lesson - Pagination', async function () {
            await page.goto(lessonsUrl);
            let headerHandle = await page.$('.ui.blue.compact.pagination-menu.menu');
            let paginationClassName = await page.evaluate(header => header.className, headerHandle);
            expect(paginationClassName).toBe('ui blue compact pagination-menu menu');

        });
    });

    afterAll(async function () {
        await browser.close();
    });
});
