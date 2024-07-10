'use client'
import { deleteCamera, deleteGroup } from "@/http/someAPI"
import { CamerasData, Complex } from "@/lib/types"
import { removeCamera } from "@/state/cameraStore/cameraSlice"
import { useDispatch } from "react-redux"

const ComplexItem = (props: {complex: CamerasData}) => {
    const dispatch = useDispatch()
    let st = {text: 'OK', color: 'bg-green-500'}
    if (props.complex.status == 0) {
       st = {text: 'Failure', color: 'bg-red-500'}
    }
    const deleteHandler = async () => {
        deleteCamera(props.complex.uuid)
        dispatch(removeCamera(props.complex.uuid))
        //location.reload()
        //dispatch(removeList(props.item.listId))
      }

    return (
        <tr className="w-full">
            <td className="w-1/3 py-2">Complex name</td>
            <td className="w-1/4">{props.complex.ip}</td>
            <td className="w-1/12 bg-green-500/0">{props.complex.port}</td>
            <td className={`w-3/12 bg-red-500/0`}>
                <div className={`w-fit h-fit bg-orange-500/0 ${st.color} rounded-xl mx-auto px-3 py-1 `}>{st.text}</div>
            </td>
            <td className="min-w-fit flex">
                <button className="w-1/3 inline mr-auto">
                    <img src="/icons/pen-light.svg" width={30} alt="trash" className="inline"/>
                </button>
                <button onClick={deleteHandler} className="inline mr-auto">
                <img src="/icons/trash-light.svg" width={30} alt="trash" className="inline"/>
                </button>
            </td>
        </tr>
    )
}

export default ComplexItem

//<td className="w-4/12">{props.complex.uuid}</td>