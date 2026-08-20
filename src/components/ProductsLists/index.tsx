import { useLayoutEffect, useRef } from 'react';
import Product from "../Product";
import { Container, List } from './styles';
import type Site from "../../models/site";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type Props = {
    title: string;
    background: 'beige' | 'branco';
    sites: Site[];
};

const ProductsLists = ({ background, title, sites }: Props) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // ----------------------------------------------
            // 1. ANIMAÇÃO DO TÍTULO (mantida em todos os tamanhos)
            // ----------------------------------------------
            if (titleRef.current) {
                gsap.from(titleRef.current, {
                    x: -60,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 80%',
                        end: 'bottom 200px',
                        scrub: 1.2,
                    }
                });
            }

            // ----------------------------------------------
            // 2. ANIMAÇÃO DOS CARDS (SOMENTE EM DESKTOP)
            // ----------------------------------------------
            // Verifica se a tela tem largura >= 1024px (desktop)
            // Se for tablet ou mobile (< 1024px), a animação é ignorada.
            const isDesktop = window.innerWidth >= 1024;

            if (isDesktop) {
                const cards = gsap.utils.toArray<HTMLElement>('.product-item', containerRef.current);
                if (cards.length > 0) {
                    gsap.from(cards, {
                        x: 200,              // entrada pela direita
                        opacity: 0,
                        duration: 1,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top 85%',
                            end: 'top 30%',
                            scrub: 2,
                        }
                    });
                }
            }
            // Se for mobile/tablet, os cards simplesmente aparecem sem animação,
            // pois a animação não foi criada. O layout e o conteúdo permanecem idênticos.

        }, containerRef);

        return () => ctx.revert();
    }, []); // dependências vazias → executa apenas na montagem

    return (
        <Container ref={containerRef} background={background}>
            <div className="container">
                <h2 ref={titleRef}>{title}</h2>
                <List>
                    {sites.map((site) => (
                        <div key={site.id} className="product-item">
                            <Product
                                title={site.title}
                                description={site.description}
                                image={site.image}
                            />
                        </div>
                    ))}
                </List>
            </div>
        </Container>
    );
};

export default ProductsLists;