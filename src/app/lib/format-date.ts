import { format } from "date-fns/format"
import { ptBR } from "date-fns/locale"

class FormatDate {

  date(date: Date){
    return format(date, "d 'de' LLLL 'de' y 'às' pp", { locale: ptBR})
  }
}



export const formatDate = new FormatDate()