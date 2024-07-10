/**export type Complex = {
    uuid: number, 
    name?: string, 
    ip: string, 
    port: number, 
    status: string
}

export type ListItem = {
    listId: number,
    name: string,
    content?: Complex[]
}*/
export type ListType = {
    listId: string,
    name: string,
    status: {text: string, color: string},
    content: CamerasData[]
}

export type createList = {
    listId: string,
    name: string,
    status?: number,
    content: Complex[]
}

export type Complex = {
    uuid: string, 
    ip: string, 
    port: number,
    login: string,
    password: string,
    status?: number,
    group_uuid?: string
}

export type GroupsData = {
    uuid: string,
    name: string
}

export type CamerasData = {
    uuid: string,
    ip: string,
    port: number,
    status: number,
    group_uuid?: string
}

export type CamerasDetailedData = {
    uuid: string,
    ip: string,
    port: number,
    login: string,
    password: string,
    status?: number,
    group_uuid?: string
}