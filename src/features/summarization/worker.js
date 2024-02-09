import { TransformersPipeline } from "../../helpers/transformersPipeline"

self.addEventListener('message', async (event) => {

    let summarizer = await TransformersPipeline.getInstance(
        x => self.postMessage(x),
        'summarization',
        event.data.model
    )

    let output = await summarizer(event.data.text, {
        callback_function: x => {
            self.postMessage({
                status: 'update',
                output: summarizer.tokenizer.decode(x[0].output_token_ids, { skip_special_tokens: true })
            })
        }
    })

    self.postMessage({
        status: 'complete',
        output
    })
})
