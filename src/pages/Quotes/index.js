import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'reactstrap';
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from "../../redux/quotesSlice";
import Error from "../Home/components/Error"
import Loading from "../Home/components/Loading"
import Item from './Item';


function Quotes() {
    const data = useSelector(quotesSelector)
    const status = useSelector(statusSelector)
    const error = useSelector(errorSelector)

    const dispatch = useDispatch()
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchAllQuotes());
        }

    }, [dispatch, status]);
    if (error) {
        <Error message={error} />
    }
    return (
        <Container>
            <h1 className="text-center">Quotes</h1>
            {status === "loading" && <Loading />}
            {status === "succeeded" && data.map(item => <Item item={item} key={item.quote_id} />)}
        </Container>
    )
}

export default Quotes;
