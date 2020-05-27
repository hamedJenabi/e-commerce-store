import Head from 'next/head';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <header className="cart">📥</header>
      <header className="header">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Products</a>
        </Link>
        <img src="/logo.png" />
        <Link href="/">
          <a>coming soon</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </header>
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          border-bottom: 1px solid black;
        }

        /* .navLinks {
          color: black;
        }
        .navLinks :hover {
          transition: 100ms;
          color: #ed1212;
          cursor: pointer;
        } */

        a {
          color: black;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.15em;
          text-align: center;
          display: inline-block;
          padding: 25px 0px 0px;
          position: relative;
          width: 155px;
        }
        a:hover {
          transition: 200ms;
          font-size: 1.1em;
          color: #ed1212;
          cursor: pointer;
        }

        .cart {
          display: flex;
          font-size: 1.5em;
          justify-content: flex-end;
          margin: 10px 20px 20px;
        }
      `}</style>
    </div>
  );
}
