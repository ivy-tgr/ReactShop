import { PrismaClient } from '@prisma/client';
import Cors from 'nextjs-cors';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Setze die CORS-Header
  await Cors(req, res, {
    methods: ['GET', 'POST', 'OPTIONS'], // Erlaube die benötigten HTTP-Methoden
    origin: '*', // Setze die erlaubte Origin (kann auch spezifisch gesetzt werden)
    optionsSuccessStatus: 200, // Für ältere Browser, die 204 nicht unterstützen
  });

  // Handle GET request
  if (req.method === 'GET') {
    try {
      const products = await prisma.product.findMany();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' });
    }
  }
  // Handle POST request
  else if (req.method === 'POST') {
    try {
      const { code, name, description, image, price, category, quantity, inventoryStatus, rating } = req.body;
      const newProduct = await prisma.product.create({
        data: {
          code,
          name,
          description,
          image,
          price,
          category,
          quantity,
          inventoryStatus,
          rating,
        },
      });
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Error creating product' });
    }
  }
  // Handle other request methods
  else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
