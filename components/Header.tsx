import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

type Props = { list: number; page: string };

export default function Header(props: Props) {
  const [scrolling, setScrolling] = useState('30px');
  const [scrolling_2, setScrolling_2] = useState('20px');

  if (process.browser) {
    window.onscroll = function () {
      scrollFunction();
    };
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setScrolling('0px');
      setScrolling_2('40px');
    } else {
      setScrolling('30px');
      setScrolling_2('20px');
    }
  }

  return (
    <div className="sticky">
      <Head>
        <title>CountShirty</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <header className="cart">
        <Link href="/cart">
          <a>
            <div className="row">
              <p style={{ width: '100px', alignItems: 'center' }}>
                Your Basket:
              </p>
              <div>
                <p className="notification">{props.list}</p>
                <img className="cartLogo" src="/trolley.svg" alt="cart logo" />
              </div>
            </div>
          </a>
        </Link>
      </header>
      <header className="header">
        <Link href="/">
          <a>Home</a>
        </Link>
        <div className="subnav">
          <Link href="">
            <a className="subnavbtn">
              Products <i className="fa fa-caret-down"></i>
            </a>
          </Link>
          <div className="subnav-content">
            <Link href="/forwomen">
              <a>Women</a>
            </Link>
            <Link href="/formen" as="/formen">
              <a>Men</a>
            </Link>
            <Link href="/forall">
              <a>Uni-Sex</a>
            </Link>
          </div>
        </div>

        <Link href="/">
          <img className="icon" src="/logo.png" />
        </Link>
        <Link href="/comingsoon">
          <a>coming soon</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </header>

      <style jsx>{`
        .sticky {
          position: fixed;
          width: 100%;
          display: flex;
          flex-direction: column;
          top: 0;
          z-index: 100;
          background-color: white;
          padding: page ==== 'items' ? 5px : ${scrolling};
          transition: 0.3s;
          border-bottom: 1px solid black;
        }
        .header {
          display: flex;
          z-index: -2;
          flex-direction: row;
          justify-content: space-evenly;
          margin-top: -${scrolling_2};
        }

        .icon {
          max-height: calc(90px - ${scrolling_2});
          max-width: calc(90px - ${scrolling}_2);
        }
        .icon :hover {
          transition: 400ms;
          cursor: pointer;
        }
        .row {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
          text-align: center;
        }

        /* p {
          padding: 0;
          margin: 10;
          height: 1.7em;
        } */

        a {
          color: black;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.15em;
          text-align: center;
          display: inline-block;
          position: relative;
          width: 155px;
        }

        a:hover {
          transition: 400ms;
          text-decoration: underline;
          color: #1f375b;
          cursor: pointer;
        }

        .cart {
          display: flex;
          justify-content: flex-end;
          margin: 5px 10px;
          width: auto;
        }
        .cartLogo {
          height: auto;
          width: 40px;
          z-index: 0;
          position: relative;
          overflow: hidden;
        }
        .notification {
          margin: 0px 0 0px 0px;
          width: 20px;
          background-color: rgb(199, 55, 55);
          height: 1.2em;
          color: white;
        }
        .subnav .subnavbtn {
          border: none;
          outline: none;
          margin: 0;
        }

        .subnav-content {
          padding-top: 20px;
          display: none;
          position: absolute;
          z-index: 1;
        }

        .subnav:hover .subnav-content {
          display: flex;
          flex-direction: column;
          height: 110px;
          width: 100px;
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
          font-weight: 400;
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
