import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import items from '../data/menu.json';
import DishComments from './DishComments';
import ReservationForm from './ReservationForm';
import Reservations from './Reservations';
import ShowAlert from './ShowAlert';

// functional components are great to work with and they can use the props
// but if we want to use the state, we need a CLASS BASED component

class Home extends React.Component {
  state = {
    selectedDish: items[0],
  };

  // constructor(props) {
  //     super(props)
  //     console.log('constructor invoked!')
  //     this.state = {
  //         selectedDish: null
  //     }
  // }

  render() {
    // console.log(
    //   !this.state.selectedDish.comments
    //     .map((c) => c.rating === 5)
    //     .includes(false)
    // );
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6}>
            <h1>{this.props.newTitle}</h1>
            <p>{this.props.newPayoff}</p>
            <Carousel
            // onSlide={(e) => this.setState({
            //     selectedDish: items[e]
            // })}
            >
              {items.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={item.name}
                    onClick={() =>
                      this.setState({
                        selectedDish: item,
                      })
                    }
                  />
                  <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={8}>
            <Reservations header={this.state.selectedDish.name} />
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={8}>
            {!this.state.selectedDish.comments
              .map((c) => c.rating === 5)
              .includes(false) ? (
              <ReservationForm />
            ) : (
              <ShowAlert
                errorHead="This dish is not recomended"
                errorMsg="No no no..."
              />
            )}
            {/* */}
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={8}>
            {this.state.selectedDish.name !== 'Amatriciana' && (
              <DishComments selectedDish={this.state.selectedDish} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
