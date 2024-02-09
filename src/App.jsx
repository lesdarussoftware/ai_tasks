import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { HomePage } from './features/pages/HomePage'
import { TranslationPage } from './features/translation/TranslationPage'
import { SummarizationPage } from './features/summarization/SummarizationPage'
import { TextToSpeech } from './features/text-to-speech/TextToSpeechPage'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/traduccion' element={<TranslationPage />} />
          <Route path='/resumen' element={<SummarizationPage />} />
          <Route path='/texto-a-voz' element={<TextToSpeech />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
