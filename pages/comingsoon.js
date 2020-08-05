import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import Header from '../components/Header.tsx';
import Header_2 from '../components/Header_2';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function commingsoon(props) {
  const [cart, setCart] = useState(props.cartList ?? []);
  return (
    <div className="container">
      <Header list={cart.length} />
      <main style={{ marginTop: '250px' }}>
        <div className="title">
          <div className="row">
            <p>hey there, I'm</p>
            <h1 style={{ fontSize: '3rem' }}>COUNT SHIRTY</h1>
          </div>
          <div className="row_2">
            <h4>coming soon</h4>
          </div>
        </div>
        <img className="coverImage" src="/TSHIRTS.jpeg" />
        <Header_2 />
      </main>
      <Footer />

      <style jsx>{`
        .container {
          margin: 0;
        }
        .title {
          width: 100%;
          margin-bottom: 1.2em;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          height: 100%;
        }

        .row {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 50%;
          text-align: center;
          height: 20vh;
          margin-top: 3.5rem;
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
        .image_1 {
          width: 300px;
          height: auto;
          z-index: 1;
          margin-bottom: 1em;
          margin-top: 2em;
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
          width: 200px;
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
