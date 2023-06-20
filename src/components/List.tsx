import { useEffect, useState } from 'react'
import Details from './Details';
interface Data {
    id: number;
    name: string;
}

export default function List() {
    const [data, setData] = useState<Data[]>([])
    const [id, setId] = useState(0)

    useEffect(() => {

        fetch(' https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json ')
            .then(response => response.json())
            .then(data => setData(data))

    }, [])

    const formatId = id.toString

console.log(data)

    return (

        <div className='List'>
            {data.map((e) => {
                return (<div key={e.id} ><button onClick={() => setId (e.id)}>{e.name}</button>
                </div>
                )
            })}
            <Details id={formatId} />
        </div>


    )
}
