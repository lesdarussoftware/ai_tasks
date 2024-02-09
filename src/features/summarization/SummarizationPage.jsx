import Emoji from 'react-emoji-render'

import { useModel } from "../../hooks/useModel"

import { InputAndOutputTextarea } from "../../components/InputAndOutputTextarea"
import { Loader } from "../../components/Loader"
import { ModelSelector } from '../../components/ModelSelector'

export function SummarizationPage() {

    const {
        worker,
        ready,
        progressItems,
        input,
        setInput,
        output,
        disabled,
        setDisabled,
        model,
        setModel
    } = useModel({ feature: 'summarization', defaultModel: 'Xenova/distilbart-cnn-6-6' })

    const handleSubmit = e => {
        e.preventDefault()
        if (input.length > 0) {
            setDisabled(true)
            worker.current.postMessage({ model, text: input })
        }
    }

    return (
        <>
            <p className='summarizationDisclaimer'>
                <Emoji text="Por el momento, el resumen de textos solo está disponible en inglés,
                pero te invitamos a probar diferentes modelos :wink:" />
            </p>
            <ModelSelector
                setModel={setModel}
                options={[
                    'Xenova/distilbart-cnn-6-6',
                    'Xenova/distilbart-xsum-6-6',
                    'Xenova/bart-large-cnn',
                    'Xenova/distilbart-cnn-12-6',
                    'Xenova/distilbart-xsum-9-6',
                    'Xenova/distilbart-xsum-12-6',
                    'Xenova/bart-large-xsum',
                    'ahmedaeb/distilbart-cnn-6-6-optimised',
                    'Xenova/distilbart-xsum-12-1',
                    'Xenova/distilbart-xsum-12-3',
                    'Xenova/distilbart-cnn-12-3'
                ]}
            />
            <InputAndOutputTextarea
                handleSubmit={handleSubmit}
                input={input}
                setInput={setInput}
                disabled={disabled}
                submitValue="Resumir"
                output={output}
            />
            <Loader ready={ready} progressItems={progressItems} />
        </>
    )
}