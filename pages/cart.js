import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer';

export default function cart(props) {
  /****************** getting cartList & list from Cookies *******************/
  const [cart, setCart] = useState(props.cartList ?? []);

  let message = '';
  let prices = [];
  let sum = 0;
  // const lastCookies = props.cartList;
  // lastCookies === undefined ? (myCart = []) : (myCart = lastCookies);
  //cookieId is down there
  //cart is an array with all selected products.
  const cartId = cart.map((a) => a.id);
  /****************** get the amount of every item *******************/
  const amount = cartId.reduce(function (amount, i) {
    if (!amount[i]) {
      amount[i] = 1;
    } else {
      amount[i] = amount[i] + 1;
    }
    return amount;
  }, {});

  // message for an empty basket
  if (cart.length === 0) {
    message = 'is empty';
  }

  /****************** delete duplicate from array  *******************/
  // I have to find a better way

  function removeDuplicates(originalArray, prop) {
    const newArray = [];
    const lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }

  /****************** delete  from list  *******************/

  const removeItem = (index) => {
    const newList = [...removeDuplicates(cart, 'id')];
    if (index !== -1) newList.splice(index, 1);
    setCart(newList);
    Cookies.set('cartList', newList);
  };
  /****************** add to item  *******************/

  const addToItem = (index) => {
    const newList = [...cart, index];
    setCart(newList);

    Cookies.set('cartList', newList);
  };
  //***** setting cookies ****/

  /****************** reduce the amount of item  *******************/

  const reduceItem = (index) => {
    const newList = [...cart];
    let i = newList.indexOf(index);
    newList.splice(i, 1);
    setCart(newList);
    Cookies.set('cartList', newList);
  };

  /****************** return *******************/
  return (
    <div>
      <Header list={cart.length} />
      <main>
        <div className="title">
          <p>Your</p>
          <h2>Shopping Basket {message}</h2>
        </div>
        <section>
          <div className="products">
            <p>Product Image</p>
            <p>Product Name</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Remove Item</p>
          </div>

          <div>
            {removeDuplicates(cart, 'id').map((product, i) => {
              prices.push(amount[product.id] * product.price);
              sum = prices.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
              );

              return (
                <div key={i}>
                  <div className="cartList">
                    <img className="image" src={'/' + product.image} />

                    <p style={{ width: '100px' }}>{product.name}</p>
                    <div style={{ display: 'flex' }}>
                      <button
                        onClick={() => {
                          reduceItem(product);
                        }}
                      >
                        -
                      </button>
                      <p>{amount[product.id]}</p>
                      <button
                        onClick={() => {
                          addToItem(product);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <p>€{prices[i]}</p>
                    <button
                      className="buttonRight"
                      data-cy={'remove'}
                      onClick={() => {
                        removeItem(product);
                      }}
                    >
                      {'❌'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="total">
          <h4>Total price: </h4> <h4 data-cy={'total'}>€{sum}</h4>
          <Link href="/checkout" as="/checkout">
            <a>
              <button
                className="proceedButton"
                onClick={() => {
                  Cookies.set('totalPrice', sum);
                }}
              >
                Proceed to Checkout
              </button>
            </a>
          </Link>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .container {
          margin: 0;
        }
        .title {
          margin-top: 250px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .proceedButton {
          background: none;
          color: black;
          border: none;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.15em;
          text-align: center;
          display: inline-block;
          position: relative;
          width: 250px;
          height: 40px;
          border: 1px solid #c8d8d4cd;
        }
        .proceedButton :hover {
          transition: 400ms;
          color: #fff;
          cursor: pointer;
          background-color: rgb(77, 141, 198);
        }
        .cartList {
          display: flex;
          justify-content: space-around;
          align-items: center;
          text-align: center;
          border-bottom: 1px solid black;
        }

        .coverImage {
          margin: 20px 0;
          width: 100%;
        }
        .section {
          display: flex;
          margin: 40px 0;
          justify-content: space-evenly;
        }
        .total {
          display: flex;
          align-items: baseline;
          float: right;
          margin: 40px 0px;
        }
        .total * + * {
          margin: 20px;
        }
        .products {
          margin-top: 40px;
          display: flex;
          justify-content: space-around;

          border-bottom: 1px solid black;
        }
        .products p {
          margin-left: 60px;
        }

        .image {
          width: 150px;
          height: auto;
          position: relative;
          margin-bottom: 2em;
          margin-top: 2em;
          overflow: hidden;
        }

        .image_2 {
          margin: 10px 40px 0 0;
          width: 300px;
          height: auto;
          z-index: 2;
        }
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
          width: 150px;
          height: 70px;
          border: 1px solid #c8d8d4cd;
        }
        .orderButton :hover {
          transition: 400ms;
          color: #fff;
          cursor: pointer;
          background-color: rgb(77, 141, 198);
        }
        .deleteButton {
          background-color: #eee;
          color: white;
          padding: 10px;
          font-size: 14px;
          border-radius: 8px;
          justify-items: right;
        }
        .deleteButton :hover {
          transition: 0.3s;

          background-color: lightgray;
          border-color: rgba(175, 47, 47, 0.1);
          box-shadow: 0px 2px 2px lightgray;
          color: white;
        }
        a {
          color: black;
          text-decoration: none;
          letter-spacing: 0.15em;
          padding: 10px 0;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          display: block;
          max-width: 100%;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        h1 {
          margin: 0;
          letter-spacing: 3px;
          padding: 0;
          font-size: 45px;
          font-weight: 300;
          text-transform: uppercase;
        }
        h2 {
          margin: 0;
          padding: 0;
          font-size: 40px;
          font-weight: 300;
          letter-spacing: 2px;
        }
        h3 {
          margin: 0;
          padding: 0;
          font-size: 30px;
          font-weight: 300;
          letter-spacing: 2px;
        }
        h4 {
          margin: 0;
          padding: 0;
          font-size: 26px;
          font-weight: 300;
          letter-spacing: 2px;
        }
        p {
          margin: 4px;
          padding: 0;
          font-size: 16px;
          font-weight: 300;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
}

export function getServerSideProps(context) {
  const { cartList } = nextCookies(context);

  return {
    props: {
      ...(cartList ? { cartList: cartList } : undefined),
    },
  };
}
