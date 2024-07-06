import { Button, Form, Modal } from "react-bootstrap"

const AddCamera = ( props: {show: boolean, onHide: () => void}) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      centered
      data-bs-theme="dark"
      className="text-white"
    >
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Добавить камеру</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="uuid" className="mr-2">UUID : </Form.Label>
              <Form.Control type="text" name="uuid"/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="uuid" className="mr-2">IP : </Form.Label>
              <Form.Control type="text" name="uuid"/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="uuid" className="mr-2">Port : </Form.Label>
              <Form.Control type="text" name="uuid"/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="uuid" className="mr-2">Login : </Form.Label>
              <Form.Control type="text" name="uuid"/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="uuid" className="mr-2">Password : </Form.Label>
              <Form.Control type="text" name="uuid"/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="uuid" className="mr-2">Status : </Form.Label>
              <Form.Control type="text" name="uuid"/>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Отмена</Button>
          <Button variant="primary" onClick={props.onHide}>Добавить</Button>
        </Modal.Footer>
      </div>
        
    </Modal>
  )
}

export default AddCamera