import Head from 'next/head';
import Link from 'next/link';

export default function Header_2() {
  return (
    <div>
      <header className="header_2">
        <Link href="/forwomen">
          <a>Women</a>
        </Link>
        <Link href="/forall">
          <a>Uni-Sex</a>
        </Link>
        <Link href="/formen">
          <a>Men</a>
        </Link>
        <Link href="/comingsoon">
          <a>Accessories</a>
        </Link>
      </header>
      <style jsx>{`
        .header_2 {
          position: static;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          width: 50%;
          margin-bottom: 20px;
          box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.2);
        }

        a {
          color: black;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.15em;
          text-align: center;
          position: relative;
          width: 250px;
          height: 40px;
        }
        a:hover {
          transition: 200ms;
          font-size: 1.1em;
          color: #ed1212;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
