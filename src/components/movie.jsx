import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Grid, Row, Col, code} from 'react-bootstrap';


function Movie(props){
    function onSubmit(e){
        e.preventDefault();
        props.moviedel(e.target.value);
        }
    return (
        // <div>
        //       <div className="container">
        //       <div className="row">
        //       <div className="col-md-3">
        //       {/* <div className="card" style={"width: 18rem;"}> */}
        //       <img className="card-img-top" src={props.poster} alt="image"/>
        //       <div className="card-body">
        //       <h5 className="card-title">{props.title}</h5>
        //       <p className="card-text">{props.overview}</p>
        //       </div>
        // </div>
        // {/* </div> */}
        // </div>
        // </div>
        // </div>
        <div>
                    <style jsx>{`
.text{
color: white
}
    }
    `}</style>
        <Col xs={6} md={4}>

       
        <Card color={"red"}>
          <CardImg top width="40%" src={props.poster} alt="movie poster" />
          <CardBody>
            <CardTitle >{props.title}</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>{props.overview}</CardText>
            <Button value={props.id} onClick ={(e) =>onSubmit(e)}>Delete</Button>
          </CardBody>
        </Card>
      
      </Col>
      </div>
    );

}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster: PropTypes.string,
    id:PropTypes.string,
    moviedel: PropTypes.func
  };
export default Movie;