# Rotina App

App pessoal de organização e produtividade. React + Vite + TailwindCSS.

## Instalação e uso local

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev
# Abrir http://localhost:5173 no celular (mesmo wifi) ou no navegador

# 3. Build para produção
npm run build

# 4. Preview do build
npm run preview
```

## Deploy na Vercel (gratuito)

### Opção A — GitHub (recomendado)
1. Suba o projeto para um repositório no GitHub
2. Acesse vercel.com → "Add New Project"
3. Importe o repositório
4. Framework: **Vite** (detecta automático)
5. Clique em **Deploy**

### Opção B — Vercel CLI
```bash
# Instalar CLI da Vercel
npm i -g vercel

# Fazer deploy
vercel

# Deploy de produção
vercel --prod
```

### Opção C — Upload direto
1. Rode `npm run build`
2. Acesse vercel.com → drag & drop da pasta `dist/`

## Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis
│   └── ui/           # Componentes base (Button, Modal, Badge...)
├── pages/            # Telas principais
├── hooks/            # Custom hooks
├── utils/            # Funções utilitárias
├── data/             # Dados padrão
└── context/          # Context API (estado global)
```

## Adicionar ao celular como PWA

### iPhone (Safari)
1. Abra o link da Vercel no Safari
2. Toque no botão compartilhar
3. "Adicionar à Tela de Início"

### Android (Chrome)
1. Abra o link no Chrome
2. Menu (⋮) → "Adicionar à tela inicial"
