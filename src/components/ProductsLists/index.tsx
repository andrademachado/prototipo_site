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
    // Referência para o título – animaremos apenas ele
    const titleRef = useRef<HTMLHeadingElement>(null);
    // Referência para o container – escopo da animação
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        // Cria um contexto GSAP limitado ao container
        const ctx = gsap.context(() => {
            // Só anima se o título existir
            if (titleRef.current) {
                gsap.from(titleRef.current, {
                    x: -50,          // começa deslocado para esquerda
                    opacity: 0,       // começa invisível
                    duration: 1,      // (opcional) usado apenas se scrub for desativado
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 90%',           // quando o topo do título encostar em 85% da viewport
                        end: 'bottom 200px',        // quando a base do título estiver a 500px do topo da viewport
                        scrub: 4,                // animação controlada pelo scroll (vai e volta)
                    }
                });
            }
        }, containerRef);

        // Limpeza: reverte o contexto ao desmontar ou reexecutar
        return () => ctx.revert();
    }, []);

    return (
        <Container ref={containerRef} background={background}>
            <div className="container">
                <h2 ref={titleRef}>{title}</h2>
                <List>
                    {sites.map(site => (
                        <Product
                            key={site.id}
                            title={site.title}
                            description={site.description}
                            image={site.image}
                        />
                    ))}
                </List>
            </div>
        </Container>
    );
};

export default ProductsLists;