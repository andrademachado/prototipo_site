// src/hooks/useScrollToAnchor.ts

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook que observa a URL e rola suavemente até o elemento com o ID
 * presente no hash (ex: #servicos).
 * 
 * Deve ser chamado dentro de cada página que pode receber uma âncora.
 * 
 * Exemplo de uso:
 *   const Home = () => {
 *     useScrollToAnchor();
 *     return ( ... );
 *   };
 */
export const useScrollToAnchor = (): void => {
    const location = useLocation();

    useEffect(() => {
        // Pega o hash da URL (ex: "#servicos")
        const hash = location.hash;

        if (hash) {
            // Remove o '#' para obter o ID do elemento
            const id = hash.substring(1); // ex: "servicos"

            // Tenta encontrar o elemento na página
            const element = document.getElementById(id);

            if (element) {
                // Pequeno delay para garantir que a página carregou completamente
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        }
    }, [location]); // Roda novamente sempre que a URL mudar
};
