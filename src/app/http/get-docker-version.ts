import { api } from "../lib/axios"

type DockerVersionType = {
  id: string
  version:   string
  created_at: string
  updated_at: string
}
export async function getVersionDocker(): Promise<DockerVersionType>{
  const docker = await api.get<DockerVersionType>('/')
  return docker.data
}