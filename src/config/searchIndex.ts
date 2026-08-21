import { sanitizeInput } from '../utils/security'; // ← LINHA ADICIONADA

type Destination = {
    path: string;
    anchor: string;
};

type SearchIndex = Record<string, Destination>;

export const searchIndex: SearchIndex = {
    'botox': { path: '/', anchor: 'servicos' },
    'limpeza de pele': { path: '/', anchor: 'servicos' },
    'harmonização facial': { path: '/categoria3', anchor: 'servicos' },
    'depilação': { path: '/categoria1', anchor: 'servicos' },
    'matricula': { path: '/', anchor: 'produtos' },
    'kit': { path: '/categoria2', anchor: 'produtos' },
    'shampoo': { path: '/categoria1', anchor: 'produtos' },
    'técnica exclusiva': { path: '/categoria1', anchor: 'especializacoes' },
    'pós-operatório': { path: '/categoria3', anchor: 'especializacoes' },
};

export const normalize = (text: string): string => {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
};

export const findDestination = (term: string): Destination | null => {
    const safeTerm = sanitizeInput(term);
    if (!safeTerm) return null;
    const normalizedTerm = normalize(safeTerm);
    const entry = Object.entries(searchIndex).find(([key]) =>
        normalize(key).includes(normalizedTerm) || normalizedTerm.includes(normalize(key))
    );
    return entry ? entry[1] : null;
};