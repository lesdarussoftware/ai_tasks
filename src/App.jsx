import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { HomePage } from './features/pages/HomePage'
import { TranslationPage } from './features/translation/TranslationPage'
import { SummarizationPage } from './features/summarization/SummarizationPage'
import { TextToSpeech } from './features/text-to-speech/TextToSpeechPage'
import { CommunityPage } from './features/pages/CommunityPage'
import { ErrorPage } from './features/pages/ErrorPage'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/ai-tasks/' element={<HomePage />} />
          <Route path='/ai-tasks/traduccion' element={<TranslationPage />} />
          <Route path='/ai-tasks/resumen' element={<SummarizationPage />} />
          <Route path='/ai-tasks/texto-a-voz' element={<TextToSpeech />} />
          <Route path='/ai-tasks/comunidad' element={<CommunityPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
