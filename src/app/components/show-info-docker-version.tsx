'use client'
import { useQuery } from "@tanstack/react-query"
import { getVersionDocker } from "../http/get-docker-version"
import { Loading } from "./loading"
import { formatDate } from "../lib/format-date"
import { BadgeCheck, History, RefreshCw } from "lucide-react"


export function ShowInfoDockerVersion() {

  const { data: dockerVersion, isFetching } = useQuery({
    queryKey: ["docker", "version"],
    queryFn: getVersionDocker
  })

  if (isFetching) {
    return (
      <Loading />
    )
  }


  return (
    dockerVersion &&
    <div className="flex flex-col justify-start items-start gap-2 font-bold mb-10 p-4">
      <div title="Versão" className="flex items-center gap-2 bg-gra">
        <History size={18} />
        <span className="text-blue-500 font-bold">{dockerVersion.version}</span>
      </div>
      <div title="Criado" className="flex items-center gap-2">
        <BadgeCheck size={18} />
        <span>{formatDate.date(new Date(dockerVersion.created_at))}</span>
      </div>
      <div className="flex items-center gap-2">
        <RefreshCw className="animate-refresh" size={18} />
        <span title="Data de atualização">{formatDate.date(new Date(dockerVersion.updated_at))}</span>
      </div>


    </div>
  )
}