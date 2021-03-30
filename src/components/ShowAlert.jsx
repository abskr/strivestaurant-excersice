import { Alert } from 'react-bootstrap';

const ShowAlert = ({ errorMsg }) => (
  <Alert className="my-3" variant="danger">
    <Alert.Heading>Oops, there's an Error...</Alert.Heading>
    <p>{errorMsg}</p>
  </Alert>
);

export default ShowAlert;
