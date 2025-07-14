// =========================
// Script principal do site
// =========================

// Exercícios de Compreensão Auditiva
const exerciciosAudicao = [
    // NÍVEL BÁSICO (A1-A2)
    {
        titulo: "Diálogo Básico - Apresentações",
        audio: "Hello! What's your name?",
        pergunta: "O que a pessoa está perguntando?",
        opcoes: [
            "Como você está?",
            "Qual é o seu nome?",
            "De onde você é?",
            "Que horas são?"
        ],
        resposta: 1,
        nivel: "A1"
    },
    {
        titulo: "Vocabulário - Profissões",
        audio: "doctor",
        pergunta: "Que profissão é esta?",
        opcoes: [
            "Professor",
            "Médico",
            "Engenheiro",
            "Advogado"
        ],
        resposta: 1,
        nivel: "A1"
    },
    {
        titulo: "Vocabulário - Comida",
        audio: "apple",
        pergunta: "Que fruta é esta?",
        opcoes: [
            "Banana",
            "Maçã",
            "Laranja",
            "Uva"
        ],
        resposta: 1,
        nivel: "A1"
    },
    {
        titulo: "Vocabulário - Cores",
        audio: "red",
        pergunta: "Que cor é esta?",
        opcoes: [
            "Azul",
            "Verde",
            "Vermelho",
            "Amarelo"
        ],
        resposta: 2,
        nivel: "A1"
    },
    {
        titulo: "Vocabulário - Comida Básica",
        audio: "bread",
        pergunta: "Que alimento é este?",
        opcoes: [
            "Arroz",
            "Pão",
            "Leite",
            "Frango"
        ],
        resposta: 1,
        nivel: "A1"
    },
    {
        titulo: "Vocabulário - Profissões",
        audio: "teacher",
        pergunta: "Que profissão é esta?",
        opcoes: [
            "Médico",
            "Professor",
            "Enfermeiro",
            "Advogado"
        ],
        resposta: 1,
        nivel: "A1"
    },
    {
        titulo: "Vocabulário - Cores",
        audio: "blue",
        pergunta: "Que cor é esta?",
        opcoes: [
            "Verde",
            "Azul",
            "Roxo",
            "Amarelo"
        ],
        resposta: 1,
        nivel: "A1"
    },
    {
        titulo: "Vocabulário - Comida",
        audio: "chicken",
        pergunta: "Que carne é esta?",
        opcoes: [
            "Carne de vaca",
            "Frango",
            "Peixe",
            "Porco"
        ],
        resposta: 1,
        nivel: "A1"
    },
    {
        titulo: "Vocabulário - Cores",
        audio: "green",
        pergunta: "Que cor é esta?",
        opcoes: [
            "Azul",
            "Verde",
            "Amarelo",
            "Roxo"
        ],
        resposta: 1,
        nivel: "A1"
    },
    {
        titulo: "Vocabulário - Comida",
        audio: "rice",
        pergunta: "Que grão é este?",
        opcoes: [
            "Feijão",
            "Arroz",
            "Milho",
            "Trigo"
        ],
        resposta: 1,
        nivel: "A1"
    },
    {
        titulo: "Vocabulário - Bebida",
        audio: "milk",
        pergunta: "Que bebida é esta?",
        opcoes: [
            "Água",
            "Suco",
            "Leite",
            "Café"
        ],
        resposta: 2,
        nivel: "A1"
    },
    {
        titulo: "Vocabulário - Profissões",
        audio: "engineer",
        pergunta: "Que profissão é esta?",
        opcoes: [
            "Arquiteto",
            "Engenheiro",
            "Técnico",
            "Designer"
        ],
        resposta: 1,
        nivel: "A2"
    },
    {
        titulo: "Vocabulário - Profissões",
        audio: "lawyer",
        pergunta: "Que profissão é esta?",
        opcoes: [
            "Juiz",
            "Advogado",
            "Promotor",
            "Delegado"
        ],
        resposta: 1,
        nivel: "A2"
    },
    {
        titulo: "Vocabulário - Profissões",
        audio: "nurse",
        pergunta: "Que profissão é esta?",
        opcoes: [
            "Médico",
            "Enfermeiro",
            "Farmacêutico",
            "Técnico"
        ],
        resposta: 1,
        nivel: "A2"
    },
    {
        titulo: "Vocabulário - Cores",
        audio: "yellow",
        pergunta: "Que cor é esta?",
        opcoes: [
            "Laranja",
            "Amarelo",
            "Dourado",
            "Bege"
        ],
        resposta: 1,
        nivel: "A2"
    },
    {
        titulo: "Vocabulário - Cores",
        audio: "purple",
        pergunta: "Que cor é esta?",
        opcoes: [
            "Azul",
            "Roxo",
            "Rosa",
            "Violeta"
        ],
        resposta: 1,
        nivel: "A2"
    },
    
    // NÍVEL INTERMEDIÁRIO (B1-B2)
    {
        titulo: "Diálogo - Perguntando sobre Trabalho",
        audio: "Where do you work?",
        pergunta: "Qual é a pergunta sendo feita?",
        opcoes: [
            "Onde você trabalha?",
            "O que você faz?",
            "Quando você trabalha?",
            "Como você trabalha?"
        ],
        resposta: 0,
        nivel: "B1"
    },
    {
        titulo: "Diálogo - Planos para o Fim de Semana",
        audio: "What are you doing this weekend?",
        pergunta: "O que a pessoa quer saber?",
        opcoes: [
            "O que você vai fazer no fim de semana?",
            "Onde você vai no fim de semana?",
            "Quando você vai sair?",
            "Com quem você vai sair?"
        ],
        resposta: 0,
        nivel: "B1"
    },
    {
        titulo: "Diálogo - Restaurante",
        audio: "I'd like to order, please.",
        pergunta: "O que a pessoa está dizendo?",
        opcoes: [
            "Eu quero pagar a conta",
            "Eu gostaria de fazer um pedido",
            "Eu quero ver o cardápio",
            "Eu quero reservar uma mesa"
        ],
        resposta: 1,
        nivel: "B1"
    },
    {
        titulo: "Diálogo - Restaurante",
        audio: "Could I have the menu?",
        pergunta: "O que a pessoa está pedindo?",
        opcoes: [
            "A conta, por favor",
            "O cardápio, por favor",
            "Água, por favor",
            "Uma mesa, por favor"
        ],
        resposta: 1,
        nivel: "B1"
    },
    {
        titulo: "Diálogo - Restaurante",
        audio: "What do you recommend?",
        pergunta: "O que a pessoa quer saber?",
        opcoes: [
            "O que você recomenda?",
            "O que tem de especial?",
            "Qual é o prato do dia?",
            "O que é mais popular?"
        ],
        resposta: 0,
        nivel: "B1"
    },
    {
        titulo: "Diálogo - Restaurante",
        audio: "I'll have the same, please.",
        pergunta: "O que a pessoa está dizendo?",
        opcoes: [
            "Eu quero o mesmo",
            "Eu quero algo diferente",
            "Eu quero a conta",
            "Eu quero mais"
        ],
        resposta: 0,
        nivel: "B1"
    },
    {
        titulo: "Diálogo - Aeroporto",
        audio: "Where is the check-in counter?",
        pergunta: "O que a pessoa está perguntando?",
        opcoes: [
            "Onde fica o check-in?",
            "Que horas é o voo?",
            "Onde fica o portão?",
            "Onde fica a bagagem?"
        ],
        resposta: 0,
        nivel: "B2"
    },
    {
        titulo: "Diálogo - Aeroporto",
        audio: "What time does my flight leave?",
        pergunta: "O que a pessoa quer saber?",
        opcoes: [
            "Que horas sai meu voo?",
            "Que horas chega meu voo?",
            "Qual é o portão?",
            "Onde fica o avião?"
        ],
        resposta: 0,
        nivel: "B2"
    },
    {
        titulo: "Diálogo - Aeroporto",
        audio: "Is my flight on time?",
        pergunta: "O que a pessoa está perguntando?",
        opcoes: [
            "Meu voo está no horário?",
            "Meu voo está atrasado?",
            "Meu voo foi cancelado?",
            "Meu voo mudou de portão?"
        ],
        resposta: 0,
        nivel: "B2"
    },
    {
        titulo: "Diálogo - Aeroporto",
        audio: "Where can I find a taxi?",
        pergunta: "O que a pessoa está procurando?",
        opcoes: [
            "Onde posso encontrar um táxi?",
            "Onde posso alugar um carro?",
            "Onde fica o estacionamento?",
            "Onde fica a saída?"
        ],
        resposta: 0,
        nivel: "B2"
    },
    {
        titulo: "Diálogo - Hotel",
        audio: "I have a reservation.",
        pergunta: "O que a pessoa está dizendo?",
        opcoes: [
            "Eu tenho uma reserva",
            "Eu quero fazer uma reserva",
            "Eu preciso de um quarto",
            "Eu quero cancelar"
        ],
        resposta: 0,
        nivel: "B2"
    },
    {
        titulo: "Diálogo - Hotel",
        audio: "What time is breakfast?",
        pergunta: "O que a pessoa quer saber?",
        opcoes: [
            "Que horas é o café da manhã?",
            "Que horas é o almoço?",
            "Que horas é o jantar?",
            "Que horas é o check-out?"
        ],
        resposta: 0,
        nivel: "B2"
    },
    {
        titulo: "Diálogo - Hotel",
        audio: "Could I have an extra towel?",
        pergunta: "O que a pessoa está pedindo?",
        opcoes: [
            "Uma toalha extra",
            "Um travesseiro extra",
            "Um cobertor extra",
            "Um sabonete extra"
        ],
        resposta: 0,
        nivel: "B2"
    },
    {
        titulo: "Diálogo - Hotel",
        audio: "How do I get to the city center?",
        pergunta: "O que a pessoa quer saber?",
        opcoes: [
            "Como chego ao centro da cidade?",
            "Onde fica o centro?",
            "Qual é o caminho?",
            "Quanto tempo leva?"
        ],
        resposta: 0,
        nivel: "B2"
    },
    // NÍVEL AVANÇADO (Situações do cotidiano, áudios a gravar)
    {
        titulo: "No supermercado",
        audio: "Where can I find the bread?",
        pergunta: "O que a pessoa está procurando?",
        opcoes: [
            "O pão",
            "O leite",
            "O arroz",
            "O caixa"
        ],
        resposta: 0,
        nivel: "A2"
    },
    {
        titulo: "No ponto de ônibus",
        audio: "What time does the next bus arrive?",
        pergunta: "O que a pessoa quer saber?",
        opcoes: [
            "O preço da passagem",
            "O horário do próximo ônibus",
            "O destino do ônibus",
            "O número do ônibus"
        ],
        resposta: 1,
        nivel: "A2"
    },
    {
        titulo: "No médico",
        audio: "I have a headache.",
        pergunta: "Qual é o problema da pessoa?",
        opcoes: [
            "Dor de estômago",
            "Dor de cabeça",
            "Febre",
            "Tosse"
        ],
        resposta: 1,
        nivel: "A2"
    },
    {
        titulo: "No hotel",
        audio: "Can I have a wake-up call at 7 a.m.?",
        pergunta: "O que a pessoa está pedindo?",
        opcoes: [
            "Um táxi",
            "Um café da manhã",
            "Um serviço de despertar",
            "Uma toalha extra"
        ],
        resposta: 2,
        nivel: "B1"
    },
    {
        titulo: "No restaurante",
        audio: "Could I get the bill, please?",
        pergunta: "O que a pessoa está pedindo?",
        opcoes: [
            "O cardápio",
            "A conta",
            "A sobremesa",
            "A bebida"
        ],
        resposta: 1,
        nivel: "B1"
    },
    {
        titulo: "No aeroporto",
        audio: "Where is the baggage claim?",
        pergunta: "O que a pessoa está procurando?",
        opcoes: [
            "O portão de embarque",
            "O banheiro",
            "A esteira de bagagens",
            "O balcão de informações"
        ],
        resposta: 2,
        nivel: "B1"
    },
    {
        titulo: "No táxi",
        audio: "Can you take me to the city center?",
        pergunta: "O que a pessoa está pedindo?",
        opcoes: [
            "Ir ao aeroporto",
            "Ir ao centro da cidade",
            "Ir ao hotel",
            "Ir à estação de trem"
        ],
        resposta: 1,
        nivel: "B1"
    },
    {
        titulo: "Compras",
        audio: "How much does this cost?",
        pergunta: "O que a pessoa quer saber?",
        opcoes: [
            "O preço",
            "O tamanho",
            "A cor",
            "A marca"
        ],
        resposta: 0,
        nivel: "B1"
    },
    {
        titulo: "No telefone",
        audio: "Can I speak to Mr. Smith, please?",
        pergunta: "O que a pessoa quer?",
        opcoes: [
            "Falar com o Sr. Smith",
            "Falar com a recepção",
            "Fazer uma reserva",
            "Pedir comida"
        ],
        resposta: 0,
        nivel: "B2"
    },
    {
        titulo: "Emergência",
        audio: "I need help, please!",
        pergunta: "O que a pessoa está pedindo?",
        opcoes: [
            "Ajuda",
            "Dinheiro",
            "Informação",
            "Comida"
        ],
        resposta: 0,
        nivel: "B2"
    }
];

