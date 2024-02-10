import { Community } from '../../components/svg/Community'
import { HuggingFace } from '../../components/svg/HuggingFace'

import Web from '../../assets/web.png'

export function CommunityPage() {
    return (
        <section className='communityContainer'>
            <article className="communitySection">
                <div className='svgContainer'>
                    <Community />
                </div>
                <div className='supportSection'>
                    <h3>Apoya a los desarrolladores desde Argentina</h3>
                    <p>
                        Alias: kingsnake
                    </p>
                    <p>
                        CBU: 1430001713020231440017
                    </p>
                    <p>
                        CUIT/CUIL: 23-36912510-9
                    </p>
                </div>
            </article>
            <article className="communitySection">
                <div className='websiteSection'>
                    <h3>Visita nuestro sitio web</h3>
                    <div className='link'>
                        <a href="https://lesdarussoftware.github.io/web/" target='_blank'>
                            <img src={Web} className='img' />
                        </a>
                    </div>
                </div>
                <div className='websiteSection'>
                    <h3>Hugging Face (Comunidad de IA y Machine Learning)</h3>
                    <div className='link'>
                        <a href="https://huggingface.co/" target='_blank'>
                            <div className='img'>
                                <HuggingFace />
                            </div>
                        </a>
                    </div>
                </div>
            </article>
        </section>
    )
}