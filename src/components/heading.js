import Alert from 'react-bootstrap/Alert';

function heading() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
      “Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things..
      </p>
      <hr />
      <p className="mb-0">
      “To create one’s own world takes courage.” .
      </p>
    </Alert>
  );
}

export default heading;