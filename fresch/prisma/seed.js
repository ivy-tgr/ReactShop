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

const events = [
    {
        status: 'Gründung des Shops',
        date: '01/01/2020',
        icon: 'pi pi-calendar-plus',
        color: '#4CAF50',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fshop-with-sign-we-are-open_52683-38687.jpg&f=1&nofb=1&ipt=abaa1e4c1538046240ac0ac49164c4abbf365ba6076cc0b6101931ce93bf9b21&ipo=images',
        description: 'Im Januar 2020 haben wir unseren Onlineshop ins Leben gerufen, mit dem Ziel, modische und hochwertige Kleidung zu bieten.'
    },
    {
        status: 'Erster Meilenstein erreicht',
        date: '01/06/2020',
        icon: 'pi pi-trophy',
        color: '#FF9800',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fmilestone-26251226.jpg&f=1&nofb=1&ipt=53a49d6f1ce045ed587ba0dce10925ffab2ebf8520f2d7d147cd8fe8b7025b16&ipo=images',
        description: 'Im Juni 2020 erreichten wir unseren ersten großen Meilenstein: 1000 Bestellungen in den ersten sechs Monaten!'
    },
    {
        status: 'Erweiterung der Produktpalette',
        date: '01/11/2021',
        icon: 'pi pi-box',
        color: '#2196F3',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpebblely.com%2Fblog%2Fcreate-product-images-with-ai%2Fcollage-of-ai-generated-images.jpg&f=1&nofb=1&ipt=d558bd9b42d84df7a18f71f5bd58b00ffe0a1697daafa15c8c8291127379218f&ipo=images',
        description: 'Wir erweiterten unsere Kollektion um Accessoires und Schuhe, um unseren Kunden eine noch größere Auswahl zu bieten.'
    },
    {
        status: 'Globaler Versand eingeführt',
        date: '15/03/2022',
        icon: 'pi pi-globe',
        color: '#FF5722',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd28pk2nlhhgcne.cloudfront.net%2Fassets%2Fapp%2Fuploads%2F2020%2F05%2Fglobal-market-expansion.jpg&f=1&nofb=1&ipt=7d2ea4e882c19066245cbd54cb8769bebaaf906dd31d15fbed3756c58a0b4e1c&ipo=images',
        description: 'Seit März 2022 bieten wir weltweiten Versand an, um unseren internationalen Kunden unsere Produkte zugänglich zu machen.'
    },
    {
        status: 'Nachhaltigkeit als Ziel',
        date: '01/06/2023',
        icon: 'pi pi-face-smile',
        color: '#4CAF50',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5788b7b16a4963f2a542d038%2Ffb41de89-f609-4d79-8db5-52a8eeae77b4%2FThe%2BSustainable%2BFashion%2B4.png%3Fformat%3D1500w&f=1&nofb=1&ipt=d212b900bf69598ea60dd3cd0712838f21ad51bd657cb6e06f1e2a242d9a6c55&ipo=images',
        description: 'Im Juni 2023 haben wir unsere nachhaltige Modekollektion eingeführt, um unseren ökologischen Fußabdruck zu reduzieren.'
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
  for (const event of events) {
    await prisma.event.create({
      data: event,
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
