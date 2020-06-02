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
  /****************** geting cartList from Cookies *******************/
  let myCart = [];
  // let index = 1;
  // let message = '';
  // typeof window !== 'undefined'
  //   ? (shopList = JSON.parse(window.localStorage.getItem('cartList')))
  //   : (message = '');
  const lastCookies = Cookies.get('cartList');
  lastCookies === undefined
    ? (myCart = [])
    : (myCart = JSON.parse(lastCookies));
  console.log('cart', myCart);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="title">
          <p>this is your </p>
          <h2>Shopping Basket</h2>
        </div>
        <section>
          <div>
            {myCart.map((product, i) => {
              return (
                <div key={product.id} className="cartListing">
                  <div className="row">
                    <img className="image" src={product.image} />
                    <p>{product.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
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
        .cartListing {
          cursor: pointer;
          padding: 12px 8px 12px 40px;
          display: flex;
          height: 30vh;
          justify-content: space-between;
          align-items: center;
          margin-top: 13px;
        }
        .cartListing :hover {
          transition: 0.3s;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1),
            0 4px 6px 0 rgba(0, 0, 0, 0.1);
        }

        .row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .coverImage {
          margin: 20px 0;
          width: 100%;
        }
        .section {
          max-width: 100%;
          overflow: hidden;
          margin: 40px;
          display: flex;
          flex-direction: column;
          align-content: center;

          height: 100%;
        }
        .products {
          display: flex;
          flex-wrap: wrap;
          height: 100%;
          justify-content: space-around;
        }
        .productInfos {
          margin: 10px 0 0 10px;
          display: grid;
          justify-content: start;

          height: 100%;
          height: 100%;
        }
        .productInfos * + * {
          margin-top: 10px;
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
