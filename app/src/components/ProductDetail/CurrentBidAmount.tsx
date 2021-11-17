import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import {Product} from "../../interfaces";

interface CurrentBidAmountProps { product: Product }

const CurrentBidAmount = ({ product }: CurrentBidAmountProps) => {

  const [bidPrice, setBidPrice] = useState(product.bid_price);
    const [username, setUsername] = useState(product?.user?.username);

  useEffect(() => {
      const socket = io('http://localhost:8002');
      socket.on('laravel_database_product-channel:App\\Events\\UserBidProduct', (data: any) => {
          setUsername(data?.user?.username);
          setBidPrice(data?.bidAmount);
      });
  }, [product]);


  return (
      <h2>Current bid: ${bidPrice} {username && `by ${username}`}</h2>
  );
}

export default CurrentBidAmount;