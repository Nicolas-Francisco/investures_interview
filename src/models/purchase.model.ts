export interface Purchase {
  payload: MainPurchase[];
};

export interface MainPurchase {
  purchase_id: number;
  details: boughtProduct[];
  received_date: Date;
}

export interface boughtProduct {
  product_id: number;
  quantity: number;
}

// ejemplo de purchase
//
// {
//   "purchase_id": 10242,
//   "details": [
//     {
//       "product_id": 1,
//       "quantity": 30
//     },
//     {
//       "product_id": 3,
//       "quantity": 28
//     },
//     {
//       "product_id": 5,
//       "quantity": 15
//     }
//   ],
//   "received_date": "2022-02-01T15:00:00Z"
// },
