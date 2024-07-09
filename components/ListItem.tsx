'use client'
import { ListType } from "@/lib/types"
import { useState } from "react"
import ComplexItem from "./ComplexItem"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state/store"
import { removeList } from "@/state/listStore/listSlice"
import AddCamera from "./modals/AddCamera"
import { deleteGroup } from "@/http/someAPI"


const ListItem = (props: {item:ListType}) => {
  const [AddCameraModal, setAddCameraModal] = useState(false)
  const [isActive, setIsActve] = useState(false)
  const list: ListType[] = Array.from(useSelector((state: RootState) => state.list))
  const dispatch = useDispatch()
  const clickHandler = () => {
    setIsActve(!isActive)
  }
  const deleteHandler = () => {
    deleteGroup(props.item.listId)
    location.reload()
    //dispatch(removeList(props.item.listId))
  }

  return (
    <div key={props.item.listId} className="mb-3">
    <div className="h-14 w-full bg-gradient-to-b from-netvision-gradient-start to-netvision-gradient-end rounded-xl text-white px-10">
      <button onClick={clickHandler} className="h-full align-middle w-2/3 text-left inline">
        {props.item.name}
      </button>
      <div className="w-1/6 inline-flex">
        Status: 123 Not Ok
      </div>
      <div className="w-1/6 inline-flex">
        <button className="w-1/3 inline ml-auto">
          <img src="/icons/pen-light.svg" width={40} alt="trash" className="inline"/>
        </button>
        <button onClick={deleteHandler} className="ml-2 inline">
          <img src="/icons/trash-light.svg" width={40} alt="trash" className="inline"/>
        </button>
      </div>
    </div>
    
    {isActive && <div className="bg-gradient-to-b from-netvision-gradient2-start to-netvision-gradient2-end mt-2 rounded-xl py-2">
      <table className="w-full text-center table-fixed">
          {(props.item.content?.length) ?
          <tbody>
            {props.item.content.map((i) => 
                <ComplexItem key={i.ip + ':' + i.port} complex={i}/>
            )}
          </tbody>
          :<tbody>
            <tr>
              <td className="w-full">nihuya</td>
            </tr>
          </tbody>
          }
      </table>
      <button onClick={() => {setAddCameraModal(true)}} className="mt-2 block w-1/5 mx-auto bg-gradient-to-b from-netvision-gradient-start to-netvision-gradient-end p-2 rounded-xl px-5">
        <img src="/icons/plus-light.svg" alt="list" width={30} className="inline"/>
        <p className="inline ml-2">Добавить камеру</p>
      </button>
    </div>}
    
  </div>
  )
}

export default ListItem
//<AddCamera show={AddCameraModal} onHide={() => {setAddCameraModal(false)}} newList={props.item}/>