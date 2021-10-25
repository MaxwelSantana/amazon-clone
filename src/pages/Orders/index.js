import { collection, getDocs, orderBy, query } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';

import './styles.css';
import Order from '../../components/Order';

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const ordersRef = collection(db, 'users', user?.uid, 'orders');
      const q = query(ordersRef, orderBy('created', 'desc'));
      const querySnapshot = await getDocs(q);
      setOrders(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        }),
      );
    };
    if (user) getOrders();
    else setOrders([]);
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
