import { HashRouter, Routes, Route } from 'react-router-dom'
import StudentCard from './pages/StudentCard'
import Validation from './pages/Validation'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StudentCard />} />
        <Route path="/validation" element={<Validation />} />
      </Routes>
    </HashRouter>
  )
}
