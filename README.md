⛪ Exame de Consciência - App de Preparação para Confissão
Este é um Web App mobile-first desenvolvido para auxiliar fiéis católicos na prática do exame de consciência, facilitando a preparação para o Sacramento da Penitência (Confissão).

O diferencial deste app é a organização sistemática baseada na doutrina da Igreja, permitindo que o usuário identifique pecados contra os Dez Mandamentos e os Sete Pecados Capitais, com distinções claras entre pecados mortais e veniais.

✨ Funcionalidades
Exame Guiado: Lista detalhada de pecados para reflexão.

Categorização Doutrinária: Divisão por 10 Mandamentos e 7 Pecados Capitais.

Educação na Fé: Explicações breves sobre a natureza dos pecados (Mortais vs. Veniais).

Lista de Preparação: Seleção de pecados que gera um resumo automático para auxiliar no momento da confissão.

Privacidade Total: Os dados são salvos apenas localmente no dispositivo (localStorage).

Botão "Fui Perdoado": Função que limpa todos os registros do dispositivo após a recepção do sacramento, simbolizando o estado de graça.

🛠️ Tecnologias Utilizadas
React.js (Vite)

Tailwind CSS (Estilização Mobile-First)

Lucide React (Ícones)

Hooks Personalizados (Gerenciamento de estado e persistência)

🏗️ Arquitetura
O projeto foi construído utilizando uma estratégia de fácil manutenção e escalabilidade:

Feature-based Structure: Organização de componentes por funcionalidade.

Separation of Concerns: A lógica de dados (lista de pecados) está separada da lógica de renderização.

Persistência Local: Uso de localStorage para garantir que o usuário não perca sua reflexão se o navegador fechar.

🚀 Como Executar
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/exame-consciencia-app.git
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
🔒 Privacidade e Segurança
Dada a natureza sensível das informações, este aplicativo:

Não envia dados para nenhum servidor (No Backend).

Não utiliza cookies de rastreamento.

Garante que as informações existam apenas enquanto o usuário desejar, através da função de limpeza completa.
