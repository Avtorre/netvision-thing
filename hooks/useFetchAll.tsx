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
  await getCameras().then(data => {data.map((i:CamerasData) => {
    //dispatch(setCameras(i))
    fetchedCameras.push(i)
   // console.log('camera', i)
  })
 // console.log('newCamera', fetchedCameras)
  })



  let globalStatus = {text: 'OK', color: 'bg-green-500'}
  const globalStatusChecker =(group: GroupsData) => {
    let statusCounter = 0
    let cameras = fetchedCameras.filter((camera:CamerasData) => camera.group_uuid === group.uuid)   
    cameras.map((camera: CamerasData) => {
      statusCounter += camera.status 
    })
    /*switch (statusCounter) {
      case (cameras.length):
        console.log('green', statusCounter)
        console.log('green', cameras.length)
        globalStatus = {text:'OK', color: 'bg-green-500'}
        break
      case 0:
        console.log('red', statusCounter)
        console.log('red', cameras.length)
        globalStatus =  { text: 'Sovsem NOT OK', color: 'bd-red-500' }
        break
      default:
        console.log('yellow',statusCounter === 1)
        console.log('yellow',statusCounter)
        console.log('yellow', cameras.length) 
        globalStatus =  { text: 'Not OK', color: 'bg-yellow-500'}
        break
    }*/
   if (statusCounter == cameras.length) {
    console.log('green', statusCounter)
    console.log('green', cameras.length)
    globalStatus = {text:'OK', color: 'bg-green-500'}
   } else if (statusCounter == 0) {
    console.log('red', statusCounter)
    console.log('red', cameras.length)
    globalStatus =  { text: 'Failure', color: 'bg-red-500' }
   } else {
    console.log('yellow',statusCounter === 1)
    console.log('yellow',statusCounter)
    console.log('yellow', cameras.length) 
    globalStatus =  { text: 'Not OK', color: 'bg-orange-500'}
   }
  }
  
  fetchedGroups.map((group) => {
    globalStatusChecker(group)
    compiledLists =[...compiledLists, {
      listId: group.uuid,
      name: group.name,
      status: globalStatus,
      content: fetchedCameras.filter((camera:CamerasData) => camera.group_uuid === group.uuid)
    }]
    
  })
  //dispatch(setList(newList))
  //console.log('newList', compiledLists)
  return compiledLists
} 