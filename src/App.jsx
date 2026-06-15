import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import List from './pages/List';

function App() {
  return (
    <Router>
      {/* A NavBar fica aqui fora das Routes para aparecer fixa em todas as páginas */}
      <NavBar /> 
      
      {/* O Container ou a estrutura de layout principal envolve as rotas dinâmicas */}
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/lista" element={<List />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;