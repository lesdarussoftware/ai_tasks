import { useEffect, useState } from "react"
import { WaveFile } from "wavefile"

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
    } = useModel({ feature: 'text-to-speech', defaultModel: 'ylacombe/mms-spa-finetuned-argentinian-monospeaker' })

    const [downloadLink, setDownloadLink] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        if (input.length > 0) {
            setDisabled(true)
            worker.current.postMessage({ model, text: input })
        }
    }

    const handleDownload = () => {
        const wav = new WaveFile()
        wav.fromScratch(1, output.sampling_rate, "32f", output.audio)

        const wavBlob = new Blob([wav.toBuffer()], { type: "audio/wav" })
        const url = window.URL.createObjectURL(wavBlob)
        setDownloadLink(url)
    }

    useEffect(() => {
        if (output.audio) {
            handleDownload()
        }
    }, [output])

    return (
        <>
            <div className="modelSelector">
                <label htmlFor="model">Modelo a utilizar</label>
                <select name="model" onChange={e => setModel(e.target.value)}>
                    <option value="ylacombe/mms-spa-finetuned-argentinian-monospeaker">
                        ylacombe/mms-spa-finetuned-argentinian-monospeaker (voz argentina)
                    </option>
                    <option value="ylacombe/mms-spa-finetuned-chilean-monospeaker">
                        ylacombe/mms-spa-finetuned-chilean-monospeaker (voz chilena)
                    </option>
                    <option value="ylacombe/mms-spa-finetuned-colombian-monospeaker">
                        ylacombe/mms-spa-finetuned-colombian-monospeaker (voz colombiana)
                    </option>
                </select>
            </div>
            {ready &&
                <a href={downloadLink} download="audio.wav">
                    <button type="button" className="downloadBtn" disabled={!downloadLink}>
                        {downloadLink ? 'Descargar audio' : 'Generando audio...'}
                    </button>
                </a>
            }
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