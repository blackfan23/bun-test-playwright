Testrepo for playwright connect with bun 1.1.4

1. Install deps
   `npm install --legacy-peer-deps`

2. Start Chrome dev on port 9555 eg "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --remote-debugging-port=9555&

3. Run node test:
   `nx serve node-playwright`

- Output: `Title of the page is Google`

4. Run bun test using puppeteer instead of playwright:
   `nx serve bun-puppeteer`

- Output: `Title of the page is Google`

5. Finally bun test using playwright:
   ` nx serve bun-playwright`

- Output: ... (no output, not connecting)
