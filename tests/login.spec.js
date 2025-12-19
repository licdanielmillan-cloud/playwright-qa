import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test('login using helper function', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await login(page, 'tomsmith', 'SuperSecretPassword!');
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});
