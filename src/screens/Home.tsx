import { useEffect, useState } from 'react';
import Card from "../components/Card";


export function Home() {

    const [cities] = useState([
        'Urubici, BR', 'Nuuk, GL', 'Nairobi, KE'
    ]);

    useEffect(() => {
        setInterval(() => {
            console.log('caiu aqui');
        }, 60 * 60 * 10)
    }, [])

    return (
        <div>
            <h1>Teste</h1>
            <ul>
                {cities.map(city => {
                    return (
                        
                        <Card city={city}></Card>
                    )
                })}
                <li></li>
            </ul>
        </div>
    )
}