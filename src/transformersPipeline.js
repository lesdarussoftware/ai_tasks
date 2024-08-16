import { pipeline, env } from '@xenova/transformers'
env.allowLocalModels = false
env.useBrowserCache = false

export class TransformersPipeline {

    static task
    static model
    static instance = null

    static async getInstance(progress_callback = null, task, model, quantized = null) {

        this.task = task
        this.model = model

        if (this.instance === null) {
            this.instance = pipeline(this.task, this.model, { progress_callback, quantized })
        }

        return this.instance
    }
}