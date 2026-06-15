import { useNavigate } from 'react-router-dom'; // Hook para navegação automática
import SerieForm from '../components/SerieForm/SerieForm';
import api from '../services/api'; // Nossa configuração do Axios

export default function Register() {
  const navigate = useNavigate();

  // Função que será executada quando o SerieForm disparar o "onSave"
  const handleCadastrar = async (dadosDaSerie) => {
    try {
      // Faz uma requisição POST enviando os dados do formulário para o backend
      await api.post('/series', dadosDaSerie);
      
      alert('Série cadastrada com sucesso!');
      
      // Redireciona o usuário para a tela de listagem
      navigate('/lista'); 
    } catch (error) {
      console.error("Erro ao cadastrar a série:", error);
      alert('Ocorreu um erro ao cadastrar. Verifique se a API está rodando.');
    }
  };

  return (
    <div>
      {/* Removemos as props de edição por enquanto, pois esta é a tela de Cadastro Novo */}
      <SerieForm 
        onSave={handleCadastrar} 
      />
    </div>
  );
}