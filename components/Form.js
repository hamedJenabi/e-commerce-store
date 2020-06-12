import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import Cookies from 'js-cookie';

// ******** styling ********** //

// const formStyle =
//   justify-content: space-between;
//   padding: 2px;
//   display: flex;
// `;

// const input =
//   width: 100%;
//   padding: 15px 10px 15px 10px;
//   margin-right: 10px;
//   box-sizing: border-box;
//   border-radius: 3px;
//   box-shadow: red;
//   &:hover {
//     transition: 0.2s;
//     box-shadow: 1px 1px 0px 0 rgba(0, 0, 0, 0.1),
//       1px 0px 2px 0 rgba(0, 0, 0, 0.1);
//   }
// `;
// const button =
//   padding: 15px 32px;
//   background: lightgrey;
//   font-size: 14px;
//   border-radius: 8px;
//   justify-items: right;
//   &:hover {
//     transition: 0.2s;

//     border-color: rgba(175, 47, 47, 0.1);
//     box-shadow: 0px 2px 2px grey;
//   }
// `;

/*******************Function ***********/
export default function Header_2(props) {
  // const [newItem, setNewItem] = useState('');
  // const onChangeItem = (event) => {
  //   setNewItem(event.target.value);
  // };

  return (
    <div>
      {' '}
      <div>this is the total : {props.total}</div>
      <form>
        <input
        // type="text"
        // placeholder="Add your new tasks here"
        // value={newItem}
        // onChange={onChangeItem}
        />
        <button>Pay</button>
      </form>
    </div>
  );
}
