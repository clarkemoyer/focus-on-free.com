import { test, expect } from '@playwright/test'

test('coming-soon page renders the site name and domain', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /Focus on Free/i })).toBeVisible()
  await expect(page.getByText('focus-on-free.com')).toBeVisible()
  await expect(page.getByText(/coming soon/i).first()).toBeVisible()
})
