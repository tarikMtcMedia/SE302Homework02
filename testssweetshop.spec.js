const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const CartPage = require('../pages/CartPage');

test.describe('Sweet Shop Website Tests', () => {

  test('TC01 - Homepage loads successfully', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await expect(page).toHaveURL(/sweetshop/);
  });

  test('TC02 - Navigation to cart page', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.goToCart();
    await expect(page).toHaveURL(/cart/);
  });

  test('TC04 - Add product to cart', async ({ page }) => {
    const home = new HomePage(page);
    const cart = new CartPage(page);

    await home.open();
    await home.addFirstProductToCart();
    await home.goToCart();

    expect(await cart.getCartItemCount()).toBeGreaterThan(0);
  });

  test('TC06 - Add same product multiple times (negative scenario)', async ({ page }) => {
    const home = new HomePage(page);
    const cart = new CartPage(page);

    await home.open();
    await home.addFirstProductToCart();
    await home.addFirstProductToCart();
    await home.goToCart();

    expect(await cart.getCartItemCount()).toBeGreaterThan(0);
  });

  test('TC07 - Empty cart behavior', async ({ page }) => {
    await page.goto('/cart');
    await expect(page.locator('text=Cart')).toBeVisible();
  });

});
