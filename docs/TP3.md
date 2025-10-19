# TP3 — Sprint de Desenvolvimento

## 1. Objetivo
Esta entrega representa o primeiro protótipo funcional do **BlueGuard**, permitindo demonstrar a comunicação entre o **frontend React** e o **backend Node.js/Express**, com estrutura conectável ao banco **PostgreSQL**.

## 2. Escopo implementado
- Criação do **esqueleto do backend** (Express, JWT, autenticação básica);
- Criação do **esqueleto do frontend** (React + Vite + Axios);
- Rota `/api/health` e `/api/login` funcionais;
- Comunicação entre frontend e backend via proxy (porta 3000 → 4000);
- Preparação de ambiente para futuras features (dashboard, sensores, alertas).

## 3. Estrutura geral
- **Frontend**: Interface SPA em React.
- **Backend**: API REST em Node.js.
- **Banco de dados**: PostgreSQL (planejado).
- **Autenticação**: JWT + bcrypt.
- **Implantação futura**: Docker e GitHub Actions.

## 4. Atualizações do repositório
- Pastas `backend/` e `frontend/` criadas e documentadas.
- `.github/workflows` adicionado para integração contínua.
- Pasta `docs/` atualizada com arquitetura e diagramas C4.
- `GitHub Projects` atualizado com tarefas do TP4.

## 5. Entregável
Um sistema básico em funcionamento:
- Backend responde em `http://localhost:4000/api/health`;
- Frontend acessa API via proxy em `http://localhost:3000`;
- Autenticação retorna token JWT simulado.

## 6. Vídeo demonstrativo
O vídeo que mostra o funcionamento está disponível em:
📁 `/Videos/TP3-demo.mp4`

---

### 📄 `/docs/arquitetura.md` (atualizado)

```markdown
# Arquitetura — BlueGuard

## 1. Visão geral
O BlueGuard é uma plataforma para **monitoramento da poluição marinha**, com foco na coleta e análise de dados ambientais. Seu objetivo é integrar sensores externos e fontes públicas (NOAA, UNEP), processar leituras e exibir dashboards para pesquisadores.

## 2. Resumo das escolhas tecnológicas
- **Frontend:** React (SPA) — pela velocidade de desenvolvimento, reatividade e facilidade de integração com APIs REST.
- **Backend:** Node.js + Express — ecossistema maduro e rápido para prototipagem de APIs.
- **Banco de dados:** PostgreSQL — banco relacional ACID, ideal para dados estruturados e análises estatísticas.
- **Autenticação:** JWT + bcrypt — simples e seguro para APIs stateless.
- **Deploy:** Docker + GitHub Actions — facilita CI/CD e garante reprodutibilidade de ambiente.

## 3. Modelo arquitetural (C4)
Diagramas localizados em `/docs/diagrams`:
- `c4-context.puml`
- `c4-container.puml`
- `c4-component.puml`

## 4. Justificativas e trade-offs
- Node.js e React permitem rapidez de prototipagem e ampla base de suporte;
- PostgreSQL foi preferido ao Firebase pela estrutura relacional e robustez em consultas complexas;
- Alternativas descartadas: Python/Flask (menor sinergia com frontend JS), MongoDB (estrutura menos adequada ao modelo relacional).

## 5. Segurança e requisitos não funcionais
- Autenticação e autorização via JWT.
- Criptografia de senhas com bcrypt.
- Conexões seguras (HTTPS).
- Performance alvo: 95% das requisições < 500 ms.
- Escalabilidade horizontal via Docker.

## 6. Plano de deployment e monitoramento
- **CI/CD:** via GitHub Actions.
- **Deploy:** Heroku/Vercel (fase de teste).
- **Logs:** console + log centralizado (futuro).
- **Monitoramento:** Prometheus + Grafana (planejado).

## 7. Arquitetura de dados
Tabelas principais:
- `users`: autenticação e perfis.
- `stations`: locais de medição.
- `readings`: registros de sensores.
- `alerts`: eventos críticos.
- `reports`: relatórios agregados.

## 8. ADRs
Localizadas em `/docs/adr/`.  
Exemplo: `ADR-001-escolha-tecnologias.md`
