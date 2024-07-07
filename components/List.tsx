'use client'

import { ListType } from "@/lib/types"
import { useState } from "react"
import ListItem from "./ListItem"

const List = () => {
  const [list, setList] = useState<ListType[]>([{listId: 0, name : 'test', status: 1, content: [{uuid: 'example', ip: '123.45.67.89', port: 777, login: '', password: '', status: 1} ]}, {listId: 1, name : 'test1', status: 1, content: [{uuid: 'example1', ip: '123.45.67.90', port: 7771, login: '', password: '', status: 1} ]}])
/**   const clickHandler = (listId: number) => {
    let i = document.getElementById((listId).toString())
    if (i?.style.maxHeight) {
      if (i.style.maxHeight !=='0'){
      i.style.maxHeight = '50px'
    } else {
      i.style.maxHeight = '0'
    }}
  } */

 

  return (
    <div className="w-5/6 mx-auto mt-5 text-white">
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
      {list?.map((item) => { return(
        <ListItem key={item.listId} item={item}/>
      )})}
    </div>
  )
}

export default List
/**
 * <div id={(item.listId).toString()} className='max-h-0'>
            {filler.map((complex) => {
              return <div>{complex}</div>
            })}
          </div>
 */