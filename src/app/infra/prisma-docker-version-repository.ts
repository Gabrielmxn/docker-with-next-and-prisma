import { prisma } from "../lib/prisma";
import { DockerVersionRepository } from "./prisma-docker-entity";

export class PrismaDockerVersion implements DockerVersionRepository {
  async getDockerVersion(){
    const docker = await prisma.dockerVersion.findFirst({
      
    })

    return docker;
  }
}