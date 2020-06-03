import Head from 'next/head';
import Link from 'next/link';
import cookies from 'next-cookies';
import Cookies from 'js-cookie';
import { getProduct } from '../db.js';
import { getProductById } from '../db.js';
import Header from '../components/Header';
import Header_2 from '../components/Header_2';
import Footer from '../components/Footer';

export default function cart(props) {
  /****************** geting cartList & list from Cookies *******************/

  let myCart = [];
  let idCookies = [];
  let message = '';
  let prices = [];
  let sum = 0;
  const lastCookies = Cookies.get('cartList');
  lastCookies === undefined
    ? (myCart = [])
    : (myCart = JSON.parse(lastCookies));
  //cookieId is down there
  let cartId = myCart.map((a) => a.id);
  /****************** get the amount of every item *******************/
  const amount = cartId.reduce(function (amount, i) {
    if (!amount[i]) {
      amount[i] = 1;
    } else {
      amount[i] = amount[i] + 1;
    }
    return amount;
  }, {});
  if (myCart.length === 0) {
    message = 'is empty';
  }
  /****************** delete duplicate from array  *******************/
  // const uniqueArray = myCart.reduce(function (accumulator, currentValue, id) {
  //   if (accumulator.indexOf(currentValue.id) === -1) {
  //     accumulator.push(currentValue.id);
  //   }
  //   return accumulator;
  // }, []);
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

  let uniqueArray = removeDuplicates(myCart, 'id');

  /****************** delete items from list  *******************/

  const removeItem = (index) => {
    uniqueArray.splice(index, 1);
    Cookies.set('cartList', uniqueArray);
    Cookies.set('list', idCookies);
    location.reload();
  };
  /****************** add to item  *******************/

  const addToItem = (index) => {
    myCart.push(index);
    Cookies.set('cartList', myCart);
    location.reload();
  };
  /****************** reduce the amount to item  *******************/

  const reduceItem = (index) => {
    let i = myCart.indexOf(index);
    if (i !== -1) myCart.splice(i, 1);
    Cookies.set('cartList', myCart);
    location.reload();
  };

  /****************** return *******************/

  return (
    <div>
      <Head>
        <title>Count Shirty</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <main>
        <div className="title">
          <p>Your</p>
          <h2>Shopping Basket {message}</h2>
        </div>
        <section>
          <div className="products">
            <p>Product Image</p>
            <p>Product Name</p>
            <p>Amount</p>
            <p>Price</p>
          </div>

          <div>
            {uniqueArray.map((product, i) => {
              prices.push(amount[product.id] * product.price);
              sum = prices.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
              );

              return (
                <div key={i}>
                  <div className="cartList">
                    <img className="image" src={product.image} />

                    <p>{product.name}</p>
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
                    <p>{prices[i]}</p>
                    <button
                      className="buttonRight"
                      onClick={() => {
                        removeItem(i);
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
          <h4 style={{ marginLeft: '100px' }}>Total price: </h4> <h4>{sum}</h4>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .container {
          margin: 0;
        }
        .title {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .cartList {
          background: #eee;
          display: flex;
          border-radius: 8px;
          justify-content: space-around;
          align-items: center;
          margin: 20px 0;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1),
            0 10px 20px 0 rgba(0, 0, 0, 0.1);
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
          margin: 40px 0 0 40px;
        }
        .products {
          margin: 40px 0 40px 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          height: 100%;
          width: calc(100% - 20%);
        }

        .image {
          width: 150px;
          height: auto;
          position: relative;
          margin-bottom: 1em;
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
  const { cartList } = cookies(context);

  return {
    props: {
      ...(cartList ? { cartList: cartList } : undefined),
    },
  };
}

// let index = 1;
// let message = '';
// typeof window !== 'undefined'
//   ? (shopList = JSON.parse(window.localStorage.getItem('cartList')))
//   : (message = '');

// const lastCookiesId = Cookies.get('list');
// lastCookiesId === undefined
//   ? (idCookies = [])
//   : (idCookies = JSON.parse(lastCookiesId));
