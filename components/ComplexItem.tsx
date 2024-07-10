import { CamerasData, Complex } from "@/lib/types"

const ComplexItem = (props: {complex: CamerasData}) => {
    let st = {text: 'ok', color: 'bg-green-500'}
    if (props.complex.status == 0) {
       st = {text: 'blya', color: 'bg-red-500'}
    }

    return (
        <tr className="w-full">
            <td className="w-4/12">{props.complex.uuid}</td>
            <td className="w-2/6">{props.complex.ip}</td>
            <td className="w-1/12 bg-green-500/0">{props.complex.port}</td>
            <td className={`w-3/12 bg-red-500/0`}>
                <div className={`w-fit h-fit bg-orange-500/0 ${st.color} rounded-xl mx-auto px-3 py-1 `}>{st.text}</div>
            </td>
        </tr>
    )
}

export default ComplexItem