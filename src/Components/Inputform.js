import React from "react";
import { Form,Button } from "react-bootstrap";
import { withRouter} from "react-router-dom";

function Inputform(props) {
    let newmovie={name:'name tbadalech',description:'defaultdescrpition',posterurl:'urldefault',rating:0}
    let movieslistcopy = [...props.MoviesList];
    const handlesubmit = (event)=>{
        event.preventDefault()
        movieslistcopy.push(newmovie)
        props.setMovies(movieslistcopy)
        console.log({movieslistcopy})
        props.history.push('/home')
      }
  return (
    <div className="inputform">
        
      <Form onSubmit={handlesubmit}>
        <Form.Group>
          <Form.Label>movie name</Form.Label>
          <Form.Control type="text" placeholder="Movie name"  onChange={x=>newmovie.name=x.target.value}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Movie descrption</Form.Label>
          <Form.Control
            type="text"
            rows={3}
            placeholder="description"
            onChange={x=>newmovie.description=x.target.value}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>poster URL</Form.Label>
          <Form.Control type="url" placeholder="URL" onChange={x=>newmovie.posterurl=x.target.value}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>trailer embed URL</Form.Label>
          <Form.Control type="url" placeholder="URL" onChange={x=>newmovie.trailerurl=x.target.value}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" placeholder="number<5"  onChange={x=>newmovie.rating=x.target.value}></Form.Control>
        </Form.Group>
        <Button  type="submit" className="mb-4" variant="secondary">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(Inputform);
