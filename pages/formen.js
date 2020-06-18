import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import Header from '../components/Header.tsx';
import Header_2 from '../components/Header_2';
import Footer from '../components/Footer';
import CartButton from '../components/CartButton';
import { useState } from 'react';

export default function men(props) {
  const [cart, setCart] = useState(props.cartList ?? []);
  const menItems = props.products;
  const addToCart = () => {
    const newCart = [...cart];
    newCart.push('1');
    setCart(newCart);
  };
  return (
    <div className="container">
      <Header list={cart.length} />
      <main>
        <div className="title">
          <div className="row">
            <p>hey there, I'm</p>
            <h1 style={{ fontSize: '3rem' }}>COUNT SHIRTY</h1>
            <h2 style={{ marginBottom: '2rem' }}>for men</h2>
          </div>
          <div className="row_2">
            <h4 style={{ marginRight: '3rem' }}>
              from the moment you put me on,
            </h4>
            <h3 style={{ marginLeft: '3rem' }}> you'll feel light and cool!</h3>
          </div>
        </div>
        <img className="coverImage" src="/TSHIRTS.jpeg" />
        <Header_2 />

        <h1 className="title">T-Shirt for men</h1>

        <section className="section">
          <div className="products">
            {menItems
              .filter((type) => type.type === 'men')
              .map((items, i) => {
                return (
                  <div value={items} key={i}>
                    <Link href="/products/[items]" as={'/products/' + items.id}>
                      <a>
                        <div>
                          <img className="image" src={items.image} />
                        </div>
                      </a>
                    </Link>
                    <div className=" productInfos">
                      <div>My name is: {items.name}</div>
                      <div>
                        I am availabe in{' '}
                        {items.size.map((i) => {
                          return i + ' . ';
                        })}
                      </div>
                      <div>I am {items.color}</div>
                      <div>My price is: €{items.price}</div>
                      <div className="buttonSection">
                        <CartButton items={items} addToCart={addToCart} />
                        <Link
                          href="/products/[items]"
                          as={'/products/' + items.id}
                        >
                          <a>
                            <button className="orderButton" onClick={() => {}}>
                              Product Details
                            </button>
                          </a>
                        </Link>
                      </div>
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
        .buttonSection {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
        .buttonSection * + * {
          margin: 10px;
        }
        .orderButton {
          margin-top: 30px;
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
          font-size: 2.5 rem;
          font-weight: 300;
          text-transform: uppercase;
        }
        h2 {
          margin: 0;
          padding: 0;
          font-size: 2rem;
          font-weight: 300;
          letter-spacing: 2px;
        }
        h3 {
          margin: 0;
          padding: 0;
          font-size: 1.5rem;
          font-weight: 300;
          letter-spacing: 2px;
        }
        h4 {
          margin: 0;
          padding: 0;
          font-size: 1.2rem;
          font-weight: 300;
          letter-spacing: 2px;
        }
        p {
          margin: 4px;
          padding: 0;
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
}

// export function getServerSideProps(context) {
//   const { cartList } = nextCookies(context);

//   return {
//     props: {
//       ...(cartList ? { cartList: cartList } : undefined),
//     },
//   };
// }

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
