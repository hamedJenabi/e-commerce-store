require('dotenv').config();

const postgres = require('postgres');
const sql = postgres();

// const product = [
//   {
//     id: '01',
//     name: 'lazyShirt',
//     type: 'women',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '02',
//     name: 'sweaty',
//     type: 'women',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '03',
//     name: 'bigApple',
//     type: 'women',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '04',
//     name: 'BluesIdiom',
//     type: 'women',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '05',
//     name: 'BluesTypes',
//     type: 'women',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '06',
//     name: 'BluesTypes',
//     type: 'women',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '07',
//     name: 'BluesTypes',
//     type: 'women',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },

//   {
//     id: '08',
//     name: 'lazyShirt',
//     type: 'men',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '09',
//     name: 'sweaty',
//     type: 'men',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '10',
//     name: 'bigApple',
//     type: 'men',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '11',
//     name: 'BluesIdiom',
//     type: 'men',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '12',
//     name: 'BluesTypes',
//     type: 'men',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '13',
//     name: 'lazyShirt',
//     type: 'uniSex',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],

//     price: 20,
//   },
//   {
//     id: '14',
//     name: 'sweaty',
//     type: 'uniSex',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '15',
//     name: 'bigApple',
//     type: 'uniSex',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '16',
//     name: 'BluesIdiom',
//     type: 'uniSex',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '17',
//     name: 'BluesTypes',
//     type: 'uniSex',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'purple',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
// ];

export async function getProducts() {
  const products = await sql`
    SELECT * FROM products
  `;
  return products;
}

export async function getProductById(id) {
  const product = await sql`
    Select * from  products
    WHERE id = ${id}

  `;
  return product;
}

// export async function deleteProductById(id) {
//   const product = await sql`
//     DELETE FROM products WHERE id = ${id}
//   `;
//   return product;
// }

// export function getProduct() {
//   return product;
// }

// export function getProductById(id) {
//   return product.find((product) => product.id === id);
// }
