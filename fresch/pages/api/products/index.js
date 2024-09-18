import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const products = await prisma.product.findMany();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' });
    }
  } else if (req.method === 'POST') {
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
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
