import { Container, Paper, Typography } from '@mui/material';

export default function About() {
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
          Sobre o Projeto
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Este é um projeto de gerenciamento de séries assistidas, desenvolvido
          em React para a disciplina de Desenvolvimento de Sistemas Frontend do
          curso de ADS da PUCRS.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Nesta fase, a aplicação consome a API REST do serieJournal-api,
          utilizando o Axios para realizar as operações de cadastro, listagem,
          edição e exclusão de séries diretamente no banco de dados da API.
        </Typography>
      </Paper>
    </Container>
  );
}
