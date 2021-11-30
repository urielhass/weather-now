type Props = {
  title: string;
}
function CardHeader({title}: Props)  {
  return (
    <div className="card-header">
      <h4>{title}</h4>
    </div>
  );
}

export default CardHeader;