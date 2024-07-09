'use client'

import { getCameras, getGroups } from "@/http/someAPI"
import { CamerasData, GroupsData, ListType } from "@/lib/types"
import { setCameras } from "@/state/cameraStore/cameraSlice"
import { setGroups } from "@/state/groupStore/groupSlice"
import { setList } from "@/state/listStore/listSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"

export const useFetchAll = async () => {
  let fetchedGroups: GroupsData[] = []
  let fetchedCameras: CamerasData[] = []
  let compiledLists: ListType[] = []
  //const dispatch = useDispatch()
  await getGroups().then(data => {data.map((i) => {
    //dispatch(setGroups(i))
    fetchedGroups.push(i)
    //console.log('group', i)
  }) 
 // console.log('newGroup', fetchedGroups)
  })
  await getCameras().then(data => {data.map((i) => {
    //dispatch(setCameras(i))
    fetchedCameras.push(i)
   // console.log('camera', i)
  })
 // console.log('newCamera', fetchedCameras)
  })
  fetchedGroups.map((group) => {
    compiledLists =[...compiledLists, {
      listId: group.uuid,
      name: group.name,
      status: 0,
      content: fetchedCameras.filter((camera:CamerasData) => camera.group_uuid === group.uuid)
    }]
    
  })
  //dispatch(setList(newList))
  //console.log('newList', compiledLists)
  return compiledLists
} 