// Exercícios de Vocabulário
const exerciciosVocabulario = [
    {
        categoria: "Profissões",
        palavras: [
            { ingles: "doctor", portugues: "médico" },
            { ingles: "teacher", portugues: "professor" },
            { ingles: "engineer", portugues: "engenheiro" },
            { ingles: "lawyer", portugues: "advogado" },
            { ingles: "nurse", portugues: "enfermeiro" }
        ]
    },
    {
        categoria: "Comida",
        palavras: [
            { ingles: "apple", portugues: "maçã" },
            { ingles: "bread", portugues: "pão" },
            { ingles: "chicken", portugues: "frango" },
            { ingles: "rice", portugues: "arroz" },
            { ingles: "milk", portugues: "leite" }
        ]
    },
    {
        categoria: "Cores",
        palavras: [
            { ingles: "red", portugues: "vermelho" },
            { ingles: "blue", portugues: "azul" },
            { ingles: "green", portugues: "verde" },
            { ingles: "yellow", portugues: "amarelo" },
            { ingles: "purple", portugues: "roxo" }
        ]
    }
];

// Exercícios de Gramática
const exerciciosGramatica = [
    {
        tipo: "Present Simple",
        pergunta: "Complete: She _____ English every day.",
        opcoes: ["study", "studies", "studying", "studied"],
        resposta: 1,
        explicacao: "Com 'she' (terceira pessoa do singular), usamos 'studies'."
    },
    {
        tipo: "Present Continuous",
        pergunta: "Complete: They _____ dinner right now.",
        opcoes: ["cook", "cooks", "cooking", "are cooking"],
        resposta: 3,
        explicacao: "Para ações em andamento no presente, usamos 'are cooking'."
    },
    {
        tipo: "Past Simple",
        pergunta: "Complete: I _____ to the cinema yesterday.",
        opcoes: ["go", "goes", "went", "going"],
        resposta: 2,
        explicacao: "Para ações passadas, usamos 'went' (passado de 'go')."
    },
    {
        tipo: "Present Perfect",
        pergunta: "Complete: She _____ never been to Paris.",
        opcoes: ["have", "has", "had", "having"],
        resposta: 1,
        explicacao: "Com 'she' (terceira pessoa), usamos 'has'."
    }
];

