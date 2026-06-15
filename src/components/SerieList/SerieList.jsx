import React from 'react';
import { Typography, Container, Box, Paper, Button } from '@mui/material';

export default function SerieList({ series = [], onDelete, onEdit }) {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography 
        variant="h4" 
        align="center" 
        color="primary" 
        sx={{ fontWeight: '900', textShadow: '1px 1px 3px rgba(255,255,255,0.8)', mb: 3 }}
      >
        Minhas Séries
      </Typography>
      
      {series.length === 0 ? (
        <Paper sx={{ p: 3, textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.85)', borderRadius: '12px' }}>
          <Typography color="text.secondary" variant="h6">
            Nenhuma série cadastrada. 🍿
          </Typography>
        </Paper>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {series.map((serie) => (
            <Paper 
              key={serie.id} 
              elevation={2}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                p: 1.5,
                px: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.85)', 
                backdropFilter: 'blur(8px)',
                borderRadius: '10px',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.01)' }
              }}
            >
              <Box sx={{ flex: 1, pr: 2 }}>
                <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                  {serie.titulo}
                </Typography>
                
                {/* Todo o conteúdo condensado de forma fácil de ler */}
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem', mt: 0.5 }}>
                  <strong>{serie.temporadas} temp.</strong> | Lançamento: {serie.dataLancamento} | Diretor: {serie.diretor} <br/>
                  Produtora: {serie.produtora} | Categoria: {serie.categoria} | Assistido: {serie.dataAssistido}
                </Typography>
              </Box>
              
              {/* Botões pequenos contendo apenas os Emojis */}
              <Box sx={{ display: 'flex', gap: 1, mt: { xs: 1.5, sm: 0 } }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={() => onEdit(serie.id)}
                  title="Editar"
                  sx={{ 
                    minWidth: '40px', 
                    width: '40px', 
                    height: '40px', 
                    p: 0, 
                    fontSize: '1.2rem', 
                    borderRadius: '8px' 
                  }}
                >
                  ✏️
                </Button>
                
                <Button 
                  variant="outlined" 
                  color="error"
                  onClick={() => onDelete(serie.id)}
                  title="Excluir"
                  sx={{ 
                    minWidth: '40px', 
                    width: '40px', 
                    height: '40px', 
                    p: 0, 
                    fontSize: '1.2rem', 
                    borderRadius: '8px', 
                    backgroundColor: 'rgba(255,255,255,0.5)' 
                  }}
                >
                  🗑️
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      )}
    </Container>
  );
}