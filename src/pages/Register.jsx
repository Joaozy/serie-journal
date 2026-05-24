import SerieForm from '../components/SerieForm/SerieForm';

export default function Register({ onSave, serieParaEditar, cancelarEdicao }) {
  return (
    <div>
      <SerieForm 
        onSave={onSave} 
        serieParaEditar={serieParaEditar} 
        cancelarEdicao={cancelarEdicao} 
      />
    </div>
  );
}