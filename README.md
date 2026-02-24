# ⛪ Exame de Consciência - Preparação para a Confissão

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Um aplicativo **mobile-first** desenvolvido para auxiliar os fiéis na prática espiritual do exame de consciência. O app guia o usuário através de uma reflexão baseada na doutrina católica para uma confissão bem preparada e frutuosa.

---

## 📋 Sobre o Projeto

O objetivo deste aplicativo é oferecer uma ferramenta prática e discreta para a revisão de vida. Ele organiza os pecados sistematicamente, fornecendo explicações doutrinárias e permitindo que o usuário marque os pontos que deseja levar ao confessionário.

### 🎯 Diferenciais
- **Estratégia Mobile-First:** Interface pensada para uso em smartphones, ideal para momentos de oração individual na igreja.
- **Arquitetura Limpa:** Código organizado para facilitar a manutenção e a adição de novos conteúdos (orações, meditações, etc.).
- **Privacidade Absoluta:** Nenhuma informação sai do dispositivo do usuário.

---

## ✨ Funcionalidades

- **Exame Detalhado:** Dividido entre os **10 Mandamentos** e os **7 Pecados Capitais**.
- **Conteúdo Formativo:** Explicações sobre a diferença entre **Pecados Mortais** e **Pecados Veniais**.
- **Checklist de Reflexão:** O usuário marca os pecados identificados durante a oração.
- **Resumo para Confissão:** Uma tela final que reúne apenas os pecados selecionados, facilitando a leitura no momento do sacramento.
- **Persistência Segura:** Utiliza `localStorage` para que a lista não seja perdida se o app for fechado acidentalmente.
- **Botão "Fui Perdoado":** Limpa todos os dados salvos após a confissão, simbolizando o novo início na vida de graça.

---

## 🛠️ Tecnologias e Arquitetura

- **React + Vite:** Para um ambiente de desenvolvimento rápido e performático.
- **Tailwind CSS:** Estilização baseada em utilitários para design responsivo.
- **Lucide-React:** Conjunto de ícones leves e elegantes.
- **Data-Driven UI:** Os pecados estão isolados em um arquivo de configuração, permitindo atualizar os textos sem alterar a lógica do app.

---

