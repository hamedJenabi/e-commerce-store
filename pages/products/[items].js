import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getProductById } from '../../db.js';

export default function products(props) {
  if (!props.product) return <div>product not found!</div>;
  return (
    <div className="container">
      <Head>
        <title>CountShirty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="section">
          <div>
            <img className="image" src={props.product.image}></img>
          </div>
          <div className="row">
            <h1>{props.product.name}</h1>
            <h3>Size:</h3>
            <p>
              {props.product.size.map((size) => {
                return size + '.';
              })}
            </p>
            <p>COMPOSITION 100% cotton - </p>
            <p>Organic Combed Ring Spun *Sport Grey:</p>
            <p> made with 90% organically grown cotton. WEIGHT 140 g/m²</p>
            <div>
              <button className="orderButton">Add to Cart</button>
            </div>
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
        }

        .section {
          display: flex;
          flex-direction: row;
          justify-content: space-around;

          height: 100%;
          overflow: hidden;
        }
        .row {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 50%;
          text-align: center;
          margin-top: 40px;
        }
        .row_2 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
        }

        .productInfos {
          display: grid;
          justify-content: start;
          height: 100%;
          height: 100%;
        }
        .productInfos * + * {
          margin-top: 10px;
        }

        .image {
          height: auto;
          width: 500px;
          z-index: 1;
          overflow: hidden;
        }
        .buttonSection {
          text-align: center;
        }
        .buttonSection * + * {
          margin: 10px;
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
  const product = getProductById(context.params.items);

  if (product === undefined) {
    return { props: {} };
  }
  return {
    props: {
      product,
    },
  };
}
