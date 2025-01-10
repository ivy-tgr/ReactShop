import bcrypt from 'bcryptjs';
import prisma from '../../../lib/prisma'; // Pfad anpassen, falls nötig

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      await prisma.user.create({
        data: { email, password: hashedPassword },
      });
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Fehler beim Registrieren' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
