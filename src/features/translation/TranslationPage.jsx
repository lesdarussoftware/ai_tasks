import { Loader } from "../../components/Loader"
import { useModel } from "../../hooks/useModel"

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

    const handleSubmit = e => {
        e.preventDefault()
        if (input.length > 0) {
            setDisabled(true)
            worker.current.postMessage({ text: input })
        }
    }

    return (
        <>
            <div className="translationContainer">
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Ingrese aquí el texto...">
                    </textarea>
                    <input type="submit" value="Traducir" disabled={disabled} />
                </form>
                <textarea placeholder="Resultado" value={output} readOnly></textarea>
            </div>
            <Loader ready={ready} progressItems={progressItems} />
        </>
    )
}