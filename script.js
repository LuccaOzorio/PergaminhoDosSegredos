// Dados das senhas e dicas
const senhasEDicas = {
    'HZ4K7M3Q': `Dentro dessa maquininha, mora primeiramente seu carinho e cuidado com essa casa, moram também um pedaço da nossa rotina, cada coisinha que faz por mim nessa casa deixa uma digital de amor.

E mesmo no meio da rotina, sempre há espaço para o riso — aquele que aparece quando desligamos do mundo real e enfrentamos afogadores, nekkers e até sereias.

Nesse Corvo Bianco mora a sua próxima dica.`,

    'B9XN23LC': `Te ver jogando é como assistir alguém sendo feliz do jeitinho mais puro.
Você se empolga, se perde na história, e eu me perco em você.

Eu gosto de ser sua plateia, seu apoio, mesmo quando fico só observando. E quando é você quem joga The Witcher... bom, não tem como não ver a Yennefer que mora em você, e não querer ser seu Geralt de Rivia.

E foi aqui, entre batalhas épicas e fantasias, que lembrei: nosso amor também é feito de sonhos.

Por isso, a próxima pista está entre essências, potes e pavios — aquele cantinho onde colocamos nossos planos pra derreter e renascer em forma de esperança de um futuro melhor!`,

    'V3LY8P2R': `Aqui, entre aromas e cera quente, mora o lado mais idealista do nosso amor.
Cada vela que fizemos — ou tentamos fazer — carrega um pouco da nossa vontade de sermos livres, de viver do que gostamos, de mudar de país, de mudar de vida.

É incrível como, mesmo sem saber exatamente o que vai acontecer, a gente sempre acredita que pode dar certo.

E essa chama... também esquenta. Não só o coração, mas o corpo todo.

A próxima pista está guardada entre sorrisos safados, aventuras noturnas e segredos nossos — aquele lugar onde nosso desejo se esconde em silêncio.`,

    'Z1QK9R7T': `Existe um lado do amor que não dá pra escrever com palavras doces — só se sente com a pele.
A vontade que sinto de você não é só desejo, é conexão.
Aqui dentro, escondemos brincadeiras, confissões e sorrisos que só a gente entende.

Mas mesmo depois da chama, vem o descanso.
O carinho depois do calor.

A próxima dica está onde a gente se deita, se abraça e esquece do mundo.
Lá onde o seu travesseiro tem o cheiro que me acalma, onde cada noite ao seu lado é um presente.`,

    'D7WJ5N8X': `Aqui é onde tudo silencia.
Onde nossas conversas viram suspiros, nossos olhares viram abrigo.

Seu travesseiro é mais que um lugar de descanso — é uma pequena âncora. Sempre que deito ali, sinto que posso respirar.

E quando fecho os olhos, é como se visse um quadro perfeitamente capturado de nós, juntos eternamente diante do Senhor.

É lá onde mora sua próxima pista: em um momento capturado em papel fotográfico e sonhos.`,

    'L8EM3F4Z': `Esse quadro é uma moldura do que somos.
Ele não diz tudo, mas guarda muito.
Está no centro da nossa casa como símbolo da nossa história: as lutas, as conquistas, os momentos bons e os difíceis.

Quando olho pra ele, vejo o quanto construímos com amor, cuidado e entrega.

E por tudo que vivemos, me dá vontade de te guardar para sempre como um estoque de emergência em épocas de crise.

Lá está sua DICA DE OURO.`,

    'LLLOVEEE': `Se eu pudesse te levar pra todo lugar onde vou, eu te levaria num potinho de tanto que te amo.

E se fosse guardar esse potinho pra levar comigo...

Guardaria onde está o seu presente.

Boa sorte! 💜`
};

