import { chromium } from 'playwright';

console.log('Running bun-playwright with version: ', Bun.version);

try {
  const browser = await chromium.connectOverCDP('http://localhost:9555');
  const defaultContext = browser.contexts()[0];
  const page = await defaultContext.newPage();
  await page.goto('https://google.com');

  // get page title
  const title = await page.title();
  console.log(`Title of the page is ${title}`);
  await page.waitForTimeout(5000);
  await browser.close();
} catch (error) {
  console.error(error);
}
