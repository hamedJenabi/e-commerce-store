import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { women } from '../pages/forwomen';

export default function Header(props) {
  const cartListHeader = props.cartList;

  return (
    <div>
      <div>
        <header className="cart">
          <div>
            {' '}
            <p>Shopping Basket: {cartListHeader.length} 📥 </p>
          </div>
        </header>
      </div>
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
            <Link href="/formen">
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
          z-index: -2;
          flex-direction: row;
          justify-content: space-evenly;
          border-bottom: 1px solid black;
          overflow: hidden;
          margin-bottom: 40px;
        }
        .icon {
          height: auto;
          width: auto;
        }
        .icon :hover {
          transition: 400ms;
          cursor: pointer;
        }

        a {
          color: black;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.15em;
          text-align: center;
          padding: 10px 0;
          display: inline-block;
          position: relative;
          width: 155px;
        }
        a:hover {
          transition: 400ms;
          font-size: 1.1em;
          color: #ed1212;
          cursor: pointer;
        }

        .cart {
          margin: 10px 10px;
          display: flex;
          font-size: 1.5em;
          justify-content: flex-end;
          margin: 10px 20px;
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
    </div>
  );
}
