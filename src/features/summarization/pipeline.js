import { pipeline, env } from '@xenova/transformers';

export class SummarizationPipeline {

    static task = 'summarization'
    static model = 'mrm8488/bert2bert_shared-spanish-finetuned-summarization'
    static instance = null

    static async getInstance(progress_callback = null) {
        env.cacheDir = './.cache'
        if (this.instance === null) {
            this.instance = pipeline(this.task, this.model, { progress_callback })
        }

        return this.instance
    }
}