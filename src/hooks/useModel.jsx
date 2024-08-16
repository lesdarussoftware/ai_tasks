import { useEffect, useRef, useState } from "react"

import TextToSpeechWorker from '../helpers/worker?worker'

export function useModel(defaultModel) {

    const [ready, setReady] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [progressItems, setProgressItems] = useState([])
    const [model, setModel] = useState(defaultModel)
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')

    const worker = useRef(null)

    useEffect(() => {
        if (!worker.current) {
            const getWorkerScript = () => {
                return new TextToSpeechWorker()
            }
            worker.current = getWorkerScript()
        }
        const onMessageReceived = e => {
            switch (e.data.status) {
                case 'initiate':
                    // Model file start load: add a new progress item to the list.
                    setReady(false)
                    setProgressItems(prev => [...prev, e.data])
                    break

                case 'progress':
                    // Model file progress: update one of the progress items.
                    setProgressItems(
                        prev => prev.map(item => {
                            if (item.file === e.data.file) {
                                return { ...item, progress: e.data.progress }
                            }
                            return item
                        })
                    )
                    break

                case 'done':
                    // Model file loaded: remove the progress item from the list.
                    setProgressItems(
                        prev => prev.filter(item => item.file !== e.data.file)
                    )
                    break

                case 'ready':
                    // Pipeline ready: the worker is ready to accept messages.
                    setReady(true)
                    break

                case 'update':
                    // Generation update: update the output text.
                    setOutput(e.data.output)
                    break

                case 'complete':
                    setOutput(e.data.output)
                    setDisabled(false)
                    break
            }
        }
        worker.current.addEventListener('message', onMessageReceived)
        return () => worker.current.removeEventListener('message', onMessageReceived)
    }, [])

    return {
        worker,
        input,
        setInput,
        ready,
        disabled,
        progressItems,
        output,
        setDisabled,
        model,
        setModel
    }
}