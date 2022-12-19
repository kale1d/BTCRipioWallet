import { Transaction } from './schemas/transaction.schema';
import { createRealmContext } from '@realm/react';

export const TransactionContext = createRealmContext({
  schema: [Transaction],
  deleteRealmIfMigrationNeeded: true,
});
