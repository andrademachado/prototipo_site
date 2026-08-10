import { useLayoutEffect, useRef } from 'react'
import { Imagem, Paragrafo, Titulo } from './styles'
import bannerImg from '../../assets/images/Banner1.png'
import { gsap } from 'gsap'
import Button from '../Button'

const Banner = () => {
    const tituloRef = useRef<HTMLHeadingElement>(null)

    useLayoutEffect(() => {
        if (tituloRef.current) {
            gsap.to(tituloRef.current, {
                x: 0,           // move para posição original
                opacity: 1,     // torna visível
                duration: 2     // duração da animação (opcional)
            })
        }
    }, []) // array vazio = executa apenas uma vez

    return (
        <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className='container'>
                <div>
                    {/* 4. Atribui a ref ao componente */}
                    <Titulo ref={tituloRef}>
                        Texto Banner 1
                    </Titulo>
                    <Paragrafo>
                        Parágrafo <br />
                        subparágrafo
                    </Paragrafo>
                </div>
                <Button
                    type='link'
                    to='/produto'
                    title='Clique aqui pra aproveitar essa oferta'>
                    Aproveite
                </Button>
            </div>
        </Imagem>
    )
}

export default Banner