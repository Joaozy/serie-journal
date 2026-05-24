import { useState, useEffect } from "react";

export default function SerieForm({ onSave, serieParaEditar, cancelarEdicao }) {
    const estadoInicial ={
        titulo: '',
        temporadas: '',
        dataLancamento: '',
        diretor: '',
        produtora: '',
        categoria: '',
        dataAssistido: ''
    };
    // Estado em formato de Objeto para armazenar campos do formulário
    const [formData, setFormData] =  useState(estadoInicial);

    // feedbacks visuais (erro ou sucesso)
    const [mensagem, setMensagem] = useState({ texto: '', tipo: ''});

    useEffect(() => {
        if (serieParaEditar) {
            setFormData(serieParaEditar);
        } else {
            setFormData(estadoInicial);
        }
    }, [serieParaEditar]);
    // Funcao para atualizar campos do formulario
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // funcao para o botao submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // verificar se os campos estao vazios
        if (!formData.titulo || !formData.temporadas || !formData.diretor) {
            setMensagem({ texto: 'Por favor, preencha os campos principais.', tipo: 'erro'
            });
            return;
        }

        // se passar da validacao, envia os dados via props (onAdd)
        onSave(formData);
        setFormData(estadoInicial) //limpar formulario

        // feedback visual de sucesso
        setMensagem({texto: 'Série cadastrada com sucesso!', tipo: 'sucesso'});

        // limpar mensagem de sucesso apos um tempo (3seg)
        setTimeout(() => {
            setMensagem({texto: '', tipo: ''});
        }, 3000);
    };

    return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>{serieParaEditar ? 'Editar Série' : 'Cadastrar Séries'}</h2>
      
      {mensagem.texto && (
        <p style={{ color: mensagem.tipo === 'erro' ? 'red' : 'green' }}>
          {mensagem.texto}
        </p>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'right' }}>
        <div style={{ marginBottom: '10px' }}><label>Título: </label><input type="text" name="titulo" value={formData.titulo} onChange={handleChange} /></div>
        <div style={{ marginBottom: '10px' }}><label>Número de Temporadas: </label><input type="number" name="temporadas" value={formData.temporadas} onChange={handleChange} min="1" /></div>
        <div style={{ marginBottom: '10px' }}><label>Data de Lançamento da Temporada: </label><input type="date" name="dataLancamento" value={formData.dataLancamento} onChange={handleChange} /></div>
        <div style={{ marginBottom: '10px' }}><label>Diretor: </label><input type="text" name="diretor" value={formData.diretor} onChange={handleChange} /></div>
        <div style={{ marginBottom: '10px' }}><label>Produtora: </label><input type="text" name="produtora" value={formData.produtora} onChange={handleChange} /></div>
        <div style={{ marginBottom: '10px' }}><label>Categoria: </label><input type="text" name="categoria" value={formData.categoria} onChange={handleChange} /></div>
        <div style={{ marginBottom: '10px' }}><label>Data em que assistiu: </label><input type="date" name="dataAssistido" value={formData.dataAssistido} onChange={handleChange} /></div>

        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <button type="submit">{serieParaEditar ? 'Salvar Alterações' : 'Cadastrar Série'}</button>
          
          {/* Botão para cancelar a edição e limpar o formulário */}
          {serieParaEditar && (
            <button type="button" onClick={cancelarEdicao} style={{ marginLeft: '10px' }}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}