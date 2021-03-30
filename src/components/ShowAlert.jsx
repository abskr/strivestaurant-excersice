import { Alert } from 'react-bootstrap';

const ShowAlert = ({ errorMsg, errorHead }) => (
  <Alert className="my-3" variant="danger">
    <Alert.Heading>{errorHead}</Alert.Heading>
    <p>{errorMsg}</p>
  </Alert>
);

export default ShowAlert;
