import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

import GlobalStyles from './styles/global'

export default function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
