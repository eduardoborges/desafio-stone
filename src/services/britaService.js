import api from "./index";
import dayjs from "dayjs";

type CotacaoItemType = {
  cotacaoCompra: number,
  cotacaoVenda: number,
  dataHoraCotacao: Date
};

type CotacaoRespType = {
  "@odata.context": String,
  value: Array<CotacaoItemType>
};

const cotation = async (): CotacaoRespType => {
  const yesterday = dayjs()
    .subtract(1, "day")
    .format("MM-DD-YYYY");

  const base = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/";
  const path = "odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?";
  const params = `@dataCotacao='${yesterday}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

  const fullUrl = base + path + params;

  const { data } = await api.get(fullUrl);
  return data;
};

export { cotation };
