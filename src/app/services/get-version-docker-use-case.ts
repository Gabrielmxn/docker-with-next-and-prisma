import { DockerVersionRepository } from "../infra/prisma-docker-entity"




export class GetVersionDocker{
  constructor(private dockerVersionRepository: DockerVersionRepository){}

  async execute(){
    const dockerVersion = await this.dockerVersionRepository.getDockerVersion()

    return {
      dockerVersion
    }
  }
}