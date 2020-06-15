import Head from 'next/head';
import Header from '../components/Header.tsx';
import Header_2 from '../components/Header_2';
import Footer from '../components/Footer';
export default function NotFound() {
  return (
    <div>
      <Header list={[]} />

      <header>Page Not Found!</header>
    </div>
  );
}
