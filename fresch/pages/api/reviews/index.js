import { PrismaClient } from '@prisma/client';
import Cors from 'nextjs-cors';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Setze die CORS-Header
  await Cors(req, res, {
    methods: ['GET', 'OPTIONS'], // Erlaube die benötigten HTTP-Methoden
    origin: '*', // Setze die erlaubte Origin (kann auch spezifisch gesetzt werden)
    optionsSuccessStatus: 200, // Für ältere Browser, die 204 nicht unterstützen
  });

  // Bearbeite GET-Anfrage
  if (req.method === 'GET') {
    try {
      const reviews = await prisma.review.findMany();
      console.log("reviews", reviews);
      res.status(200).json(reviews);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: String(error) });
    }
}
// Handle other request methods
else {
    res.status(405).json({ message: error });
  }
}
