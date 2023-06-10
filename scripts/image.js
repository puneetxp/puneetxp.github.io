import { chromium } from 'playwright';
import {website} from './website.js';
website.live.forEach(async element => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({width:1200, height:900})
    await page.goto(`https://${element.website}`);
    await page.waitForTimeout(10000);
    await page.screenshot({path: `screenshots/live/${element.website }.jpeg`})
    await browser.close();
})