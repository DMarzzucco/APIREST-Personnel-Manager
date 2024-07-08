import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import { Footer, Header } from './components/common';
import { Home, Message } from './pages';
import { AuthProvider } from './context';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/messages' element={<Message />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  )
}
export default App;