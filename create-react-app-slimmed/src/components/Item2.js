import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';

function Item2() {
    return (
      <div id="form">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label size="lg">Jakie produkty chcesz dodać?</Form.Label>
                    <Form.Control as="textarea" rows={1} />
                </Form.Group>
            </Form>
          <Button variant="success">Dodaj do listy!</Button>
          <br></br><br></br>
      </div>
    );
  }
  
  export default Item2;