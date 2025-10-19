# TP2 — Desenvolvimento do Esqueleto do Sistema

## 1. Objetivo
Dar continuidade ao projeto **BlueGuard**, implementando o esqueleto completo de backend e frontend, com integração mínima entre os módulos e configuração de ambiente de desenvolvimento.

---

## 2. Estrutura do Projeto
A estrutura inicial do sistema foi organizada da seguinte forma:

.github/
└── workflows/
└── ci.yml → pipeline de integração contínua

backend/
├── src/ → código-fonte principal do servidor
├── .env.example → variáveis de ambiente modelo
├── package.json → dependências e scripts npm
└── docs/
├── diagrams/
├── TP1.md
└── architecture.md

frontend/
├── src/ → código-fonte React
├── package.json → dependências e scripts do frontend
├── vite.config.js → configuração do Vite
├── README.md
└── requirements.md

## 3. Backend — Estrutura e Configuração

**Tecnologias:**
- Node.js + Express
- PostgreSQL (com `pg` driver)
- Dotenv para gerenciamento de variáveis de ambiente

**Principais diretórios e arquivos:**
- `src/server.js`: inicializa o servidor Express.
- `src/routes/index.js`: gerencia rotas principais.
- `src/controllers/`: lógica de controle.
- `src/models/`: estrutura de tabelas e queries.

**Exemplo de inicialização (`src/server.js`):**
```js
import express from "express";
import routes from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
