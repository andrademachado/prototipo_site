// src/pages/Home.tsx

import Banner from "../../components/Banner";
import ProductsLists from "../../components/ProductsLists";
import { useScrollToAnchor } from '../../hooks/useScrollToAnchor' // ← IMPORTE O HOOK
import imgTeste from '../../assets/images/imgTeste2.png';
import type Site from "../../models/site";

// Seus dados (mantive os mesmos que você já tinha)
const promocoes: Site[] = [
    {
        id: 1,
        title: 'Título1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi obcaecati ad magnam ipsum voluptate hic voluptatem, tenetur natus sed? Error cumque nisi ea eius magnam qui optio nihil exercitationem',
        image: imgTeste
    },
    {
        id: 2,
        title: 'Título2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi obcaecati ad magnam ipsum voluptate hic voluptatem, tenetur natus sed? Error cumque nisi ea eius magnam qui optio nihil exercitationem',
        image: imgTeste
    },
    {
        id: 3,
        title: 'Título3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi obcaecati ad magnam ipsum voluptate hic voluptatem, tenetur natus sed? Error cumque nisi ea eius magnam qui optio nihil exercitationem',
        image: imgTeste
    },
    {
        id: 4,
        title: 'Título4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi obcaecati ad magnam ipsum voluptate hic voluptatem, tenetur natus sed? Error cumque nisi ea eius magnam qui optio nihil exercitationem',
        image: imgTeste
    }
];

const lancamentos: Site[] = [
    {
        id: 5,
        title: 'Título5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi obcaecati ad magnam ipsum voluptate hic voluptatem, tenetur natus sed? Error cumque nisi ea eius magnam qui optio nihil exercitationem',
        image: imgTeste
    },
    {
        id: 6,
        title: 'Título6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi obcaecati ad magnam ipsum voluptate hic voluptatem, tenetur natus sed? Error cumque nisi ea eius magnam qui optio nihil exercitationem',
        image: imgTeste
    },
    {
        id: 7,
        title: 'Título7',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi obcaecati ad magnam ipsum voluptate hic voluptatem, tenetur natus sed? Error cumque nisi ea eius magnam qui optio nihil exercitationem',
        image: imgTeste
    },
    {
        id: 8,
        title: 'Título8',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi obcaecati ad magnam ipsum voluptate hic voluptatem, tenetur natus sed? Error cumque nisi ea eius magnam qui optio nihil exercitationem',
        image: imgTeste
    }
];

// ============================================================
// COMPONENTE HOME (modificado)
// ============================================================
const Home = () => {
    // ← CHAMA O HOOK AQUI (dentro do componente)
    useScrollToAnchor();

    return (
        <>
            <Banner />

            {/* SEÇÃO 1: SERVIÇOS (usei a lista promocoes como exemplo) */}
            <section id="servicos">
                <ProductsLists
                    sites={promocoes}
                    title={'Promoções'}
                    background={'branco'}
                />
            </section>

            {/* SEÇÃO 2: PRODUTOS (usei a lista lancamentos como exemplo) */}
            <section id="produtos">
                <ProductsLists
                    sites={lancamentos}
                    title={'Lançamentos'}
                    background={'beige'}
                />
            </section>

            {/* SEÇÃO 3: ESPECIALIZAÇÕES (opcional – se quiser, pode adicionar outra lista) */}
            {/* <section id="especializacoes">
                <ProductsLists sites={...} title={'Especializações'} background={'branco'} />
            </section> */}
        </>
    );
};

export default Home;