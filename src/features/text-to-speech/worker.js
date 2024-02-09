import { TransformersPipeline } from "../../helpers/transformersPipeline"

self.addEventListener('message', async (event) => {

    let synthesizer = await TransformersPipeline.getInstance(
        x => self.postMessage(x),
        'text-to-speech',
        event.data.model,
        true
    )

    let output = await synthesizer(event.data.text)

    self.postMessage({
        status: 'complete',
        output
    })
})
