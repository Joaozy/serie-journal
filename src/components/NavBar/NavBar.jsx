import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function NavBar() {
  const location = useLocation();

  return (
    <AppBar 
      position="static" 
      sx={{ 
        /* Gradiente suave usando o azul padrão do Material-UI */
        background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        marginBottom: 4,
        borderRadius: { xs: '0 0 12px 12px', sm: 0 }
      }}
    >
      <Toolbar 
        sx={{ 
          /* Se for celular (xs), fica em coluna; se for tela maior (sm), fica em linha */
          flexDirection: { xs: 'column', sm: 'row' }, 
          gap: { xs: 2, sm: 0 },
          paddingY: { xs: 2, sm: 1 },
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            textDecoration: 'none', 
            color: '#fff', 
            fontWeight: 'bold',
            letterSpacing: '0.5px'
          }}
        >
          Série Journal 🎬
        </Typography>
        
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 1, 
            flexWrap: 'wrap', // Impede que os botões estourem para fora da tela
            justifyContent: 'center',
            width: { xs: '100%', sm: 'auto' }
          }}
        >
          {[
            { label: 'Início', to: '/' },
            { label: 'Minhas Séries', to: '/lista' },
            { label: 'Cadastrar', to: '/cadastro' },
            { label: 'Sobre', to: '/sobre' }
          ].map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Button 
                key={item.to}
                component={Link} 
                to={item.to}
                sx={{
                  color: '#fff',
                  fontWeight: isActive ? 'bold' : 'normal',
                  textTransform: 'none',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  /* Destaca sutilmente o botão da página atual */
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'transparent',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.5)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  }
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}