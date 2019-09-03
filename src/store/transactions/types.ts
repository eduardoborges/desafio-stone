import { Dayjs } from 'dayjs';

export interface TransactionState {
  data: [],
  isLoading: boolean
}

export interface Transaction{
  id?: number,
  description?:string,
  walletSource: number,
  walletDestination: number,
  time: Dayjs,
}

export interface TransactionActions {
  handleTransaction(sourceId: number, destId: number, amount: number): Transaction
}
