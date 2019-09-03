import { Dayjs } from 'dayjs';

export interface TransactionState {
  data: []
}

export interface Transaction{
  id?: number,
  wallet_source: number,
  wallet_destination: number,
  time: Dayjs,
  description?:string
}
