import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import picc from "./images/picc.jpg";
import pics from "./images/pics.jpg";


function cards() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={pics} />
        <Card.Body>
          {/* player one card
           */}
          <Card.Title>Daniel Isaac Aruwa</Card.Title>
          <Card.Text>
            Fullstack Js student of Gomycode.co.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        {/* player two card */}

        <Card.Img variant="top" src={picc} />
        <Card.Body>
          <Card.Title> Godwin Nwakwo</Card.Title>
          <Card.Text>
              Fullstack JS Instructor of Gomycode.co.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={pics} />
        <Card.Body>
          {/* player three card */}

          <Card.Title>Emmanuel Cash</Card.Title>
          <Card.Text>
            Fullstack Js student of Gomycode.co.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default cards;