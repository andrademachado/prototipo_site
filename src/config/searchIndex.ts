// src/config/searchIndex.ts

// ============================================================
// Este arquivo é o "mapa" da busca.
// Ele diz: "se o usuário digitar X, leve ele para a página Y e role até a seção Z".
// ============================================================

// ------------------------------------------------------------------
// 1. DEFININDO OS TIPOS (para o TypeScript ficar feliz)
// ------------------------------------------------------------------
// Cada destino tem uma rota (path) e uma âncora (anchor)
type Destination = {
    path: string;    // ex: '/home', '/categoria1'
    anchor: string;  // ex: 'servicos', 'produtos'
};

// O índice de busca é um objeto onde a chave é a palavra e o valor é o Destination
type SearchIndex = Record<string, Destination>;

// ------------------------------------------------------------------
// 2. O ÍNDICE DE PALAVRAS (é aqui que você cadastra tudo)
// ------------------------------------------------------------------
export const searchIndex: SearchIndex = {
    // Estrutura de cada linha:
    // 'palavra que o usuário digita': { path: '/rota', anchor: 'id-da-secao' }

    // ---------- SERVIÇOS (todos apontam para a seção #servicos) ----------
    'botox': { path: '/', anchor: 'servicos' },
    'limpeza de pele': { path: '/', anchor: 'servicos' },
    'harmonização facial': { path: '/categoria3', anchor: 'servicos' },
    'depilação': { path: '/categoria1', anchor: 'servicos' },

    // ---------- PRODUTOS (todos apontam para a seção #produtos) ----------
    'matricula': { path: '/', anchor: 'produtos' },
    'kit': { path: '/categoria2', anchor: 'produtos' },
    'shampoo': { path: '/categoria1', anchor: 'produtos' },

    // ---------- ESPECIALIZAÇÕES (todos apontam para #especializacoes) ----------
    'técnica exclusiva': { path: '/categoria1', anchor: 'especializacoes' },
    'pós-operatório': { path: '/categoria3', anchor: 'especializacoes' },
};

// ------------------------------------------------------------------
// 3. FUNÇÃO PARA NORMALIZAR (tira acentos e deixa tudo minúsculo)
// ------------------------------------------------------------------
// Exemplo: "Limpeza de Pele" vira "limpeza de pele"
// Isso faz com que o usuário possa digitar "limpeza" ou "Limpeza" e funcionar.
export const normalize = (text: string): string => {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
};

// ------------------------------------------------------------------
// 4. FUNÇÃO QUE PROCURA A PALAVRA E DEVOLVE O DESTINO
// ------------------------------------------------------------------
// Se encontrar, retorna { path, anchor }
// Se não encontrar, retorna null
export const findDestination = (term: string): Destination | null => {
    const normalizedTerm = normalize(term);
    const entry = Object.entries(searchIndex).find(([key]) =>
        normalize(key).includes(normalizedTerm) || normalizedTerm.includes(normalize(key))
    );
    return entry ? entry[1] : null;
};