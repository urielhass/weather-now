import { ApiWeatherService } from "../../services/api";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

type Props = {
  city: string;
}

function Card({city}: Props) {
  const loading = false;
  try {
    const service = new ApiWeatherService();
    service.execute(city).then((data) => {
      console.log(data)
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <CardHeader title={city}></CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </>
  );
}

export default Card;