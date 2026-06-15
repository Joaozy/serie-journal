import { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

export default function SerieForm({ onSave, serieParaEditar, cancelarEdicao }) {
  const estadoInicial = {
    titulo: '', temporadas: '', dataLancamento: '',
    diretor: '', produtora: '', categoria: '', dataAssistido: ''
  };
  
  const [formData, setFormData] = useState(estadoInicial);
  const [mensagem, setMensagem] = useState({ texto: '', tipo: ''});

  useEffect(() => {
    if (serieParaEditar) {
      setFormData(serieParaEditar);
    } else {
      setFormData(estadoInicial);
    }
  }, [serieParaEditar]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.titulo || !formData.temporadas || !formData.diretor) {
      setMensagem({ texto: 'Por favor, preencha os campos obrigatórios.', tipo: 'error' });
      return;
    }

    onSave(formData);
    if(!serieParaEditar) setFormData(estadoInicial);

    setMensagem({texto: 'Salvo com sucesso!', tipo: 'success'});
    setTimeout(() => setMensagem({texto: '', tipo: ''}), 3000);
  };


  const renderInput = (label, name, type = "text", required = false) => (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 'bold', color: '#444' }}>
        {label} {required && <span style={{color: '#E50914'}}>*</span>}
      </Typography>
      <TextField 
        hiddenLabel 
        name={name} 
        type={type} 
        value={formData[name]} 
        onChange={handleChange} 
        required={required} 
        fullWidth 
        size="small" // Caixa um pouco mais fina e elegante
        sx={{ 
          backgroundColor: 'rgba(255,255,255,0.7)', // Fundo branquinho para a caixa
          borderRadius: '6px'
        }}
      />
    </Box>
  );

  return (
    <Paper 
      elevation={4} 
      sx={{ 
        maxWidth: 600, 
        mx: 'auto', 
        mt: 2, 
        mb: 4,
        p: 4, 
        backgroundColor: 'rgba(255, 255, 255, 0.85)', 
        backdropFilter: 'blur(8px)',
        borderRadius: '12px'
      }}
    >
      <Typography variant="h5" align="center" color="primary" gutterBottom fontWeight="bold">
        {serieParaEditar ? 'Editar Série' : 'Cadastrar Nova Série'}
      </Typography>
      
      {mensagem.texto && (
        <Typography align="center" color={mensagem.tipo === 'error' ? 'error' : 'success'} fontWeight="bold" sx={{ mb: 2 }}>
          {mensagem.texto}
        </Typography>
      )}

      
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        
        {renderInput("Título da Série", "titulo", "text", true)}
        {renderInput("Nº de Temporadas", "temporadas", "number", true)}
        {renderInput("Data de Lançamento", "dataLancamento", "date")}
        {renderInput("Diretor", "diretor", "text", true)}
        {renderInput("Produtora", "produtora", "text")}
        {renderInput("Categoria", "categoria", "text")}
        {renderInput("Data em que Assistiu", "dataAssistido", "date")}

        {/* Botões modernizados (sem letras 100% maiúsculas e com bordas mais arredondadas) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
          <Button 
            variant="contained" 
            color="primary"
            type="submit" 
            sx={{ 
              padding: '10px 30px', 
              fontWeight: 'bold', 
              borderRadius: '8px', 
              textTransform: 'none', // Remove o texto forçado em maiúsculo
              fontSize: '1rem',
              boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)'
            }}
          >
            {serieParaEditar ? 'Salvar Alterações' : 'Cadastrar Série'}
          </Button>
          
          {serieParaEditar && (
            <Button 
              variant="outlined" 
              onClick={cancelarEdicao} 
              sx={{ 
                padding: '10px 30px', 
                fontWeight: 'bold', 
                borderRadius: '8px', 
                textTransform: 'none',
                fontSize: '1rem', 
                color: '#555',
                borderColor: '#aaa',
                '&:hover': { backgroundColor: '#f0f0f0', borderColor: '#888' }
              }}
            >
              Cancelar
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
}