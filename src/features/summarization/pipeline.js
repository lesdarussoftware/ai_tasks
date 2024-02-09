import { pipeline, env } from '@xenova/transformers'
env.allowLocalModels = false
env.useBrowserCache = false

export class AITasksSummarizationPipeline {

    static task = 'summarization'
    static model
    static instance = null

    static async getInstance(progress_callback = null, model) {

        this.model = model

        if (this.instance === null) {
            this.instance = pipeline(this.task, this.model, { progress_callback })
        }

        return this.instance
    }
}