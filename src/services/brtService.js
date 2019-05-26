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

const prices = async (): CurrencyType => {
  const today = dayjs().format("MM-DD-YYYY");
  const last3day = dayjs()
    .subtract(4, "day")
    .format("MM-DD-YYYY");

  let url = "";

  url += "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/";
  url += "odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?";
  url += `@dataInicial='${last3day}'&@dataFinalCotacao='${today}'&$top=100&$skip=0&`;
  url += `$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

  const resp = await api.get(url);
  const data: CotacaoRespType = resp.data;

  const price: CurrencyType = {
    buy: data.value.reverse()[0].cotacaoCompra,
    sell: data.value.reverse()[0].cotacaoVenda,
    date: data.value.reverse()[0].dataHoraCotacao
  };

  return price;
};

export { prices };
