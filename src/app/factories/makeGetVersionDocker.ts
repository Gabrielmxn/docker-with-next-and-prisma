import { GetVersionDocker } from './../services/get-version-docker-use-case';
import { PrismaDockerVersion } from './../infra/prisma-docker-version-repository';


export function makeGetVersionDocker(){
  const dockerVersion = new PrismaDockerVersion()
  const getVersionDocker = new GetVersionDocker(dockerVersion)
  return getVersionDocker
}