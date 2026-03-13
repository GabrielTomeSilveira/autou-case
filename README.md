# AutoU Docs - MVP para Análise de Documentos com IA

**AutoU Docs** é uma proposta de produto digital que auxilia times de engenharia e infraestrutura a gerenciar, analisar e agir sobre um grande volume de documentos técnicos (laudos, relatórios, ARTs, propostas) com o apoio de Inteligência Artificial.

Este repositório contém o código do protótipo navegável desenvolvido para o case prático do processo seletivo da AutoU.

🔗 **Acesse o protótipo online:** [https://gabrieltomesilveira.github.io/autou-case/](https://gabrieltomesilveira.github.io/autou-case/)  
🎥 **Vídeo de apresentação:** [Link do YouTube/Loom]  
📄 **Documento de proposta e raciocínio:** [Link para Notion/Google Docs]

---

## 📌 Sobre o projeto

O desafio consistia em criar uma solução para um time de especialistas do setor de energia que precisa lidar com centenas de documentos operacionais por semana, manualmente. A proposta é um MVP que utiliza IA para:

- Automatizar a leitura e classificação de documentos.
- Extrair dados críticos e identificar riscos.
- Permitir ações rápidas (planos de ação, encaminhamentos) com base nas análises.

---

## 🧠 Decisões de design e produto

### Compreensão da dor
Os usuários passam horas abrindo arquivos, lendo e tentando identificar informações relevantes. Atrasos nas análises podem levar a riscos operacionais não mitigados. A solução precisa ser rápida, confiável e reduzir a carga cognitiva.

### Perfil dos usuários
Engenheiros eletricistas, técnicos de manutenção, analistas de projetos – profissionais com alta carga de trabalho, familiaridade com tecnologia, mas sem tempo para tarefas burocráticas.

### Aplicação da IA
- **Classificação automática**: identifica o tipo de documento (relatório, laudo, ART) e tags relevantes.
- **Extração de dados**: captura automaticamente valores, datas, responsáveis e locais.
- **Sumarização**: gera um resumo executivo com os pontos mais importantes.
- **Detecção de riscos**: destaca trechos críticos (temperaturas acima do limite, prazos próximos, não conformidades).

### Funcionalidades principais
- **Dashboard com métricas**: visão geral de documentos pendentes, riscos detectados e tempo economizado.
- **Upload de documentos**: arrastar e soltar, com barra de progresso simulado.
- **Visualização de documentos com insights da IA**: destaque de trechos importantes, resumo executivo, dados extraídos e classificação de riscos.
- **Criação de planos de ação**: formulário pré-preenchido com base na análise.
- **Notificações e perfil do usuário**: feedback em tempo real.

### Fluxo do usuário
1. O usuário faz upload de um documento.
2. A IA processa e apresenta a tela de análise com insights.
3. O usuário revisa os dados, toma uma decisão (criar ação, encaminhar, marcar como analisado).
4. Ação é registrada e o documento é movido para o histórico.

### Justificativas
- **MVP focado**: priorizamos as funcionalidades que endereçam diretamente as dores mencionadas (leitura manual demorada, falta de visibilidade de riscos).
- **IA não substitui o especialista**: a IA auxilia, mas a decisão final é do usuário. Os insights são apresentados de forma clara para validação.
- **Design limpo e familiar**: baseado em componentes comuns (cards, listas, modais) para reduzir a curva de aprendizado.

---

## 🖌️ Identidade visual

- **Cores**: Azul (#2563EB) como primária – transmite confiança e tecnologia. Verde (#10B981) para sucesso, vermelho (#EF4444) para alertas.
- **Tipografia**: Inter (Google Fonts) – excelente legibilidade e aparência moderna.
- **Ícones**: Emojis e ícones simples para manter a leveza e rápida identificação.

---

## 📱 Responsividade

O layout se adapta a:
- **Desktop** (≥1024px): colunas lado a lado na tela de insights.
- **Tablet** (768px a 1023px): grid de métricas em duas colunas, filtros em linha.
- **Mobile** (≤767px): tudo em coluna, botões em tela cheia, sidebar com ações fixas na parte inferior.
- **Telas muito pequenas** (≤360px): fontes reduzidas, paddings ajustados.

---

## 🚀 Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/GabrielTomeSilveira/autou-case```
  Navegue até a pasta:
  
   ```bash
    cd autou-docs
   ```
Abra o arquivo index.html no navegador (pode usar uma extensão como Live Server para melhor experiência).

🛠️ Tecnologias utilizadas

    HTML5 semântico

    CSS3 (Flexbox, Grid, Media Queries)

    JavaScript puro (ES6+)

    Google Fonts (Inter)

📈 Próximos passos (melhorias futuras)

    Backend real: conectar a uma API de processamento de documentos com IA (ex: Google Document AI, OpenAI).

    Autenticação: login com diferentes perfis (engenheiro, gestor).

    Histórico de análises: armazenar documentos já processados.

    Relatórios exportáveis: gerar PDF com os insights.

    Integração com e-mail: receber documentos diretamente por e-mail.

📝 Licença

Este projeto foi desenvolvido exclusivamente para fins de avaliação no processo seletivo da AutoU.

Desenvolvido com ❤️ por Gabriel Silveira
