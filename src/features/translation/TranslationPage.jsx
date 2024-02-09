import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

import { useModel } from "../../hooks/useModel"

import { Loader } from "../../components/Loader"
import LanguageSelector from "./LanguageSelector"
import { InputAndOutputTextarea } from "../../components/InputAndOutputTextarea";
import { ModelSelector } from "../../components/ModelSelector";

export function TranslationPage() {

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
    } = useModel({ feature: 'translation', defaultModel: 'Xenova/nllb-200-distilled-600M' })

    const [sourceLanguage, setSourceLanguage] = useState('eng_Latn')
    const [targetLanguage, setTargetLanguage] = useState('fra_Latn')

    const handleSubmit = e => {
        e.preventDefault()
        if (input.length > 0) {
            setDisabled(true)
            worker.current.postMessage({
                model,
                text: input,
                source: sourceLanguage,
                target: targetLanguage
            })
        }
    }

    const handleExchange = () => {
        setSourceLanguage(targetLanguage)
        setTargetLanguage(sourceLanguage)
    }

    return (
        <>
            <ModelSelector
                setModel={setModel}
                options={[
                    'Xenova/nllb-200-distilled-600M',
                    'Xenova/mbart-large-50-many-to-many-mmt'
                ]}
            />
            <div className="langSelectorContainer">
                <LanguageSelector
                    type="Fuente"
                    defaultLanguage={sourceLanguage}
                    onChange={e => setSourceLanguage(e.target.value)}
                />
                <div className="exchangeLangIconContainer">
                    <FaExchangeAlt className="exchangeLangIcon" onClick={handleExchange} />
                </div>
                <LanguageSelector
                    type="Destino"
                    defaultLanguage={targetLanguage}
                    onChange={e => setTargetLanguage(e.target.value)}
                />
            </div>
            <InputAndOutputTextarea
                handleSubmit={handleSubmit}
                input={input}
                setInput={setInput}
                disabled={disabled}
                submitValue="Traducir"
                output={output}
            />
            <Loader ready={ready} progressItems={progressItems} />
        </>
    )
}