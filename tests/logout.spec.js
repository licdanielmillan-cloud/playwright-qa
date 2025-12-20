import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test('Logout exitoso', async ({ page }) => {
  await login(page, 'tomsmith', 'SuperSecretPassword!');
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page).toHaveURL(/login/);
});
