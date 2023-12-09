import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import '../index.css'

const MobilePhone = ({ phone, onButtonClick }) => {
  const onPictureClick = useNavigate();
  const { id, description, images, title } = phone;

  return (
    <>
      <Col xs="auto" lg={3}>
        <Card style={{ width: "25vh"}}>
          <Card.Img 
            variant="top"
            src={images[0]}
            className="paveiksliukas"
            onClick={() => onPictureClick(`/products/${id}`)}
          />
          <Card.Body>
            <div className="ttttt">{title}</div>
            <Card.Title className="ttttt" style={{color: "var(--bs-gray-500)"}}>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary" onClick={() => onButtonClick(phone)}>
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default MobilePhone;
