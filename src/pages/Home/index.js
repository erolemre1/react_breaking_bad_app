import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Masonry from 'react-masonry-css';
import './style.scss'
import Loading from './components/Loading';
import Error from './components/Error';
import { fetchCharacters } from "../../redux/charactersSlice"
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';


function Home() {
    const characters = useSelector((state) => state.characters.items)
    const status = useSelector((state) => state.characters.status)
    const error = useSelector((state) => state.characters.error)
    const nextPage = useSelector((state) => state.characters.page)
    const hasNextPage = useSelector((state) => state.characters.hasNextPage)
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCharacters())
        }
    }, [dispatch, status])

    if (status === "failed") {
        return <Error message={error} />
    }

    return (
        <Container>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid d-flex flex-column flex-md-row "
                columnClassName="my-masonry-grid_column">
                {characters.map(character => (
                    <div key={character.char_id} className="text-center">
                        <Link to={`/char/${character.char_id}`}>
                            <img alt={character.name} src={character.img} className="character rounded" />
                            <h5 className="mt-2">{character.name}</h5>
                        </Link>
                    </div>
                ))}
            </Masonry>
            <div className="text-center">
                {status === "loading" && <Loading />}
                {hasNextPage && status !== "loading" &&
                    <button onClick={(e) => { dispatch(fetchCharacters(nextPage)) }} className="btn btn-primary mb-3 btn1"> Load More ({nextPage})</button>
                }
                {!hasNextPage && <h2 className="text-danger"> Not Found!!! </h2>}
            </div>
        </Container>
    )
};

export default Home;
