import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import SerieList from './sa';

const series = [
  {
    id: 1,
    titulo: 'Breaking Bad',
    temporadas: 5,
    dataLancamento: '2008-01-20',
    diretor: 'Vince Gilligan',
    produtora: 'Sony',
    categoria: 'Drama',
    dataAssistido: '2023-05-10',
  },
];

describe('SerieList', () => {
  it('exibe a mensagem de lista vazia quando não há séries', () => {
    render(<SerieList series={[]} onEdit={() => {}} onDelete={() => {}} />);
    expect(screen.getByText(/Nenhuma série cadastrada/)).toBeInTheDocument();
  });

  it('renderiza os dados de cada série da lista', () => {
    render(<SerieList series={series} onEdit={() => {}} onDelete={() => {}} />);
    expect(screen.getByText('Breaking Bad')).toBeInTheDocument();
    expect(screen.getByText(/Vince Gilligan/)).toBeInTheDocument();
  });

  it('chama onEdit e onDelete ao clicar nos botões correspondentes', async () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(<SerieList series={series} onEdit={onEdit} onDelete={onDelete} />);

    await userEvent.click(screen.getByTitle('Editar'));
    expect(onEdit).toHaveBeenCalledWith(1);

    await userEvent.click(screen.getByTitle('Excluir'));
    expect(onDelete).toHaveBeenCalledWith(1);
  });
});
