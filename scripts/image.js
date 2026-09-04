import { chromium } from 'playwright';
import { website } from './website.js';
import fs from 'fs';

Object.entries(website).forEach(([key, item]) => {
    item.forEach(async element => {
        // Skip items marked as inactive
        if (element.inactive) {
            console.log(`⏭️  Skipping ${element.website} (marked inactive)`);
            return;
        }

        const browser = await chromium.launch();
        const page = await browser.newPage();
        try {
            console.log(`📸 Capturing ${element.website}...`);
            await page.setViewportSize({ width: 1200, height: 900 })
            await page.goto(`https://${element.website}`, { timeout: 30000, waitUntil: 'load' });
            await page.waitForTimeout(3000);
            await page.screenshot({ path: `screenshots/${key}/${element.website}.jpeg` })
            console.log(`✅ Screenshot saved: screenshots/${key}/${element.website}.jpeg`);
            await browser.close();
        } catch (err) {
            console.warn(`⚠️  Failed to capture ${element.website}: ${err.message}`);
            await browser.close();
        }
    })
})
// website.dev.forEach(async element => {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//     await page.setViewportSize({ width: 1200, height: 900 })
//     await page.goto(`https://${element.website}`);
//     await page.waitForTimeout(10000);
//     await page.screenshot({ path: `screenshots/dev/${element.website}.jpeg` })
//     await browser.close();
// })