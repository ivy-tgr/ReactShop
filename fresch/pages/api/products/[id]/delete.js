import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      await prisma.product.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).end(); 
    } catch (error) {
      res.status(500).json({ error: 'Error deleting product' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
