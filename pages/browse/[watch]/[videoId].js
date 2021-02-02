import { Button, Row, Col, Container, Card, ListGroup } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faStopwatch } from '@fortawesome/free-solid-svg-icons';

import UserHeader from '../../../components/frontend/layouts/userHeader';

import axios from 'axios';

const VideoWatch = ({ activeMovie, movies, statusCode }) => {

    console.log('movie', activeMovie);

    return (
        <>  
            <UserHeader />
            <Container fluid>
                <Row>
                    <Col>
                        <h3 style={{ textAlign: 'center' }}>{ activeMovie.description }</h3>
                    </Col>
                </Row>

                <div className='perfect-center'>
                    {
                        activeMovie ? (
                            <video width="800px" controls>
                                <source src={ '/movies/' + activeMovie.movie_url } type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ): null
                    }

                </div>

                <div style={{ margin: '40px', }}>
                <Row>
                {
                    movies.map( ( movie, index ) => {
                        return (
                            <Card style={{ width: '21rem', margin: '10px' }} key={ 'crd' + index }>
                                <Card.Img variant="top" src={ '/movies/' + movie.cover_url } key={ 'img' + index } />
                                <Card.Body key={ 'crdBdy' + index }>
                                    <Card.Title key={ 'crdttl' + index }><small>{  movie.category }</small>: { movie.title }</Card.Title>
                                    <Card.Text key={ 'crdDesc' + index }>{  movie.description }</Card.Text>
                                    <Card.Text key={ 'crdDuration' + index }><small><strong>Duration: </strong>{  movie.duration }</small></Card.Text>

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
        </>
  	);
};

VideoWatch.getInitialProps = async ({ query }) => {
    console.log('query', query);
    const { videoId } = query;
    const url = 'http://localhost:3000/api/v1/getMovieById?movieId=' + videoId;

    const movieInfo = await axios.get(url);

    const movies = await axios.get('http://localhost:3000/api/v1/limitMovies');
    
    return {
        activeMovie:  movieInfo.data.movie[0],
        movies:  movies.data.movies,
        statusCode: movieInfo.status,
    }
};

export default VideoWatch;