const dicasExtras = {
    'HZ4K7M3Q': 'Olhe embaixo do Xbox.',
    'B9XN23LC': 'Está no material das velas artesanais.',
    'V3LY8P2R': 'Está na bolsinha de brinquedos adultos.',
    'Z1QK9R7T': 'Veja dentro da fronha do seu travesseiro.',
    'D7WJ5N8X': 'Olhe atrás do quadro na sala.',
    'L8EM3F4Z': 'Está na mochila que levo pro trabalho.',
    'LLLOVEEE': 'Está na mochila que levo pro trabalho.'
};

// Elementos DOM
let txtSenha, btnEnviar, btnDicaExtra, mensagemArea, modalFinal, modalDica, textodicaExtra;

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Obter elementos
    txtSenha = document.getElementById('senha');
    btnEnviar = document.getElementById('btnEnviar');
    btnDicaExtra = document.getElementById('btnDicaExtra');
    mensagemArea = document.getElementById('mensagem');
    modalFinal = document.getElementById('modalFinal');
    modalDica = document.getElementById('modalDica');
    textodicaExtra = document.getElementById('textodicaExtra');

    // Event listeners
    btnEnviar.addEventListener('click', verificarSenha);
    btnDicaExtra.addEventListener('click', mostrarDicaExtra);
    
    // Enter no campo de senha
    txtSenha.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            verificarSenha();
        }
    });

    // Converter automaticamente para maiúsculas
    txtSenha.addEventListener('input', function() {
        this.value = this.value.toUpperCase();
    });

    // Fechar modais
    document.getElementById('btnFecharModal').addEventListener('click', function() {
        modalFinal.style.display = 'none';
    });

    document.getElementById('btnFecharDica').addEventListener('click', function() {
        modalDica.style.display = 'none';
    });

    // Fechar modal clicando fora
    window.addEventListener('click', function(e) {
        if (e.target === modalFinal) {
            modalFinal.style.display = 'none';
        }
        if (e.target === modalDica) {
            modalDica.style.display = 'none';
        }
    });
});

function verificarSenha() {
    const senha = txtSenha.value.trim().toUpperCase();
    
    if (!senha) {
        alert('Por favor, digite uma senha.');
        return;
    }
    
    if (senhasEDicas[senha]) {
        // Senha válida - mostrar mensagem
        mostrarMensagem(senhasEDicas[senha]);
        
        // Verificar se é a senha final
        if (senha === 'LLLOVEEE') {
            setTimeout(exibirMensagemFinal, 1000);
        }
    } else {
        // Senha inválida
        mostrarMensagem('Essa senha não revelou nada... Tente novamente.');
    }
    
    // Limpar campo
    txtSenha.value = '';
}

function mostrarDicaExtra() {
    const senha = txtSenha.value.trim().toUpperCase();
    
    if (!senha) {
        alert('Digite uma senha primeiro para ver a dica extra correspondente.');
        return;
    }
    
    if (dicasExtras[senha]) {
        textodicaExtra.textContent = dicasExtras[senha];
        modalDica.style.display = 'block';
    } else {
        alert('Não há dica extra para esta senha.');
    }
}

function mostrarMensagem(texto) {
    // Efeito de digitação
    mensagemArea.innerHTML = '';
    
    const paragrafos = texto.split('\n\n');
    let paragrafoAtual = 0;
    
    function adicionarProximoParagrafo() {
        if (paragrafoAtual < paragrafos.length) {
            const p = document.createElement('p');
            p.textContent = paragrafos[paragrafoAtual];
            mensagemArea.appendChild(p);
            
            // Efeito de fade in
            p.style.opacity = '0';
            p.style.animation = 'fadeIn 0.5s ease forwards';
            
            paragrafoAtual++;
            setTimeout(adicionarProximoParagrafo, 300);
        }
    }
    
    adicionarProximoParagrafo();
}

function exibirMensagemFinal() {
    modalFinal.style.display = 'block';
    
    // Efeito sonoro (se suportado pelo navegador)
    try {
        // Criar um tom suave usando Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
    } catch (e) {
        // Fallback silencioso se Web Audio não estiver disponível
        console.log('Audio não disponível');
    }
}

// Adicionar animação CSS para fade in
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

