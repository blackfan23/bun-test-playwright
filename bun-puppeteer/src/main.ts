import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.connect({
    browserURL: 'http://localhost:9555',
  });

  const page = await browser.newPage();

  await page.goto('https://google.com');

  // get page title
  const title = await page.title();
  console.log(`Title of the page is ${title}`);

  setTimeout(async () => {
    await browser.close();
  }, 5000);
})();
