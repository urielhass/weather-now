import { useState } from 'react';
import { Card } from "../../components/Card";
import styles from './styles.module.scss';

export function Home() {

  const [cities] = useState([
    {
      name:'Nuuk, GL', 
      isPrincipal: false 
    }, 
    {
      name:'Urubici, BR', 
      isPrincipal: true 
    }, 
    {
      name:'Nairobi, KE', 
      isPrincipal: false 
    }
  ]);

  return (
    <section className={styles.home}>
      {cities.map(city => {
        return (
          <Card key={city.name} city={city.name} isPrincipal={city.isPrincipal}></Card>
        )
      })}
    </section>
  )
}
