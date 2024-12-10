const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const products = [

    {
        name: "Blue Band",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 79,
        category: "Fitness",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 3
    },
    {
        name: "Blue T-Shirt",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 29,
        category: "Clothing",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 5
    },
    {
        name: "Bracelet",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 15,
        category: "Accessories",
        quantity: 73,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Brown Purse",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 120,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4
    },
    {
        name: "Chakra Bracelet",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 32,
        category: "Accessories",
        quantity: 5,
        inventoryStatus: "LOWSTOCK",
        rating: 3
    },
    {
        name: "Galaxy Earrings",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 34,
        category: "Accessories",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 5
    },
    {
        name: "Game Controller",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 99,
        category: "Electronics",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 4
    },
    {
        name: "Gaming Set",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 299,
        category: "Electronics",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 3
    },
    {
        name: "Gold Phone Case",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 24,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4
    },
    {
        name: "Green Earbuds",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 89,
        category: "Electronics",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Green T-Shirt",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 49,
        category: "Clothing",
        quantity: 74,
        inventoryStatus: "INSTOCK",
        rating: 5
    },
    {
        name: "Grey T-Shirt",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 48,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 3
    },
    {
        name: "Headphones",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 175,
        category: "Electronics",
        quantity: 8,
        inventoryStatus: "LOWSTOCK",
        rating: 5
    },
    {
        name: "Light Green T-Shirt",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 49,
        category: "Clothing",
        quantity: 34,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Lime Band",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 79,
        category: "Fitness",
        quantity: 12,
        inventoryStatus: "INSTOCK",
        rating: 3
    },
    {
        name: "Mini Speakers",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 85,
        category: "Clothing",
        quantity: 42,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Painted Phone Case",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 56,
        category: "Accessories",
        quantity: 41,
        inventoryStatus: "INSTOCK",
        rating: 5
    },
    {
        name: "Pink Band",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 79,
        category: "Fitness",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Pink Purse",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 110,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4
    },
    {
        name: "Purple Band",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 79,
        category: "Fitness",
        quantity: 6,
        inventoryStatus: "LOWSTOCK",
        rating: 3
    },
    {
        name: "Purple Gemstone Necklace",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 45,
        category: "Accessories",
        quantity: 62,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Purple T-Shirt",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 49,
        category: "Clothing",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 5
    },
    {
        name: "Shoes",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 64,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Sneakers",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 78,
        category: "Clothing",
        quantity: 52,
        inventoryStatus: "INSTOCK",
        rating: 4
    },
    {
        name: "Teal T-Shirt",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 49,
        category: "Clothing",
        quantity: 3,
        inventoryStatus: "LOWSTOCK",
        rating: 3
    },
    {
        name: "Yellow Earbuds",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 89,
        category: "Electronics",
        quantity: 35,
        inventoryStatus: "INSTOCK",
        rating: 3
    },
    {
        name: "Yoga Mat",
        description: "Product Description",
        image: "https://dev.mos.cms.futurecdn.net/ARWms77gyVZ5u2MZkQqcKc.jpg",
        price: 20,
        category: "Fitness",
        quantity: 15,
        inventoryStatus: "INSTOCK",
        rating: 5
    }
];

const reviews = [
    {
        name: 'Amy Elsner',
        image: 'https://primefaces.org/cdn/primereact/images/product/light-green-t-shirt.jpg',
        description: 'Allein erziehende Mutter von 35 Kinder',
        review: 'Das Light Green T-Shirt hat das perfekte Frühlingsgefühl! Es bringt nicht nur Farbe in meinen Kleiderschrank, sondern auch in meine Laune. Vielleicht könnte es sogar als meine persönliche Gute-Laune-Maschine patentiert werden! Wenn es noch eine Extra-Tasche für Snacks hätte, wäre es perfekt!',
        rating: 4,
        picture: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png'
    },
    {
        name: 'Anna Fali',
        image: 'https://primefaces.org/cdn/primereact/images/product/galaxy-earrings.jpg',
        description: 'PH Studentin im 4ten Semester',
        review: 'Diese Galaxy Earrings sind so galaktisch schön, dass ich fast das Gefühl habe, sie könnten mir das nächste schwarze Loch anzeigen! Sie funkeln und strahlen wie die Sterne. Vielleicht könnte man sie auch in einer etwas kleineren Variante für den Alltag machen – für den Fall, dass ich beim Kaffeetrinken nicht gleich ins All abheben möchte!',
        rating: 5,
        picture : 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png'
    },
    {
        name: 'Asiya Javayant',
        image: 'https://primefaces.org/cdn/primereact/images/product/bracelet.jpg',
        description: 'Ceo einer Gurken einmach Firma',
        review: 'Das Armband ist ein echter Hingucker! Es hat so viel Stil, dass es wahrscheinlich selbst eine Raumfahrtmission als Modetrend etablieren könnte. Vielleicht könntest du es mit einer kleinen, verspielten Botschaft oder einem Charm erweitern – das würde den intergalaktischen Look noch persönlicher machen!',
        rating: 4,
        picture : 'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png'
    }
];


async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
  for (const review of reviews) {
    await prisma.review.create({
      data: review,
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
