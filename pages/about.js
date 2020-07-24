import Head from 'next/head';
import Header from '../components/Header.tsx';
import Header_2 from '../components/Header_2';
import Form from '../components/Form';
import nextCookies from 'next-cookies';
import { useState } from 'react';

import Footer from '../components/Footer';
export default function about(props) {
  const [cart, setCart] = useState(props.cartList ?? []);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="container">
      <Header list={cart.length} />
          <div className="row">
            <p>Do you want to know more about</p>
            <h1 style={{ fontSize: '4em' }}>COUNT SHIRTY</h1>
          </div>

          <div className="row_2">
            <h4>or you want to contact us,</h4>
            <h3> or just send some love?</h3>
          </div>
        </div>
        <img className="coverImage" src="/TSHIRTS.jpeg" />
        <Header_2 />
        <div className="section">
          <h2> About us</h2>

          <p>
            Hamed found Count Shirty in 2019 in Vienna, since he thought having
            a "dancing friendly" T-Shirt is very important to feel compfortable
            while moving around.
          </p>
          <p>
            {' '}
            Count Shirty T-shirts are all organic, from fair trade products, (as
            much as possible) plastic-free and have some inside jokes about
            dancing{' '}
          </p>
          <h2 style={{ marginTop: '40px' }}>
            {' '}
            if you want to hear from us more subscribe here
          </h2>
          <div className="formSection">
            <Form
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              address={address}
              setAddress={setAddress}
              email={email}
              setEmail={setEmail}
            />{' '}
            <button className="orderButton">submit</button>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .container {
          margin: 0;
        }
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .row {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 50%;
          text-align: center;
          margin: 40px 0;
        }
        .row_2 {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
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
          align-self: baseline;
          text-align: center;
          height: 100%;
        }
        .products {
          display: flex;
          flex-wrap: wrap;
          height: 100%;
          justify-content: space-around;
        }
        .productInfos {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        .image {
          width: 400px;
          height: auto;
          position: relative;
          z-index: 1;
          margin-bottom: 1em;
          margin-top: 2em;
          overflow: hidden;
        }
        .image :hover {
          transition: 300ms;
          transform: scale(1.05);
        }
        .image_2 {
          margin: 10px 40px 0 0;
          width: 300px;
          height: auto;
          z-index: 2;
        }
        .formSection {
          display: flex;
          flex-direction: column;
          align-content: center;
          align-items: center;
          align-self: center;
          justify-content: center;
          width: 60%;
        }
        .orderButton {
          margin-top: -70px;
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
          height: 40px;
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
          font-size: 2em;
          font-weight: 300;
          text-transform: uppercase;
        }
        h2 {
          margin: 0;
          padding: 0;
          font-size: 1.7em;
          font-weight: 300;
          letter-spacing: 2px;
        }
        h3 {
          margin: 0;
          padding: 0;
          font-size: 1.4em;
          font-weight: 300;
          letter-spacing: 2px;
        }
        h4 {
          margin: 0;
          padding: 0;
          font-size: 1.2em;
          font-weight: 300;
          letter-spacing: 2px;
        }
        p {
          margin: 4px;
          padding: 0;
          font-size: 1em;
          font-weight: 300;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
}

/************** ServerSide  ***********/
export async function getServerSideProps(context) {
  const { cartList } = nextCookies(context);

  const { getProducts } = await import('../db.js');

  const products = await getProducts();

  return {
    props: {
      ...(cartList ? { cartList: cartList } : undefined),
      products,
    },
  };
}
