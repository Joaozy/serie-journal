import SerieList from '../components/SerieList/SerieList';

export default function List({ series, onDelete, onEdit }) {
  return (
    <div>
      <SerieList 
        series={series} 
        onDelete={onDelete} 
        onEdit={onEdit} 
      />
    </div>
  );
}