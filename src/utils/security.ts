// src/utils/security.ts

/**
 * Sanitiza uma string para uso seguro em navegação e comparações.
 * Remove tags HTML, caracteres de controle e limita o tamanho.
 */
export const sanitizeInput = (text: string): string => {
    if (!text) return '';

    // 1. Remove qualquer tag HTML (ex: <script>, <img>, <div>)
    let clean = text.replace(/<[^>]*>/g, '');

    // 2. Remove caracteres de controle (ASCII 0-31, exceto \n, \r, \t)
    clean = clean.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

    // 3. Limita a 100 caracteres (evita sobrecarga)
    clean = clean.slice(0, 100);

    // 4. Remove espaços extras no início e fim
    return clean.trim();
};

/**
 * Codifica uma string para ser usada com segurança em URLs (hash/query)
 */
export const safeEncodeURI = (text: string): string => {
    return encodeURIComponent(sanitizeInput(text));
};