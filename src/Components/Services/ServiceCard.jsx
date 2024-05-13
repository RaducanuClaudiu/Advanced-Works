import Card from "react-bootstrap/Card";
import "./Services.css";
import { Col, Container, Row } from "react-bootstrap";

function ServiceCard() {
	return (
		// Folosim grid-ul bootstrap pentru asezarea in pagina.
		<Container>
			<Row>
				<Col xs={12} md={6} lg={6} className="mb-4">
					<Card border="light" className="h-100 d-flex flex-column justify-content-between align-items-center card">
						<Card.Body>
							<Card.Title>DETAILING EXTERIOR + POLISH ONE STEP</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={6} lg={6} className="mb-4">
					<Card border="secondary" className="h-100 d-flex flex-column justify-content-between align-items-center card">
						<Card.Body>
							<Card.Title>DETAILING EXTERIOR + POLISH TWO STEP</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={6} lg={6} className="mb-4">
					<Card border="secondary" className="h-100 d-flex flex-column justify-content-between align-items-center card">
						<Card.Body>
							<Card.Title>
								DETAILING INTERIOR + TRATAMENT HIDROFOB PENTRU SUPRAFEȚE VITRATE
							</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={6} lg={6} className="mb-4">
					<Card border="secondary" className="h-100 d-flex flex-column justify-content-between align-items-center card">
						<Card.Body>
							<Card.Title>FULLBODY PPF / FULLBODY PPF COLOR</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default ServiceCard;
