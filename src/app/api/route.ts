import { makeGetVersionDocker } from '../factories/makeGetVersionDocker'
 
export async function GET(){
  const {dockerVersion } = await makeGetVersionDocker().execute()

  setTimeout(() => console.log('ok'), 10000)
  return Response.json({
    ...dockerVersion
  })

}