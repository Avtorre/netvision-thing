import { CamerasData, CamerasDetailedData, Complex } from "@/lib/types"
import { $host } from "./http"
import { AxiosResponse } from "axios"


export const getGroups = async () => {
    const resp: AxiosResponse = await $host.get('/groups')
    return [...resp.data]
} 

export const createGroup = async (name: string) => {
    const resp: AxiosResponse = await $host.post('/groups', {"name": name})
    console.log('resp.data', resp.data)
    return resp.data
} 

export const deleteGroup = async (listId: string) => {
    const resp: AxiosResponse = await $host.delete(`/groups/${listId}`)
    return resp
} 

/////////////////////////////////////////////////////////

export const getCameras = async () => {
    const resp: AxiosResponse = await $host.get('/cameras')
    return [...resp.data]
} 

export const createCamera = async (camera: Complex, listId: string) => {
    const resp: AxiosResponse = await $host.post('/cameras', {
        "ip": camera.ip,
        "port": 80,
        "login": camera.login,
        "password": camera.password,
        "group_uuid": listId,
    })
    return resp.data
} 

