import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Header from '../components/Header.tsx';
import Form from '../components/Form';
import Footer from '../components/Footer';

export default function checkout(props) {
  const [list, setlist] = useState(props.cartList ?? []);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const userName = firstName;
  /*********** remove Duplicates *************/
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
  /*********** get the quantity *************/
  const amount = list
    .map((a) => a.id)
    .reduce(function (amount, i) {
      if (!amount[i]) {
        amount[i] = 1;
      } else {
        amount[i] = amount[i] + 1;
      }
      return amount;
    }, {});
  const onChangeSelectPayment = (evt) => {
    setSelectedPayment(event.target.value);
  };

  /*********** return *************/

  return (
    <div>
      <div>
        <Header list={list.length} />
        <div className="title">
          <h1 style={{ fontSize: '70px' }}>COUNT SHIRTY</h1>
          <h4>Check Out</h4>
        </div>
      </div>
      <img className="coverImage" src="/TSHIRTS.jpeg" />
      <div className="section">
        <Form
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          address={address}
          setAddress={setAddress}
          email={email}
          setEmail={setEmail}
        />
        <div className="payment">
          <div className="products">
            <p>Product</p>
            <p> Name</p>
            <p>Quantity</p>
            <p>Price</p>
          </div>

          <div>
            {removeDuplicates(list, 'id').map((item, id) => {
              return (
                <div className="cartList" key={id}>
                  <img className="image" src={'/' + item.image} />
                  <p key={id}>{item.name}</p>
                  <p key={id}>{amount[item.id]}</p>
                  <p key={id}>{amount[item.id] * item.price}</p>
                </div>
              );
            })}
            <div className="total">
              <p>Total Price: </p> <p>€{props.totalPrice}</p>
            </div>
          </div>

          <img className="image_2" src="/payImage.png" />
          <select tabindex="6" onChange={onChangeSelectPayment} type="dropdown">
            <option value="">Choose your payment option</option>;
            <option value="Paypal">PayPal</option>;
            <option value="Credit Cart">Credit Cart</option>;
            <option value="Bank Transter">Bank Transter</option>;
          </select>
          <Link href="/thankyou" as="/thankyou">
            <a>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
                className="payButton"
                onClick={() => {
                  Cookies.set('name', userName);
                  Cookies.remove('cartList');
                  Cookies.remove('totalPrice');
                }}
              >
                Click here to Pay
              </button>
            </a>
          </Link>
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
          margin-top: 150px;
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
  const { totalPrice } = nextCookies(context);
  const { cartList } = nextCookies(context);

  return {
    props: {
      ...(totalPrice ? { totalPrice: totalPrice } : undefined),
      ...(cartList ? { cartList: cartList } : undefined),
    },
  };
}
