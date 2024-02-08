import { useEffect, useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

import { useModel } from "../../hooks/useModel"

import { Loader } from "../../components/Loader"
import LanguageSelector from "./LanguageSelector"

export function TranslationPage() {

    const {
        worker,
        ready,
        progressItems,
        input,
        setInput,
        output,
        disabled,
        setDisabled
    } = useModel({ feature: 'translation' })

    const [sourceLanguage, setSourceLanguage] = useState('eng_Latn')
    const [targetLanguage, setTargetLanguage] = useState('fra_Latn')

    const handleSubmit = e => {
        e.preventDefault()
        if (input.length > 0) {
            setDisabled(true)
            worker.current.postMessage({
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
            <div className="translationContainer">
                <div className="translationSection">
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Ingrese aquí el texto...">
                        </textarea>
                        <input type="submit" value="Traducir" disabled={disabled} />
                    </form>
                </div>
                <div className="translationSection">
                    <textarea placeholder="Resultado" value={output} readOnly></textarea>
                </div>
            </div>
            <Loader ready={ready} progressItems={progressItems} />
        </>
    )
}