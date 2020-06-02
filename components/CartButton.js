import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { getProduct } from '../db.js';

function CartButton(props) {
  // if (props.cartList === undefined) {
  //   let lastCookies = [];
  // } else {
  //   const lastCookies = props.cartList;
  // }
  return (
    <div>
      <button
        className="orderButton"
        type="button"
        value="newItem"
        onClick={() => {
          let newCookies = [];
          const lastCookies = Cookies.get('cartList');
          lastCookies === undefined
            ? (newCookies = [props.items])
            : (newCookies = [...JSON.parse(lastCookies), props.items]);
          props.setCartList(newCookies.length);
          Cookies.set('cartList', newCookies);
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

export function getServerSideProps(context) {
  const { cartList, list } = nextCookies(context);

  return {
    props: {
      ...(cartList ? { cartList: cartList } : undefined),
      ...(list ? { list: list } : undefined),
    },
  };
}

// if (typeof window !== 'undefined' && props.items.id) {
//   const prevCartList = JSON.parse(
//     window.localStorage.getItem('cartList'),
//   );
//   window.localStorage.setItem(
//     'cartList',
//     JSON.stringify([...prevCartList, props.items]),
//   );
// console.log('here', props.items);}
