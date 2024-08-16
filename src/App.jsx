import { useEffect } from "react"
import { WaveFile } from "wavefile"
import { LuLoader2 } from "react-icons/lu";
import { useModel } from "./hooks/useModel"
import { Loader } from "./components/Loader"
import './App.css'

function App() {

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
    setModel,
    downloadLink,
    setDownloadLink
  } = useModel('ylacombe/mms-spa-finetuned-argentinian-monospeaker')

  const handleSubmit = e => {
    e.preventDefault()
    if (input.length > 0) {
      setDownloadLink(null)
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
    <div>
      <header>
        <h1>
          Texto a voz con IA
        </h1>
      </header>
      <main>
        <section className="model-selector">
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
        </section>
        {ready &&
          <a href={downloadLink} download="audio.wav">
            <button type="button" className="download-btn" disabled={!downloadLink}>
              {downloadLink ?
                'Descargar audio' :
                <div className="loader-indicator-container">
                  Generando audio
                  <LuLoader2 className="loader-indicator" />
                </div>
              }
            </button>
          </a>
        }
        <section className="form-container">
          <form onSubmit={handleSubmit}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ingrese aquí el texto...">
            </textarea>
            <input type="submit" value="Sintetizar" disabled={disabled} />
          </form>
        </section>
        <Loader ready={ready} progressItems={progressItems} />
      </main>
    </div>
  )
}

export default App
