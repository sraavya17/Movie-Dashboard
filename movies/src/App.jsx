import './css/App.css'
import HomePage from './Pages/HomePage'
import Favorites from './Pages/Favorites';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
    </div>
  )
}

export default App
