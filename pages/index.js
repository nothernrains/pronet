import Head from 'next/head';
import { Carousel, Form, Col, Button, Row, Card } from 'react-bootstrap';
import Header from '../components/frontend/layouts/header';
import Footer from '../components/frontend/layouts/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faStopwatch } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'next/router';

import axios from 'axios';

const Home = ({ movies, statusCode }) => {

    const router = useRouter();

    const register = () => {
        router.replace('/auth/register', null);
	};

	return (
		<>

		<Head>
			<title>Home</title>
		</Head>
		<Header />
		<Carousel className="fade-carousel">
			<Carousel.Item>
				<div className="overlay-carousel">
				<img
					className="d-block w-100"
					src="tsotsi.jpg"
					alt="First slide"
					/>
				</div>
				<Carousel.Caption>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				<Form  style={{ textAlign: 'center' }}>
					<Form.Row className="align-items-center" style={{ textAlign: 'center' }}>
						<Col xs="auto">
						<Form.Label htmlFor="inlineFormInput" srOnly>
							Name
						</Form.Label>
						<Form.Control
							style={{ width: '200px' }}
							className="mb-2"
							id="inlineFormInput"
							placeholder="Email Address"
						/>
						</Col>
						<Col xs="auto">
							<Button type="button" className="mb-2" onClick={ () => register() }>
								GET STARTED
							</Button>
						</Col>
					</Form.Row>
				</Form>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
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
										onClick={ () => register() } /></Button>
								</div>

							</Card.Body>
						</Card>
					)
				})
			}
			</Row>
		</div>

		<Footer />
		</>
	)
};

Home.getInitialProps = async (ctx) => {
    
    const movies = await axios.get('http://localhost:3000/api/v1/limitMovies');
    
	return {
        movies:  movies.data.movies,
        statusCode: movies.status,
    };
    
};

export default Home;
