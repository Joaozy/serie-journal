import { Container, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 5,
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderRadius: '12px',
        }}
      >
        <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
          Bem-vindo ao Série Journal 🎬
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Gerencie de forma fácil e intuitiva as séries que você já assistiu:
          cadastre novas séries, edite informações e acompanhe tudo em um só lugar.
        </Typography>
        <Button
          component={Link}
          to="/lista"
          variant="contained"
          sx={{ textTransform: 'none', borderRadius: '8px', mr: 2 }}
        >
          Ver Minhas Séries
        </Button>
        <Button
          component={Link}
          to="/cadastro"
          variant="outlined"
          sx={{ textTransform: 'none', borderRadius: '8px' }}
        >
          Cadastrar Série
        </Button>
      </Paper>
    </Container>
  );
}
