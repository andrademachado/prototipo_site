import ProductsLists from "../../components/ProductsLists"
import imgTeste from '../../assets/images/imgTeste2.png'
import type Site from "../../models/site"

const promocoes: Site[] = [
    {
        id:1,
        title:'Título1',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi obcaecati ad magnam ipsum voluptate hic voluptatem, tenetur natus sed? Error cumque nisi ea eius magnam qui optio nihil exercitationem',
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
]
    
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
]


const Categoria1 = () => (
    <>
        <ProductsLists sites={promocoes} title={'Promoções'} background={'branco'} />
        <ProductsLists sites={lancamentos} title={'Lançamentos'} background={'beige'} />
        <ProductsLists sites={promocoes} title={'Serviços'} background={'branco'} />
        <ProductsLists sites={lancamentos} title={'Métodos'} background={'beige'} />
    </>
)

export default Categoria1