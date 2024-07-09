import { CamerasData, Complex } from "@/lib/types"


const ComplexItem = (props: {complex: CamerasData}) => {
    return (
        <tr className="w-full">
            <td className="w-4/12">{props.complex.uuid}</td>
            
            <td className="w-2/6">{props.complex.ip}</td>
            <td className="w-1/12">{props.complex.port}</td>
            <td className="w-3/12">{props.complex.status}</td>
        </tr>
    )
}

export default ComplexItem