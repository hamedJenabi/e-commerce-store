import Head from 'next/head';
import Link from 'next/link';

export default function Footer() {
  return (
    <div>
      <header className="footer">
        <Link href="/">
          <a>Facebook</a>
        </Link>
        <Link href="/">
          <a>Instagram</a>
        </Link>
        <Link href="/">
          <a>Twitter</a>
        </Link>
      </header>
      <style jsx>{`
        .footer {
          border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          height: 40px;
          margin: 40px 0;
          position: relative;
          left: 0;
          bottom: 0;
          width: 100%;
        }

        a {
          margin-top: 10px;
          width: 300px;
          color: black;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.15em;
          text-align: center;
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
