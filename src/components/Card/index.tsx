import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

type Props = {
  city: string;
}

function Card({city}: Props) {
  return (
    <div className="card">
      <CardHeader title={city}></CardHeader>
      <CardContent city={city} />
    </div>
  );
}

export default Card;