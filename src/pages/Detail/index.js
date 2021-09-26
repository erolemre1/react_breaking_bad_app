import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Home/components/Loading';

function Detail() {
    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(true)
    const { char_id } = useParams();

    useEffect(() => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`).then((res) => res.data).then(data => setChar(data[0])).finally(() => setLoading(false))
        console.log(loading)
    }, [char_id, loading])
    return (
        <div>
            {
                loading && <Loading />
            }
            {char && (
                <div className="text-center">
                    <h1>{char.name} </h1>
                    <img src={char.img} alt={char.name} width="300px" className="mb-2" />
                    <h2><span className="text-secondary">Birthday: </span>{char.birthday}</h2>
                    <h2> <span className="text-secondary">Occupation: </span>{char.occupation} </h2>
                    <h2><span className="text-secondary">Status: </span>{char.status} </h2>
                    <h2><span className="text-secondary">Nickname: </span>{char.nickname} </h2>
                </div>
            )}
        </div>

    )
}

export default Detail
