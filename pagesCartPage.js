class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart-item');
  }

  async getCartItemCount() {
    return await this.cartItems.count();
  }
}

module.exports = CartPage;
