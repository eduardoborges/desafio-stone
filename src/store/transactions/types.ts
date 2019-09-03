import { Dayjs } from 'dayjs';

export interface TransactionState {
  data: []
}

export interface Transaction{
  id?: number,
  description?:string,
  wallet_source: number,
  wallet_destination: number,
  time: Dayjs,
}

export interface TransactionActions {
  handleTransaction(sourceId: number, destId: number, amount: number): Transaction
}
