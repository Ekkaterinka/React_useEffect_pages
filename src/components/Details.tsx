import { useEffect, useState } from 'react'


export default function Details(id: any) {
    const [user, setUser] = useState({avatar: '', name: '', details:{city:'', company: '', position: ''}})

    useEffect(() => {

        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [])
    console.log(user)

    return (
        <div>
            <img src={user.avatar} />
            <h3>{user.name}</h3>
            <p>{user.details?.city}</p>
            <p>{user.details?.company}</p>
            <p>{user.details?.position}</p>
        </div>)
}
