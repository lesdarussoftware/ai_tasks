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
    <BrowserRouter basename='/ai_tasks/'>
      <Layout>
        <Routes>
          <Route path='/ai_tasks/' element={<HomePage />} />
          <Route path='/ai_tasks/traduccion' element={<TranslationPage />} />
          <Route path='/ai_tasks/resumen' element={<SummarizationPage />} />
          <Route path='/ai_tasks/texto-a-voz' element={<TextToSpeech />} />
          <Route path='/ai_tasks/comunidad' element={<CommunityPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
