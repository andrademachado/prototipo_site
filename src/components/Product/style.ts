import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
    background-color : ${cores.bege};
    border-radius: 8px;
    padding: 8px;
    position: relative;

    @media (max-width: 1023px) {
        padding: 16px; // mais espaço interno – isso dá a borda branca/bege
        img {
            width: 100%;          // ocupa toda a largura do card
            height: auto;         // mantém proporção
            max-height: 200px;    // limite para não ficar enorme
            object-fit: cover;    // preenche o espaço, cortando se necessário
            border-radius: 4px;   // (opcional) arredonda levemente
        }
    }
`
export const Titulo = styled.h3`
    font-weight: bold;
    font-size: 16px;
    display: block;
    margin-top: 16px;
    margin-bottom: 8px;
`
export const Descricao = styled.p`
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-top: 16px;
`

