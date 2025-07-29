# Pergaminho dos Segredos - Versão Web

Uma aplicação web romântica que implementa um sistema de dicas e senhas com interface visual estilo pergaminho antigo.

## Características

- Interface visual com estilo "pergaminho antigo" 
- Fontes serifadas clássicas (Cinzel/Crimson Text)
- Imagem de fundo com textura de pergaminho
- Sistema de validação de senhas
- Dicas extras para cada senha
- Mensagem especial de conclusão com modal
- Efeitos visuais e sonoros
- Responsivo para dispositivos móveis

## Senhas e Dicas

O programa contém 7 senhas principais:

1. **HZ4K7M3Q** - Dica na Máquina de Lavar
2. **B9XN23LC** - Dica embaixo do Xbox  
3. **V3LY8P2R** - Dica entre materiais de velas artesanais
4. **Z1QK9R7T** - Dica na bolsinha do sex shop
5. **D7WJ5N8X** - Dica dentro da fronha do travesseiro
6. **L8EM3F4Z** - Dica atrás do quadro na sala
7. **LLLOVEEE** - Dica de Ouro (Final)

## Como Usar

1. Abra o arquivo `index.html` em qualquer navegador web moderno
2. Digite uma das senhas no campo de texto
3. Clique em "Enviar" para ver a mensagem correspondente
4. Use "Dica Extra" para ver dicas alternativas
5. Complete todas as etapas até chegar na senha final "LLLOVEEE"

## Arquivos

- `index.html` - Página principal da aplicação
- `styles.css` - Estilos CSS com tema pergaminho antigo
- `script.js` - Lógica JavaScript da aplicação
- `parchment_background.jpg` - Imagem de fundo
- `README.md` - Esta documentação

## Tecnologias Utilizadas

- HTML5
- CSS3 (com Google Fonts)
- JavaScript (ES6+)
- Web Audio API (para efeitos sonoros)

## Funcionalidades Especiais

### Interface
- Design responsivo que se adapta a diferentes tamanhos de tela
- Efeitos de hover nos botões
- Animações suaves para transições
- Modais para dicas extras e mensagem final

### Interatividade
- Conversão automática para maiúsculas
- Suporte a tecla Enter para envio
- Validação de senhas em tempo real
- Efeito de digitação nas mensagens
- Som suave na conclusão final

### Acessibilidade
- Fontes legíveis e contrastantes
- Botões com tamanho adequado para toque
- Layout responsivo para dispositivos móveis
- Navegação por teclado

## Conversão para Executável

Para converter esta versão web em um executável desktop, você pode usar:

### Electron
```bash
npm install -g electron
npm init -y
npm install electron --save-dev
# Criar main.js e package.json apropriados
npm start
```

### Tauri (Rust)
```bash
npm install -g @tauri-apps/cli
cargo install tauri-cli
tauri init
tauri dev
tauri build
```

### PWA (Progressive Web App)
Adicione um manifest.json e service worker para instalar como app nativo.

## Compatibilidade

- Chrome/Chromium 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Dispositivos móveis iOS/Android

## Personalização

Para personalizar o programa:

1. **Alterar senhas**: Edite os objetos `senhasEDicas` e `dicasExtras` em `script.js`
2. **Modificar cores**: Altere as variáveis CSS em `styles.css`
3. **Trocar fontes**: Modifique as importações do Google Fonts no HTML
4. **Substituir imagem**: Troque `parchment_background.jpg` por outra imagem

## Licença

Este é um projeto pessoal romântico. Use com amor! 💜

"# PergaminhoDosSegredos" 
