class HomePage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('button:has-text("Add to Cart")').first();
    this.cartLink = page.locator('a[href="/cart"]');
  }

  async open() {
    await this.page.goto('/');
  }

  async addFirstProductToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

module.exports = HomePage;
