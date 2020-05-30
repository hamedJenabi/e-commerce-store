import Head from 'next/head';
import Link from 'next/link';
import { getProduct } from '../db.js';

function CartButton(props) {
  return (
    <div>
      <button
        className="orderButton"
        type="button"
        value="newItem"
        onClick={() => {
          props.onSubmit(props.cartList);
          {
            const newItem = props.items;
            props.setCartList([...props.cartList, newItem]);
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
