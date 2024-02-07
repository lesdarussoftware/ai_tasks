import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { TranslationPage } from './features/translation/TranslationPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TranslationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
