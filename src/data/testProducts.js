// Test product data for Product Card demonstration
export const testProducts = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation, premium sound quality, and long battery life. Perfect for music lovers and professionals.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "electronics",
    variants: [
      { id: 0, name: "Standard", price: 199.99, inStock: true },
      { id: 1, name: "Pro", price: 249.99, inStock: true },
      { id: 2, name: "Max", price: 299.99, inStock: false }
    ]
  },
  {
    id: 2,
    title: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes. Perfect for casual wear and everyday comfort.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "men's clothing",
    variants: [
      { id: 0, name: "Small", price: 29.99, inStock: true },
      { id: 1, name: "Medium", price: 29.99, inStock: true },
      { id: 2, name: "Large", price: 29.99, inStock: false },
      { id: 3, name: "X-Large", price: 32.99, inStock: true }
    ]
  },
  {
    id: 3,
    title: "Smart Fitness Watch",
    description: "Advanced fitness tracking watch with heart rate monitoring, GPS, and smartphone connectivity. Track your workouts and stay connected.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "electronics",
    variants: [
      { id: 0, name: "38mm", price: 299.99, inStock: true },
      { id: 1, name: "42mm", price: 329.99, inStock: false },
      { id: 2, name: "45mm Sport", price: 399.99, inStock: true }
    ]
  },
  {
    id: 4,
    title: "Leather Crossbody Bag",
    description: "Elegant leather crossbody bag perfect for daily use. Spacious interior with multiple compartments for organization. Handcrafted quality.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "women's clothing",
    variants: [
      { id: 0, name: "Black", price: 89.99, inStock: true },
      { id: 1, name: "Brown", price: 89.99, inStock: true },
      { id: 2, name: "Tan", price: 94.99, inStock: false }
    ]
  },
  {
    id: 5,
    title: "Artisan Coffee Beans",
    description: "Premium single-origin coffee beans, freshly roasted to perfection. Rich flavor profile with notes of chocolate and caramel.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
    category: "food",
    variants: [
      { id: 0, name: "Light Roast", price: 24.99, inStock: true },
      { id: 1, name: "Medium Roast", price: 24.99, inStock: true },
      { id: 2, name: "Dark Roast", price: 26.99, inStock: false },
      { id: 3, name: "Espresso Blend", price: 27.99, inStock: true }
    ]
  },
  {
    id: 6,
    title: "Minimalist Desk Lamp",
    description: "Modern LED desk lamp with adjustable brightness and color temperature. Perfect for work, study, or reading. Energy efficient design.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    category: "home",
    variants: [
      { id: 0, name: "White", price: 79.99, inStock: false },
      { id: 1, name: "Black", price: 79.99, inStock: true },
      { id: 2, name: "Silver", price: 84.99, inStock: true }
    ]
  }
];
