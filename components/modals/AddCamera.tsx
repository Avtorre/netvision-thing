import { Complex, ListType } from "@/lib/types"
import { Dispatch, SetStateAction, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

const AddCamera = ( props: {show: boolean, onHide: () => void, newList: ListType, setNewList: Dispatch<SetStateAction<ListType>>}) => {
  const [newCamera, setNewCamera] = useState<Complex>({
    uuid: '', 
    ip: '', 
    port: 0,
    login: '',
    password: '',
    status: 0})
    const submitHandler = () => {
      props.setNewList({...props.newList, content:[...props.newList.content, newCamera]})
      props.onHide()
      setNewCamera({
        uuid: '', 
        ip: '', 
        port: 0,
        login: '',
        password: '',
        status: 0})
    }
    const onCancel = () =>{
      props.onHide()
      setNewCamera({
        uuid: '', 
        ip: '', 
        port: 0,
        login: '',
        password: '',
        status: 0})
    }
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      centered
      data-bs-theme="dark"
      className="text-white"
    >
        <Modal.Header closeButton>
          <Modal.Title>Добавить камеру</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="uuid" className="mr-2">UUID : </Form.Label>
              <Form.Control type="text" name="uuid" onChange={(e) => setNewCamera({...newCamera, uuid:e.target.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="uuid" className="mr-2">IP : </Form.Label>
              <Form.Control type="text" name="uuid" onChange={(e) => setNewCamera({...newCamera, ip:e.target.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="uuid" className="mr-2">Port : </Form.Label>
              <Form.Control type="number" name="uuid" className="remove-arrow" onChange={(e) => setNewCamera({...newCamera, port:parseInt(e.target.value)})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="uuid" className="mr-2">Login : </Form.Label>
              <Form.Control type="text" name="uuid" onChange={(e) => setNewCamera({...newCamera, login:e.target.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="uuid" className="mr-2">Password : </Form.Label>
              <Form.Control type="password" name="uuid" onChange={(e) => setNewCamera({...newCamera, password:e.target.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="uuid" className="mr-2">Status : </Form.Label>
              <Form.Control type="number" name="uuid" className="remove-arrow" onChange={(e) => {setNewCamera({...newCamera, status:parseInt(e.target.value)})}}/>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>Отмена</Button>
          <Button variant="primary" onClick={submitHandler}>Добавить</Button>
        </Modal.Footer>
        
    </Modal>
  )
}

export default AddCamera
//