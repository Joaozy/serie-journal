import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import SerieForm from './SerieForm';

describe('SerieForm', () => {
  it('renderiza o título de cadastro quando não está editando', () => {
    render(<SerieForm onSave={() => {}} />);
    expect(screen.getByText('Cadastrar Nova Série')).toBeInTheDocument();
  });

  it('renderiza o título de edição e preenche os campos quando recebe serieParaEditar', () => {
    const serie = {
      titulo: 'Breaking Bad',
      temporadas: '5',
      dataLancamento: '2008-01-20',
      diretor: 'Vince Gilligan',
      produtora: 'Sony',
      categoria: 'Drama',
      dataAssistido: '2023-05-10',
    };

    render(<SerieForm onSave={() => {}} serieParaEditar={serie} cancelarEdicao={() => {}} />);

    expect(screen.getByText('Editar Série')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Breaking Bad')).toBeInTheDocument();
  });

  it('não chama onSave quando os campos obrigatórios estão vazios', async () => {
    const onSave = vi.fn();
    render(<SerieForm onSave={onSave} />);

    const botao = screen.getByRole('button', { name: 'Cadastrar Série' });
    await userEvent.click(botao);

    expect(onSave).not.toHaveBeenCalled();
  });

  it('chama onSave com os dados preenchidos quando os campos obrigatórios são informados', async () => {
    const onSave = vi.fn();
    const { container } = render(<SerieForm onSave={onSave} />);

    await userEvent.type(container.querySelector('input[name="titulo"]'), 'Dark');
    await userEvent.type(container.querySelector('input[name="temporadas"]'), '3');
    await userEvent.type(container.querySelector('input[name="diretor"]'), 'Baran bo Odar');

    await userEvent.click(screen.getByRole('button', { name: 'Cadastrar Série' }));

    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave.mock.calls[0][0]).toMatchObject({
      titulo: 'Dark',
      temporadas: '3',
      diretor: 'Baran bo Odar',
    });
  });
});
