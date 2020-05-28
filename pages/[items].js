import Head from 'next/head';
import Header from '../components/Header';
import { products } from '../db';

const Product = (props) => {
  if (!props.name) return <div>Product not found!</div>;

  return (
    <div>
      <Head>
        <title>
          {props.id} {props.name}
        </title>
      </Head>

      <Header />

      <main>
        <h1>{props.name}</h1>

        <p>id: {props.id}</p>

        <pre>{JSON.stringify(props, null, 2)}</pre>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Product;

// getServerSideProps will ONLY be run on the server, so
// you can write code here that is "secret" - eg. passwords,
// database connection information, etc.
export function getServerSideProps(context) {
  const Product = getProductById(context.params.id);

  if (Product === undefined) {
    return { props: {} };
  }

  return {
    // will be passed to the page component as props
    props: {
      Product,
    },
  };
}
