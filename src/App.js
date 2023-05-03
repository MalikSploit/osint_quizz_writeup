import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ChallengeImage from './Images/Challenge.jpg';
import ReverseImage from './Images/Reverse_Image_Search.png';
import FoundImage from './Images/Image_Found.jpg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header-content">
                    <h1>OSINT Quiz Write-Up</h1>
                    <a href="https://twitter.com/bayer_julia/status/1650600242771795974" target="_blank" rel="noopener noreferrer">Challenge Link</a>
                </div>
            </header>
            <Container className="mt-5">
                <Row>
                    <Col md={8} className="mx-auto">
                        <img src={ChallengeImage} alt="Statue" className="img-fluid" style={{width: '100%', maxWidth: '400px'}}/>
                        <h2 className="mt-4">Image Reverse Search</h2>
                        <p>
                            The first thing we do is look at the images for details, and we see one obvious one, which is the statue. So, image reverse search should work perfectly. We use an extension reverse image search to perform a reverse image search on all websites. On Google, we found that there is a very similar statue named Hansestadt Stendal.
                        </p>
                        <img src={ReverseImage} alt="Google Reversed" className="img-fluid" style={{width: '100%', maxWidth: '600px'}}/>
                        <br/>
                        <br/>
                        <p>
                            Great, we Google the name to find similar images. We find Stendal statue and a few other images, but it’s not exactly what we want. However, the houses are the same as we have in the image, so the statue must be in Stendal, which is a city in Germany. So, we just type in Google "statue in Stendal" and bingo! We found Roland statue in Stendal. We found him.
                        </p>
                        <img src={FoundImage} alt="The statue" className="img-fluid" />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={8} className="mx-auto">
                        <h2>Bonus Question</h2>
                        <p>
                            For the bonus question, we try not to guess but first we can start by putting an interval of time in which the image has been taken, which is between 12 PM and 3 PM based on the blue sky. First, if it was between 12 PM and 1 PM, the sun should be up, and the statue wouldn’t have any shadow in the back. So, it must be after 1 PM. However, at 3 PM based on the weather of the month of April, after 2 PM there is a bit of cloud. So, the conclusion is that this image has been taken between 1 PM and 2 PM.
                        </p>
                    </Col>
                </Row>
            </Container>
            <footer className="mt-5 py-3">
                <p className="text-center">
                    Created by [Malik Makkes] - [OSINT Enthusiast]
                </p>
            </footer>
        </div>
    );
}

export default App;
