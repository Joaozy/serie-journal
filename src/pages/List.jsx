import { useState, useEffect } from 'react';
import SerieList from '../components/SerieList/SerieList';
import SerieForm from '../components/SerieForm/SerieForm';
import api from '../services/api';

function List() {
  const [minhasSeries, setMinhasSeries] = useState([]);
  const [serieParaEditar, setSerieParaEditar] = useState(null);

  const carregarSeries = async () => {
    try {
      const response = await api.get('/series');
      setMinhasSeries(response.data);
    } catch (error) {
      console.error("Erro ao buscar as séries:", error);
      alert("Não foi possível carregar a lista de séries. Verifique se a API está rodando.");
    }
  };

  useEffect(() => {
    carregarSeries();
  }, []);

  const handleEdit = (id) => {
    const serie = minhasSeries.find(s => s.id === id);
    setSerieParaEditar(serie);
  };

  const handleSalvarEdicao = async (serieAtualizada) => {
    try {
      await api.put('/series', serieAtualizada);
      alert('Série atualizada com sucesso!');
      setSerieParaEditar(null); 
      carregarSeries(); 
    } catch (error) {
      console.error("Erro ao atualizar a série:", error);
      alert('Ocorreu um erro ao tentar salvar as alterações.');
    }
  };

  const handleDelete = async (id) => {
    const confirmar = window.confirm("Tem certeza que deseja excluir esta série?");
    if (confirmar) {
      try {
        await api.delete(`/series/${id}`);
        alert("Série excluída com sucesso!");
        carregarSeries(); 
      } catch (error) {
        console.error("Erro ao excluir série:", error);
        alert("Ocorreu um erro ao tentar excluir a série.");
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* O título duplicado foi removido daqui! Deixamos apenas a renderização condicional. */}
      {serieParaEditar ? (
        <SerieForm 
          serieParaEditar={serieParaEditar} 
          onSave={handleSalvarEdicao} 
          cancelarEdicao={() => setSerieParaEditar(null)} 
        />
      ) : (
        <SerieList 
          series={minhasSeries} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      )}
    </div>
  );
}

export default List;