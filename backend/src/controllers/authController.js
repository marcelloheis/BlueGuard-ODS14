import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Usuário fake por enquanto
  const fakeUser = { id: 1, email: "admin@blueguard.com", passwordHash: await bcrypt.hash("123456", 10) };

  const valid = await bcrypt.compare(password, fakeUser.passwordHash);
  if (!valid) return res.status(401).json({ error: "Credenciais inválidas" });

  const token = jwt.sign({ id: fakeUser.id, email: fakeUser.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};
