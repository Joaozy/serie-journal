import { use, useState } from "react";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import List from './pages/List';

function App() {
  // Estado para controlar a tela inicial 
  const [paginaAtual, setPaginaAtual] = useState('home');
 
  // Estado para armazenar séries 
  const [series, setSeries] = useState([]);

  // Estado para controlar qual serie estamos editando
  const [indexEdicao, setIndexEdicao] = useState(null);


  // Funcao para trocar de tela
  const navegar = (pagina) => {
    setPaginaAtual(pagina);

    if (pagina !== 'cadastrar') {
      setIndexEdicao(null);
    }
  };

  // Funcao para salvar ou atualizar serie
  const handleSaveSerie = (dadosSerie) => {
    if (indexEdicao !== null) {
      // Modo edição
      const listaAtualizada = [...series];
      listaAtualizada[indexEdicao] = dadosSerie;
      setSeries(listaAtualizada);
      setIndexEdicao(null);
    } else {
      // Modo Criacao
      setSeries([...series, dadosSerie]);
    }

    setPaginaAtual('lista');
  };


  // Deletar uma série
  const handleDeleteSerie = (indexParaDeletar) => {
    const novaLista = series.filter((_, index) => index !== indexParaDeletar);
    setSeries(novaLista);
  };

  const handleEditSerie = (index) => {
    setIndexEdicao(index);
    setPaginaAtual('cadastrar');
  };

  const cancelarEdicao = () => {
    setIndexEdicao(null);
    setPaginaAtual('lista');
  };

  //

  return (
    <div>
      <NavBar navegar={navegar} />

      <main>
        {paginaAtual === 'home' && <Home />}
        {paginaAtual === 'sobre' && <About />}
        
        {paginaAtual === 'cadastrar' && (
          <Register 
            onSave={handleSaveSerie} 
            serieParaEditar={indexEdicao !== null ? series[indexEdicao] : null}
            cancelarEdicao={cancelarEdicao}
          />
        )}
        
        {paginaAtual === 'lista' && (
          <List 
            series={series} 
            onDelete={handleDeleteSerie} 
            onEdit={handleEditSerie} 
          />
        )}
      </main>
    </div>
  );
}

export default App;
