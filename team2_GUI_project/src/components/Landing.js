import origamiList from "../data/origami.json"  
import 'bootstrap/dist/css/bootstrap.css';
import { Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

// Home page.
// Main dev: Helen Bongers

export default function Landing() {

    const trending = origamiList.filter(
        (origami) => {
          return origami.trending === true;
        }
      )

    return (
      <div className="Landing Page">
        <h1>Welcome! Take a look at our trending models!</h1>
        <Row lg='d-grid gap-3'>
            <Carousel>
        {trending.map((item) => (
            
          <Carousel.Item>
          <img src={require("../data/images/" + item.image + ".png")} className="card-img-top" alt={item.image}/>
            <Carousel.Caption>
              <h3>{item.model}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        </Carousel>
            </Row>
      </div>
    )
  }
