import { expect, test } from 'bun:test';

import { bunPuppeteer } from './index';

test('bunPuppeteer should work', () => {
  expect(bunPuppeteer()).toBe('bun-puppeteer');
});
