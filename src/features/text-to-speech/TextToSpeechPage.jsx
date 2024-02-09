import { useModel } from "../../hooks/useModel"

import { Loader } from "../../components/Loader"

export function TextToSpeech() {

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
    } = useModel({ feature: 'summarization', defaultModel: 'ylacombe/mms-spa-finetuned-argentinian-monospeaker' })

    const handleSubmit = e => {
        e.preventDefault()
        if (input.length > 0) {
            setDisabled(true)
            worker.current.postMessage({ model, text: input })
        }
    }

    return (
        <>
            <div className="modelSelector">
                <label htmlFor="model">Modelo a utilizar</label>
                <select name="model" onChange={e => setModel(e.target.value)}>
                    <option value="ylacombe/mms-spa-finetuned-argentinian-monospeaker">
                        Argentina
                    </option>
                    <option value="ylacombe/mms-spa-finetuned-chilean-monospeaker">
                        Chile
                    </option>
                    <option value="ylacombe/mms-spa-finetuned-colombian-monospeaker">
                        Colombia
                    </option>
                </select>
            </div>
            <div className="synthesizerFormContainer">
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Ingrese aquí el texto...">
                    </textarea>
                    <input type="submit" value="Sintetizar" disabled={disabled} />
                </form>
            </div>
            <Loader ready={ready} progressItems={progressItems} />
        </>
    )
}