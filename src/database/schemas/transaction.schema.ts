import { Realm } from '@realm/react';

export class Transaction extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  date!: Date;
  status!: boolean;
  address!: string;
  amount!: number;
  transactionId!: string;

  //   static generate(status: boolean, address: string, amount: number) {
  //     console.log(status, address, amount);
  //     return {
  //       _id: { type: 'objectId', default: () => new Realm.BSON.ObjectId() },
  //       date: { type: 'date', default: () => new Date() },
  //       status,
  //       address,
  //       amount,
  //     };
  //   }
  static schema: Realm.ObjectSchema = {
    name: 'Transaction',
    properties: {
      _id: { type: 'objectId', default: () => new Realm.BSON.ObjectId() },
      date: { type: 'date', default: () => new Date() },
      status: 'bool',
      address: 'string',
      amount: 'double',
      transactionId: 'string',
    },
    primaryKey: '_id',
  };
}

// - Fecha
// - Monto enviado.
// - Dirección de destino
// - Estado de la operación (exitosa / no exitosa)
// - ID de la operación.
