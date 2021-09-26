import axios from 'axios';
import { useState, useEffect } from 'react'
import { Container } from 'reactstrap';


function Episodes() {
    const [char, setChar] = useState(null);


    useEffect(() => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/episodes`).then((res) => res.data).then(data => setChar(data))
    }, [])
    return (
        <Container>
            <h1 className="text-center mb-2"> All Episodes</h1>
            <div >
                {char && char.map(item => <div key={item.episode_id}> <span className="h4">Season: {item.season} - Episode:{item.episode_id} - </span>
                 <pre className="h5 ">Episode Name:</pre> <span className="text-decoration-underline"> {item.title} </span>
                <pre className="h5">Characters:</pre> <code> {item.characters} </code>
                 <pre className="h5 ">Date: </pre><code className="h5"> <p className="mb-4">({item.air_date}) </p></code></div>)}
            </div>
        </Container>
    )
}

export default Episodes;

