import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import countryList from 'react-select-country-list';
import countries from 'react-select-country-list';

/*******************Function ***********/

function Form(props) {
  const [selectedCountry, setSelectedCountry] = useState('');

  const list = [{ label: 'Your Country' }, ...countryList().getData()];

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  const onChangeSelect = (evt) => {
    setSelectedCountry(countries().getLabel(event.target.value));
  };

  return (
    <div>
      <div class="container">
        <div id="contact" action="" method="post">
          <h3>Your Information</h3>
          <fieldset>
            <input
              placeholder="Your First Name"
              type="text"
              tabindex="1"
              required
              autofocus
              onChange={(event) => props.setFirstName(event.target.value)}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Last Name"
              type="text"
              tabindex="2"
              required
              autofocus
              onChange={(event) => props.setLastName(event.target.value)}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              tabindex="3"
              required
              onChange={(event) => props.setEmail(event.target.value)}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Postal Address"
              type="address"
              tabindex="4"
              required
              onChange={(event) => props.setAddress(event.target.value)}
            />
          </fieldset>
          <fieldset>
            <input placeholder="Your City" type="city" tabindex="4" required />
          </fieldset>
          <fieldset>
            <select tabindex="5" onChange={onChangeSelect} type="dropdown">
              {list.map((country) => {
                return <option value={country.value}>{country.label}</option>;
              })}
            </select>
          </fieldset>
          {/* <fieldset>
            <select
              tabindex="6"
              onChange={onChangeSelectPayment}
              type="dropdown"
            >
              <option value="choose">Choose your payment option</option>;
              <option value="Paypal">Paypal</option>;
              <option value="Credit Cart">Credit Cart</option>;
              <option value="Bank Transter">Bank Transter</option>;
            </select>
          </fieldset> */}

          {/* <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Pay now
            </button>
          </fieldset> */}
        </div>
      </div>
      <style jsx>
        {`
          @import city(
            https: //fonts.googleapis.com/css?family=Roboto:400,
              300,
            600,
            400italic
          );
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

          body {
            font-family: 'Roboto', Helvetica, Arial, sans-serif;
            font-weight: 100;
            font-size: 12px;
            line-height: 30px;
            color: #777;
            background: #4caf50;
          }

          .container {
            width: 3rem;
            width: 100%;
            margin: 0 auto;
            position: relative;
          }

          #contact input[type='text'],
          #contact input[type='text'],
          #contact input[type='email'],
          #contact input[type='address'],
          #contact input[type='city'],
          #contact select[type='dropdown'],
          #contact button[type='submit'] {
            font: 400 12px/16px 'Roboto', Helvetica, Arial, sans-serif;
          }

          #contact {
            background: #f9f9f9;
            padding: 25px;
            margin: 100px 0;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2),
              0 3px 3px 0 rgba(0, 0, 0, 0.24);
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
          #contact input[type='text'],
          #contact input[type='email'],
          #contact input[type='address'],
          #contact input[type='city'],
          #contact select[type='dropdown'] {
            width: 100%;
            border: 1px solid #ccc;
            background: #fff;
            margin: 0 0 5px;
            padding: 10px;
          }

          #contact input[type='text']:hover,
          #contact input[type='text']:hover,
          #contact input[type='email']:hover,
          #contact input[type='address']:hover,
          #contact input[type='city']:hover,
          #contact select[type='dropdown']:hover {
            -webkit-transition: border-color 0.3s ease-in-out;
            -moz-transition: border-color 0.3s ease-in-out;
            transition: border-color 0.3s ease-in-out;
            border: 1px solid #aaa;
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

          #contact input:focus {
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
        `}
      </style>
    </div>
  );
}

export default Form;
