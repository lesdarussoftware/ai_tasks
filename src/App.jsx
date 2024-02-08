import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { TranslationPage } from './features/translation/TranslationPage'
import { Layout } from './components/Layout'
import { HomePage } from './features/pages/HomePage'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/traduccion' element={<TranslationPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
