/* --- STATE --- */
import { EnvironmentSummaryInfoType } from 'types';

export interface MarketViewState {
  loading: boolean;
  errorMessage?: string;
  summaryInfo: EnvironmentSummaryInfoType | null;
  arweaveId?: string;
  metaData: { [key: string]: any };
}
