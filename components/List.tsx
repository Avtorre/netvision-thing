'use client'

import { useState } from "react"

type ListItem = {
  listId: number,
  name: string,
  content: [{name: string, ip: string, port: number}]
}

const List = () => {
  let txt = 'some text here '
  let filler: string[] = [`${txt}`]
  for (let i = 0; i < 150; i++) {
    filler.push(txt) 
  }

  const [list, setList] = useState<ListItem[]>([{listId: 0, name : 'test', content: [{name: 'example', ip: '123.45.67.89', port: 777} ]}])
  const [isActive, setIsActve] = useState(false)
/**   const clickHandler = (listId: number) => {
    let i = document.getElementById((listId).toString())
    if (i?.style.maxHeight) {
      if (i.style.maxHeight !=='0'){
      i.style.maxHeight = '50px'
    } else {
      i.style.maxHeight = '0'
    }}
  } */

  const clickHandler = () => {
    setIsActve(!isActive)
  }

  return (
    <div className="w-5/6 mx-auto">
      {list?.map((item) => { return(
        <div key={item.listId} >
          <button onClick={clickHandler} className="h-14 w-full bg-gradient-to-b from-netvision-gradient-start to-netvision-gradient-end p-2 rounded-xl px-5 text-white text-left pl-12">
            {item.name}
          </button>
          {isActive && <div className="bg-gradient-to-b from-netvision-gradient2-start to-netvision-gradient2-end mt-4 rounded-xl">{filler}</div>}
        </div>
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