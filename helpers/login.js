// Login helper used across multiple tests
export async function login(page, username, password) {
  await page.goto(
    'https://the-internet.herokuapp.com/login',
    { waitUntil: 'networkidle' }
  );

  await page.locator('#username').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('button[type="submit"]').click();
}
