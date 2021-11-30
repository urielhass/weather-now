type Props = {
  title: string;
}
function CardHeader({title}: Props)  {
  return (
    <h4>{title}</h4>
  );
}

export default CardHeader;