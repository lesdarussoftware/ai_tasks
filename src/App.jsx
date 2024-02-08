import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { HomePage } from './features/pages/HomePage'
import { SummarizationPage } from './features/summarization/SummarizationPage'
import { TranslationPage } from './features/translation/TranslationPage'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/traduccion' element={<TranslationPage />} />
          <Route path='/resumen' element={<SummarizationPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
