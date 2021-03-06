import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import nextCookies from 'next-cookies';
import Header from '../components/Header.tsx';
import Header_2 from '../components/Header_2';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home(props) {
  const router = useRouter();

  const [cart, setCart] = useState(props.cartList ?? []);
  return (
    <div className="container">
      <Header list={cart.length} />
      <main style={{ marginTop: '300px' }}>
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
              <h3>organic</h3>
              <h3 style={{ margin: '20px 0px 0 50px' }}>fair trade</h3>
            </div>
            <h3 style={{ margin: '20px 100px 0 0' }}>dance friendly</h3>

            <button
              className="orderButton"
              onClick={() => router.push('/products')}
            >
              Our Products
            </button>
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
              <h3>dance-related</h3>
              <h3 style={{ margin: '20px 0px 0 50px' }}>plastic-free</h3>
            </div>
            <h3 style={{ margin: '20px 100px 0 0' }}> and somehow funny!</h3>

            <button
              className="orderButton"
              onClick={() => router.push('/products')}
            >
              Our Products
            </button>
          </div>
        </section>
        <div className="eventSection">
          <h1 style={{ marginTop: '40px' }}>you will see our T-Shirts</h1>
          <h3>in these events</h3>
        </div>
        <section className="section_2">
          <div className="row">
            <img className="image_1" src="/vhs.png" />
            <a className="orderButton" href="https://viennhoneyswing.com">
              <span>Honey Swing</span>
            </a>
          </div>
          <div className="row">
            <img className="image_1" src="/vsb.jpg" />
            <a className="orderButton" href="https://viennasugarblues.com">
              <span>Sugar Blues</span>
            </a>
          </div>
          <div className="row">
            <img className="image_1" src="/bff.jpg" />
            <a className="orderButton" href="https://bluesfever.eu">
              <span>Blues Fever</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .container {
          margin-top: 250px;
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

          display: flex;
          flex-direction: column;
          align-items: center;
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
        .section_2 {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
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
        @media (max-width: 600px) {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 100%;
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
          background: none;
          color: black;
          border: none;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.15em;
          justify-content: center;
          text-align: center;
          padding: 20px 0;
          width: 200px;
          height: auto;
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
