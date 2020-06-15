import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import Header from '../components/Header.tsx';
import Header_2 from '../components/Header_2';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home(props) {
  const [cart, setCart] = useState(props.cartList ?? []);
  return (
    <div className="container">
      <Header list={cart.length} />
      <main>
        <div className="title">
          <div className="row">
            <p>hey there, I'm</p>
            <h1 style={{ fontSize: '70px' }}>COUNT SHIRTY</h1>
          </div>
          <div className="row_2">
            <h4 style={{ marginRight: '70px' }}>
              from the moment you put me on,
            </h4>
            <h3 style={{ marginLeft: '70px' }}> you'll feel light and cool!</h3>
          </div>
        </div>
        <img className="coverImage" src="/TSHIRTS.jpeg" />
        <Header_2 />

        <section className="section">
          <div className="title">
            <div className="row">
              <h1>our T-Shirts</h1>
              <h3> are</h3>
            </div>
            <div className="row_2">
              <h3 style={{ margin: '0px -100px 0 0' }}>organic</h3>
              <h3 style={{ margin: '60px 0px 0 50px' }}>fair trade</h3>
            </div>
            <h3 style={{ margin: '20px 100px 0 0' }}>dance friendly</h3>
            <button className="orderButton">Our Products</button>
          </div>
          <img className="image_1" src="/tm16_M.jpg" />

          <img className="image_2" src="/TW02navy.jpg" />
        </section>
        <section className="section">
          <div style={{ display: 'flex', width: '50%', margin: '0px 40px' }}>
            <img className="image_1" src="/TU01T_I_BC_white_01.jpg" />

            <img className="image_2" src="/TW045_I_BC_khaki_01.jpg" />
          </div>
          <div className="title">
            <div className="row">
              <h1>our designs</h1>
              <h3>are</h3>
            </div>
            <div className="row_2">
              <h3 style={{ margin: '0px -100px 0 0' }}>dance-related</h3>
              <h3 style={{ margin: '0px 0px 0 50px' }}>plastic-free</h3>
            </div>
            <h3 style={{ margin: '20px 100px 0 0' }}> and somehow funny!</h3>
            <button className="orderButton">Our Products</button>
          </div>
        </section>
        <div className="eventSection">
          <h1 style={{ marginTop: '40px' }}>you will see our T-Shirts</h1>
          <h3>in these events</h3>
        </div>
        <section className="section">
          <img className="image_1" src="/TU01T_I_BC_white_01.jpg" />
          <img className="image_2" src="/TW045_I_BC_khaki_01.jpg" />
          <img className="image_1" src="/TU01T_I_BC_white_01.jpg" />
          <img className="image_2" src="/TW045_I_BC_khaki_01.jpg" />
        </section>
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
        .section {
          max-width: 100%;
          overflow: hidden;
          margin: 40px 0;
          display: flex;
          justify-content: center;

          height: 100%;
        }
        .eventSection {
          margin: 40px 0 0 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-top: 1px solid black;
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
