const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const products = [

    {
        name: "Blue Band",
        description: "Product Description",
        image: "blue-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 3
    },
    {
        name: "Blue T-Shirt",
        description: "Product Description",
        image: "blue-t-shirt.jpg",
        price: 29,
        category: "Clothing",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 5
    },
    {
        name: "Bracelet",
        description: "Product Description",
        image: "bracelet.jpg",
        price: 15,
        category: "Accessories",
        quantity: 73,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Brown Purse",
        description: "Product Description",
        image: "brown-purse.jpg",
        price: 120,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4
    },
    {
        name: "Chakra Bracelet",
        description: "Product Description",
        image: "chakra-bracelet.jpg",
        price: 32,
        category: "Accessories",
        quantity: 5,
        inventoryStatus: "LOWSTOCK",
        rating: 3
    },
    {
        name: "Galaxy Earrings",
        description: "Product Description",
        image: "galaxy-earrings.jpg",
        price: 34,
        category: "Accessories",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 5
    },
    {
        name: "Game Controller",
        description: "Product Description",
        image: "game-controller.jpg",
        price: 99,
        category: "Electronics",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 4
    },
    {
        name: "Gaming Set",
        description: "Product Description",
        image: "gaming-set.jpg",
        price: 299,
        category: "Electronics",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 3
    },
    {
        name: "Gold Phone Case",
        description: "Product Description",
        image: "gold-phone-case.jpg",
        price: 24,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4
    },
    {
        name: "Green Earbuds",
        description: "Product Description",
        image: "green-earbuds.jpg",
        price: 89,
        category: "Electronics",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Green T-Shirt",
        description: "Product Description",
        image: "green-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 74,
        inventoryStatus: "INSTOCK",
        rating: 5
    },
    {
        name: "Grey T-Shirt",
        description: "Product Description",
        image: "grey-t-shirt.jpg",
        price: 48,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 3
    },
    {
        name: "Headphones",
        description: "Product Description",
        image: "headphones.jpg",
        price: 175,
        category: "Electronics",
        quantity: 8,
        inventoryStatus: "LOWSTOCK",
        rating: 5
    },
    {
        name: "Light Green T-Shirt",
        description: "Product Description",
        image: "light-green-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 34,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Lime Band",
        description: "Product Description",
        image: "lime-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 12,
        inventoryStatus: "INSTOCK",
        rating: 3
    },
    {
        name: "Mini Speakers",
        description: "Product Description",
        image: "mini-speakers.jpg",
        price: 85,
        category: "Clothing",
        quantity: 42,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Painted Phone Case",
        description: "Product Description",
        image: "painted-phone-case.jpg",
        price: 56,
        category: "Accessories",
        quantity: 41,
        inventoryStatus: "INSTOCK",
        rating: 5
    },
    {
        name: "Pink Band",
        description: "Product Description",
        image: "pink-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Pink Purse",
        description: "Product Description",
        image: "pink-purse.jpg",
        price: 110,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4
    },
    {
        name: "Purple Band",
        description: "Product Description",
        image: "purple-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 6,
        inventoryStatus: "LOWSTOCK",
        rating: 3
    },
    {
        name: "Purple Gemstone Necklace",
        description: "Product Description",
        image: "purple-gemstone-necklace.jpg",
        price: 45,
        category: "Accessories",
        quantity: 62,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Purple T-Shirt",
        description: "Product Description",
        image: "purple-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 5
    },
    {
        name: "Shoes",
        description: "Product Description",
        image: "shoes.jpg",
        price: 64,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Sneakers",
        description: "Product Description",
        image: "sneakers.jpg",
        price: 78,
        category: "Clothing",
        quantity: 52,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Teal T-Shirt",
        description: "Product Description",
        image: "teal-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 3,
        inventoryStatus: "LOWSTOCK",
        rating: 3
    },
    {
        name: "Yellow Earbuds",
        description: "Product Description",
        image: "yellow-earbuds.jpg",
        price: 89,
        category: "Electronics",
        quantity: 35,
        inventoryStatus: "INSTOCK",
        rating: 3
    },
    {
        name: "Yoga Mat",
        description: "Product Description",
        image: "yoga-mat.jpg",
        price: 20,
        category: "Fitness",
        quantity: 15,
        inventoryStatus: "INSTOCK",
        rating: 5
    }
];

async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
