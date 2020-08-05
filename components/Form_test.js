import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { countryList, countries } from 'react-select-country-list';

/*******************Function ***********/

function Form(props) {
  const [selectedCountry, setSelectedCountry] = useState('');
  const list = countryList().getData();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  const onChangeSelect = (evt) => {
    setSelectedCountry(countries().getLabel(event.target.value));
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <label>
        First Name:
        <input
          type="text"
          value={props.firstName}
          onChange={(event) => props.setFirstName(event.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          onChange={(event) => props.setLastName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          onChange={(event) => props.setEmail(event.target.value)}
        />
      </label>
      <label>
        Address:
        <input
          type="address"
          onChange={(event) => props.setAddress(event.target.value)}
        />
      </label>

      <label>
        Country:
        <select onChange={onChangeSelect}>
          {list.map((country) => {
            return <option value={country.value}>{country.label}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Submit" />
      <style jsx>{`
        .title {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .payButton {
          background: none;
          color: black;
          border: none;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.15em;
          text-align: center;
          display: inline-block;
          position: relative;
          width: 250px;
          height: 40px;
          border: 1px solid #c8d8d4cd;
        }
        .payButton :hover {
          transition: 400ms;
          color: #fff;
          cursor: pointer;
          background-color: rgb(77, 141, 198);
        }
        .cartList {
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-bottom: 1px solid black;
          border-left: 1px solid black;
          margin-right: 20px;
        }

        .coverImage {
          margin: 20px 0;
          width: 100%;
        }
        .section {
          display: flex;
          justify-content: space-around;
        }
        .formSection {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .total {
          display: flex;
          align-items: baseline;
          float: right;
          margin: 40px 0px;
        }
        .total * + * {
          margin: 20px;
        }
        .products {
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-bottom: 1px solid black;
          margin-right: 20px;
        }

        .products p {
          margin-left: 60px;
        }

        .image {
          width: 30px;
          height: auto;
          position: relative;
          margin-bottom: 2px;
          margin-top: 2px;
          overflow: hidden;
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
          width: 150px;
          height: 70px;
          border: 1px solid #c8d8d4cd;
        }
        .orderButton :hover {
          transition: 400ms;
          color: #fff;
          cursor: pointer;
          background-color: rgb(77, 141, 198);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-font-smoothing: antialiased;
          -o-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .container {
          max-width: 400px;
          width: 100%;
          margin: 0 auto;
          position: relative;
        }

        #contact input[type='text'],
        #contact input[type='email'],
        #contact input[type='address'],
        #contact textarea,
        #contact button[type='submit'] {
          font: 400 12px/16px 'Roboto', Helvetica, Arial, sans-serif;
        }

        #contact {
          background: #f9f9f9;
          padding: 25px;
          margin: 150px 0;
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2),
            0 5px 5px 0 rgba(0, 0, 0, 0.24);
        }

        #contact h3 {
          display: block;
          font-size: 30px;
          font-weight: 300;
          margin-bottom: 10px;
        }

        #contact h4 {
          margin: 5px 0 15px;
          display: block;
          font-size: 13px;
          font-weight: 400;
        }

        fieldset {
          border: medium none !important;
          margin: 0 0 10px;
          min-width: 100%;
          padding: 0;
          width: 100%;
        }

        #contact input[type='text'],
        #contact input[type='email'],
        #contact input[type='address'],
        #contact textarea {
          width: 100%;
          border: 1px solid #ccc;
          background: #fff;
          margin: 0 0 5px;
          padding: 10px;
        }

        #contact input[type='text']:hover,
        #contact input[type='email']:hover,
        #contact input[type='address']:hover,
        #contact textarea:hover {
          -webkit-transition: border-color 0.3s ease-in-out;
          -moz-transition: border-color 0.3s ease-in-out;
          transition: border-color 0.3s ease-in-out;
          border: 1px solid #aaa;
        }

        #contact textarea {
          height: 100px;
          max-width: 100%;
          resize: none;
        }

        #contact button[type='submit'] {
          cursor: pointer;
          width: 100%;
          border: none;
          background: #4caf50;
          color: #fff;
          margin: 0 0 5px;
          padding: 10px;
          font-size: 15px;
        }

        #contact button[type='submit']:hover {
          background: #43a047;
          -webkit-transition: background 0.3s ease-in-out;
          -moz-transition: background 0.3s ease-in-out;
          transition: background-color 0.3s ease-in-out;
        }

        #contact button[type='submit']:active {
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
        }

        .copyright {
          text-align: center;
        }

        #contact input:focus,
        #contact textarea:focus {
          outline: 0;
          border: 1px solid #aaa;
        }

        ::-webkit-input-placeholder {
          color: #888;
        }

        :-moz-placeholder {
          color: #888;
        }

        ::-moz-placeholder {
          color: #888;
        }

        :-ms-input-placeholder {
          color: #888;
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
    </form>
  );
}
export default Form;
