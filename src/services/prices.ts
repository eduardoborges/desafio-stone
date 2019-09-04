
import api from './api';


export const getPrices = async () => {
  const { data } = await api.get('https://economia.awesomeapi.com.br/all/BTC-USD,USD-BRL');
  return data;
};
