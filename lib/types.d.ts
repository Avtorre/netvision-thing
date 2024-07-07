export type ListType = {
  listId: number,
  name: string,
  status: number,
  content: Complex[]
}

export type Complex = {
  uuid: string, 
  ip: string, 
  port: number,
  login: string,
  password: string,
  status: number
}