// Exercícios de Conversação
const exerciciosConversacao = [
    {
        situacao: "No restaurante",
        contexto: "Você está em um restaurante e quer fazer um pedido.",
        frases: [
            "I'd like to order, please.",
            "Could I have the menu?",
            "What do you recommend?",
            "I'll have the same, please."
        ],
        traducao: [
            "Eu gostaria de fazer um pedido, por favor.",
            "Você poderia me trazer o cardápio?",
            "O que você recomenda?",
            "Eu quero o mesmo, por favor."
        ]
    },
    {
        situacao: "No aeroporto",
        contexto: "Você está no aeroporto e precisa de informações.",
        frases: [
            "Where is the check-in counter?",
            "What time does my flight leave?",
            "Is my flight on time?",
            "Where can I find a taxi?"
        ],
        traducao: [
            "Onde fica o balcão de check-in?",
            "Que horas sai meu voo?",
            "Meu voo está no horário?",
            "Onde posso encontrar um táxi?"
        ]
    },
    {
        situacao: "No hotel",
        contexto: "Você está no hotel e precisa de ajuda.",
        frases: [
            "I have a reservation.",
            "What time is breakfast?",
            "Could I have an extra towel?",
            "How do I get to the city center?"
        ],
        traducao: [
            "Eu tenho uma reserva.",
            "Que horas é o café da manhã?",
            "Você poderia me trazer uma toalha extra?",
            "Como chego ao centro da cidade?"
        ]
    }
];

