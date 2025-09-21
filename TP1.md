# TP1 — Definição do Problema e Planejamento Inicial

## 1. Objetivo do projeto
Criar um sistema web fullstack (frontend + backend) chamado **BlueGuard**, capaz de coletar, armazenar e apresentar dados relacionados à poluição marinha (plásticos, nutrientes e resíduos costeiros), auxiliando pesquisadores, organizações e gestores públicos na tomada de decisão.

## 2. Problema a ser resolvido
A poluição marinha é uma das principais ameaças aos oceanos, comprometendo a biodiversidade, a saúde pública e atividades econômicas como a pesca e o turismo. Atualmente, muitos dados sobre resíduos marinhos estão dispersos, de difícil acesso ou sem visualização clara.  
**Impacto**: a falta de informação organizada dificulta a criação de políticas públicas, monitoramento em tempo real e educação da sociedade.  

## 3. Tipo de solução e justificativa
Será desenvolvido um **sistema web fullstack**:
- Frontend: interface em React para visualização e interação do usuário.
- Backend: Node.js + Express, responsável por APIs, regras de negócio e persistência.
- Banco: PostgreSQL para armazenamento de dados.
**Justificativa**: a arquitetura fullstack permite escalabilidade, integração com diferentes fontes de dados (sensores, APIs públicas) e dashboards interativos para análise visual.

## 4. Requisitos funcionais (resumo)
- RF1: Usuário deve se autenticar no sistema para acessar funcionalidades restritas.
- RF2: Registrar dados de poluição marinha (manualmente ou por API).
- RF3: Visualizar dashboard com gráficos sobre resíduos plásticos, nutrientes e pontos críticos.
- RF4: Filtrar dados por região e período.
- RF5: Exportar relatórios em PDF/CSV.
- RF6: Sistema deve enviar alertas (ex.: níveis críticos de poluição).

## 5. Requisitos não-funcionais
- RNF1: O sistema deve responder a requisições em até 500ms (95% dos casos).
- RNF2: Interface deve ser responsiva e acessível em dispositivos móveis.
- RNF3: Banco deve garantir consistência (ACID).
- RNF4: Autenticação deve seguir boas práticas de segurança (senhas criptografadas).
- RNF5: Sistema deve estar disponível 99% do tempo (exceto manutenções programadas).

## 6. Diagrama de caso de uso
![Use Case](./docs/diagrams/usecase.png)

## 7. Planejamento (GitHub Project)
- **Link:** [Adicionar link do board]
- **Backlog inicial:** cadastro de usuário, autenticação, registro de dados, dashboard, exportação de relatórios, alertas.
- **TODO (TP2):**
  - Criar esqueleto backend (Node/Express).
  - Criar esqueleto frontend (React).
  - Implementar autenticação básica.
  - Configurar banco de dados inicial.

## 8. Gerência de configuração
- GitFlow simplificado:
  - `main` → versão estável
  - `develop` → versão em desenvolvimento
  - `feature/<nome>` → novas funcionalidades
- Commits no padrão **Conventional Commits**.
- Issues abertas para cada User Story, associadas ao Project.
- Pull Requests obrigatórios para `develop`.

