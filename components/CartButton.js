import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useState } from 'react';

function CartButton(props) {
  const makeCookies = () => {
    let newCookies = [];
    const lastCookies = Cookies.get('cartList');
    lastCookies === undefined
      ? (newCookies = [props.items])
      : (newCookies = [...JSON.parse(lastCookies), props.items]);
    Cookies.set('cartList', newCookies);
  };

  return (
    <div>
      <button
        className="orderButton"
        data-cy={'add-toCart'}
        type="button"
        value="newItem"
        onClick={() => {
          makeCookies();
          props.addToCart();
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

// if (typeof window !== 'undefined' && props.items.id) {
//   const prevCartList = JSON.parse(
//     window.localStorage.getItem('cartList'),
//   );
//   window.localStorage.setItem(
//     'cartList',
//     JSON.stringify([...prevCartList, props.items]),
//   );
// console.log('here', props.items);}

// let newCookiesId = [];
// const lastCookiesId = Cookies.get('list');
// lastCookiesId === undefined
//   ? (newCookiesId = [props.items.id])
//   : (newCookiesId = [...JSON.parse(lastCookiesId), props.items.id]);
// Cookies.set('list', newCookiesId);
