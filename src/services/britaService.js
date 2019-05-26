import api from "./index";
import dayjs from "dayjs";
import { CurrencyType } from "../types";

type CotacaoItemType = {
  cotacaoCompra: number,
  cotacaoVenda: number,
  dataHoraCotacao: Date
};

type CotacaoRespType = {
  "@odata.context": String,
  value: Array<CotacaoItemType>
};

const cotation = async (): CurrencyType => {
  const yesterday = dayjs()
    .subtract(1, "day")
    .format("MM-DD-YYYY");

  const base = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/";
  const path = "odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?";
  const params = `@dataCotacao='${yesterday}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

  const fullUrl = base + path + params;

  const resp = await api.get(fullUrl);
  const data: CotacaoRespType = resp.data;

  const price: CurrencyType = {
    buy: data.value[0].cotacaoCompra,
    sell: data.value[0].cotacaoVenda,
    date: data.value[0].dataHoraCotacao
  };

  return price;
};

export { cotation };
