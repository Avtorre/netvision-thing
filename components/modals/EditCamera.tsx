import { createCamera } from "@/http/someAPI"
import { CamerasDetailedData, Complex, createList, ListType } from "@/lib/types"
import { Dispatch, SetStateAction, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

const AddCameraToList = ( props: {show: boolean, onHide: () => void, newList: ListType}) => {
  const [newCamera, setNewCamera] = useState<Complex>({
    uuid: 'props.newList.content.length', 
    ip: '', 
    port: 80,
    login: '',
    password: '',
    status: 0
  })

  const submitHandler = () => {
    console.log('camera ', newCamera)
    createCamera(newCamera, props.newList.listId)
    props.onHide()
    setNewCamera({
      uuid: '', 
      ip: '', 
      port: 80,
      login: '',
      password: '',
      status: 0
    })
  }
  const onCancel = () =>{
    props.onHide()
    setNewCamera({
      uuid:' props.newList.content.length', 
      ip: '', 
      port: 80,
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
          <Modal.Title>Добавить комплекс</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label className="mr-2">IP : </Form.Label>
              <Form.Control type="text" onChange={(e) => setNewCamera({...newCamera, ip:e.target.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="uuid" className="mr-2">Port : </Form.Label>
              <Form.Control type="number" className="remove-arrow" onChange={(e) => setNewCamera({...newCamera, port:parseInt(e.target.value)})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label className="mr-2">Логин : </Form.Label>
              <Form.Control type="text" onChange={(e) => setNewCamera({...newCamera, login:e.target.value})}/>
            </Form.Group>
            <Form.Group>
              <Form.Label className="mr-2">Пароль : </Form.Label>
              <Form.Control type="password" autoComplete="none" onChange={(e) => setNewCamera({...newCamera, password:e.target.value})}/>
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

export default AddCameraToList

/**
 *             <Form.Group>
              <Form.Label className="mr-2">Status : </Form.Label>
              <Form.Control type="number" className="remove-arrow" onChange={(e) => {setNewCamera({...newCamera, status:parseInt(e.target.value)})}}/>
            </Form.Group>
 */
/**
 * <Form.Group>
              <Form.Label className="mr-2">UUID : </Form.Label>
              <Form.Control type="text" name="uuid" onChange={(e) => setNewCamera({...newCamera, uuid:e.target.value})}/>
            </Form.Group>
 */