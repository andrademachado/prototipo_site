import styled from "styled-components";

export const Titulo = styled.h2`
    width:100% ;
    font-size: 36px;
    max-width: 450px;
    transform: translateX(-300px);
    opacity: 0;
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

    /* ========== ESTILOS BASE (DESKTOP) ========== */
    .container {
        position: relative;
        padding-top: 140;
        bottom: 30%;
        left: 15%;
        margin: 0;
        width: 60%;              /* largura menor para caber na parte branca */
        max-width: 700px;        /* limite máximo */
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 10px;              /* espaçamento fixo entre texto e botão */
    }

    /* ========== TABLET (768px a 1023px) ========== */
    @media (max-width: 1023px) {
        background-size: contain;
        padding-top: 0;
        font-size: 18px;

        .container {
            position: absolute;
            bottom: 30%;
            left: 5%;             /* ajuste para alinhar com a parte branca */
            width: 80%;           /* largura adequada para tablet */
            max-width: 600px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;            /* espaçamento menor no tablet */
            margin: 0;
        }

        /* ========== MOBILE (até 767px) ========== */
        @media (max-width: 767px) {
            height: 400px;

            .container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 85%;
                max-width: 400px;
                display: flex;
                flex-direction: column;   /* empilha no mobile, se preferir */
                align-items: center;
                justify-content: center;
                gap: 10px;
                text-align: center;
                margin: 0;
            }

            /* Se quiser manter lado a lado no mobile, remova flex-direction: column e ajuste */
            ${Titulo} {
                font-size: 24px;
                max-width: 100%;
            }

            ${Paragrafo} {
                font-size: 16px;
                margin-top: 12px;
            }
        }

        /* ========== MOBILE PEQUENO (até 420px) ========== */
        @media (max-width: 420px) {
            height: 300px;

            .container {
                width: 90%;
                gap: 8px;
            }

            ${Titulo} {
                font-size: 18px;
            }

            ${Paragrafo} {
                font-size: 14px;
                margin-top: 2px;
            }

            .container button,
            .container a {
                font-size: 12px;
                padding: 4px 10px;
            }
        }
    }
`;