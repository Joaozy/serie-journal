import React from 'react';

export default function SerieList({ series, onDelete, onEdit }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px', padding: '0 20px' }}>
      <h2>Lista de séries</h2>
      
      {/* Verifica se a lista está vazia para dar um feedback ao usuário */}
      {series.length === 0 ? (
        <p>Nenhuma série cadastrada no momento.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0, maxWidth: '800px', margin: '0 auto' }}>
          {series.map((serie, index) => (
            <li 
              key={index} 
              style={{ 
                borderBottom: '1px solid #eee', 
                padding: '15px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {/* Exibição dos dados da série */}
              <span style={{ textAlign: 'left', flex: 1 }}>
                - <strong>{serie.titulo}</strong> - {serie.temporadas} temporadas - {serie.dataLancamento} - {serie.diretor} - {serie.produtora} - {serie.categoria} - {serie.dataAssistido}
              </span>
              
              {/* Botões de ação */}
              <div style={{ minWidth: '130px', textAlign: 'right' }}>
                <button 
                  onClick={() => onEdit(index)} 
                  style={{ marginRight: '5px', cursor: 'pointer' }}
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(index)}
                  style={{ cursor: 'pointer' }}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}