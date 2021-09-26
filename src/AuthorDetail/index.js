import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


import { Container } from 'reactstrap';


function Detail() {
    const [char, setChar] = useState(null);


    const { author } = useParams();
    useEffect(() => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quote?author=${author}`).then((res) => res.data).then(data => setChar(data))
    }, [author])
    return (
        <Container>
            <h1 className="text-center mb-2">{author} All Quotes</h1>
            <div >
                {char && char.map(item => <div key={item.quote_id}> <span className="h5">{item.quote_id}- </span> "{item.quote}" </div>)}
            </div>
        </Container>
    )
}

export default Detail