// Função utilitária para pausar todos os áudios globais
function pausarTodosAudios() {
    const audioGlobal = document.getElementById('audio-global');
    if (audioGlobal) {
        audioGlobal.pause();
        audioGlobal.currentTime = 0;
    }
}

// Player global de áudio (MP3/WAV)
function simularAudio(texto) {
    const audioId = texto.toLowerCase().replace(/[^a-z0-9]/g, '_');
    const audioGlobal = document.getElementById('audio-global');
    if (!audioGlobal) {
        alert('Player de áudio global não encontrado!');
        return;
    }
    pausarTodosAudios();
    const wavPath = 'audios/' + audioId + '.wav';
    const mp3Path = 'audios/' + audioId + '.mp3';
    function testarFonte(src, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', src);
        xhr.onload = function() { callback(xhr.status >= 200 && xhr.status < 300); };
        xhr.onerror = function() { callback(false); };
        xhr.send();
    }
    testarFonte(wavPath, function(existeWav) {
        if (existeWav) {
            audioGlobal.src = wavPath;
            audioGlobal.load();
            audioGlobal.play().catch(function(error) {
                alert('Erro ao reproduzir áudio: ' + error.message + '\n\nVerifique se o arquivo ' + wavPath + ' existe e não está corrompido.');
            });
        } else {
            testarFonte(mp3Path, function(existeMp3) {
                if (existeMp3) {
                    audioGlobal.src = mp3Path;
                    audioGlobal.load();
                    audioGlobal.play().catch(function(error) {
                        alert('Erro ao reproduzir áudio: ' + error.message + '\n\nVerifique se o arquivo ' + mp3Path + ' existe e não está corrompido.');
                    });
                } else {
                    alert('Áudio não encontrado!\nAdicione o arquivo: ' + wavPath + ' ou ' + mp3Path);
                }
            });
        }
    });
}

