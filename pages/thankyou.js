import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Header from '../components/Header.tsx';
import Form from '../components/Form';
import Footer from '../components/Footer';

export default function thankYou(props) {
  /*********** return *************/

  return (
    <div>
      <div>
        <Header list={0} />
        <div className="title">
          <h1 style={{ fontSize: '70px' }}>COUNT SHIRTY</h1>
          <img className="coverImage" src="/TSHIRTS.jpeg" />
          <h4 style={{ marginTop: '60px' }}>
            Thank you {props.name} for your purchase
          </h4>
          <h4 style={{ marginTop: '30px' }}>Stay tuned for our new products</h4>
        </div>
      </div>

      <Footer />
      <style jsx>{`
        .container {
          margin: 0;
        }
        select {
          width: 100%;
          height: 40px;
          margin: 40px 0;
          padding-left: 10px;
          background: url(fff-0-2.png) repeat;
          font-family: 'Open Sans', sans-serif;
          font-size: 16px;
        }
        .title {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .payButton {
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
        .payButton :hover {
          transition: 400ms;
          color: #fff;
          cursor: pointer;
          background-color: rgb(77, 141, 198);
        }
        .cartList {
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-bottom: 1px solid #c8d8d4cd;

          margin-left: 60px;
        }

        .coverImage {
          margin: 20px 0;
          width: 100%;
        }
        .section {
          display: flex;
          justify-content: space-around;
        }
        .payment {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .total {
          display: flex;
          align-items: baseline;
          float: right;
          margin: 40px 0px;
          border-bottom: 1px solid #c8d8d4cd;
        }
        .total * + * {
          margin: 20px;
        }
        .products {
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-bottom: 1px solid #c8d8d4cd;
          margin-left: 40px;
        }

        .products p {
          margin-left: 60px;
        }

        .image {
          width: 30px;
          height: auto;
          position: relative;
          margin-bottom: 2px;
          margin-top: 2px;
          overflow: hidden;
        }

        .image_2 {
          width: 300px;
          height: auto;
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
  const { name } = nextCookies(context);

  return {
    props: {
      ...(name ? { name: name } : undefined),
    },
  };
}
