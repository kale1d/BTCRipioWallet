import { Realm } from '@realm/react';

export class Transaction extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  date!: Date;
  status!: boolean;
  address!: string;
  amount!: string;
  transactionId!: string;

  static schema: Realm.ObjectSchema = {
    name: 'Transaction',
    properties: {
      _id: { type: 'objectId', default: () => new Realm.BSON.ObjectId() },
      date: { type: 'date', default: () => new Date() },
      status: 'bool',
      address: 'string',
      amount: 'string',
      transactionId: 'string',
    },
    primaryKey: '_id',
  };
}
