import React from 'react'
import { Link } from 'react-router-dom';


function Item({ item }) {
    return (
        <div>
            <div>
                <span className="text-dark h4"> {item.quote_id}-</span>
                <Link to={`/quoteas/${item.author}`}> <span className=" h5 text-dark text-decoration-underline">{item.author} : </span> </Link>
                <Link to={`/quotes/${item.quote_id}`} className="text-dark text-decoration-none"> <q className="h6 text-secondary">{item.quote}</q></Link>

            </div>
        </div>
    )
}

export default Item
