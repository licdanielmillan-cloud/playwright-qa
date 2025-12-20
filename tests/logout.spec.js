import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test('Logout exitoso', async ({ page }) => {
  await login(page, 'tomsmith', 'SuperSecretPassword!');

  await page.locator('a[href="/logout"]').click();

  await expect(page).toHaveURL(
    'https://the-internet.herokuapp.com/login'
  );
});
