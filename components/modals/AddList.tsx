'use client'
import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import AddCamera from "./AddCamera"

const AddList = ( props: {show: boolean, onHide: () => void}) => {
  const [AddCameraModal, setAddCameraModal] = useState(false)
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
          <Modal.Title>Добавить список</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Название списка : </Form.Label>
              <Form.Control />
            </Form.Group>
          </Form>
          <div className="mt-2">
            Список камер :
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-1/6">UUID</th>
                  <th className="w-1/3">IP</th>
                  <th className="w-1/6">PORT</th>
                  <th className="w-1/6">Status</th>
                </tr>
              </thead>
            </table>
            <button className="bg-gradient-to-b from-netvision-gradient-start to-netvision-gradient-end w-fit p-2 rounded-xl px-4 ml-2" onClick={() => {setAddCameraModal(true)}}>
              <img src="/icons/plus-light.svg" alt="list" width={30} className="inline"/>
              <p className="inline ml-2">Добавить список</p>
            </button>
            <AddCamera show={AddCameraModal} onHide={() => {setAddCameraModal(false)}}/>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Отмена</Button>
          <Button variant="primary" onClick={props.onHide}>Добавить</Button>
        </Modal.Footer>
      </div>
        
    </Modal>
  )
}

export default AddList