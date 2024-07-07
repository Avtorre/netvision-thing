'use client'
import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import AddCamera from "./AddCamera"
import { ListType } from "@/lib/types"

const AddList = ( props: {show: boolean, onHide: () => void}) => {
  const [AddCameraModal, setAddCameraModal] = useState(false)
  const [newList, setNewList] = useState<ListType>({listId: 0, name: '', status: 0, content: []})
  const submitHandler = () => {
    console.log('newList', newList)
    setNewList({listId: 0, name: '', status: 0, content: []})
    props.onHide()
  }
  const onCancel = () =>{
    setNewList({listId: 0, name: '', status: 0, content: []})
    props.onHide()
  }
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
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label>Название списка : </Form.Label>
              <Form.Control type="text" value={newList?.name} onChange={(e) => setNewList({...newList, name:e.target.value})}/>
            </Form.Group>
          </Form>
          <div className="mt-2 w-full flex flex-col">
            <p>Список камер :</p>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-1/6">UUID</th>
                  <th className="w-1/3">IP</th>
                  <th className="w-1/6">PORT</th>
                  <th className="w-1/6">Status</th>
                </tr>
              </thead>
              <tbody>
                {(newList.content)
                  ? <tr key=""></tr>
                  :
                }
              </tbody>
            </table>
            <button className="bg-gradient-to-b from-netvision-gradient-start to-netvision-gradient-end w-fit p-2 rounded-xl px-4 mt-2 self-center" onClick={() => {setAddCameraModal(true)}}>
              <img src="/icons/plus-light.svg" alt="list" width={30} className="inline"/>
              <p className="inline ml-2">Добавить камеру</p>
            </button>
            <AddCamera show={AddCameraModal} onHide={() => {setAddCameraModal(false)}} newList={newList} setNewList={setNewList}/>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>Отмена</Button>
          <Button variant="primary" type="submit" onClick={submitHandler}>Добавить</Button>
        </Modal.Footer>
      </div>
    </Modal>
  )
}

export default AddList