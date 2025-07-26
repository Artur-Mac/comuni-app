# 📍 Comuni

**Comuni** é uma plataforma digital mobile-first criada para facilitar a comunicação, segurança e inclusão dentro do campus da Universidade Federal de Pernambuco (UFPE). Através de um **mapa interativo e colaborativo**, estudantes, professores e servidores podem compartilhar informações em tempo real, receber notificações úteis e se conectar com a comunidade universitária.

---

## 🚀 Visão Geral

> “Mais do que um mapa, uma rede de cuidado no campus.”

Comuni surge para enfrentar os desafios reais do ambiente universitário: insegurança, desorganização informacional, dificuldades de mobilidade e exclusão digital. A proposta é simples: usar o poder do **crowdsourcing** e da **geolocalização** para transformar a experiência no campus.

---

## 🌟 Funcionalidades principais

- 🗺️ **Mapa interativo** com pins categorizados (segurança, eventos, acessibilidade, comida, alagamentos, pedidos de ajuda, entre outros).
- 🔍 **Barra de busca** para localizar rapidamente pontos importantes.
- 🔔 **Notificações personalizadas** sobre assuntos como RU, eventos, alagamentos e alertas de segurança.
- 👍 **Sistema de upvote** para priorizar as informações mais relevantes.
- 🧩 **Colaboração comunitária** com adição de pins por qualquer usuário logado com e-mail @ufpe.br.
- 🧭 **Navegação por abas:** Mapa, Pedidos de Ajuda, Eventos Futuros e Locais Favoritos.

---

## 🛠️ Tecnologias utilizadas

- **Frontend:** HTML5, TailwindCSS, JavaScript/TypeScript
- **Mapas:** [LeafletJS](https://leafletjs.com/) + [OpenStreetMap](https://www.openstreetmap.org/)
- **Backend:** Node.js (Express) ou Firebase (dependendo da versão)
- **Banco de dados:** PostgreSQL ou Firestore
- **Autenticação:** Login via e-mail institucional (@ufpe.br)
- **Notificações:** Firebase Cloud Messaging (FCM) / sistema próprio

---

## 📲 Layout (Mobile-first)

O app foi desenhado para funcionar prioritariamente em dispositivos móveis, com foco em:
- Acessibilidade e leitura fácil
- Navegação com uma mão
- Ícones e cores amigáveis e intuitivos
- Baixo consumo de dados e energia

---

## 💡 Como usar

### Em desenvolvimento local:

```bash
# Clone o repositório
git clone https://github.com/seuusuario/comuni.git

# Acesse a pasta
cd comuni

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
