import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { getProduct } from '../db.js';

function CartButton(props) {
  const [cartList, setCartList] = useState([]);
  return (
    <div>
      <button
        className="orderButton"
        type="button"
        value="newItem"
        onClick={() => {
          if (typeof window !== 'undefined' && props.items.id) {
            const prevCartList = JSON.parse(
              window.localStorage.getItem('cartList'),
            );

            window.localStorage.setItem(
              'cartList',
              JSON.stringify([...prevCartList, props.items]),
            );
            // console.log('here', props.items.id);
          }
        }}
      >
        Add to cart
      </button>

      <style jsx>{`
        .orderButton {
          margin-top: 40px;
          background: none;
          color: black;
          border: none;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.15em;
          text-align: center;
          display: inline-block;
          position: relative;
          width: 170px;
          height: 70px;
          border: 1px solid #c8d8d4cd;
        }
        .orderButton :hover {
          transition: 400ms;
          color: #fff;
          cursor: pointer;
          background-color: rgb(77, 141, 198);
        }
      `}</style>
    </div>
  );
}
export default CartButton;
