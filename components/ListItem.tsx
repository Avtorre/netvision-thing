import { ListType } from "@/lib/types"
import { useState } from "react"

const ListItem = (props: {item:ListType}) => {
  let txt = 'some text here '
  let filler: string[] = [`${txt}`]
  for (let i = 0; i < 100; i++) {
    filler.push(txt) 
  }
  const [isActive, setIsActve] = useState(false)
  const clickHandler = () => {
    setIsActve(!isActive)
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
        <button className="ml-2 inline">
          <img src="/icons/trash-light.svg" width={40} alt="trash" className="inline"/>
        </button>
      </div>
    </div>
    
    {isActive && <div className="bg-gradient-to-b from-netvision-gradient2-start to-netvision-gradient2-end mt-2 rounded-xl">
      <table>
          {(props.item.content.length) &&
          <tbody>
            {props.item.content.map((i) => {
              return(
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )
            })}
          </tbody>
          }
      </table>
      {filler}
    </div>}
  </div>
  )
}

export default ListItem