import { useState } from 'react';
import Card from "../components/Card";

export function Home() {

  const [cities] = useState([
    'Urubici, BR', 'Nuuk, GL', 'Nairobi, KE'
  ]);

  return (
    <section className="home-section">
      {cities.map(city => {
        return (
          <Card key={city} city={city}></Card>
        )
      })}
    </section>
  )
}