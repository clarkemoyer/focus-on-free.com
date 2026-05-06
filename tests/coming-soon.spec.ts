import { test, expect } from '@playwright/test'

test('migrated WordPress homepage renders key live-site content', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /Focus/i }).first()).toBeVisible()
  await expect(page.getByText(/Your/i).first()).toBeVisible()
  await expect(page.getByText(/Technology/i).first()).toBeVisible()
})
