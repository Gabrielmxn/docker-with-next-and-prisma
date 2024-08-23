import { DockerVersion } from "@prisma/client";


export interface DockerVersionRepository{
  getDockerVersion(): Promise<DockerVersion | null>
}