// Exercício de Audição
function iniciarExercicioAudicao() {
    const modal = document.getElementById('nivelModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    modalTitle.textContent = 'Exercícios de Compreensão Auditiva';
    modalBody.innerHTML = '<div class="exercicio-container">' +
        '<h3>Escute e Responda</h3>' +
        '<p>Clique no botão para ouvir a frase e escolha a resposta correta.</p>' +
        '<div id="exercicio-audicao-content">' +
        '<button class="btn btn-primary" onclick="carregarExercicioAudicao()">' +
        '<i class="fas fa-play"></i> Começar Exercício</button>' +
        '</div></div>';
    modal.style.display = 'block';
}

function carregarExercicioAudicao() {
    pausarTodosAudios();
    const exercicio = exerciciosAudicao[Math.floor(Math.random() * exerciciosAudicao.length)];
    const content = document.getElementById('exercicio-audicao-content');
    const audioId = exercicio.audio.toLowerCase().replace(/[^a-z0-9]/g, '_');
    content.innerHTML = '<div class="exercicio-card">' +
        '<h4>' + exercicio.titulo + '</h4>' +
        '<div class="audio-section">' +
        '<button class="btn btn-secondary" onclick="simularAudio(\'' + exercicio.audio.replace(/'/g, "\\'") + '\')">' +
        '<i class="fas fa-volume-up"></i> Ouvir Frase</button>' +
        '<p class="audio-text">"' + exercicio.audio + '"</p>' +
        '</div>' +
        '<h5>' + exercicio.pergunta + '</h5>' +
        '<div class="opcoes-container">' +
        exercicio.opcoes.map(function(opcao, index) {
            return '<button class="btn btn-outline opcao-btn" onclick="verificarResposta(' + index + ', ' + exercicio.resposta + ')">' + opcao + '</button>';
        }).join('') +
        '</div>' +
        '<div id="resultado-audicao"></div>' +
        '</div>';
}

function verificarResposta(escolha, resposta) {
    const resultado = document.getElementById('resultado-audicao');
    const botoes = document.querySelectorAll('.opcao-btn');
    botoes.forEach(function(btn) { btn.disabled = true; });
    if (escolha === resposta) {
        resultado.innerHTML = '<div class="resultado correto"><i class="fas fa-check"></i> Correto! Parabéns!</div>';
    } else {
        resultado.innerHTML = '<div class="resultado incorreto"><i class="fas fa-times"></i> Incorreto. Tente novamente!</div>';
    }
    setTimeout(function() {
        carregarExercicioAudicao();
    }, 2000);
}

// Exercício de Vocabulário
function iniciarExercicioVocabulario() {
    const modal = document.getElementById('nivelModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    modalTitle.textContent = 'Exercícios de Vocabulário';
    modalBody.innerHTML = '<div class="exercicio-container">' +
        '<h3>Expanda seu Vocabulário</h3>' +
        '<p>Escolha uma categoria e aprenda novas palavras.</p>' +
        '<div id="exercicio-vocabulario-content">' +
        exerciciosVocabulario.map(function(categoria, index) {
            return '<div class="categoria-card"><h4>' + categoria.categoria + '</h4>' +
                '<button class="btn btn-primary" onclick="mostrarVocabulario(' + index + ')">Estudar Palavras</button></div>';
        }).join('') +
        '</div></div>';
    modal.style.display = 'block';
}

function mostrarVocabulario(index) {
    const categoria = exerciciosVocabulario[index];
    const content = document.getElementById('exercicio-vocabulario-content');
    content.innerHTML = '<div class="vocabulario-container">' +
        '<h4>' + categoria.categoria + '</h4>' +
        '<div class="palavras-grid">' +
        categoria.palavras.map(function(palavra) {
            return '<div class="palavra-card">' +
                '<div class="palavra-ingles">' + palavra.ingles + '</div>' +
                '<div class="palavra-portugues">' + palavra.portugues + '</div>' +
                '<button class="btn btn-outline" onclick="praticarPalavra(\'' + palavra.ingles.replace(/'/g, "\\'") + '\')">' +
                '<i class="fas fa-volume-up"></i> Ouvir</button></div>';
        }).join('') +
        '</div>' +
        '<button class="btn btn-primary" onclick="iniciarExercicioVocabulario()">' +
        '<i class="fas fa-arrow-left"></i> Voltar</button></div>';
}

function praticarPalavra(palavra) {
    simularAudio(palavra);
}

// Exercício de Gramática
function iniciarExercicioGramatica() {
    const modal = document.getElementById('nivelModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    modalTitle.textContent = 'Exercícios de Gramática';
    modalBody.innerHTML = '<div class="exercicio-container">' +
        '<h3>Pratique Gramática</h3>' +
        '<p>Complete as frases com a forma correta do verbo.</p>' +
        '<div id="exercicio-gramatica-content">' +
        '<button class="btn btn-primary" onclick="carregarExercicioGramatica()">' +
        '<i class="fas fa-play"></i> Começar Exercício</button></div></div>';
    modal.style.display = 'block';
}

function carregarExercicioGramatica() {
    const exercicio = exerciciosGramatica[Math.floor(Math.random() * exerciciosGramatica.length)];
    const content = document.getElementById('exercicio-gramatica-content');
    content.innerHTML = '<div class="exercicio-card">' +
        '<h4>' + exercicio.tipo + '</h4>' +
        '<h5>' + exercicio.pergunta + '</h5>' +
        '<div class="opcoes-container">' +
        exercicio.opcoes.map(function(opcao, index) {
            return '<button class="btn btn-outline opcao-btn" onclick="verificarGramatica(' + index + ', ' + exercicio.resposta + ')">' + opcao + '</button>';
        }).join('') +
        '</div>' +
        '<div id="resultado-gramatica"></div>' +
        '</div>';
}

function verificarGramatica(escolha, resposta) {
    const resultado = document.getElementById('resultado-gramatica');
    const botoes = document.querySelectorAll('.opcao-btn');
    const exercicio = exerciciosGramatica.find(function(e) { return e.resposta === resposta; });
    botoes.forEach(function(btn) { btn.disabled = true; });
    if (escolha === resposta) {
        resultado.innerHTML = '<div class="resultado correto"><i class="fas fa-check"></i> Correto!<p><strong>Explicação:</strong> ' + exercicio.explicacao + '</p></div>';
    } else {
        resultado.innerHTML = '<div class="resultado incorreto"><i class="fas fa-times"></i> Incorreto.<p><strong>Explicação:</strong> ' + exercicio.explicacao + '</p></div>';
    }
    setTimeout(function() {
        carregarExercicioGramatica();
    }, 3000);
}

// Exercício de Conversação
function iniciarExercicioConversacao() {
    const modal = document.getElementById('nivelModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    modalTitle.textContent = 'Exercícios de Conversação';
    modalBody.innerHTML = '<div class="exercicio-container">' +
        '<h3>Pratique Diálogos</h3>' +
        '<p>Escolha uma situação e pratique as frases em inglês.</p>' +
        '<div id="exercicio-conversacao-content">' +
        exerciciosConversacao.map(function(exercicio, index) {
            return '<div class="situacao-card"><h4>' + exercicio.situacao + '</h4>' +
                '<p>' + exercicio.contexto + '</p>' +
                '<button class="btn btn-primary" onclick="mostrarFrasesConversacao(' + index + ')">Praticar Frases</button></div>';
        }).join('') +
        '</div></div>';
    modal.style.display = 'block';
}

function mostrarFrasesConversacao(index) {
    const exercicio = exerciciosConversacao[index];
    const content = document.getElementById('exercicio-conversacao-content');
    content.innerHTML = '<div class="frases-container">' +
        '<h4>' + exercicio.situacao + '</h4>' +
        '<p>' + exercicio.contexto + '</p>' +
        '<div class="frases-grid">' +
        exercicio.frases.map(function(frase, i) {
            return '<div class="frase-card">' +
                '<div class="frase-ingles">' + frase + '</div>' +
                '<button class="btn btn-outline" onclick="mostrarTraducao(' + i + ')">Ver Tradução</button>' +
                '<div class="traducao" id="traducao-' + i + '" style="display: none;">' + exercicio.traducao[i] + '</div>' +
                '</div>';
        }).join('') +
        '</div>' +
        '<button class="btn btn-primary" onclick="iniciarExercicioConversacao()">' +
        '<i class="fas fa-arrow-left"></i> Voltar</button></div>';
}

function mostrarTraducao(index) {
    const traducao = document.getElementById('traducao-' + index);
    if (traducao.style.display === 'none') {
        traducao.style.display = 'block';
    } else {
        traducao.style.display = 'none';
    }
}

// Funções de navegação/modal (exemplo, ajuste conforme seu HTML)
function abrirModalNivel(nivel) {
    // ...
}
function abrirModalGuiaPronuncia() {
    // ...
}
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
// Adicione event listeners e integração com seu HTML conforme necessário 