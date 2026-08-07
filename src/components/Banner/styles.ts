import styled from "styled-components";

export const Titulo = styled.h2`
    font-size: 36px;
    max-width: 450px;
`

export const Paragrafo = styled.p`
    font-size: 24px;
    margin-top: 24px;
`

export const Imagem = styled.div`
    width: 100%;
    height: 560px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;    
    font-weight: bold;
    padding-top: 430px;
    position: relative;

    @media  (max-width: 1023px) {
        background-size: contain;        
        padding-top: 0;
        font-size: 18px;

        .container {
            position: absolute;
            bottom: 30%;    /* Ajuste conforme a posição do quadro branco */
            left: 5%;       /* Ajuste conforme a posição do quadro branco */
            margin: 0;
            width: auto;    /* Ou defina uma largura máxima em % */
            /* Se precisar que o texto não ocupe toda a largura, use max-width: 80% */
        }
        @media (max-width: 767px) {
            height: 400px;
            .container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;              /* Para não ocupar toda a largura */
            max-width: 90%;
            text-align: center;      /* Centraliza o texto horizontalmente */
            margin: 0;
        }

        /* Reduz o título */
        ${Titulo} {
            font-size: 24px;          /* Ajuste conforme necessário */
            max-width: 100%;          /* Remove a limitação de largura */
        }

        /* Reduz o parágrafo */
        ${Paragrafo} {
            font-size: 16px;          /* Ajuste conforme necessário */
            margin-top: 12px;         /* Espaçamento menor entre os textos */
        }
    }

    @media (max-width: 420px) {
        height: 300px;
        .container {
            width: 95%;              /* um pouco mais de folga nas bordas */
        }

        ${Titulo} {
            font-size: 18px;        /* título menor */
        }

        ${Paragrafo} {
            font-size: 14px;         /* parágrafo menor */
            margin-top: 2px;       /* espaçamento reduzido */
        }
    }


    }
`

