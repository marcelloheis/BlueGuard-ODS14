# Arquitetura — BlueGuard

## 1. Visão geral
O **BlueGuard** é uma aplicação web que monitora e apresenta indicadores sobre a **poluição marinha**, especialmente resíduos sólidos e nutrientes que afetam ecossistemas costeiros.  
O sistema coleta, armazena e exibe dados de sensores, APIs ambientais e relatórios públicos, permitindo visualizar níveis de poluição e gerar alertas automáticos quando limites críticos são atingidos.  

Seu principal objetivo é **apoiar a meta 14.1 dos ODS**, fornecendo uma ferramenta de conscientização e apoio à tomada de decisão para comunidades, pesquisadores e órgãos ambientais.

---

## 2. Resumo das escolhas tecnológicas
- **Frontend: React (SPA)** — Escolhido por sua rapidez de prototipagem, ampla comunidade e suporte nativo a componentes dinâmicos e gráficos (por exemplo, via Chart.js ou Recharts). Permite uma experiência fluida de dashboard interativo e responsivo.
- **Backend: Node.js + Express** — Framework leve e eficiente, ideal para APIs RESTful. Facilita a integração com serviços externos e manipulação assíncrona de dados em tempo real. O ecossistema NPM oferece bibliotecas prontas para autenticação, logging e integração com bancos de dados.
- **Banco de dados: PostgreSQL** — Escolhido por sua robustez, aderência ao modelo relacional (ACID), facilidade de normalização e suporte a extensões geoespaciais (PostGIS). É ideal para armazenar séries temporais de medições e gerar relatórios confiáveis.
- **Armazenamento de objetos: S3-compatible (opcional)** — Utilizado para armazenar imagens de sensores, mapas de calor e relatórios em PDF. A compatibilidade com Amazon S3 permite futura migração para serviços em nuvem.
- **Fila/background: Redis + Bull (opcional)** — Adotado para processamento assíncrono de tarefas pesadas, como importação de grandes volumes de dados ambientais, envio de notificações e geração de relatórios.
- **Autenticação: JWT (tokens) + bcrypt (hash)** — Garante segurança e escalabilidade. O uso de JWT facilita sessões stateless e o bcrypt protege senhas com criptografia robusta.
- **Deploy: Docker + GitHub Actions / Heroku / Vercel** — Contêineres garantem reprodutibilidade entre ambientes; GitHub Actions automatiza o pipeline de CI/CD; Heroku ou Vercel simplificam o deploy com integração direta ao GitHub.

---

## 3. Modelo arquitetural (C4)
- **Diagramas incluídos:** Context, Container, Component  
- **Localização dos arquivos:**  
  `/docs/diagrams/usecase.puml`  
  `/docs/diagrams/c4-context.puml`  
  `/docs/diagrams/c4-container.puml`  
  `/docs/diagrams/c4-component.puml`

---

## 4. Justificativa e trade-offs
- **Por que usar Node/React:**  
  A combinação React + Node.js oferece agilidade no desenvolvimento e uma curva de aprendizado baixa. Ambas as tecnologias usam JavaScript, facilitando a comunicação entre frontend e backend e permitindo reuso de tipos e funções.  
  Além disso, React possui excelente performance para dashboards interativos, enquanto Node é amplamente utilizado para microserviços e APIs de dados.
  
- **Por que PostgreSQL:**  
  A natureza dos dados (leituras ambientais, séries temporais, localização geográfica) requer integridade transacional e consultas complexas. PostgreSQL é confiável, gratuito e oferece suporte avançado a índices, JSON e extensões geoespacia
