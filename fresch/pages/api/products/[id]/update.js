import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      const { name, description, image, price, category, quantity, inventoryStatus, rating } = req.body;
      const updatedProduct = await prisma.product.update({
        where: { id: parseInt(id) },
        data: {
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
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: 'Error updating product' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
