import { Button, Row, Col, Container, Form } from 'react-bootstrap';
import AdminHeader from '../../components/frontend/layouts/adminHeader';
import Footer from '../../components/frontend/layouts/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';

import axios from 'axios';

const AdminHome = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [category, setCategory] = useState('');
    const [cover_url, setCoverUrl] = useState('demo');
    const [movie_url, setMovieUrl] = useState('demo');

    const submitForm = async (e) => {
        e.preventDefault();

        const config = {
            headers: { 'content-type': 'multipart/form-data' },
        };

        const postForm = new FormData;

        postForm.append('title', title);
        postForm.append('description', description);
        postForm.append('duration', duration);
        postForm.append('category', category);
        postForm.append('cover_url', cover_url);
        postForm.append('movie_url', movie_url);

        const postMovie = await axios.post('/api/v1/movie', postForm, config);

        console.log('postForm', postForm);
        console.log('postMovie', postMovie);
    };

    const fileUploadCoverChange = (e) => {
        console.log('e', e.target.files[0]);
        setCoverUrl(e.target.files[0]);
    };

    const fileUploadMovieChange = (e) => {
        console.log('e', e.target.files[0]);
        setMovieUrl(e.target.files[0]);
    };

    return (
        <>  
            <AdminHeader />
            <Container fluid>
                <div style={{ padding: '50px' }}>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <h1>Create Content</h1>
                            <Form>

                                <Form.Group controlId="frmTxtMovieTitle">
                                    <Form.Label>Movie Title</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter movie title" 
                                        value={ title }
                                        onChange={ e => setTitle(e.target.value) } />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="frmTxtMovieDuration">
                                    <Form.Label>Movie description</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter movie description"
                                        value={ description }
                                        onChange={ e => setDescription(e.target.value) } />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="frmTxtMovieDuration">
                                    <Form.Label>Movie duration</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter movie duration"
                                        value={ duration }
                                        onChange={ e => setDuration(e.target.value)} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="frmLslMovieCategory">
                                    <Form.Label>Movie Category</Form.Label>
                                    <Form.Control as="select"
                                        placeholder="Enter movie duration"
                                        value={ category }
                                        onChange={ e => setCategory(e.target.value)}>
                                        <option>Comedy</option>
                                        <option>Drama</option>
                                        <option>Action</option>
                                    </Form.Control>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="frmTxtMovieDuration">
                                    <Form.Label>Movie cover</Form.Label>
                                    <Form.Control type="file" placeholder="Enter cover" onChange={ e => fileUploadCoverChange(e) } />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="frmTxtMovieDuration">
                                    <Form.Label>Movie video</Form.Label>
                                    <Form.Control type="file" placeholder="Enter video" onChange={ (e) => fileUploadMovieChange(e) } />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Button variant="primary" type="button" size="block" onClick={ e => submitForm(e) }>
                                    Upload Video
                                </Button>

                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </>
  	);
};

export default AdminHome;