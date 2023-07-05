import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
export const Cards = ({ data }) => {
  return (
    <Card class="w-25">
      <Card.Img variant="top" src={data?.image} />
      <Card.Body>
        <Card.Title>{data?.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
