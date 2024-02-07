import { MyTranslationPipeline } from "./pipeline"

// Listen for messages from the main thread
self.addEventListener('message', async (event) => {
    // Retrieve the translation pipeline. When called for the first time,
    // this will load the pipeline and save it for future use.
    let translator = await MyTranslationPipeline.getInstance(x => {
        // We also add a progress callback to the pipeline so that we can
        // track model loading.
        self.postMessage(x)
    })
  
    // Actually perform the translation
    let output = await translator(event.data.text, {
        tgt_lang: 'eng_Latn',
        src_lang: 'spa_Latn',
  
        // Allows for partial output
        callback_function: x => {
            self.postMessage({
                status: 'update',
                output: translator.tokenizer.decode(x[0].output_token_ids, { skip_special_tokens: true })
            })
        }
    })
  
    // Send the output back to the main thread
    self.postMessage({
        status: 'complete',
        output: output,
    })
  })