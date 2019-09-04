import { Dayjs } from 'dayjs';

export interface TransactionState {
  data: Transaction[],
  isLoading: boolean
}

export interface Transaction{
  id?: number,
  amount: number,
  finalAmout: number,
  description?:string,
  walletSource: number,
  walletDestination: number,
  time: Dayjs,
}

export interface TransactionActions {
  handleTransaction(sourceId: number, destId: number, amount: number): Transaction
}
