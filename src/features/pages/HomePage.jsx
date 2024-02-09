import { Ai } from "../../components/svg/Ai"
import { Pc } from "../../components/svg/Pc"
import { Books } from '../../components/svg/Books'
import { World } from '../../components/svg/World'
import { Speech } from '../../components/svg/Speech'

export function HomePage() {
    return (
        <section className="homeContainer">
            <p className="homeP">
                ¿Alguna vez te has preguntado cómo las máquinas pueden aprender y realizar tareas de manera inteligente?
                Bueno, eso es exactamente lo que hacemos aquí.
                Pero, ¿qué significa realmente eso? Permíteme explicártelo de una manera sencilla:
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
                <div className="svgContainer" style={{ width: '40%' }}>
                    <Pc />
                </div>
                <p style={{ width: '60%' }} className="homeP">
                    La Inteligencia Artificial (IA) es como el cerebro de una computadora:
                    le permite aprender de la información que le proporcionamos y luego tomar
                    decisiones o realizar acciones basadas en ese conocimiento.
                </p>
            </div>
            <p className="homeP">
                Ahora, dentro de la IA, hay algo llamado "modelos". Estos modelos son como libros gigantes
                que contienen mucha información sobre un tema en particular.
                Por ejemplo, podríamos tener un modelo que sabe mucho sobre cómo traducir idiomas,
                otro que es experto en resumir textos y otro que puede convertir texto en voz.
            </p>
            <div className="svgContainer">
                <Books />
            </div>
            <p className="homeP">
                ¿Te preguntas cómo logramos todo esto? Bueno, aquí es donde entran en juego Transformers y Hugging Face.
                Transformers es una tecnología increíble que ayuda a las computadoras a entender y generar texto
                de manera muy inteligente. Y Hugging Face es como una comunidad de amigos que comparten
                estas tecnologías para que todos podamos usarlas. En AI Tasks, utilizamos una herramienta llamada
                Transformers.js, que permite que estos modelos se descarguen y se ejecuten directamente en tu navegador.
            </p>
            <div className="svgContainer">
                <World />
            </div>
            <p className="homeP">
                Entonces, ¿qué puedes hacer en AI Tasks? ¡Un montón de cosas! Por ejemplo, puedes traducir
                texto de un idioma a otro, resumir grandes párrafos en solo unas pocas oraciones para que sea
                más fácil de entender y hasta convertir texto en voz para escuchar en lugar de leer.
                Es importante tener en cuenta que, por ahora, la función de resumen está disponible solo en inglés.
                Pero no te preocupes, estamos trabajando arduamente para expandir nuestras capacidades a más idiomas
                en el futuro.
            </p>
            <div className="svgContainer">
                <Speech />
            </div>
            <p className="homeP">
                Lo mejor de todo es que puedes elegir entre diferentes modelos para cada tarea.
                Esto significa que si tienes una preferencia o si necesitas resultados específicos,
                ¡podemos adaptarnos a tus necesidades!
            </p>
            <div className="svgContainer">
                <Ai />
            </div>
            <p className="homeP">
                El objetivo principal de AI Tasks es acercar los avances de la IA a la comunidad hispanohablante.
                Queremos hacer que estas tecnologías sean accesibles y fáciles de usar para cualquier persona interesada,
                sin importar su nivel de experiencia en IA. Creemos que al proporcionar herramientas poderosas y educativas,
                podemos ayudar a más personas a comprender y beneficiarse de las aplicaciones prácticas de la IA en su
                vida diaria.
            </p>
            <p className="homeP">
                Así que, ¿estás listo para explorar el mundo de la inteligencia artificial con AI Tasks? ¡Empecemos!
            </p>
        </section>
    )
}