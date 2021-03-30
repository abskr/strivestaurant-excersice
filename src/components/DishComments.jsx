import { ListGroup } from 'react-bootstrap';

// const DishComments = (props) =>
//     props.selectedDish
//         ? <ListGroup>
//             <h2>Comments for {props.selectedDish.name}</h2>
//             {
//                 props.selectedDish.comments.map(c => (
//                     <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
//                 ))
//             }
//         </ListGroup>
//         : <h1>NOTHING YET</h1>

import React, { Component } from 'react';

class DishComments extends Component {
  componentDidUpdate = () => {
    setTimeout(this.setState, 1000);
    //I'm not sure tho...
  };

  render() {
    return (
      //     this.props.selectedDish ? (
      //   <ListGroup>
      //     <h2>Comments for {this.props.selectedDish.name}</h2>
      //     {this.props.selectedDish.comments.map((c) => (
      //       <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      //     ))}
      //   </ListGroup>
      // ) : (
      //   <h1>NOTHING YET</h1>
      // )
      <>
        {this.props.selectedDish && (
          <ListGroup>
            <h2>Comments for {this.props.selectedDish.name}</h2>
            {this.props.selectedDish.comments.map((c) => (
              <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
            ))}
          </ListGroup>
        )}

        {!this.props.selectedDish && <h1>NOTHING YET</h1>}
      </>
    );
  }
}

export default DishComments;

// mapping props.selectedDish.comments
