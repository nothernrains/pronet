import { Button, Row, Container, Card } from 'react-bootstrap';
import UserHeader from '../../../components/frontend/layouts/userHeader';
import Footer from '../../../components/frontend/layouts/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faStopwatch } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'next/router';

import axios from 'axios';

const AllContent = ({ movies, statusCode }) => {

    const router = useRouter();

    const goWatchMovie = (movieId) => {
        router.replace('/browse/us/' + movieId, null);
    };

    return (
        <>  
            <UserHeader />
            <Container fluid>
                <div style={{ margin: '40px', }}>
                <Row>
                {
                    movies.map( ( movie, index ) => {
                        return (
                            <Card style={{ width: '21rem', margin: '10px' }} key={ 'crd' + index }>
                                <Card.Img variant="top" src={ '/movies/' + movie.cover_url } key={ 'img' + index } />
                                <Card.Body key={ 'crdBdy' + index }>
                                    <Card.Title key={ 'crdttl' + index }><small>{  movie.category }</small>: { movie.title }</Card.Title>

                                    <div style={{ textAlign: 'center', }}>
                                        <Button 
                                            variant="primary" 
                                            style={{ margin: '2px' }}><FontAwesomeIcon 
                                            icon={faFilm} 
                                            size="1x"
                                            onClick={ () => goWatchMovie(movie.id) } /></Button>
                                        <Button variant="dark" style={{ margin: '2px' }}><FontAwesomeIcon icon={faStopwatch} size="1x" /></Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        )
                    })
                }
                </Row>
                </div>
            </Container>
            <Footer />
        </>
  	);
};

AllContent.getInitialProps = async (ctx) => {
    
    const movies = await axios.get('http://localhost:3000/api/v1/movie');
    
	return {
        movies:  movies.data.movies,
        statusCode: movies.status,
    };
    
};

export default AllContent;