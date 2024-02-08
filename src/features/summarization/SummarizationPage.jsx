import { InputAndOutputTextarea } from "../../components/InputAndOutputTextarea"
import { Loader } from "../../components/Loader"
import { useModel } from "../../hooks/useModel"

export function SummarizationPage() {

    const {
        worker,
        ready,
        progressItems,
        input,
        setInput,
        output,
        disabled,
        setDisabled
    } = useModel({ feature: 'summarization' })

    const handleSubmit = e => {
        e.preventDefault()
        if (input.length > 0) {
            setDisabled(true)
            worker.current.postMessage({ text: input })
        }
    }

    return (
        <>
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